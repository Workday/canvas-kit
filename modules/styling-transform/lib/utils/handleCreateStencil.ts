import ts from 'typescript';

import {slugify} from '@workday/canvas-kit-styling';

import {getVarName} from './getVarName';
import {makeEmotionSafe} from './makeEmotionSafe';
import {parseObjectToStaticValue} from './parseObjectToStaticValue';
import {createStyleObjectNode, serializeStyles} from './createStyleObjectNode';
import {getValueFromAliasedSymbol, parseNodeToStaticValue} from './parseNodeToStaticValue';
import {NestedStyleObject, NodeTransformer, TransformerContext} from './types';
import {isImportedFromStyling} from './isImportedFromStyling';

/**
 * Handle all arguments of the CallExpression `createStencil()`
 */
export const handleCreateStencil: NodeTransformer = (node, context) => {
  const {checker, prefix, variables} = context;
  /**
   * This will match whenever a `createStencil()` call expression is encountered. It will loop
   * over all the config to extract variables and styles.
   *
   */
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'createStencil' &&
    isImportedFromStyling(node.expression, checker)
  ) {
    const config = node.arguments[0];

    // We need to keep track of stencil variables and values to automatically merge into the base
    // styles
    const stencilVariables: Record<string, string> = {};

    // Stencil name is the variable name
    const stencilName = slugify(getVarName(node.expression)).replace('-stencil', '');

    if (ts.isObjectLiteralExpression(config)) {
      const extendedFrom = config.properties.reduce((result, property) => {
        if (
          !result &&
          ts.isPropertyAssignment(property) &&
          property.name &&
          ts.isIdentifier(property.name) &&
          property.name.text === 'extends' &&
          ts.isIdentifier(property.initializer)
        ) {
          const className = getClassName(property.initializer.text, context);
          const extendsStencilName = className.split('-').slice(1).join('-');

          if (
            !Object.values(context.styles).reduce((result, fileStyles) => {
              return (
                result ||
                fileStyles.reduce((_, rule) => {
                  if (rule.includes(`.${className}`)) {
                    return true;
                  }
                  return result;
                }, false)
              );
            }, false)
          ) {
            // Process the extended stencil since those styles haven't been processed yet
            getValueFromAliasedSymbol(property.initializer, '', context);
          }

          // attach all variables from extends stencil
          Object.keys(context.variables).forEach(key => {
            if (key.startsWith(`${extendsStencilName}-`)) {
              // We want to copy a new entry into variables that is the extended stencil with the same variable name as the base variable name
              context.variables[key.replace(extendsStencilName, stencilName)] =
                context.variables[key];
            }
          });

          return className;
        }
        return result;
      }, '');

      // get variables first
      const varsConfig = config.properties.find(property => {
        return (
          property.name &&
          ts.isIdentifier(property.name) &&
          property.name.text === 'vars' &&
          ts.isPropertyAssignment(property)
        );
      }) as ts.PropertyAssignment | undefined;

      function extractVariables(node: ts.Node): any {
        if (ts.isPropertyAssignment(node) && ts.isIdentifier(node.name)) {
          if (ts.isObjectLiteralExpression(node.initializer)) {
            return node.initializer.properties.map(extractVariables);
          }

          const varName = `${stencilName}-${makeEmotionSafe(node.name.text)}`;
          const varValue = `--${prefix}-${varName}`;
          variables[`${varName}`] = varValue;

          variables[makeEmotionSafe(node.name.text)] = varValue;

          // Evaluate the variable defaults
          const value = parseNodeToStaticValue(node.initializer, context).toString();
          if (value) {
            // Only add the stencil variable if there's a value. An empty string means no default.
            stencilVariables[varValue] = value;
          }
        }
      }

      if (varsConfig && ts.isObjectLiteralExpression(varsConfig.initializer)) {
        varsConfig.initializer.properties.forEach(variable => {
          extractVariables(variable);
        });
      }

      const configProperties = config.properties.map((property, index, properties) => {
        if (property.name && ts.isIdentifier(property.name)) {
          // base config object
          if (property.name.text === 'base') {
            const styleObj = parseStyleBlock(property, context, stencilName);

            if (styleObj) {
              const initializer = createStyleReplacementNode(
                property,
                {
                  ...stencilVariables,
                  ...styleObj,
                },
                getClassName(getVarName(property.name), context),
                context
              );

              return updateStyleProperty(property, initializer);
            }
          }

          // modifiers config object
          if (
            property.name.text === 'modifiers' &&
            ts.isPropertyAssignment(property) &&
            ts.isObjectLiteralExpression(property.initializer)
          ) {
            // modifier key
            return ts.factory.updatePropertyAssignment(
              property,
              property.name,
              ts.factory.updateObjectLiteralExpression(
                property.initializer,
                property.initializer.properties.map(modifierProperty => {
                  if (
                    ts.isPropertyAssignment(modifierProperty) &&
                    modifierProperty.name &&
                    ts.isIdentifier(modifierProperty.name) &&
                    ts.isObjectLiteralExpression(modifierProperty.initializer)
                  ) {
                    // modifier value
                    return ts.factory.updatePropertyAssignment(
                      modifierProperty,
                      modifierProperty.name,
                      ts.factory.updateObjectLiteralExpression(
                        modifierProperty.initializer,
                        modifierProperty.initializer.properties.map(modifier => {
                          const styleObj = parseStyleBlock(modifier, context, stencilName);

                          if (styleObj && modifier.name && Object.keys(styleObj).length) {
                            const initializer = createStyleReplacementNode(
                              modifier,
                              styleObj,
                              getClassName(getVarName(modifier.name), context),
                              context
                            );
                            return updateStyleProperty(modifier, initializer);
                          }

                          return modifier;
                        })
                      )
                    );
                  }

                  return property;
                })
              )
            );
          }

          // compound config array
          /**
           * Compound config array. It looks like:
           *
           * ```ts
           * compound: [
           *   {
           *     modifiers: { size: 'large', iconPosition: 'start' },
           *     styles: { padding: 20 }
           *   }
           * ]
           * ```
           */
          if (
            property.name.text === 'compound' &&
            ts.isPropertyAssignment(property) &&
            ts.isArrayLiteralExpression(property.initializer)
          ) {
            return ts.factory.updatePropertyAssignment(
              property,
              property.name,
              ts.factory.updateArrayLiteralExpression(
                property.initializer,
                property.initializer.elements.map(element => {
                  if (ts.isObjectLiteralExpression(element)) {
                    const selectors: string[] = [];

                    // If the stencil is an extension, we need to add the stencil name to
                    // the select to not accidentally match the base stencil
                    if (extendedFrom) {
                      selectors.push(`.${getClassName(stencilName, context)}`);
                    }

                    return ts.factory.updateObjectLiteralExpression(
                      element,
                      element.properties.map((compoundProperty, index, compoundProperties) => {
                        /**
                         * If the property is `modifiers`, we want to extract selectors from it. For
                         * example,
                         *
                         * ```ts
                         * const button = createStencil({
                         *   // other config
                         *   compound: {
                         *     modifiers: { size: 'large', inverse: true },
                         *     styles: {}
                         *   }
                         * })
                         * ```
                         *
                         * After this, `selectors` should contain ['.button--size-large',
                         * '.button--inverse']
                         */
                        if (
                          compoundProperty.name &&
                          ts.isIdentifier(compoundProperty.name) &&
                          compoundProperty.name.text === 'modifiers' &&
                          ts.isPropertyAssignment(compoundProperty) &&
                          ts.isObjectLiteralExpression(compoundProperty.initializer)
                        ) {
                          compoundProperty.initializer.properties.forEach(modifier => {
                            if (ts.isPropertyAssignment(modifier)) {
                              //
                              let modifierName = '';
                              if (ts.isIdentifier(modifier.name)) {
                                modifierName += `${modifier.name.text}-`;
                              }

                              let className = `.${getClassName(
                                getVarName(modifier.initializer),
                                context
                              )}`;
                              if (ts.isStringLiteral(modifier.initializer)) {
                                modifierName = modifierName + '-' + modifier.initializer.text;
                                className += `-${modifier.initializer.text}`;
                              }
                              modifierName = slugify(modifierName);

                              let classNameOverride = '';
                              if (extendedFrom) {
                                // search for this modifier in the styles object
                                Object.values(context.styles).forEach(fileStyles => {
                                  return fileStyles.forEach(rule => {
                                    if (rule.includes(`.${extendedFrom}--${modifierName} `)) {
                                      const match = rule.match(/(\.[a-z0-9-]+)\s/);
                                      if (match) {
                                        classNameOverride = match[1];
                                      }
                                    }
                                  });
                                });
                              }
                              if (classNameOverride) {
                                selectors.push(classNameOverride);
                              } else {
                                selectors.push(className);
                              }
                            }
                          });
                          return compoundProperty;
                        }

                        // styles key
                        if (
                          compoundProperty.name &&
                          ts.isIdentifier(compoundProperty.name) &&
                          compoundProperty.name.text === 'styles'
                        ) {
                          const styleObj = parseStyleBlock(compoundProperty, context, stencilName);

                          if (styleObj) {
                            // We need to inject compound style selectors into a file. We'll compound the
                            // selectors with multiple class names. This will increase specificity of compound
                            // selectors. This will be harder to override and we don't increase specificity in
                            // the runtime implementation, but runtime creates an extra CSS class name that
                            // isn't known to anyone. It seems unreasonable to expect CSS users to remember to
                            // add compound modifier class names. We'll make it so it is easier to author
                            // components in CSS and let them sort the specificity issues.
                            const serialized = serializeStyles(
                              compoundProperty,
                              styleObj,
                              `${selectors.join('')}{%s}`,
                              context
                            );

                            const initializer = createStyleObjectNode(
                              serialized.styles,
                              serialized.name
                            );

                            return updateStyleProperty(compoundProperty, initializer);
                          }
                        }

                        return compoundProperty;
                      })
                    );
                  }

                  return element;
                })
              )
            );
          }
        }

        return property;
      });

      return ts.factory.updateCallExpression(node, node.expression, undefined, [
        ts.factory.updateObjectLiteralExpression(config, configProperties),
        ts.factory.createStringLiteral(`${prefix}-${stencilName}`),
      ]);
    }
  }

  return;
};

