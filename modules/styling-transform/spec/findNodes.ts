import ts from 'typescript';

function matchesName(node: ts.Node, name: string) {
  return (
    (ts.isIdentifier(node) && node.text === name) ||
    (node as any)?.name?.text === name || // declarations
    (node as any)?.expression?.text // expressions
  );
}

export function findNodes<N extends (node: ts.Node) => boolean>(
  node: ts.Node,
  name: string = '',
  predicate?: N
): (N extends (node: any) => node is infer S ? S[] : ts.Node[]) | undefined {
  const nodes: ts.Node[] = [];
  if (!node) {
    return nodes as any;
  }

  if ((predicate ? predicate(node) : true) && (name ? matchesName(node, name) : true)) {
    nodes.push(node);
  }

  node.forEachChild(child => {
    // The AST doesn't have parent nodes, but they are required for testing purposes.
    (child as any).parent = node;
    nodes.push(...findNodes(child, name, predicate));
  });

  return nodes as any;
}
