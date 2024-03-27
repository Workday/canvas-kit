import ts from 'typescript';

import {slugify} from '@workday/canvas-kit-styling';

import {makeEmotionSafe} from './makeEmotionSafe';
import {getErrorMessage} from './getErrorMessage';
import {TransformerContext} from './types';

function handlePropertyTransforms(node: ts.Node, context: TransformerContext): string | undefined {
  return context.propertyTransforms.reduce((result, transformer) => {
    return result || transformer(node, context) || undefined;
  }, undefined as undefined | string);
}

/**
 * This is the workhorse of statically analyzing style values
 */
export function parseNodeToStaticValue(
  node: ts.Node,
  context: TransformerContext
): string | number {
  const {checker} = context;

  const value = handlePropertyTransforms(node, context);
  if (value) {
    return value;
  }

  /**
   * String literals like 'red' or empty Template Expressions like `red`
   */
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }

  // 12
  if (ts.isNumericLiteral(node)) {
    return parseFloat(node.text);
  }

  // undefined
  if (ts.isIdentifier(node) && node.text === 'undefined') {
    return 'undefined';
  }

  // a.b
  if (ts.isPropertyAccessExpression(node)) {
    const varName = getCSSVariableKey(getPropertyAccessExpressionText(node));

    const value =
      getValueFromProcessedNodes(varName, context) ||
      getValueFromAliasedSymbol(node, varName, context);

    if (value) {
      return value;
    }
  }

  if (ts.isComputedPropertyName(node) && ts.isIdentifier(node.expression)) {
    const varName = node.expression.text;

    const value =
      getValueFromProcessedNodes(varName, context) ||
      getValueFromAliasedSymbol(node, varName, context);

    if (value) {
      return value;
    }
  }

  // [a.b]
  if (ts.isComputedPropertyName(node) && ts.isPropertyAccessExpression(node.expression)) {
    const varName = getCSSVariableKey(getPropertyAccessExpressionText(node.expression));

    const value =
      getValueFromProcessedNodes(varName, context) ||
      getValueFromAliasedSymbol(node, varName, context);

    if (value) {
      return value;
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
    const value =
      getValueFromProcessedNodes(node.text, context) ||
      getValueFromAliasedSymbol(node, node.text, context);

    if (value) {
      return value;
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
      node,
      context
    )}\nFor static analysis of styles, please make sure all types resolve to string or numeric literals. Please use 'const' instead of 'let'. If using an object, cast using "as const" or use an interface with string or numeric literals.`
  );
}

function parseTypeToStaticValue(type: ts.Type): string | number | void {
  if (type.isStringLiteral()) {
    return type.value;
  }

  if (type.isNumberLiteral()) {
    return type.value;
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
      if (node.name.text === 'vars') {
        // skip vars in name for stencil generated variables
        return `${node.expression.text}`;
      }
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

/**
 * Get a value from an aliased symbol, if it exists. An aliased symbol comes from
 */
function getValueFromAliasedSymbol(
  node: ts.Node,
  varName: string,
  context: TransformerContext
): string | void {
  const {checker, transform} = context;
  let symbolNode: ts.Node | undefined;

  if (ts.isPropertyAccessExpression(node) && ts.isIdentifier(node.name)) {
    symbolNode = node.expression;
  }
  if (ts.isIdentifier(node)) {
    symbolNode = node;
  }
  if (ts.isComputedPropertyName(node)) {
    return getValueFromAliasedSymbol(node.expression, varName, context);
  }

  if (symbolNode) {
    const symbol = checker.getSymbolAtLocation(symbolNode);
    let declaration: ts.Declaration | undefined;

    if (symbol?.valueDeclaration) {
      // If the symbol has a value declaration, we'll use that declaration
      declaration = symbol.valueDeclaration;
    } else if (symbol && symbol.getFlags() & ts.SymbolFlags.Alias) {
      // If the symbol does not have a value declaration, we'll check if there's a aliased symbol
      // linking to the value declaration.
      declaration = checker.getAliasedSymbol(symbol).valueDeclaration;
    }
    // If there is an aliased symbol and it is a variable declaration, try to resolve the
    if (declaration && hasExpression(declaration)) {
      if (declaration.initializer) {
        transform(declaration.initializer, {...context, onlyLookahead: true});

        return getValueFromProcessedNodes(varName, context);
      }
    }
  }
}

function getValueFromProcessedNodes(varName: string, context: TransformerContext): string | void {
  const {variables, keyframes} = context;

  if (variables[varName]) {
    return variables[varName];
  }

  if (keyframes[varName]) {
    return keyframes[varName];
  }
}

function hasExpression(node: ts.Node): node is ts.Node & {initializer: ts.Expression} {
  return 'initializer' in node;
}
