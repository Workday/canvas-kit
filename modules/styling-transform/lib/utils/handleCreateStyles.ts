import ts from 'typescript';

import {slugify} from '@workday/canvas-kit-styling';

import {getVarName} from './getVarName';
import {makeEmotionSafe} from './makeEmotionSafe';
import {parseObjectToStaticValue, parseStyleObjFromType} from './parseObjectToStaticValue';
import {createStyleObjectNode} from './createStyleObjectNode';

export function handleCreateStyles(
  node: ts.Node,
  checker: ts.TypeChecker,
  prefix: string,
  variables: Record<string, string>
): ts.Node | void {
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
    node.arguments.length > 0
  ) {
    const newArguments = [...node.arguments].map(arg => {
      // An `ObjectLiteralExpression` is an object like `{foo:'bar'}`:
      // https://ts-ast-viewer.com/#code/MYewdgzgLgBFCmBbADjAvDA3gKBjAZiCAFwwDkARgIYBOZ2AvkA
      if (ts.isObjectLiteralExpression(arg)) {
        const styleObj = parseObjectToStaticValue(arg, checker, prefix, variables);

        return createStyleObjectNode(styleObj);
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
        const styleObj = parseStyleObjFromType(type, checker, prefix, variables);

        return createStyleObjectNode(styleObj);
      }
      return arg;
    });

    newArguments.forEach(argument => {
      // TypeScript isn't expecting us to mutate arguments arguments and when emitting will
      // try to do something where it checks the `parent` node of the argument. Using
      // `ts.factory.create*`, the `parent` is `undefined` and this check will throw an error.
      // In order to get past this error, we manually update the `parent` node of each
      // argument to reference the existing call expression. This allows TypeScript to fully
      // type check and/or emit.
      (argument as any).parent = node;
    });

    /**
     * We're not supposed to mutate arguments since it is supposed to be read-only. But, if I
     * return a new callExpression, there is no parent and it is no longer linked to the
     * import module. This causes incorrect code when the module export type is `commonjs`.
     * For example:
     *
     * ```ts
     * // with new callExpression
     * const canvas_kit_styling_1 = require(...)
     *
     * createStyles({...})
     *
     * // if we instead mutate arguments
     * const canvas_kit_styling_1 = require(...)
     *
     * canvas_kit_styling_1.createStyles({...})
     * ```
     *
     * My best guess as to why it fails when creating a new callExpression is the node's
     * symbol declaration link gets lost. TypeScript then has no idea `createStyles` comes
     * from an `ImportDeclaration` declaration node and when emitting `commonjs`, it doesn't
     * prefix with the `canvas_kit_styling_1`. This is hacky, but the only thing that works
     * correctly.
     */
    (node.arguments as any) = newArguments;

    return node;
  }
}
