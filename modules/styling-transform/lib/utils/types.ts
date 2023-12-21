import ts from 'typescript';

export type NodeTransformer = (
  node: ts.Node,
  checker: ts.TypeChecker,
  prefix: string,
  variables: Record<string, string>
) => ts.Node | void;
