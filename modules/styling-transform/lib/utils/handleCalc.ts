import ts from 'typescript';

import {isImportedFromStyling} from './isImportedFromStyling';
import {NodeTransformer} from './types';

export const handleCalc: NodeTransformer = (node, checker) => {
  if (
    ts.isCallExpression(node) &&
    ts.isPropertyAccessExpression(node.expression) &&
    ts.isIdentifier(node.expression.expression) &&
    node.expression.expression.text === 'calc' &&
    ts.isIdentifier(node.expression.name) &&
    isImportedFromStyling(node.expression.expression, checker)
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

function replaceWithTemplateString(value1: ts.Node, value2: ts.Node, binder: string) {
  if (ts.isStringLiteral(value1) && ts.isStringLiteral(value2)) {
    return ts.factory.createStringLiteral(`calc(${value1.text}${binder}${value2.text})`);
  }

  return ts.factory.createTemplateExpression(ts.factory.createTemplateHead('calc('), [
    ts.factory.createTemplateSpan(value1 as ts.Expression, ts.factory.createTemplateMiddle(binder)),
    ts.factory.createTemplateSpan(value2 as ts.Expression, ts.factory.createTemplateTail(')')),
  ]);
}