/**
 * A style block is a `base`, `modifier`, or `compoundModifier` style block. It could be an ObjectLiteralExpression,
 * an ArrowFunction, MethodDeclaration, etc.
 */
function parseStyleBlock(
  property: ts.ObjectLiteralElementLike,
  context: TransformerContext,
  stencilName: string
): NestedStyleObject | undefined {
  let styleObj: NestedStyleObject | undefined;
  if (ts.isPropertyAssignment(property)) {
    if (ts.isObjectLiteralExpression(property.initializer)) {
      styleObj = parseObjectToStaticValue(property.initializer, {
        ...context,
        variableScope: `${stencilName}-`,
      });
    }

    if (isFunctionLikeDeclaration(property.initializer)) {
      const returnNode = getReturnStatement(property.initializer);
      if (returnNode) {
        styleObj = parseObjectToStaticValue(returnNode, {
          ...context,
          variableScope: `${stencilName}-`,
        });
      }
    }
  }

  if (isFunctionLikeDeclaration(property)) {
    const returnNode = getReturnStatement(property);
    if (returnNode) {
      styleObj = parseObjectToStaticValue(returnNode, {
        ...context,
        variableScope: `${stencilName}-`,
      });
    }
  }

  return styleObj;
}

function getReturnStatement(node: ts.FunctionLikeDeclaration): ts.Node | undefined {
  if (node.body && ts.isParenthesizedExpression(node.body)) {
    return node.body.expression;
  }

  if (node.body && ts.isBlock(node.body)) {
    let returnNode: ts.Node | undefined;

    // look for the return statement. It must be a top-level statement in the block
    node.body.statements.forEach(statement => {
      // () => { return {} }
      if (ts.isReturnStatement(statement)) {
        returnNode = statement.expression;
      }
    });

    return returnNode;
  }

  return undefined;
}

