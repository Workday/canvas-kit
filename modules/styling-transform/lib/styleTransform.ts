/// <reference types="node" />
import ts from 'typescript';
import {base, brand} from '@workday/canvas-tokens-web';
import path from 'node:path';

import {slugify} from '@workday/canvas-kit-styling';

import {getFallbackVariable, getVariablesFromFiles} from './utils/getCssVariables';
import {getVarName} from './utils/getVarName';
import {getErrorMessage} from './utils/getErrorMessage';
import {createStyleObjectNode} from './utils/createStyleObjectNode';
import {makeEmotionSafe} from './utils/makeEmotionSafe';
import {handleCreateVars} from './utils/handleCreateVars';
import {handleCreateStyles} from './utils/handleCreateStyles';

const styleImportString = '@workday/canvas-kit-styling';

const vars: Record<string, string> = {};

export type NestedStyleObject = {[key: string]: string | NestedStyleObject};

export interface StyleTransformerOptions {
  prefix: string;
  variables: Record<string, string>;
  fallbackFiles?: string[];
}

export default function styleTransformer(
  program: ts.Program,
  {prefix = 'css', variables = {}, fallbackFiles}: Partial<StyleTransformerOptions> = {
    prefix: 'css',
    variables: {},
  }
): ts.TransformerFactory<ts.SourceFile> {
  if (fallbackFiles) {
    const files = fallbackFiles
      .filter(file => file) // don't process empty files
      .map(file => {
        // Find the fully-qualified path name. This could error which should give "module not found" errors
        return file.startsWith('.') ? path.resolve(process.cwd(), file) : require.resolve(file);
      })
      .map(file => ts.sys.readFile(file) || '');

    // eslint-disable-next-line no-param-reassign
    variables = getVariablesFromFiles(files);
  }

  const checker = program.getTypeChecker();
  return context => {
    const visit: ts.Visitor = node => {
      // eslint-disable-next-line no-param-reassign
      node = ts.visitEachChild(node, visit, context);

      return handleTransformers(
        node,
        checker,
        prefix,
        vars,
        // createStyles
        handleCreateStyles,
        (node, checker, prefix, vars): ts.Node | void => {
          /**
           * Check if the node is a call expression that looks like:
           *
           * ```ts
           * createStyles({
           *   // properties
           * })
           * ```
           *
           * It will also make sure the `createStyles` function was imported from
           * `@workday/canvas-kit-styling` to ensure we don't rewrite the AST of code we don't own.
           *
           * This transformation will pre-serialize the style objects and turn them into strings for
           * faster runtime processing in Emotion. The following is an example of the transformation.
           *
           * ```ts
           * // before transformation
           * const myStyles = createStyles({
           *   fontSize: '1rem'
           * })
           *
           * // after transformation
           * const myStyles = createStyles({
           *   name: 'abc123',
           *   styles: 'font-size: 1rem;'
           * })
           * ```
           *
           * The after transformation already serialized the styles and goes through a shortcut process
           * in `@emotion/css` where only the Emotion cache is checked and styles are inserted if the
           * cache key wasn't found.
           */
          if (
            ts.isCallExpression(node) &&
            ts.isIdentifier(node.expression) &&
            node.expression.text === 'createStyles' &&
            node.arguments.length > 0
          ) {
            // get the declaration of the symbol of the styleExpression
            const symbol = checker.getSymbolAtLocation(node.expression);
            const declaration = symbol?.declarations[0];

            if (getModuleSpecifierFromDeclaration(declaration) === styleImportString) {
              const newArguments = [...node.arguments].map(arg => {
                // An `ObjectLiteralExpression` is an object like `{foo:'bar'}`:
                // https://ts-ast-viewer.com/#code/MYewdgzgLgBFCmBbADjAvDA3gKBjAZiCAFwwDkARgIYBOZ2AvkA
                if (ts.isObjectLiteralExpression(arg)) {
                  const styleObj = parseStyleObjFromNode(arg, prefix, variables, checker);

                  return createStyleObjectNode(styleObj);
                }
                // An Identifier is a variable. It could come from anywhere - imports, earlier
                // assignments, etc. The easiest thing to do is to ask the TypeScript type checker what
                // the type representation is and go from there.
                if (ts.isIdentifier(arg)) {
                  const type = checker.getTypeAtLocation(arg);

                  // `createStyles` accepts strings as class names. If the class name is
                  if (type.isStringLiteral() || type.getFlags() & ts.TypeFlags.String) {
                    return arg;
                  }

                  // The type must be a object
                  const styleObj = parseStyleObjFromType(type, prefix, variables, checker);

                  return createStyleObjectNode(styleObj);
                }
                return arg;
              });

              newArguments.forEach(argument => {
                // TypeScript isn't expecting us to mutate arguments arguments and when emitting will
                // try to do something where it checks the `parent` node of the argument. Using
                // `ts.factory.create*`, the `parent` is `undefined` and this check will throw an error.
                // In order to get past this error, we manually update the `parent` node of each
                // argument to reference the existing call expression. This allows TypeScript to fully
                // type check and/or emit.
                (argument as any).parent = node;
              });

              /**
               * We're not supposed to mutate arguments since it is supposed to be read-only. But, if I
               * return a new callExpression, there is no parent and it is no longer linked to the
               * import module. This causes incorrect code when the module export type is `commonjs`.
               * For example:
               *
               * ```ts
               * // with new callExpression
               * const canvas_kit_styling_1 = require(...)
               *
               * createStyles({...})
               *
               * // if we instead mutate arguments
               * const canvas_kit_styling_1 = require(...)
               *
               * canvas_kit_styling_1.createStyles({...})
               * ```
               *
               * My best guess as to why it fails when creating a new callExpression is the node's
               * symbol declaration link gets lost. TypeScript then has no idea `createStyles` comes
               * from an `ImportDeclaration` declaration node and when emitting `commonjs`, it doesn't
               * prefix with the `canvas_kit_styling_1`. This is hacky, but the only thing that works
               * correctly.
               */
              (node.arguments as any) = newArguments;

              return node;
            }
          }
        },
        handleCreateVars,
        (node, checker, prefix, vars): ts.Node | void => {
          /**
           * This will match whenever a `createStencil()` call expression is encountered. It will loop
           * over all the config to extract variables and styles.
           *
           */
          if (
            ts.isCallExpression(node) &&
            ts.isIdentifier(node.expression) &&
            node.expression.text === 'createStencil'
          ) {
            // get the declaration of the symbol of the styleExpression
            const symbol = checker.getSymbolAtLocation(node.expression);
            const declaration = symbol?.declarations[0];

            if (getModuleSpecifierFromDeclaration(declaration) === styleImportString) {
              const config = node.arguments[0];

              if (ts.isObjectLiteralExpression(config)) {
                // get variables first
                const variables = config.properties.find(property => {
                  return (
                    property.name &&
                    ts.isIdentifier(property.name) &&
                    property.name.text === 'vars' &&
                    ts.isPropertyAssignment(property)
                  );
                }) as ts.PropertyAssignment | undefined;

                function getVariables(node: ts.Node): any {
                  if (ts.isPropertyAssignment(node) && ts.isIdentifier(node.name)) {
                    if (ts.isObjectLiteralExpression(node.initializer)) {
                      return node.initializer.properties.map(getVariables);
                    }

                    if (ts.isStringLiteral(node.initializer)) {
                      const varName = getVarName(node).replace('-vars', ''); //?
                      vars[`${varName}`] = `--${prefix}-${varName}`;
                    }
                  }
                }

                if (variables && ts.isObjectLiteralExpression(variables.initializer)) {
                  variables.initializer.properties.forEach(variable => {
                    getVariables(variable); //?
                  });
                }

                config.properties.forEach(property => {
                  if (
                    property.name &&
                    ts.isIdentifier(property.name) &&
                    ts.isPropertyAssignment(property)
                  ) {
                    if (property.name.text === 'base') {
                      if (ts.isObjectLiteralExpression(property.initializer)) {
                        const styleObj = parseStyleObjFromNode(
                          property.initializer,
                          prefix,
                          variables,
                          checker
                        );

                        const initializer = createStyleObjectNode(styleObj); //?
                        (initializer as any).parent = property;
                        (property as any).initializer = initializer;

                        styleObj; //?
                        ('here'); //?
                      }

                      // if (ts.isArrowFunction(property.initializer) && ) {
                      //   ('here'); //?
                      // }
                    }
                  }
                });
              }
            }
          }
        }
      );
    };

    return node => ts.visitNode(node, visit);
  };
}

