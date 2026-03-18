import ts from 'typescript';

import {slugify} from '@workday/canvas-kit-styling';

import {getHash} from './getHash';
import {getVarName} from './getVarName';
import {NodeTransformer, TransformerContext} from './types';

export const handleCreateVars: NodeTransformer = (node, context) => {
  /**
   * This will create a variable
   */
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'createVars'
  ) {
    const {id, vars} = addNames(node, context);

    return ts.factory.updateCallExpression(
      node,
      node.expression,
      [],
      [
        ts.factory.createObjectLiteralExpression(
          [
            ts.factory.createPropertyAssignment(
              ts.factory.createIdentifier('id'),
              ts.factory.createStringLiteral(id)
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
   * This happens when names are imported from other files. We don't need to transform this, but
   * we'll need to add names for property parsing.
   */
  if (ts.isObjectLiteralExpression(node)) {
    node.properties.forEach(property => {
      if (
        ts.isPropertyAssignment(property) &&
        ts.isCallExpression(property.initializer) &&
        ts.isIdentifier(property.initializer.expression) &&
        property.initializer.expression.text === 'createVars'
      ) {
        addNames(property.initializer, context);
      }
    });
  }

  return;
};

function addNames(node: ts.CallExpression, context: TransformerContext) {
  const {prefix, names, extractedNames} = context;
  const hash = getHash(node, context);

  const varNamePrefix = getVarName(node);
  const vars = node.arguments
    .map(arg => ts.isStringLiteral(arg) && arg.text)
    .filter(Boolean) as string[];

  vars.forEach(v => {
    const varName = `${varNamePrefix}.${v}`;
    names[varName] = `--${v}-${hash}`;
    extractedNames[names[varName]] = `--${prefix}-${slugify(varName).replace('-vars', '')}`;
  });

  return {id: hash, vars};
}
