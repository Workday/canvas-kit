import ts from 'typescript';
import path from 'path';

import {getConfig} from '../extractDocs';
import {findDocSymbols} from '../findDocSymbols';

describe('findModel', () => {
  describe('fixtures/useBaseModel.ts', () => {
    const fileName = path.resolve(__dirname, '../fixtures/primitives.ts');
    const program = ts.createProgram([fileName], {...getConfig(), declaration: false});
    const docs = findDocSymbols(program, fileName); //?

    it('should have a type of "model"', () => {
      expect(docs).toHaveProperty('type', 'model');
    });
  });
});
