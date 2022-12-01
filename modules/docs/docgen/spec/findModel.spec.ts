import ts from 'typescript';
import path from 'path';

import {getConfig} from '../extractDocs';
import {findModel} from '../findModel';

describe('findModel', () => {
  describe('fixtures/useBaseModel.ts', () => {
    const fileName = path.resolve(__dirname, '../fixtures/useBaseModel.ts');
    const program = ts.createProgram([fileName], {...getConfig(), declaration: false});
    const docs = findModel(program, fileName); //?
    const model = docs.find(d => d.name === 'DisclosureModel');

    it('should have a type of "model"', () => {
      expect(model).toHaveProperty('type', 'model');
    });

    it('should find the model name', () => {
      expect(model).toHaveProperty('name', 'DisclosureModel');
    });
  });
});
