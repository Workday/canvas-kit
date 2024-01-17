import ts from 'typescript';

import {NodeTransformer} from './types';

/**
 * Converts `cssVar` to a `TemplateExpression` with each argument as a span
 *
 * - `cssVar('--foo')` => `\`var(${'--foo'})\``
 * - `cssVar('--foo', 'fallback')` => `\`var(${'--foo'}, ${'fallback'})\``
 *
 * The value parser will figure out what to do from there. We don't have access to variables at this
 * point, so we forward CallExpression arguments in ways the value parser understands.
 */
export const handleCssVar: NodeTransformer = node => {
  // cssVar(a)
  // cssVar(a, b)

  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'cssVar'
  ) {
    if (node.arguments.length === 1) {
      return node.arguments[0];
    }

    return ts.factory.createTemplateExpression(ts.factory.createTemplateHead('var('), [
      ts.factory.createTemplateSpan(node.arguments[0], ts.factory.createTemplateMiddle(', ')),
      ts.factory.createTemplateSpan(node.arguments[1], ts.factory.createTemplateTail(')')),
    ]);
  }

  return;
};
