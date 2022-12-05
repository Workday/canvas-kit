import ts from 'typescript';
import path from 'path';
import fs from 'fs';

import {createProgramFromSource} from './createProgramFromSource';
import {getConfig} from '../extractDocs';
import {findDocSymbols} from '../findDocSymbols';

describe('extractDocs', () => {
  describe('simple values', () => {
    // const fileName = path.resolve(__dirname, '../fixtures/primitives.ts');
    // const program = ts.createProgram([fileName], {...getConfig(), declaration: false});
    // const docs = findDocSymbols(program, fileName); //?
    // fs.writeFileSync('docs.json', JSON.stringify(docs, null, '  '));

    // it('should have a type of "model"', () => {
    //   // expect(docs).toHaveProperty('type', 'model');
    // });

    it('should find an exported type of string', () => {
      const program = createProgramFromSource('export type Foo = "foo"');
      const docs = findDocSymbols(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo', {kind: 'string', value: 'foo'});
    });

    it('should find an exported type of number', () => {
      const program = createProgramFromSource('export type Foo = 10');
      const docs = findDocSymbols(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo', {kind: 'number', value: 10});
    });

    it('should handle simple type unions', () => {
      const program = createProgramFromSource('export type Foo = "foo" | "bar"');
      const docs = findDocSymbols(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo', {
        kind: 'union',
        value: [
          {kind: 'string', value: 'foo'},
          {kind: 'string', value: 'bar'},
        ],
      });
    });

    it('should handle exported interfaces', () => {
      const program = createProgramFromSource(`
        export interface Foo {
          foo: string
        };
      `);
      const docs = findDocSymbols(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo', {
        kind: 'primitive',
        value: 'string',
      });
    });

    it.only('should handle exported objects', () => {
      const program = createProgramFromSource(`
        export const foo = {
          /** @default 'baz' */
          bar: 'baz1'
        };
      `);
      const docs = findDocSymbols(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'object');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'bar');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo', {
        kind: 'primitive',
        defaultValue: 'baz',
      });
    });

    it('should handle exported objects with "as" keyword', () => {
      const program = createProgramFromSource(`
        export const foo = {
          bar: 'baz' as string
        };
      `);
      const docs = findDocSymbols(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'object');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'bar');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo', {
        kind: 'primitive',
        value: 'string',
      });
    });

    it('should handle exported objects with "as" union', () => {
      const program = createProgramFromSource(`
        export const foo = {
          bar: 'baz' as 'bar' | 'baz'
        };
      `);
      const docs = findDocSymbols(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'object');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'bar');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo', {
        kind: 'union',
        value: [
          {kind: 'string', value: 'bar'},
          {kind: 'string', value: 'baz'},
        ],
      });
    });

    it('should handle exported objects with "as" symbol', () => {
      const program = createProgramFromSource(`
        export const foo = {
          bar: 'baz'
        };
      `);
      const docs = findDocSymbols(program, 'test.ts'); //?
    });

    // it.only('should handle types that include other symbols', () => {
    //   const program = createProgramFromSource(`
    //     export type Foo = "foo";
    //     export type Bar = Foo;
    //   `);
    //   const docs = findDocSymbols(program, 'test.ts'); //?
    //   expect(docs).toHaveProperty('1.name', 'Bar');
    //   expect(docs).toHaveProperty('1.typeInfo', {kind: 'symbol', value: 'Foo'});
    // });
  });
});
