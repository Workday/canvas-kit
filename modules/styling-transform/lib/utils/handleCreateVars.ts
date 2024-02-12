import ts from 'typescript';

import {slugify} from '@workday/canvas-kit-styling';

import {getVarName} from './getVarName';
import {makeEmotionSafe} from './makeEmotionSafe';
import {NodeTransformer} from './types';

export const handleCreateVars: NodeTransformer = (node, {prefix, variables}) => {
  /**
   * This will create a variable
   */
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'createVars'
  ) {
    const id = slugify(getVarName(node)).replace('-vars', '');
    const vars = node.arguments
      .map(arg => ts.isStringLiteral(arg) && arg.text)
      .filter(Boolean) as string[];

    vars.forEach(v => {
      variables[`${id}-${makeEmotionSafe(v)}`] = `--${prefix}-${id}-${makeEmotionSafe(v)}`;
    });

    return ts.factory.updateCallExpression(
      node,
      node.expression,
      [],
      [
        ts.factory.createObjectLiteralExpression(
          [
            ts.factory.createPropertyAssignment(
              ts.factory.createIdentifier('id'),
              ts.factory.createStringLiteral(`${prefix}-${id}`)
            ),
            ts.factory.createPropertyAssignment(
              ts.factory.createIdentifier('args'),
              ts.factory.createArrayLiteralExpression(
                vars.map(val => ts.factory.createStringLiteral(val)),
                false
              )
            ),
          ],
          false
        ),
      ]
    );
  }

  return;
};
