import ts from 'typescript';
import {guards, kindsMap} from './traversals';

type KindMap = typeof kindsMap;
type Guards = typeof guards;

export interface API extends KindMap, Guards {
  (node: ts.Node): {
    find<K extends keyof KindMap>(kind: K, predicate?: (node: ts.Node) => boolean): KindMap[K][];
  };
}
function find(node: ts.Node, predicate: (node: ts.Node) => boolean): ts.Node[] {
  const nodes: ts.Node[] = [];
  if (predicate(node)) {
    nodes.push(node);
  }

  node.forEachChild(n => {
    nodes.push(...find(n, predicate));
  });

  return nodes;
}

let t: API;

// @ts-ignore
t = node => {
  return {
    find(kind, predicate = n => true) {
      return find(node, n => (guards as any)[`is${kind}`](n) && predicate(n as any)) as any;
    },
  };
};

Object.keys(guards).forEach(key => {
  // @ts-ignore
  t[key] = guards[key];
});

export default t;
