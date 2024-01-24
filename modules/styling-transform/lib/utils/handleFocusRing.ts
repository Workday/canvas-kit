import ts from 'typescript';

import {base, brand} from '@workday/canvas-tokens-web';

import {NodeTransformer} from './types';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';

export const handleFocusRing: NodeTransformer = (node, context) => {
  // { ...focusRing() }
  /**
   * A spread assignment looks like:
   *
   * ```ts
   * {
   *   ...styles
   * }
   * ```
   *
   * https://ts-ast-viewer.com/#code/MYewdgzgLgBFCmBbADjAvDA3gMxCAXDAOQBGAhgE5EC+AUKJLAigEzpYB0Xzy1QA
   */
  if (ts.isSpreadAssignment(node)) {
    // Detect `focusRing` calls. This is temporary until we figure out a better way to do focus
    // rings that doesn't require a special entry in the transform function.
    //
    // TODO: implement a fully working type resolver for CSS variables or remove support for them an
    // remove all uses of `focusRing` from new styling code
    if (
      ts.isCallExpression(node.expression) &&
      ts.isIdentifier(node.expression.expression) &&
      node.expression.expression.text === 'focusRing'
    ) {
      const argumentObject = node.expression.arguments[0];
      // defaults
      const defaults = {
        width: ts.factory.createStringLiteral('2px') as ts.Expression,
        separation: ts.factory.createStringLiteral('0px') as ts.Expression,
        inset: ts.factory.createIdentifier('undefined') as ts.Expression,
        innerColor: ts.factory.createStringLiteral(base.frenchVanilla100) as ts.Expression,
        outerColor: ts.factory.createStringLiteral(brand.common.focusOutline) as ts.Expression,
      };
      if (argumentObject && ts.isObjectLiteralExpression(argumentObject)) {
        argumentObject.properties.forEach(property => {
          if (ts.isPropertyAssignment(property) && ts.isIdentifier(property.name)) {
            defaults[property.name.text as keyof typeof defaults] = property.initializer;
          }
        });
      }

      const inset = parseNodeToStaticValue(defaults.inset, context);

      let boxShadow: ts.TemplateExpression;
      switch (inset) {
        case 'outer':
          boxShadow = createTemplateExpression(
            'inset 0 0 0 ',
            defaults.separation,
            ' ',
            defaults.outerColor,
            ' inset 0 0 0 calc(',
            defaults.width,
            ' + ',
            defaults.separation,
            ') ',
            defaults.innerColor
          );
          break;

        case 'inner':
          boxShadow = createTemplateExpression(
            'inset 0 0 0 ',
            defaults.separation,
            ' ',
            defaults.innerColor,
            ', 0 0 0 ',
            defaults.width,
            ' ',
            defaults.outerColor
          );
          break;

        default:
          boxShadow = createTemplateExpression(
            '0 0 0 ',
            defaults.separation,
            ' ',
            defaults.innerColor,
            ', 0 0 0 calc(',
            defaults.width,
            ' + ',
            defaults.separation,
            ') ',
            defaults.outerColor
          );
          break;
      }

      return ts.factory.createSpreadAssignment(
        ts.factory.createObjectLiteralExpression(
          [
            ts.factory.createPropertyAssignment(
              ts.factory.createIdentifier('boxShadow'),
              boxShadow
            ),
          ],
          false
        )
      );
    }
  }

  return;
};

function createTemplateExpression(head: string, ...args: (string | ts.Expression)[]) {
  const headNode = ts.factory.createTemplateHead(head);
  const spanNodes = args.reduce((result, value, index) => {
    if (typeof value !== 'string') {
      const literal =
        index === args.length - 1
          ? ts.factory.createTemplateTail('')
          : index === args.length - 2
          ? ts.factory.createTemplateTail(args[index + 1] as string)
          : ts.factory.createTemplateMiddle(args[index + 1] as string);
      result.push(ts.factory.createTemplateSpan(value, literal));
    }
    return result;
  }, [] as ts.TemplateSpan[]);

  return ts.factory.createTemplateExpression(headNode, spanNodes);
}