// This should only be used for tests
export function transform(
  program: ts.Program,
  fileName: string,
  options?: Partial<StyleTransformerOptions>
) {
  const source =
    program.getSourceFile(fileName) || ts.createSourceFile(fileName, '', ts.ScriptTarget.ES2019);

  const printer = ts.createPrinter();

  return printer.printFile(
    ts
      .transform(source, [styleTransformer(program, options)])
      .transformed.find(s => (s.fileName = fileName)) || source
  );
}

function handleTransformers(
  node: ts.Node,
  checker: ts.TypeChecker,
  prefix: string,
  variables: Record<string, string>,
  ...transformers: ((
    node: ts.Node,
    checker: ts.TypeChecker,
    prefix: string,
    variables: Record<string, string>
  ) => ts.Node | void)[]
) {
  return (
    transformers.reduce((result, transformer) => {
      if (result) {
        return result;
      }
      return transformer(node, checker, prefix, variables);
    }, undefined as ts.Node | void) || node
  );
}

function getVariableNameParts(input: string): [string, string] {
  const parts = input.split('.');

  // grab the last item in the array. This will also mutate the array, removing the last item
  const variable = parts.pop()!;

  return [parts.join('.'), variable];
}

function getVarsKeyFromNode(node: ts.Node): string {
  if (ts.isIdentifier(node)) {
    return slugify(node.text);
  }

  if (ts.isPropertyAccessExpression(node) && ts.isIdentifier(node.name)) {
    node.name.text; //?
    return `${getVarsKeyFromNode(node.expression)}-${makeEmotionSafe(node.name.text)}`;
  }

  return '';
}

