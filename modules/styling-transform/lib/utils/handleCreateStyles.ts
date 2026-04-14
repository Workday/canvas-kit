import ts from 'typescript';

import {slugify} from '@workday/canvas-kit-styling';

import {createStyleObjectNode, serializeStyles} from './createStyleObjectNode';
import {getVarName} from './getVarName';
import {isImportedFromStyling} from './isImportedFromStyling';
import {parseObjectToStaticValue, parseStyleObjFromType} from './parseObjectToStaticValue';
import {NestedStyleObject, NodeTransformer, TransformerContext} from './types';

export const handleCreateStyles: NodeTransformer = (node, context) => {
  const {checker, prefix} = context;
  /**
   * Check if the node is a call expression that looks like:
   *
   * ```ts
   * createStyles({
   *   // properties
   * })
   * ```
   *
   * It will also make sure the `createStyles` function was imported from
   * `@workday/canvas-kit-styling` to ensure we don't rewrite the AST of code we don't own.
   *
   * This transformation will pre-serialize the style objects and turn them into strings for
   * faster runtime processing in Emotion. The following is an example of the transformation.
   *
   * ```ts
   * // before transformation
   * const myStyles = createStyles({
   *   fontSize: '1rem'
   * })
   *
   * // after transformation
   * const myStyles = createStyles({
   *   name: 'abc123',
   *   styles: 'font-size: 1rem;'
   * })
   * ```
   *
   * The after transformation already serialized the styles and goes through a shortcut process
   * in `@emotion/css` where only the Emotion cache is checked and styles are inserted if the
   * cache key wasn't found.
   */
  if (
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'createStyles' &&
    isImportedFromStyling(node.expression, checker) &&
    node.arguments.length > 0
  ) {
    const cssClassName = `${prefix}-${slugify(getVarName(node.expression))
      .replace('-styles', '')
      .replace('-modifiers', '-')
      .replace('-true', '')}`;

    const newArguments = [...node.arguments].map(arg => {
      // An `ObjectLiteralExpression` is an object like `{foo:'bar'}`:
      // https://ts-ast-viewer.com/#code/MYewdgzgLgBFCmBbADjAvDA3gKBjAZiCAFwwDkARgIYBOZ2AvkA
      if (ts.isObjectLiteralExpression(arg)) {
        const styleObj = parseObjectToStaticValue(arg, context);
        return createStyleReplacementNode(node, styleObj, cssClassName, context);
      }
      // An Identifier is a variable. It could come from anywhere - imports, earlier
      // assignments, etc. The easiest thing to do is to ask the TypeScript type checker what
      // the type representation is and go from there.
      if (ts.isIdentifier(arg)) {
        const type = checker.getTypeAtLocation(arg);

        // `createStyles` accepts strings as class names. If the class name is
        if (type.isStringLiteral() || type.getFlags() & ts.TypeFlags.String) {
          return arg;
        }

        // The type must be a object
        const styleObj = parseStyleObjFromType(type, context);

        return createStyleReplacementNode(node, styleObj, cssClassName, context);
      }
      return arg;
    });

    return ts.factory.updateCallExpression(node, node.expression, [], newArguments);
  }

  return;
};

function createStyleReplacementNode(
  node: ts.Node,
  styleObj: NestedStyleObject,
  className: string,
  context: TransformerContext
) {
  const serialized = serializeStyles(node, styleObj, `.${className}{%s}`, context);

  return createStyleObjectNode(serialized.styles, serialized.name);
}
