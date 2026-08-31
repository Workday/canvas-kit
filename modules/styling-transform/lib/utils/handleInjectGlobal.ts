import ts from 'typescript';

import {createStyleObjectNode, serializeStyles} from './createStyleObjectNode';
import {isImportedFromStyling} from './isImportedFromStyling';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';
import {parseObjectToStaticValue} from './parseObjectToStaticValue';
import {NestedStyleObject, NodeTransformer, TransformerContext} from './types';

export const handleInjectGlobal: NodeTransformer = (node, context) => {
  const {checker} = context;

  if (
    ts.isTaggedTemplateExpression(node) &&
    ts.isIdentifier(node.tag) &&
    node.tag.text === 'injectGlobal' &&
    isImportedFromStyling(node.tag, checker)
  ) {
    const styleObj = parseNodeToStaticValue(node.template, context).toString();

    return ts.factory.createCallExpression(node.tag, undefined, [
      createStyleReplacementNode(node, styleObj, context),
    ]);
  }

  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'injectGlobal' &&
    isImportedFromStyling(node.expression, checker)
  ) {
    if (ts.isObjectLiteralExpression(node.arguments[0])) {
      const styleObj = parseObjectToStaticValue(node.arguments[0], context);

      return ts.factory.updateCallExpression(node, node.expression, undefined, [
        createStyleReplacementNode(node, styleObj, context),
      ]);
    }
  }

  return;
};

function createStyleReplacementNode(
  node: ts.Node,
  styleObj: NestedStyleObject | string,
  context: TransformerContext
) {
  const serialized = serializeStyles(node, styleObj, '%s', context);

  return createStyleObjectNode(serialized.styles, serialized.name);
}
