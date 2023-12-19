import ts from 'typescript';

import {slugify} from '@workday/canvas-kit-styling';

import {getVarName} from './getVarName';
import {makeEmotionSafe} from './makeEmotionSafe';

export function handleCreateVars(
  node: ts.Node,
  checker: ts.TypeChecker,
  prefix: string,
  vars: Record<string, string>
): ts.Node | void {
  /**
   * This will create a variable
   */
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'createVars'
  ) {
    const id = slugify(getVarName(node));
    const variables = node.arguments
      .map(arg => ts.isStringLiteral(arg) && arg.text)
      .filter(Boolean) as string[];

    variables.forEach(v => {
      vars[`${id}-${makeEmotionSafe(v)}`] = `--${prefix}-${id}-${makeEmotionSafe(v)}`;
    });

    return ts.factory.createCallExpression(
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
                variables.map(val => ts.factory.createStringLiteral(val)),
                false
              )
            ),
          ],
          false
        ),
      ]
    );
  }
}
