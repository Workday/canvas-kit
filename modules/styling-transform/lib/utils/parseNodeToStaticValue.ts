import ts from 'typescript';

import {slugify} from '@workday/canvas-kit-styling';

import {makeEmotionSafe} from './makeEmotionSafe';
import {getFallbackVariable} from './getFallbackVariable';
import {getErrorMessage} from './getErrorMessage';

/**
 * This is the workhorse of statically analyzing style values
 */
export function parseNodeToStaticValue(
  node: ts.Node,
  checker: ts.TypeChecker,
  prefix: string = 'css',
  variables: Record<string, string> = {}
): string {
  /**
   * String literals like 'red' or empty Template Expressions like `red`
   */
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }

  // 12
  if (ts.isNumericLiteral(node)) {
    return `${node.text}px`;
  }

  // a.b
  if (ts.isPropertyAccessExpression(node)) {
    const varName = getCSSVariableKey(getPropertyAccessExpressionText(node));

    if (variables[varName]) {
      return variables[varName];
    }
  }

  // [a.b]
  if (ts.isComputedPropertyName(node) && ts.isPropertyAccessExpression(node.expression)) {
    const varName = getCSSVariableKey(getPropertyAccessExpressionText(node.expression));

    if (variables[varName]) {
      return variables[varName];
    }
  }

  // cssVar(any)
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'cssVar'
  ) {
    const value1 = parseNodeToStaticValue(node.arguments[0], checker, prefix, variables);
    if (value1) {
      const value2 = node.arguments[1]
        ? parseNodeToStaticValue(node.arguments[1], checker, prefix, variables)
        : undefined;
      if (value2) {
        return `var(${value1}, ${maybeCSSVariable(value2 || '', variables)})`;
      }
      return maybeCSSVariable(value1, variables);
    }
  }

  /**
   * ```ts
   * `border 1px ${myVars.colors.border}`
   * ```
   */
  if (ts.isTemplateExpression(node)) {
    return getStyleValueFromTemplateExpression(node, checker, prefix, variables);
  }

  /**
   * An Identifier is a simple variable. It may represent a variable, so we'll check it before
   * moving on. This typically happens in stencils.
   */
  if (ts.isIdentifier(node)) {
    if (variables[node.text]) {
      return variables[node.text];
    }
  }

  // If we got here, we cannot statically analyze by the AST alone. We have to check the type of the
  // correct AST Node

  if (ts.isIdentifier(node) || ts.isPropertyAccessExpression(node)) {
    const value = parseTypeToStaticValue(checker.getTypeAtLocation(node));
    if (value) {
      return value;
    }
  }

  if (ts.isComputedPropertyName(node)) {
    const value = parseTypeToStaticValue(checker.getTypeAtLocation(node.expression));
    if (value) {
      return value;
    }
  }

  // we don't know what this is, we need to throw an error
  const type = checker.getTypeAtLocation(node);

  const typeValue = checker.typeToString(type);

  throw new Error(
    `Unknown type at: "${node.getText()}". Received "${typeValue}"\n${getErrorMessage(
      node
    )}\nFor static analysis of styles, please make sure all types resolve to string or numeric literals. Please use 'const' instead of 'let'. If using an object, cast using "as const" or use an interface with string or numeric literals. Variables: ${JSON.stringify(
      variables,
      null,
      '  '
    )}`
  );
}

function parseTypeToStaticValue(type: ts.Type): string | void {
  if (type.isStringLiteral()) {
    return type.value;
  }

  if (type.isNumberLiteral()) {
    return `${type.value}px`;
  }
}

function getCSSVariableKey(text: string): string {
  const [id, name] = getVariableNameParts(text);
  return `${slugify(id)}-${makeEmotionSafe(name)}`;
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

function getVariableNameParts(input: string): [string, string] {
  const parts = input.split('.');

  // grab the last item in the array. This will also mutate the array, removing the last item
  const variable = parts.pop()!;

  return [parts.join('.'), variable];
}

export function maybeCSSVariable(input: string, variables: Record<string, string>): string {
  if (input.startsWith('--')) {
    const fallback = getFallbackVariable(input, variables);
    return fallback ? `var(${input}, ${maybeCSSVariable(fallback, variables)})` : `var(${input})`;
  }
  return input;
}

/**
 * Gets a static string value from a template expression. It could recurse.
 */
function getStyleValueFromTemplateExpression(
  node: ts.Node | undefined,
  checker: ts.TypeChecker,
  prefix = 'css',
  variables: Record<string, string> = {}
): string {
  if (!node) {
    return '';
  }
  if (ts.isTemplateExpression(node)) {
    return (
      getStyleValueFromTemplateExpression(node.head, checker, prefix, variables) +
      node.templateSpans
        .map(value => getStyleValueFromTemplateExpression(value, checker, prefix, variables))
        .join('')
    );
  }

  if (ts.isTemplateHead(node) || ts.isTemplateTail(node) || ts.isTemplateMiddle(node)) {
    return node.text;
  }

  if (ts.isTemplateSpan(node)) {
    return (
      parseNodeToStaticValue(node.expression, checker, prefix, variables) +
      getStyleValueFromTemplateExpression(node.literal, checker, prefix, variables)
    );
  }

  return '';
}
