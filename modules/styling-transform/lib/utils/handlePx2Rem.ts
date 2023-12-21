import ts from 'typescript';

import {isImportedFromStyling} from './isImportedFromStyling';
import {NodeTransformer} from './types';

export const handlePx2Rem: NodeTransformer = (node, checker) => {
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'px2rem' &&
    isImportedFromStyling(node.expression, checker)
  ) {
    const [pxArgument, baseArgument] = node.arguments;
    const base =
      baseArgument && ts.isNumericLiteral(baseArgument) ? parseFloat(baseArgument.text) : 16;

    if (ts.isNumericLiteral(pxArgument)) {
      const px = parseFloat(pxArgument.text);
      return ts.factory.createStringLiteral(`${px / base}rem`);
    }
  }

  return;
};
