import ts from 'typescript';

import {colorSpace} from '@workday/canvas-kit-styling';

import {createPropertyTransform} from '../createPropertyTransform';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';
import {parseStyleObjFromType} from './parseObjectToStaticValue';

export const handleColorSpace = createPropertyTransform((node, context) => {
  if (
    ts.isCallExpression(node) &&
    ts.isPropertyAccessExpression(node.expression) &&
    ts.isIdentifier(node.expression.expression) &&
    node.expression.expression.text === 'colorSpace' &&
    ts.isIdentifier(node.expression.name)
  ) {
    const args = node.arguments.map(arg => {
      if (ts.isObjectLiteralExpression(arg)) {
        return parseStyleObjFromType(context.checker.getTypeAtLocation(arg), context);
      }
      return parseNodeToStaticValue(arg, context);
    });
    const name = node.expression.name.text;

    if (name === 'darken') {
      return colorSpace.darken(
        args[0] as {
          color: string;
          fallback?: string;
          mixinColor: string;
          mixinValue: string;
        }
      );
    }
  }

  return;
});
