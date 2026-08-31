import ts from 'typescript';

import {createStyleObjectNode, serializeStyles} from './createStyleObjectNode';
import {getVarName} from './getVarName';
import {isImportedFromStyling} from './isImportedFromStyling';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';
import {parseObjectToStaticValue} from './parseObjectToStaticValue';
import {NestedStyleObject, NodeTransformer, TransformerContext} from './types';

export const handleKeyframes: NodeTransformer = (node, context) => {
  const {checker} = context;
  // keyframes`css`
  if (
    ts.isTaggedTemplateExpression(node) &&
    ts.isIdentifier(node.tag) &&
    node.tag.text === 'keyframes' &&
    isImportedFromStyling(node.tag, checker)
  ) {
    // parseNodeToStaticValue can parse templates. Pass it through there to get a single static string
    const styleObj = parseNodeToStaticValue(node.template, context).toString();
    const identifierName = getVarName(node);

    return ts.factory.createCallExpression(node.tag, undefined, [
      createStyleReplacementNode(node, styleObj, identifierName, context),
    ]);
  }

  // keyframes({})
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'keyframes' &&
    isImportedFromStyling(node.expression, checker)
  ) {
    if (ts.isObjectLiteralExpression(node.arguments[0])) {
      const styleObj = parseObjectToStaticValue(node.arguments[0], context);
      const identifierName = getVarName(node);

      return ts.factory.updateCallExpression(node, node.expression, undefined, [
        createStyleReplacementNode(node, styleObj, identifierName, context),
      ]);
    }
  }

  return;
};

function createStyleReplacementNode(
  node: ts.Node,
  styleObj: NestedStyleObject | string,
  identifierName: string,
  context: TransformerContext
) {
  const serialized = serializeStyles(node, styleObj, `@keyframes animation-%n{%s}`, context);
  const animationName = `animation-${serialized.name}`;

  context.names[identifierName] = animationName;

  return createStyleObjectNode(serialized.styles, serialized.name);
}
