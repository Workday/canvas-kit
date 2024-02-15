import ts from 'typescript';

import {NestedStyleObject, NodeTransformer, TransformerContext} from './types';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';
import {getVarName} from './getVarName';
import {compileCSS, createStyleObjectNode, serializeStyles} from './createStyleObjectNode';
import {isImportedFromStyling} from './isImportedFromStyling';
import {parseObjectToStaticValue} from './parseObjectToStaticValue';

export const handleKeyframes: NodeTransformer = (node, context) => {
  const {checker, getFileName} = context;
  // keyframes`css`
  if (
    ts.isTaggedTemplateExpression(node) &&
    ts.isIdentifier(node.tag) &&
    node.tag.text === 'keyframes' &&
    isImportedFromStyling(node.tag, checker)
  ) {
    const fileName = getFileName(node.getSourceFile()?.fileName || context.fileName);
    // parseNodeToStaticValue can parse templates. Pass it through there to get a single static string
    const styleObj = parseNodeToStaticValue(node.template, context).toString();
    const identifierName = getVarName(node);

    return ts.factory.createCallExpression(node.tag, undefined, [
      createStyleReplacementNode(styleObj, identifierName, fileName, context),
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
      const fileName = getFileName(node.expression.getSourceFile()?.fileName || context.fileName);
      const styleObj = parseObjectToStaticValue(node.arguments[0], context);
      const identifierName = getVarName(node);

      return ts.factory.updateCallExpression(node, node.expression, undefined, [
        createStyleReplacementNode(styleObj, identifierName, fileName, context),
      ]);
    }
  }

  return;
};

function createStyleReplacementNode(
  styleObj: NestedStyleObject | string,
  identifierName: string,
  fileName: string,
  {styles, keyframes}: TransformerContext
) {
  const serialized = serializeStyles(styleObj);
  const animationName = `animation-${serialized.name}`;
  const styleOutput = compileCSS(`@keyframes ${animationName}{${serialized.styles}}`);
  styles[fileName] = styles[fileName] || [];
  styles[fileName].push(styleOutput);

  keyframes[identifierName] = animationName;

  return createStyleObjectNode(serialized.styles, serialized.name);
}
