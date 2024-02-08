import ts from 'typescript';

import {calc} from '@workday/canvas-kit-styling';
import {createPropertyTransform} from '../createPropertyTransform';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';

/**
 * Operands are either a number or a CSS variable. The property parser will always return a string
 * where numbers are converted to strings with a suffix of 'px'
 */
function toOperand(input: string): string | number {
  if (input.includes('px')) {
    return parseInt(input.replace('px', ''), 10);
  }

  return input;
}

export const handleCalc = createPropertyTransform((node, context) => {
  if (
    ts.isCallExpression(node) &&
    ts.isPropertyAccessExpression(node.expression) &&
    ts.isIdentifier(node.expression.expression) &&
    node.expression.expression.text === 'calc' &&
    ts.isIdentifier(node.expression.name)
  ) {
    function toStaticValue(node: ts.Node) {
      return parseNodeToStaticValue(node, context);
    }
    const args = node.arguments;
    const method = node.expression.name.text;

    if (method === 'add' || method === 'subtract') {
      return calc[method](toStaticValue(args[0]), toStaticValue(args[1]));
    }
    if (method === 'multiply' || method === 'divide') {
      return calc[method](toStaticValue(args[0]), toOperand(toStaticValue(args[1])));
    }
    if (method === 'negate') {
      return calc.negate(toStaticValue(args[0]));
    }
  }

  return;
});