function isFunctionLikeDeclaration(node: ts.Node): node is ts.FunctionLikeDeclaration {
  return (node as Object).hasOwnProperty('body');
}

function createStyleReplacementNode(
  node: ts.Node,
  styleObj: NestedStyleObject,
  className: string,
  context: TransformerContext
) {
  const serialized = serializeStyles(node, styleObj, `.${className}{%s}`, context);

  return createStyleObjectNode(serialized.styles, serialized.name);
}

function getClassName(name: string, {prefix}: TransformerContext): string {
  return (
    `${prefix}-` +
    slugify(name)
      .replace('-stencil', '')
      .replace('-base', '')
      .replace('-modifiers', '-')
      .replace('-true', '')
      .replace('-compound', '')
  );
}

/**
 * If the property is a `PropertyAssignment`, use the TypeScript factory updater to maximize
 * sourcemap use. Otherwise, return a new property assignment. For example, a Stencil could be using
 * a `MethodDeclaration` which means we return a different node type: `base({color}) {}`
 */
function updateStyleProperty(
  property: ts.ObjectLiteralElementLike,
  initializer: ts.Expression
): ts.PropertyAssignment {
  if (ts.isPropertyAssignment(property)) {
    return ts.factory.updatePropertyAssignment(property, property.name, initializer);
  }

  return ts.factory.createPropertyAssignment(property.name!, initializer);
}
