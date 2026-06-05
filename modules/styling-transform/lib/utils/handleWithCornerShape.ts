import ts from 'typescript';

import {CORNER_SHAPE} from '@workday/canvas-kit-styling';

import {createObjectTransform} from '../createObjectTransform';
import {isImportedFromStyling} from './isImportedFromStyling';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';

export const handleWithCornerShape = createObjectTransform((node, context) => {
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'withCornerShape' &&
    isImportedFromStyling(node.expression, context.checker)
  ) {
    return {
      borderRadius: parseNodeToStaticValue(node.arguments[0], context),
      cornerShape: CORNER_SHAPE,
    };
  }

  return;
});
