/// <reference types="node" />
import ts from 'typescript';
import {serializeStyles} from '@emotion/serialize';
import {base, brand} from '@workday/canvas-tokens-web';
import path from 'node:path';

import {slugify} from '@workday/canvas-kit-styling';
import {getFallbackVariable, getVariablesFromFiles} from './getCssVariables';

const styleExpressionName = 'createStyles';
const cssVarExpressionName = 'cssVar';
const createVarExpressionName = 'createVars';
const styleImportString = '@workday/canvas-kit-styling';

// const styles: NestedStyleObject = {};
const vars: Record<string, string> = {};

export type NestedStyleObject = {[key: string]: string | NestedStyleObject};

function getStyleValueFromType(node: ts.Node, type: ts.Type, checker: ts.TypeChecker) {
  const value = getCSSValueAtLocation(node as ts.Expression, checker, type); //?
  if (value) {
    if (value.startsWith('--')) {
      return `var(${value})`;
    }
    return value;
  }

  const typeValue = checker.typeToString(type); //?

  throw new Error(
    `Unknown type at: "${node.getText()}". Received "${typeValue}"\n${getErrorMessage(
      node
    )}\nFor static analysis of styles, please make sure all types resolve to string or numeric literals. Please use 'const' instead of 'let'. If using an object, cast using "as const" or use an interface with string or numeric literals.`
  );
}

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
   * cssVar(myVars.colors.background)
   * ```
   */
  if (
    ts.isCallExpression(initializer) &&
    ts.isIdentifier(initializer.expression) &&
    initializer.expression.text === cssVarExpressionName
  ) {
    const value = getCSSValueAtLocation(initializer.arguments[0], checker); //?
    const value2 = initializer.arguments[1]
      ? parseStyleObjValue(initializer.arguments[1], variables, checker)
      : undefined; //?

    // handle fallback variables
    const fallbackValue = getFallbackVariable(value, variables); //?
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
        .map(
          value => getStyleValueFromTemplateExpression(value, variables, checker) //?
        )
        .join('')
    );
  }

  if (ts.isTemplateHead(node) || ts.isTemplateTail(node) || ts.isTemplateMiddle(node)) {
    return node.text; //?
  }

  if (ts.isTemplateSpan(node)) {
    return (
      parseStyleObjValue(node.expression, variables, checker) +
      getStyleValueFromTemplateExpression(node.literal, variables, checker)
    );
  }

  return '';
}

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
      const value = parseStyleObjValue(property.initializer, variables, checker); //?
      if (value) {
        return {[property.name.text]: value};
      }
    }

    if (ts.isComputedPropertyName(property.name)) {
      if (ts.isPropertyAccessExpression(property.name.expression)) {
        const value = parseStyleObjValue(property.initializer, variables, checker); //?
        if (value) {
          // test if the property is a static value
          getPropertyAccessExpressionText(property.name.expression); //?
          const type = checker.getTypeAtLocation(property.name.expression);
          checker.typeToString(type); //?

          if (type.isStringLiteral()) {
            return {[type.value]: value};
          } else {
            const expressionText = getPropertyAccessExpressionText(property.name.expression); //?
            const [id, name] = getVariableNameParts(expressionText); //?
            return {[`--${prefix}-${slugify(id)}-${name}`]: value};
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

  if (ts.isSpreadAssignment(property)) {
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
        width: 2,
        separation: 0,
        inset: undefined as undefined | 'inner' | 'outer',
        innerColor: `var(${base.frenchVanilla100}, rgba(255,255,255,1))`,
        outerColor: `var(${brand.common.focusOutline}, rgba(8,117,225,1))`,
      };
      if (argumentObject && ts.isObjectLiteralExpression(argumentObject)) {
        argumentObject.properties.forEach(property => {
          if (ts.isPropertyAssignment(property) && ts.isIdentifier(property.name)) {
            property.name.text; //?
            property.initializer; //?
            defaults[property.name.text] = parseStyleObjValue(
              property.initializer,
              variables,
              checker
            ); //?
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

        return {boxShadow}; //?
      }
    }

    const type = checker.getTypeAtLocation(property.expression);

    checker.typeToString(type); //?

    return type.getProperties().reduce((result, prop) => {
      const propType = checker.getTypeOfSymbolAtLocation(prop, prop.valueDeclaration);
      return {
        ...result,
        [prop.name]: getStyleValueFromType(prop.valueDeclaration, propType, checker),
      };
    }, {});
  }
  return {};
}

function parseStyleObjFromType(
  type: ts.Type,
  prefix: string,
  variables: Record<string, string>,
  checker: ts.TypeChecker
) {
  const styleObj: Record<string, any> = {};

  return type.getProperties().reduce((result, property) => {
    const declaration = property.declarations[0];
    if (declaration) {
      return {...result, ...getStyleFromProperty(declaration, prefix, variables, checker)};
    }
    return result;
  }, styleObj);
}

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
    }, styleObj); //?
  }

  return styleObj;
}

function createStyleObjectNode(styleObj: Record<string, string>) {
  const serialized = serializeStyles([styleObj]); //?
  const styleText = serialized.styles;
  const styleExpression = ts.factory.createStringLiteral(styleText);

  // create an emotion-optimized object: https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/serialize/src/index.js#L315-L322
  // Looks like: `{name: $hash, styles: $styleText }`
  return ts.factory.createObjectLiteralExpression(
    [
      ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier('name'),
        // TODO - this might cause a problem if we need to change `createStyles` to always return a unique ID and not a hash
        ts.factory.createStringLiteral(serialized.name) // We might be using values that are resolved at runtime, but should still be static. We're only supporting the `cs` function running once per file, so a stable id based on a hash is not necessary
      ),
      ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier('styles'),
        styleExpression // In the future we can extract CSS from here by running the `stylis` compiler directly. Emotion does this here: https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/cache/src/index.js#L188-L245
      ),
    ],
    false
  );
}

// const variables: Record<string, string> = {};
// const errors: Error[] = [];

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
      .map(file => ts.sys.readFile(file) || ''); //?

    // eslint-disable-next-line no-param-reassign
    variables = getVariablesFromFiles(files);
  }

  const checker = program.getTypeChecker();
  return context => {
    const visit: ts.Visitor = node => {
      // eslint-disable-next-line no-param-reassign
      node = ts.visitEachChild(node, visit, context);

      // try {
      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === styleExpressionName &&
        node.arguments.length > 0
      ) {
        // get the declaration of the symbol of the styleExpression
        const symbol = checker.getSymbolAtLocation(node.expression);
        const declaration = symbol?.declarations[0];

        if (getModuleSpecifierFromDeclaration(declaration) === styleImportString) {
          const newArguments = [...node.arguments].map((arg, index) => {
            if (ts.isObjectLiteralExpression(arg)) {
              const styleObj = parseStyleObjFromNode(arg, prefix, variables, checker); //?

              return createStyleObjectNode(styleObj);
            }
            if (ts.isIdentifier(arg)) {
              const type = checker.getTypeAtLocation(arg);

              if (type.isStringLiteral()) {
                return ts.factory.createStringLiteral(type.value);
              }

              checker.typeToString(type); //?
              const styleObj = parseStyleObjFromType(type, prefix, variables, checker); //?

              return createStyleObjectNode(styleObj);
            }
            return arg;
          });

          return ts.factory.createCallExpression(
            ts.factory.createIdentifier(styleExpressionName),
            [],
            newArguments
          );
        }
      }
      // } catch (e) {
      //   // If we got here, we cannot parse the node properly
      //   errors.push(e);

      //   return node;
      // }

      /**
       * This will create a variable
       */
      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === createVarExpressionName
      ) {
        const id = slugify(getVarName(node)); //?
        const variables = node.arguments
          .map(arg => ts.isStringLiteral(arg) && arg.text)
          .filter(Boolean) as string[]; //?

        variables.forEach(v => {
          vars[`${id}-${v}`] = `--${prefix}-${id}-${v}`;
        });

        return ts.factory.createCallExpression(
          node.expression,
          [],
          [
            ts.factory.createObjectLiteralExpression(
              [
                ts.factory.createPropertyAssignment(
                  ts.factory.createIdentifier('id'),
                  ts.factory.createStringLiteral(`${prefix}-${id}`)
                ),
                ts.factory.createPropertyAssignment(
                  ts.factory.createIdentifier('args'),
                  ts.factory.createArrayLiteralExpression(
                    variables.map(val => ts.factory.createStringLiteral(val)),
                    false
                  )
                ),
              ],
              false
            ),
          ]
        );
      }

      return node;
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

function getVarName(node: ts.Node): string {
  const parent = node.parent;

  if (ts.isVariableDeclaration(parent) && ts.isIdentifier(parent.name)) {
    return parent.name.text; //?
  }

  if (ts.isPropertyAssignment(parent) && ts.isIdentifier(parent.name)) {
    return `${getVarName(parent.parent)}-${parent.name.text}`;
  }

  return '';
}

/**
 * Creates an error message around a node. It will look something like:
 *
 * ```
 * Unknown type at: "fontSize".
 * File: test.ts, Line: 6, Character: 17.
 * const styles = createStyles({
 *   fontSize: fontSize
 *             ========
 * })
 * ```
 */
function getErrorMessage(node: ts.Node) {
  const sourceFile = node.getSourceFile();

  const {line} = node.getSourceFile().getLineAndCharacterOfPosition(node.pos);
  const lineStarts = sourceFile.getLineStarts();

  const lineStartIndex = lineStarts.findIndex(s => s >= node.pos) - 1;

  // get a whole line's text given a lineStarts index
  function getLine(sourceFile: ts.SourceFile, startIndex: number) {
    const lineStarts = sourceFile.getLineStarts();

    return sourceFile.text.substring(
      lineStarts[Math.max(0, startIndex)],
      startIndex + 1 >= lineStarts.length ? undefined : lineStarts[startIndex + 1]
    );
  }

  // Create a full context message with source code and highlighting
  const lineBefore = getLine(sourceFile, lineStartIndex - 1);
  const lineCurrent = getLine(sourceFile, lineStartIndex);
  const lineAfter = getLine(sourceFile, lineStartIndex + 1);
  const highlightedLine =
    ''
      .padStart(node.getStart() - lineStarts[lineStartIndex], ' ')
      .padEnd(node.getStart() - lineStarts[lineStartIndex] + node.getWidth(), '=') + '\n';

  /** This should look something like:
   * ```
   * const styles = createStyles({
   *   fontSize: fontSize
   *             ========
   * })
   * ```
   */
  const fullContext = lineBefore + lineCurrent + highlightedLine + lineAfter;

  const character = node.getStart() - lineStarts[lineStartIndex] + 1;
  return `File: ${sourceFile.fileName}:${line + 1}:${character}.\n${fullContext}`;
}

function getVariableNameParts(input: string): [string, string] {
  const parts = input.split('.'); //?

  // grab the last item in the array. This will also mutate the array, removing the last item
  const variable = parts.pop()!;

  return [parts.join('.'), variable];
}

function getVarsKeyFromNode(node: ts.Node): string {
  if (ts.isIdentifier(node)) {
    return slugify(node.text); //?
  }

  if (ts.isPropertyAccessExpression(node) && ts.isIdentifier(node.name)) {
    return `${getVarsKeyFromNode(node.expression)}-${node.name.text}`; //?
  }

  return '';
}
