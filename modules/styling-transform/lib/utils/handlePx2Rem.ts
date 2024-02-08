import ts from 'typescript';

import {px2rem} from '@workday/canvas-kit-styling';
import {createPropertyTransform} from '../createPropertyTransform';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';

function toNumber(input: string): number {
  return parseInt(input.replace('px', ''), 10);
}

export const handlePx2Rem = createPropertyTransform((node, context) => {
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'px2rem'
  ) {
    const args = node.arguments.map(arg => toNumber(parseNodeToStaticValue(arg, context)));

    return px2rem(args[0], args[1]);
  }

  return;
});
