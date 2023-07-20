import ts from 'typescript';
import {serializeStyles} from '@emotion/serialize';
import {compile, serialize, stringify} from 'stylis';
import {getCsVarName} from '@workday/canvas-kit-react/common';

import t from './traverse';
import {generateUniqueId, slugify} from '@workday/canvas-kit-react/common';

const styleExpressionName = 'cs';
const cssVarExpressionName = 'cssVar';
const fallbackExpressionName = 'fallback';
const createVarExpressionName = 'createVars';

let errors: Error[] = [];
let styles: Record<string, string> = {};
let vars: Record<string, Record<string, string>> = {};

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
  const fullContext = lineBefore + lineCurrent + highlightedLine + lineAfter;

  return `File: ${sourceFile.fileName}, Line: ${line}, Character: ${character}.\n${fullContext}`;
}

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
    )}\nFor static analysis of styles, please make sure all types resolve to string or numeric literals`
  );
}

function getPropertyAccessExpressionText(node: ts.PropertyAccessExpression): string {
  if (t.isIdentifier(node.name)) {
    if (t.isIdentifier(node.expression)) {
      return `${node.expression.text}.${node.name.text}`;
    }
    if (t.isPropertyAccessExpression(node.expression)) {
      return `${getPropertyAccessExpressionText(node.expression)}.${node.name.text}`;
    }
  }
  return '';
}

function parseStyleObjValue(initializer: ts.Node, checker: ts.TypeChecker) {
  if (t.isStringLiteral(initializer)) {
    return initializer.text;
  }

  // numeric literal values like `12`
  if (t.isNumericLiteral(initializer)) {
    return `${initializer.text}px`;
  }

  // The source file is using an identifier which will be known at runtime, we'll try to
  // determine the type
  if (t.isIdentifier(initializer)) {
    const type = checker.getTypeAtLocation(initializer);
    try {
      return getStyleValueFromType(initializer, type, checker);
    } catch (e) {
      errors.push(e);
      e; //?
      // We'll fallback to runtime
      return `\${$toString(${initializer.text})}`;
    }
  }

  if (t.isPropertyAccessExpression(initializer)) {
    'here'; //?
    const type = checker.getTypeAtLocation(initializer);
    try {
      return getStyleValueFromType(initializer, type, checker);
    } catch (e) {
      errors.push(e);
      e; //?
      // We'll fallback to runtime
      return `\${$toString(${getPropertyAccessExpressionText(initializer)})}`;
    }
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
    t.isCallExpression(initializer) &&
    t.isIdentifier(initializer.expression) &&
    initializer.expression.text === cssVarExpressionName
  ) {
    const argument = initializer.arguments[0];
    const type = checker.getTypeAtLocation(argument);

    if (type.isStringLiteral()) {
      // This isn't a component variable, it is a static CSS variable
      return `var(${type.value})`;
    } else {
      if (argument && t.isPropertyAccessExpression(argument)) {
        return `var(\${${getPropertyAccessExpressionText(argument)}})`;
      }
    }
  }
}

function parseStyleObj(node: ts.Node, checker: ts.TypeChecker) {
  const styleObj: Record<string, any> = {};
  if (t.isObjectLiteralExpression(node)) {
    node.properties.forEach(property => {
      t.getKindNameFromNode(property); //?
      if (t.isPropertyAssignment(property)) {
        t.getKindNameFromNode(property.name); //?

        // All properties should be non-objects
        // {foo: 'bar'}
        if (t.isIdentifier(property.name)) {
          const value = parseStyleObjValue(property.initializer, checker);
          if (value) {
            styleObj[property.name.text] = value;
          }
        }

        if (t.isComputedPropertyName(property.name)) {
          if (t.isPropertyAccessExpression(property.name.expression)) {
            const value = parseStyleObjValue(property.initializer, checker);
            if (value) {
              // test if the property is a static value
              const type = checker.getTypeAtLocation(property.name.expression);
              if (type.isStringLiteral()) {
                styleObj[type.value] = value;
              } else {
                styleObj[`${getPropertyAccessExpressionText(property.name.expression)}`] = value;
              }
            }
          }
        }

        // String literal property names are special selectors with more styles
        // {'&:hover': {}}
        if (t.isStringLiteral(property.name)) {
          property.initializer.getText(); //?
          styleObj[property.name.text] = parseStyleObj(property.initializer, checker);
        }
      }

      if (t.isSpreadAssignment(property)) {
        const type = checker.getTypeAtLocation(property.expression);

        type.getProperties().forEach(prop => {
          const propType = checker.getTypeOfSymbolAtLocation(prop, prop.valueDeclaration);
          checker.typeToString(propType); //?
          styleObj[prop.name] = getStyleValueFromType(prop.valueDeclaration, propType, checker);
          prop; //?
        });

        checker.typeToString(type); //?
      }

      styleObj; //?
    });
  }

  return styleObj;
}

class StyleOptimizeTransformer {
  /** A shared reference to the Typescript type checker */
  public checker: ts.TypeChecker;

  constructor(public program: ts.Program) {
    this.checker = program.getTypeChecker();
  }

  transform(): ts.TransformerFactory<ts.SourceFile> {
    // hasStyleFunction tracks if the style objects contain the runtime `$toString` function. If it
    // does, we have to inline the function in the transformed output. The transform visitor pattern
    // runs inside-out. This means leaf nodes will be run through our function first which means the
    // variable will be set to `true` before we get to the root node of the source file.
    let hasStyleFunction = false;

    return context => {
      const visit: ts.Visitor = node => {
        node = ts.visitEachChild(node, visit, context);

        if (t.isSourceFile(node) && hasStyleFunction) {
          // we have a style function in the file. We need to inject a helper function
          (node.statements as any) /* TypeScript treats statements as readonly. We cast to write */ = [
            ...node.statements.filter(t.isImportDeclaration),
            getInlinedToStringFnAST(),
            ...node.statements.filter(node => !t.isImportDeclaration(node)),
          ];
        }

        try {
          if (
            t.isCallExpression(node) &&
            t.isIdentifier(node.expression) &&
            node.expression.text === styleExpressionName &&
            node.arguments.length > 0 &&
            t.isObjectLiteralExpression(node.arguments[0])
          ) {
            const newArguments = [...node.arguments].map((arg, index) => {
              if (t.isObjectLiteralExpression(arg)) {
                const styleObj = parseStyleObj(arg, this.checker); //?
                const id = generateUniqueId();

                const serialized = serializeStyles([styleObj]); //?
                let styleText = serialized.styles;
                let styleExpression: ts.Expression;

                if (styleText.includes('${')) {
                  hasStyleFunction = true;
                  // template strings are difficult to work with. We'll instead generate an AST out of a string
                  const ast = ts.createSourceFile(
                    '',
                    '`' + serialized.styles + '`',
                    ts.ScriptTarget.Latest
                  );
                  styleExpression = (ast.statements[0] as ts.ExpressionStatement).expression; // This will be a TemplateExpression node already built for us
                } else {
                  styleExpression = ts.factory.createStringLiteral(styleText);
                }

                // create an emotion-optimized object: https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/serialize/src/index.js#L315-L322
                // Looks like: `{name: $hash, styles: $styleText }`
                return ts.factory.createObjectLiteralExpression(
                  [
                    ts.factory.createPropertyAssignment(
                      ts.factory.createIdentifier('name'),
                      ts.factory.createStringLiteral(id) // We might be using values that are resolved at runtime, but should still be static. We're only supporting the `cs` function running once per file, so a stable id based on a hash is not necessary
                    ),
                    ts.factory.createPropertyAssignment(
                      ts.factory.createIdentifier('styles'),
                      styleExpression // In the future we can extract CSS from here by running the `stylis` compiler directly. Emotion does this here: https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/cache/src/index.js#L188-L245
                    ),
                  ],
                  false
                );
              }
              return arg;
            });

            return ts.factory.createCallExpression(
              ts.factory.createIdentifier('cs'),
              [],
              newArguments
            );
          }
        } catch (e) {
          // If we got here, we cannot parse the node properly
          errors.push(e);

          return node;
        }

        /**
         * This will create a variable
         */
        if (
          t.isCallExpression(node) &&
          t.isIdentifier(node.expression) &&
          node.expression.text === createVarExpressionName
        ) {
          'here'; //?
          const id = generateUniqueId();
          const argument = node.arguments[0];
          const variables = node.arguments
            .map(arg => t.isStringLiteral(arg) && arg.text)
            .filter(Boolean) as string[];

          variables; //?
          node.arguments = [
            ts.factory.createObjectLiteralExpression(
              [
                ts.factory.createPropertyAssignment(
                  ts.factory.createIdentifier('id'),
                  ts.factory.createStringLiteral(id)
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
          ];
        }

        return node;
      };

      return node => ts.visitNode(node, visit);
    };
  }
}

// This should only be used for tests
export function transform(program: ts.Program, fileName: string) {
  const transformer = new StyleOptimizeTransformer(program);

  const source =
    program.getSourceFile(fileName) || ts.createSourceFile(fileName, '', ts.ScriptTarget.ES2019);

  const printer = ts.createPrinter();

  errors; //?

  return printer.printFile(
    ts
      .transform(source, [transformer.transform()])
      .transformed.find(s => (s.fileName = fileName)) || source
  );
}

function getInlinedToStringFnAST() {
  // source: function $toString(input:string) {return typeof input === 'number' ? input + 'px' : input}
  // https://ts-ast-viewer.com/#code/GYVwdgxgLglg9mABAEinAylATjMBzAClwAcQoAuAZ21zwEpEBvAKETcSwFMoQskoAnsU5xgiEmUQBeGYgDkYEAFsARpyxzEAfnFhSURAGp5xAB6byu-cwC+QA
  return ts.factory.createFunctionDeclaration(
    undefined,
    undefined,
    undefined,
    ts.factory.createIdentifier('$toString'),
    undefined,
    [
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        ts.factory.createIdentifier('input'),
        undefined,
        ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
        undefined
      ),
    ],
    undefined,
    ts.factory.createBlock(
      [
        ts.factory.createReturnStatement(
          ts.factory.createConditionalExpression(
            ts.factory.createBinaryExpression(
              ts.factory.createTypeOfExpression(ts.factory.createIdentifier('input')),
              ts.factory.createToken(ts.SyntaxKind.EqualsEqualsEqualsToken),
              ts.factory.createStringLiteral('number')
            ),
            ts.factory.createToken(ts.SyntaxKind.QuestionToken),
            ts.factory.createBinaryExpression(
              ts.factory.createIdentifier('input'),
              ts.factory.createToken(ts.SyntaxKind.PlusToken),
              ts.factory.createStringLiteral('px')
            ),
            ts.factory.createToken(ts.SyntaxKind.ColonToken),
            ts.factory.createIdentifier('input')
          )
        ),
      ],
      true
    )
  );
}
