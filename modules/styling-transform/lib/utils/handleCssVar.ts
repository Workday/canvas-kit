import ts from 'typescript';

import {cssVar} from '@workday/canvas-kit-styling';
import {createPropertyTransform} from '../createPropertyTransform';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';

export const handleCssVar = createPropertyTransform((node, context) => {
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'cssVar'
  ) {
    const args = node.arguments.map(arg => parseNodeToStaticValue(arg, context));

    return cssVar(args[0].toString(), (args[1] || context.variables[args[0]]).toString());
  }

  return;
});
