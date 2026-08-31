import ts from 'typescript';

import {parentModifier} from '@workday/canvas-kit-styling';

import {createPropertyTransform} from '../createPropertyTransform';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';

export const handleParentModifier = createPropertyTransform((node, context) => {
  const {names, extractedNames} = context;

  if (
    ts.isComputedPropertyName(node) &&
    ts.isCallExpression(node.expression) &&
    ts.isIdentifier(node.expression.expression) &&
    node.expression.expression.text === 'parentModifier'
  ) {
    const args = node.expression.arguments.map(arg => parseNodeToStaticValue(arg, context));
    const hash = args[0].toString().replace('css-', 'm');

    // add a mapping from `css-{hash}` to `{hash}` for extraction string replacement
    names[args[0]] = hash;

    // map the `{hash}` to the extracted CSS class name
    extractedNames[hash] = extractedNames[args[0]];

    return parentModifier(args[0].toString());
  }

  return;
});
