import ts from 'typescript';

import {px2rem} from '@workday/canvas-kit-styling';

import {createPropertyTransform} from '../createPropertyTransform';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';

export const handlePx2Rem = createPropertyTransform((node, context) => {
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'px2rem'
  ) {
    const args = node.arguments.map(arg => parseNodeToStaticValue(arg, context));

    return px2rem(
      parseFloat(args[0] as string),
      args[1] ? parseFloat(args[1] as string) : undefined
    );
  }

  return;
});
