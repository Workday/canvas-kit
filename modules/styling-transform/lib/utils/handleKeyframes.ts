import ts from 'typescript';

import {NodeTransformer} from './types';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';
import {getVarName} from './getVarName';
import {createStyleObjectNode, getStaticCssClassName} from './createStyleObjectNode';
import {isImportedFromStyling} from './isImportedFromStyling';
import {parseObjectToStaticValue} from './parseObjectToStaticValue';

export const handleKeyframes: NodeTransformer = (node, context) => {
  const {checker, keyframes} = context;
  // keyframes`css`
  if (
    ts.isTaggedTemplateExpression(node) &&
    ts.isIdentifier(node.tag) &&
    node.tag.text === 'keyframes' &&
    isImportedFromStyling(node.tag, checker)
  ) {
    // parseNodeToStaticValue can parse templates. Pass it through there to get a single static string
    const styleObjNode = createStyleObjectNode(
      parseNodeToStaticValue(node.template, context),
      '{hash}'
    );

    const identifierName = getVarName(node);
    const name = getStaticCssClassName(styleObjNode);
    keyframes[identifierName] = `animation-${name}`;

    return ts.factory.createCallExpression(ts.factory.createIdentifier('keyframes'), undefined, [
      styleObjNode,
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

      const styleObjNode = createStyleObjectNode(styleObj, '{hash}');

      const identifierName = getVarName(node);
      const name = getStaticCssClassName(styleObjNode);
      keyframes[identifierName] = `animation-${name}`;

      return ts.factory.createCallExpression(ts.factory.createIdentifier('keyframes'), undefined, [
        styleObjNode,
      ]);
    }
  }

  return;
};
