import ts from 'typescript';

/**
 * Transformer function type. A transformer will be called by the TypeScript AST transformer visitor
 * from the bottom of the tree to the top (inside-out/leaf first, root last). If a transformer knows
 * how to handle the AST node, a node should be returned. Even if no transformation is desired,
 * returning a node shortcuts processing. The visitor will call all NodeTransformers until a match
 * is met.
 */
export type NodeTransformer = (
  node: ts.Node,
  checker: ts.TypeChecker,
  prefix: string,
  variables: Record<string, string>
) => ts.Node | void;
