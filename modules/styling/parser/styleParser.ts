import ts from 'typescript';
import {serializeStyles} from '@emotion/serialize';

import {slugify} from './slugify';
import {getFallbackVariable} from './getCssVariables';

const styleExpressionName = 'cs';
const cssVarExpressionName = 'cssVar';
const fallbackExpressionName = 'fallback';
const createVarExpressionName = 'createVars';
const styleImportString = '@workday/canvas-kit-styling';

const styles: NestedStyleObject = {};
const vars: Record<string, string> = {};

export type NestedStyleObject = {[key: string]: string | NestedStyleObject};

function getStyleValueFromType(node: ts.Node, type: ts.Type, checker: ts.TypeChecker) {
  node.getText(); //?
  checker.typeToString(type); //?
  if (type.isNumberLiteral()) {
    return `${type.value}px`;
  }
  if (type.isStringLiteral()) {
    return type.value;
  }

  throw new Error(
    `Unknown type at: "${node.getText()}".\n${getErrorMessage(
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
) {
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

    // handle fallback variables
    const fallbackValue = getFallbackVariable(value, variables);
    if (value && fallbackValue) {
      return `var(${value}, ${fallbackValue})`;
    }

    if (value) {
      return `var(${value})`;
    }
  }

  /**
   * This will find patterns like:
   *
   * ```ts
   * fallback(myVars.color, 'red');
   * fallback(myVars.colors.background, myVars.colors.default)
   * ```
   */
  if (
    ts.isCallExpression(initializer) &&
    ts.isIdentifier(initializer.expression) &&
    initializer.expression.text === fallbackExpressionName
  ) {
    const value1 = getCSSValueAtLocation(initializer.arguments[0], checker); //?
    const value2 = getCSSValueAtLocation(initializer.arguments[1], checker); //?
    if (value1 && value2) {
      return `var(${value1}, ${value2})`;
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
      node.templateSpans.map(value =>
        getStyleValueFromTemplateExpression(value, variables, checker)
      )
    );
  }

  if (ts.isTemplateHead(node) || ts.isTemplateTail(node)) {
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

function getCSSValueAtLocation(node: ts.Expression, checker: ts.TypeChecker): string {
  const varsKey = getVarsKeyFromNode(node); //?

  if (vars[varsKey]) {
    return vars[varsKey];
  }

  const type = checker.getTypeAtLocation(node);

  if (type.isStringLiteral()) {
    // This isn't a component variable, it is a static CSS variable
    return type.value;
  } else {
    if (node && ts.isPropertyAccessExpression(node)) {
      return getPropertyAccessExpressionText(node);
    }
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
            return {[`--${slugify(id)}-${slugify(name)}`]: value};
          }
        }
      }
    }

    // String literal property names are special selectors with more styles
    // {'&:hover': {}}
    if (ts.isStringLiteral(property.name)) {
      return {
        [property.name.text]: parseStyleObjFromNode(property.initializer, variables, checker),
      };
    }
  }

  if (ts.isSpreadAssignment(property)) {
    const type = checker.getTypeAtLocation(property.expression);

    type.getProperties().forEach(prop => {
      const propType = checker.getTypeOfSymbolAtLocation(prop, prop.valueDeclaration);
      checker.typeToString(propType); //?
      return {[prop.name]: getStyleValueFromType(prop.valueDeclaration, propType, checker)};
    });

    checker.typeToString(type); //?
  }
  return {};
}

function parseStyleObjFromType(
  type: ts.Type,
  variables: Record<string, string>,
  checker: ts.TypeChecker
) {
  const styleObj: Record<string, any> = {};

  return type.getProperties().reduce((result, property) => {
    property.name; //?
    const declaration = property.declarations[0];
    if (declaration) {
      declaration.kind; //?

      return {...result, ...getStyleFromProperty(declaration, variables, checker)};
    }
    return result;
  }, styleObj);
}

function parseStyleObjFromNode(
  node: ts.Node,
  variables: Record<string, string>,
  checker: ts.TypeChecker
) {
  const styleObj: Record<string, any> = {};
  if (ts.isObjectLiteralExpression(node)) {
    return node.properties.reduce((result, property) => {
      return {...result, ...getStyleFromProperty(property, variables, checker)};
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

const variables: Record<string, string> = {};
const errors: Error[] = [];

export interface StyleTransformerOptions {
  prefix: string;
}

export default function styleTransformer(
  program: ts.Program,
  {prefix = 'css'}: StyleTransformerOptions = {prefix: 'css'}
): ts.TransformerFactory<ts.SourceFile> {
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
              const styleObj = parseStyleObjFromNode(arg, variables, checker); //?

              return createStyleObjectNode(styleObj);
            }
            if (ts.isIdentifier(arg)) {
              const type = checker.getTypeAtLocation(arg);

              if (type.isStringLiteral()) {
                return ts.factory.createStringLiteral(type.value);
              }

              checker.typeToString(type); //?
              const styleObj = parseStyleObjFromType(type, variables, checker); //?

              return createStyleObjectNode(styleObj);
            }
            return arg;
          });

          return ts.factory.createCallExpression(
            ts.factory.createIdentifier('cs'),
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
        console.log('id', id);
        const variables = node.arguments
          .map(arg => ts.isStringLiteral(arg) && slugify(arg.text))
          .filter(Boolean) as string[];

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
  variables: Record<string, string> = {}
) {
  const source =
    program.getSourceFile(fileName) || ts.createSourceFile(fileName, '', ts.ScriptTarget.ES2019);

  const printer = ts.createPrinter();

  return printer.printFile(
    ts
      .transform(source, [styleTransformer(program, {prefix: 'css'})])
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
 * const styles = cs({
 *   fontSize: fontSize
 *             ========
 * })
 * ```
 */
function getErrorMessage(node: ts.Node) {
  const sourceFile = node.getSourceFile();

  const {line, character} = node.getSourceFile().getLineAndCharacterOfPosition(node.pos);
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
   * const styles = cs({
   *   fontSize: fontSize
   *             ========
   * })
   * ```
   */
  const fullContext = lineBefore + lineCurrent + highlightedLine + lineAfter; //?

  return `File: ${sourceFile.fileName}:${line}:${character}.\n${fullContext}`;
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
    return `${getVarsKeyFromNode(node.expression)}-${slugify(node.name.text)}`; //?
  }

  return '';
}
