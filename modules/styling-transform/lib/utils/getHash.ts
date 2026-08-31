import crypto from 'node:crypto';
import ts from 'typescript';

import {TransformerContext} from './types';

export function getHash(node: ts.Node, context: TransformerContext) {
  const fileName = context.getFileName(node.getSourceFile().fileName);
  return crypto
    .createHash('md5')
    .update(fileName + node.pos) // file name + position should be unique and repeatable
    .digest('hex')
    .substring(0, 6);
}
