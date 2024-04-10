import ts from 'typescript';

import {slugify} from '@workday/canvas-kit-styling';

import {getVarName} from './getVarName';
import {makeEmotionSafe} from './makeEmotionSafe';
import {NodeTransformer, TransformerContext} from './types';

export const handleCreateVars: NodeTransformer = (node, context) => {
  const {prefix} = context;

  /**
   * This will create a variable
   */
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'createVars'
  ) {
    const {id, vars} = addVars(node, context);

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

  /**
   * Check to see if this node is an ObjectLiteralExpression with properties with `createVars`
   * values.
   *
   * ```ts
   * const foo = {
   *   bar: createVars('color')
   * }
   * ```
   *
   * This happens when variables are imported from other files. We don't need to transform this, but
   * we'll need to add variables for property parsing.
   */
  if (ts.isObjectLiteralExpression(node)) {
    node.properties.forEach(property => {
      if (
        ts.isPropertyAssignment(property) &&
        ts.isCallExpression(property.initializer) &&
        ts.isIdentifier(property.initializer.expression) &&
        property.initializer.expression.text === 'createVars'
      ) {
        addVars(property.initializer, context);
      }
    });
  }

  return;
};

function addVars(node: ts.CallExpression, context: TransformerContext) {
  const {prefix, variables} = context;

  const id = slugify(getVarName(node)).replace('-vars', '');
  const vars = node.arguments
    .map(arg => ts.isStringLiteral(arg) && arg.text)
    .filter(Boolean) as string[];

  vars.forEach(v => {
    variables[`${id}-${makeEmotionSafe(v)}`] = `--${prefix}-${id}-${makeEmotionSafe(v)}`;
  });

  return {id, vars};
}
