import ts from 'typescript';

import {isImportedFromStyling} from './isImportedFromStyling';
import {NodeTransformer} from './types';

/**
 * Handle all instances of `calc.*()` statically. It converts `calc.*` call expressions to template
 * string literals. The transformer will then transform the template literal into static values.
 *
 * ```ts
 * // in
 * calc.add('80%', '2px')
 *
 * // out
 * `calc(${'80%'} + ${'2px'})`
 * ```
 *
 * A template literal is used because the values might be Identifiers, PropertyAccessExpressions,
 * etc. The transform can handle template string literals with different spans, so we'll convert to
 * those as an intermediate step.
 */
export const handleCalc: NodeTransformer = (node, context) => {
  if (
    ts.isCallExpression(node) &&
    ts.isPropertyAccessExpression(node.expression) &&
    ts.isIdentifier(node.expression.expression) &&
    node.expression.expression.text === 'calc' &&
    ts.isIdentifier(node.expression.name) &&
    isImportedFromStyling(node.expression.expression, context.checker)
  ) {
    if (node.expression.name.text === 'add') {
      return replaceWithTemplateString(node.arguments[0], node.arguments[1], ' + ');
    }
    if (node.expression.name.text === 'subtract') {
      return replaceWithTemplateString(node.arguments[0], node.arguments[1], ' - ');
    }
    if (node.expression.name.text === 'multiply') {
      return replaceWithTemplateString(node.arguments[0], node.arguments[1], ' * ');
    }
    if (node.expression.name.text === 'divide') {
      return replaceWithTemplateString(node.arguments[0], node.arguments[1], ' / ');
    }
    if (node.expression.name.text === 'negate') {
      return replaceWithTemplateString(
        node.arguments[0],
        ts.factory.createStringLiteral('-1'),
        ' * '
      );
    }
  }

  return;
};

/**
 * Creates a template literal of the calculation result.
 */
function replaceWithTemplateString(value1: ts.Node, value2: ts.Node, binder: string) {
  if (ts.isStringLiteral(value1) && ts.isStringLiteral(value2)) {
    return ts.factory.createStringLiteral(`calc(${value1.text}${binder}${value2.text})`);
  }

  return ts.factory.createTemplateExpression(ts.factory.createTemplateHead('calc('), [
    ts.factory.createTemplateSpan(value1 as ts.Expression, ts.factory.createTemplateMiddle(binder)),
    ts.factory.createTemplateSpan(value2 as ts.Expression, ts.factory.createTemplateTail(')')),
  ]);
}
