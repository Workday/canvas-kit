/**
 * Creates `traversals.ts` from the source typescript.d.ts file for guards and the `find` function
 */

import ts from 'typescript';
import fs from 'fs';
import path from 'path';
import {promisify} from 'util';
import _glob from 'glob';

const glob = promisify(_glob);

///** Create the guard fn
const source = fs
  .readFileSync(path.join(__dirname, '../../../node_modules/typescript/lib/typescript.d.ts'))
  .toString();
const lines = source.split('\n');

const syntaxKinds = source.match(/export enum SyntaxKind \{([^}]+)\}/m);

const pairs = syntaxKinds![1].match(/([a-z]+) = [\d]+/gi);

const guardPairs: string[][] = [];

pairs?.forEach(pair => {
  const matches = pair.match(/([a-z]+) = [0-9]+/i);

  if (matches) {
    const syntaxKind = matches[1];

    const line = lines.findIndex(l => l.includes(`kind: SyntaxKind.${syntaxKind}`));
    if (line > 0) {
      const matches = lines[line - 1].match(/export interface ([a-z]+)/i);

      if (matches) {
        guardPairs.push([syntaxKind, matches[1]]);
      }
    }
  }
});

const guardFns = guardPairs.map(([kind, typeName]) => {
  return `is${kind}(node: ts.Node): node is ts.${typeName} {
    return node.kind === ts.SyntaxKind.${kind};
  }`;
});

const kindMap = guardPairs.map(([kind, typeName]) => {
  return `${kind}: {} as any as ts.${typeName}`;
});

const kindToString = guardPairs.map(([kind]) => {
  return `[ts.SyntaxKind.${kind}]: '${kind}'`;
});

const output = `
// This file is auto-generated from the createTraversals.ts file. Do not modify contents
import ts from 'typescript';

export const guards = {
  ${guardFns.join(',\n  ')}
}

export const kindsMap = {
  ${kindMap.join(',\n  ')}
}

const kindToString = {
  ${kindToString.join(',\n  ')}
}

export function getKindNameFromNode(node: ts.Node): string {
  // @ts-ignore
  return kindToString[node.kind];
}
`;

fs.writeFileSync(path.join(__dirname, 'traversals.ts'), output);