function getStyleValueFromType(node: ts.Node, type: ts.Type, checker: ts.TypeChecker) {
  const value = getCSSValueAtLocation(node as ts.Expression, checker, type);
  value; //?
  if (value) {
    if (value.startsWith('--')) {
      return `var(${value})`;
    }
    return value;
  }

  const typeValue = checker.typeToString(type);

  throw new Error(
    `Unknown type at: "${node.getText()}". Received "${typeValue}"\n${getErrorMessage(
      node
    )}\nFor static analysis of styles, please make sure all types resolve to string or numeric literals. Please use 'const' instead of 'let'. If using an object, cast using "as const" or use an interface with string or numeric literals.`
  );
}

/**
 * A `PropertyExpression` is an expression with a dot in it. Like `a.b.c`. It may be nested. This
 * function will walk the AST and create a string like `a.b.c` to be passed on to variable name
 * generation. This will be used for CSS variable lookups.
 */
function getPropertyAccessExpressionText(node: ts.PropertyAccessExpression): string {
  if (ts.isIdentifier(node.name)) {
    if (ts.isIdentifier(node.expression)) {
      return `${node.expression.text}.${node.name.text}`;
    }
    if (ts.isPropertyAccessExpression(node.expression)) {
      return `${getPropertyAccessExpressionText(node.expression)}.${node.name.text}`;
    }
  }
  return '';
}

function parseStyleObjValue(
  initializer: ts.Node,
  variables: Record<string, string>,
  checker: ts.TypeChecker
): string {
  /**
   * String literals like 'red' or empty Template Expressions like `red`
   */
  if (ts.isStringLiteral(initializer) || ts.isNoSubstitutionTemplateLiteral(initializer)) {
    return initializer.text;
  }

  // numeric literal values like `12`
  if (ts.isNumericLiteral(initializer)) {
    return `${initializer.text}px`;
  }

  // The source file is using an identifier which will be known at runtime, we'll try to
  // determine the type
  if (ts.isIdentifier(initializer)) {
    const type = checker.getTypeAtLocation(initializer);
    return getStyleValueFromType(initializer, type, checker);
  }

  /**
   * ```ts
   * PropertyAccessExpressions are dot-notation
   *
   * foo.bar.baz
   * ```
   */
  if (ts.isPropertyAccessExpression(initializer)) {
    const type = checker.getTypeAtLocation(initializer);
    return getStyleValueFromType(initializer, type, checker);
  }

  /**
   * This will find patterns like:
   *
   * ```ts
   * cssVar(myVars.color);
   * cssVar(myVars.colors.background);
   * cssVar(myVars.colors.background, 'red')
   * ```
   */
  if (
    ts.isCallExpression(initializer) &&
    ts.isIdentifier(initializer.expression) &&
    initializer.expression.text === 'cssVar'
  ) {
    const value = getCSSValueAtLocation(initializer.arguments[0], checker);
    const value2 = initializer.arguments[1]
      ? parseStyleObjValue(initializer.arguments[1], variables, checker)
      : undefined;

    // handle fallback variables
    const fallbackValue = getFallbackVariable(value, variables);
    if (value && (value2 || fallbackValue)) {
      return `var(${value}, ${
        (value2?.startsWith('--') ? `var(${value2})` : value2) || fallbackValue
      })`;
    }

    if (value) {
      return `var(${value})`;
    }
  }

  /**
   * ```ts
   * `border 1px ${myVars.colors.border}`
   * ```
   */
  if (ts.isTemplateExpression(initializer)) {
    return getStyleValueFromTemplateExpression(initializer, variables, checker);
  }

  return '';
}

