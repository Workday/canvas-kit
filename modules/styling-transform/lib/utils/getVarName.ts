import ts from 'typescript';

/**
 * This function returns a calculated name of a node by walking up the AST and looking for nodes
 * with a `name` property that has an `Identifier` node type. The result is dash-case. This is
 * useful for automatically generating variable names based on a TS file.
 *
 * In the following example, the `baz` node would have a name of `foo-bar-baz`.
 * ```ts
 * const foo = {
 *   bar: {
 *     baz: ''
 *   }
 * }
 * ```
 */
export function getVarName(node: ts.Node, parts: string[] = []): string {
  // base case. Join all the parts
  if (!node.parent || node.kind === ts.SyntaxKind.VariableStatement) {
    return parts.join('-');
  }

  // Any node with a `name` property that is an identifier can add to the var name
  if (
    (node as any).name &&
    (ts.isIdentifier((node as any).name) || ts.isStringLiteral((node as any).name))
  ) {
    return getVarName(node.parent, [(node as any).name.text, ...parts]);
  }

  return getVarName(node.parent, parts);
}
