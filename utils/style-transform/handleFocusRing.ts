import ts from 'typescript';

import {
  parseNodeToStaticValue,
  createObjectTransform,
  NestedStyleObject,
} from '@workday/canvas-kit-styling-transform';
import {focusRing} from '@workday/canvas-kit-react/common';

export const handleFocusRing = createObjectTransform((node, context) => {
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'focusRing'
  ) {
    const argumentObject = node.arguments[0];

    const args: Record<string, string | number | boolean> = {};

    // Convert all AST nodes to raw values to be passed to the focusRing function
    if (argumentObject && ts.isObjectLiteralExpression(argumentObject)) {
      argumentObject.properties.forEach(property => {
        // `width` and `separation` need to be numbers. `animate` doesn't do anything. The rest are strings
        if (ts.isPropertyAssignment(property) && ts.isIdentifier(property.name)) {
          const key = property.name.text;
          if (['width', 'separation'].includes(key)) {
            args[key] = parseNodeToStaticValue(property.initializer, context);
          } else if (key !== 'animate') {
            args[key] = parseNodeToStaticValue(property.initializer, context);
          }
        }
      });
    }

    return focusRing(args) as NestedStyleObject;
  }

  return;
});