/**
 * Gets a static string value from a template expression. It could recurse.
 */
function getStyleValueFromTemplateExpression(
  node: ts.Node | undefined,
  variables: Record<string, string>,
  checker: ts.TypeChecker
): string {
  if (!node) {
    return '';
  }
  if (ts.isTemplateExpression(node)) {
    return (
      getStyleValueFromTemplateExpression(node.head, variables, checker) +
      node.templateSpans
        .map(value => getStyleValueFromTemplateExpression(value, variables, checker))
        .join('')
    );
  }

  if (ts.isTemplateHead(node) || ts.isTemplateTail(node) || ts.isTemplateMiddle(node)) {
    return node.text;
  }

  if (ts.isTemplateSpan(node)) {
    return (
      parseStyleObjValue(node.expression, variables, checker) +
      getStyleValueFromTemplateExpression(node.literal, variables, checker)
    );
  }

  return '';
}

/**
 * Gets a CSS value from an AST node
 */
function getCSSValueAtLocation(
  node: ts.Expression,
  checker: ts.TypeChecker,
  /**
   * Optional type. This works for cases where the node is a TypeNode or TypeScript infers the Type
   * via a generic resolution. For example:
   * ```ts
   * function someFn<T extends string>(input: T): {fontSize: T} {
   *   return { fontSize: input }
   * }
   *
   * // in styles
   * ...someFn('12px')
   * ```
   *
   * If we don't pass a type of the property given by `type.getProperties()`, TypeScript will
   * resolve the type at the value node as `T` instead of `12px`. Allowing for a type override is
   * useful when the caller may have more context about the type at a given node than we do.
   */
  type: ts.Type = checker.getTypeAtLocation(node)
): string {
  const varsKey = getVarsKeyFromNode(node);

  if (vars[varsKey]) {
    return vars[varsKey];
  }

  if (type.isStringLiteral()) {
    // This isn't a component variable, it is a static CSS variable
    return type.value;
  }

  if (type.isNumberLiteral()) {
    return `${type.value}px`;
  }

  if (node && ts.isPropertyAccessExpression(node)) {
    return getPropertyAccessExpressionText(node);
  }

  return '';
}

function getModuleSpecifierFromDeclaration(node?: ts.Declaration) {
  if (!node) {
    return undefined;
  }
  if (ts.isImportSpecifier(node) && ts.isStringLiteral(node.parent.parent.parent.moduleSpecifier)) {
    return node.parent.parent.parent.moduleSpecifier.text;
  }
  return undefined;
}

