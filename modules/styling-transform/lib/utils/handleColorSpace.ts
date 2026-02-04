import ts from 'typescript';

import {colorSpace} from '@workday/canvas-kit-styling';

import {createPropertyTransform} from '../createPropertyTransform';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';

export const handleColorSpace = createPropertyTransform((node, context) => {
  if (
    ts.isCallExpression(node) &&
    ts.isPropertyAccessExpression(node.expression) &&
    ts.isIdentifier(node.expression.expression) &&
    node.expression.expression.text === 'colorSpace' &&
    ts.isIdentifier(node.expression.name) &&
    node.expression.name.text === 'darken'
  ) {
    const args = node.arguments.map(arg => parseNodeToStaticValue(arg, context));

    return colorSpace.darken(
      args[0] as string,
      args[1] ? parseFloat(args[1] as string) : undefined,
      args[2] ? parseFloat(args[2] as string) : undefined
    );
  }

  return;
});
