import ts from 'typescript';

import {isImportedFromStyling} from './isImportedFromStyling';
import {parseObjectToStaticValue} from './parseObjectToStaticValue';
import {compileCSS, createStyleObjectNode, serializeStyles} from './createStyleObjectNode';
import {NestedStyleObject, NodeTransformer, TransformerContext} from './types';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';

export const handleInjectGlobal: NodeTransformer = (node, context) => {
  const {checker, getFileName} = context;

  if (
    ts.isTaggedTemplateExpression(node) &&
    ts.isIdentifier(node.tag) &&
    node.tag.text === 'injectGlobal' &&
    isImportedFromStyling(node.tag, checker)
  ) {
    const fileName = getFileName(node.getSourceFile()?.fileName || context.fileName);
    const styleObj = parseNodeToStaticValue(node.template, context).toString(); //?

    return ts.factory.createCallExpression(node.tag, undefined, [
      createStyleReplacementNode(styleObj, fileName, context),
    ]);
  }

  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'injectGlobal' &&
    isImportedFromStyling(node.expression, checker)
  ) {
    if (ts.isObjectLiteralExpression(node.arguments[0])) {
      const fileName = getFileName(node.expression.getSourceFile()?.fileName || context.fileName);
      const styleObj = parseObjectToStaticValue(node.arguments[0], context);

      return ts.factory.updateCallExpression(node, node.expression, undefined, [
        createStyleReplacementNode(styleObj, fileName, context),
      ]);
    }
  }

  return;
};

function createStyleReplacementNode(
  styleObj: NestedStyleObject | string,
  fileName: string,
  {styles}: TransformerContext
) {
  const serialized = serializeStyles(styleObj); //?
  const styleOutput = compileCSS(serialized.styles);
  styles[fileName] = styles[fileName] || [];
  styles[fileName].push(styleOutput);

  return createStyleObjectNode(serialized.styles, serialized.name);
}