function getStyleFromProperty(
  property: ts.Node,
  prefix: string,
  variables: Record<string, string>,
  checker: ts.TypeChecker
): NestedStyleObject {
  if (ts.isPropertyAssignment(property)) {
    // All properties should be non-objects
    // {foo: 'bar'}
    if (ts.isIdentifier(property.name)) {
      const value = parseStyleObjValue(property.initializer, variables, checker);
      if (value) {
        return {[property.name.text]: value};
      }
    }

    // A ComputedPropertyName is a property with runtime computation via the square brackets
    // {[foo.bar]: value}
    if (ts.isComputedPropertyName(property.name)) {
      if (ts.isPropertyAccessExpression(property.name.expression)) {
        const value = parseStyleObjValue(property.initializer, variables, checker);
        if (value) {
          // test if the property is a static value
          getPropertyAccessExpressionText(property.name.expression);
          const type = checker.getTypeAtLocation(property.name.expression);

          if (type.isStringLiteral()) {
            return {[type.value]: value};
          } else {
            const expressionText = getPropertyAccessExpressionText(property.name.expression);
            const [id, name] = getVariableNameParts(expressionText);
            return {[`--${prefix}-${slugify(id)}-${makeEmotionSafe(name)}`]: value};
          }
        }
      }
    }

    // String literal property names are special selectors with more styles
    // {'&:hover': {}}
    if (ts.isStringLiteral(property.name)) {
      return {
        [property.name.text]: parseStyleObjFromNode(
          property.initializer,
          prefix,
          variables,
          checker
        ),
      };
    }
  }

  /**
   * A spread assignment looks like:
   *
   * ```ts
   * {
   *   ...styles
   * }
   * ```
   *
   * https://ts-ast-viewer.com/#code/MYewdgzgLgBFCmBbADjAvDA3gMxCAXDAOQBGAhgE5EC+AUKJLAigEzpYB0Xzy1QA
   */
  if (ts.isSpreadAssignment(property)) {
    // Detect `focusRing` calls. This is temporary until we figure out a better way to do focus
    // rings that doesn't require a special entry in the transform function.
    //
    // TODO: implement a fully working type resolver for CSS variables or remove support for them an
    // remove all uses of `focusRing` from new styling code
    if (
      ts.isCallExpression(property.expression) &&
      ts.isIdentifier(property.expression.expression) &&
      property.expression.expression.text === 'focusRing'
    ) {
      const argumentObject = property.expression.arguments[0];
      // defaults
      const defaults = {
        width: '2px',
        separation: '0px',
        inset: undefined as undefined | string,
        innerColor: `var(${base.frenchVanilla100}, rgba(255,255,255,1))`,
        outerColor: `var(${brand.common.focusOutline}, rgba(8,117,225,1))`,
      };
      if (argumentObject && ts.isObjectLiteralExpression(argumentObject)) {
        argumentObject.properties.forEach(property => {
          if (ts.isPropertyAssignment(property) && ts.isIdentifier(property.name)) {
            defaults[property.name.text as keyof typeof defaults] = parseStyleObjValue(
              property.initializer,
              variables,
              checker
            );
          }
        });

        let boxShadow;
        switch (defaults.inset) {
          case 'outer':
            boxShadow = `inset 0 0 0 ${defaults.separation} ${defaults.outerColor}, inset 0 0 0 calc(${defaults.width} + ${defaults.separation}) ${defaults.innerColor}`;
            break;

          case 'inner':
            boxShadow = `inset 0 0 0 ${defaults.separation} ${defaults.innerColor}, 0 0 0 ${defaults.width} ${defaults.outerColor}`;
            break;

          default:
            boxShadow = `0 0 0 ${defaults.separation} ${defaults.innerColor}, 0 0 0 calc(${defaults.width} + ${defaults.separation}) ${defaults.outerColor}`;
            break;
        }

        return {boxShadow};
      }
    }

    // Spread assignments are a bit complicated to use the AST to figure out, so we'll ask the
    // TypeScript type checker.
    const type = checker.getTypeAtLocation(property.expression);
    checker.typeToString(type); //?
    return parseStyleObjFromType(type, prefix, variables, checker);
  }
  return {};
}

/**
 * If we're here, we have a `ts.Type` that represents a style object. We try to parse a style object
 * from the AST, but we might have something that is more complicated like a function call or an
 * identifier that represents an object. It could be imported from another file.
 */
function parseStyleObjFromType(
  type: ts.Type,
  prefix: string,
  variables: Record<string, string>,
  checker: ts.TypeChecker
) {
  const styleObj: Record<string, any> = {};

  // Gets all the properties of the type object
  return type.getProperties().reduce((result, property) => {
    const declaration = property.declarations[0];
    if (declaration) {
      const propType = checker.getTypeOfSymbolAtLocation(property, declaration);
      return {
        ...result,
        [property.name]: getStyleValueFromType(declaration, propType, checker),
      };
    }
    return result;
  }, styleObj);
}

/**
 * If the node is an `ObjectLiteralExpression`, we'll walk the `properties` of the AST node and
 * create a style object for each property we find.
 */
function parseStyleObjFromNode(
  node: ts.Node,
  prefix: string,
  variables: Record<string, string>,
  checker: ts.TypeChecker
) {
  const styleObj: Record<string, any> = {};
  if (ts.isObjectLiteralExpression(node)) {
    return node.properties.reduce((result, property) => {
      return {...result, ...getStyleFromProperty(property, prefix, variables, checker)};
    }, styleObj);
  }

  return styleObj;
}
