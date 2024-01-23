import ts from 'typescript';

import {slugify} from '@workday/canvas-kit-styling';

import {makeEmotionSafe} from './makeEmotionSafe';
import {getErrorMessage} from './getErrorMessage';
import {TransformerContext} from './types';

/**
 * This is the workhorse of statically analyzing style values
 */
export function parseNodeToStaticValue(node: ts.Node, context: TransformerContext): string {
  const {checker, variables, keyframes} = context;
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

  // undefined
  if (ts.isIdentifier(node) && node.text === 'undefined') {
    return 'undefined';
  }

  // a.b
  if (ts.isPropertyAccessExpression(node)) {
    const varName = getCSSVariableKey(getPropertyAccessExpressionText(node));

    if (variables[varName]) {
      return variables[varName];
    }

    if (keyframes[varName]) {
      return keyframes[varName];
    }
  }

  // [a.b]
  if (ts.isComputedPropertyName(node) && ts.isPropertyAccessExpression(node.expression)) {
    const varName = getCSSVariableKey(getPropertyAccessExpressionText(node.expression));

    if (variables[varName]) {
      return variables[varName];
    }

    if (keyframes[varName]) {
      return keyframes[varName];
    }
  }

  /**
   * ```ts
   * `border 1px ${myVars.colors.border}`
   * ```
   */
  if (ts.isTemplateExpression(node)) {
    return getStyleValueFromTemplateExpression(node, context);
  }

  /**
   * An Identifier is a simple variable. It may represent a variable, so we'll check it before
   * moving on. This typically happens in stencils.
   */
  if (ts.isIdentifier(node)) {
    if (variables[node.text]) {
      return variables[node.text];
    }

    if (keyframes[node.text]) {
      return keyframes[node.text];
    }
  }

  if (ts.isElementAccessExpression(node)) {
    const value = parseTypeToStaticValue(checker.getTypeAtLocation(node));

    if (value) {
      return value;
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
    )}\nFor static analysis of styles, please make sure all types resolve to string or numeric literals. Please use 'const' instead of 'let'. If using an object, cast using "as const" or use an interface with string or numeric literals.`
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

  return [parts.join('.').replace(/(vars|stencil|styles)/i, ''), variable];
}

/**
 * Gets a static string value from a template expression. It could recurse.
 */
function getStyleValueFromTemplateExpression(
  node: ts.Node | undefined,
  context: TransformerContext
): string {
  if (!node) {
    return '';
  }
  if (ts.isTemplateExpression(node)) {
    return (
      getStyleValueFromTemplateExpression(node.head, context) +
      node.templateSpans.map(value => getStyleValueFromTemplateExpression(value, context)).join('')
    );
  }

  if (ts.isTemplateHead(node) || ts.isTemplateTail(node) || ts.isTemplateMiddle(node)) {
    return node.text;
  }

  if (ts.isTemplateSpan(node)) {
    return (
      parseNodeToStaticValue(node.expression, context) +
      getStyleValueFromTemplateExpression(node.literal, context)
    );
  }

  return '';
}
