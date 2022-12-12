import {createProgramFromSource} from './createProgramFromSource';
import {findDocs} from '../findDocs';

describe('extractDocs', () => {
  describe('simple values', () => {
    it('should find an exported type of string', () => {
      const program = createProgramFromSource('export type Foo = "foo"');
      const docs = findDocs(program, 'test.ts'); //?

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('0.typeInfo.value', {kind: 'string', value: 'foo'});
    });

    it('should find an exported type of number', () => {
      const program = createProgramFromSource('export type Foo = 10');
      const docs = findDocs(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('0.typeInfo.value', {kind: 'number', value: 10});
    });

    it('should find an exported type of array', () => {
      const program = createProgramFromSource('export type Foo = number[]');
      const docs = findDocs(program, 'test.ts'); //?

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('0.typeInfo.value.kind', 'array');
      expect(docs).toHaveProperty('0.typeInfo.value.value', {kind: 'primitive', value: 'number'});
    });

    it('should find an exported type of a parenthesis type', () => {
      const program = createProgramFromSource('export type Foo = (number)');
      const docs = findDocs(program, 'test.ts'); //?

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('0.typeInfo.value.kind', 'parenthesis');
      expect(docs).toHaveProperty('0.typeInfo.value.value', {kind: 'primitive', value: 'number'});
    });

    it('should find an exported type of an exported IndexAccessType', () => {
      const program = createProgramFromSource(`
        export type Foo = Bar['bar']
        export type Bar = {
          bar: string
        }
      `);
      const docs = findDocs(program, 'test.ts'); //?

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('0.typeInfo.value.kind', 'indexedAccess');
      expect(docs).toHaveProperty('0.typeInfo.value.object.kind', 'symbol');
      expect(docs).toHaveProperty('0.typeInfo.value.object.name', 'Bar');
      expect(docs).toHaveProperty('0.typeInfo.value.index.kind', 'string');
      expect(docs).toHaveProperty('0.typeInfo.value.index.value', 'bar');
    });

    it('should find an exported type of an IndexAccessType exported from another file', () => {
      const program = createProgramFromSource([
        {
          filename: 'test.ts',
          source: `
            import {Bar} from './bar'
            export type Foo = Bar['bar']
          `,
        },
        {
          filename: 'bar.ts',
          source: `
            export type Bar = {
              bar: string
            }
          `,
        },
      ]);
      const docs = findDocs(program, 'test.ts'); //?

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('0.typeInfo.value.kind', 'indexedAccess');
      expect(docs).toHaveProperty('0.typeInfo.value.object.kind', 'symbol');
      expect(docs).toHaveProperty('0.typeInfo.value.object.name', 'Bar');
      expect(docs).toHaveProperty('0.typeInfo.value.index.kind', 'string');
      expect(docs).toHaveProperty('0.typeInfo.value.index.value', 'bar');
    });

    it('should find an exported type of a variable with a forced type', () => {
      const program = createProgramFromSource(`
        export const foo: Foo[] = [];

        export type Foo = {
          foo: string
        }
      `);
      const docs = findDocs(program, 'test.ts'); //?

      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'array');
      expect(docs).toHaveProperty('0.typeInfo.value.kind', 'symbol');
      expect(docs).toHaveProperty('0.typeInfo.value.name', 'Foo');
    });

    it('should find an exported type of a variable with an imported forced type', () => {
      const program = createProgramFromSource([
        {
          filename: 'test.ts',
          source: `
            import {Bar} from './bar'
            export const foo: Bar[] = [];
          `,
        },
        {
          filename: 'bar.ts',
          source: `
            export type Bar = {
              bar: string
            }
          `,
        },
      ]);
      const docs = findDocs(program, 'test.ts'); //?

      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'array');
      expect(docs).toHaveProperty('0.typeInfo.value.kind', 'symbol');
      expect(docs).toHaveProperty('0.typeInfo.value.name', 'Bar');
    });

    it('should add jsdoc to export declarations', () => {
      const program = createProgramFromSource(`
        /**
         * Foo is a type
         *
         * @example
         * // this is an example
         * const foo: Foo = 'bar';
         */
        export type Foo = string
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.description', 'Foo is a type');
      expect(docs).toHaveProperty('0.tags', {
        example: expect.stringContaining('// this is an example'),
      });
    });

    it('should handle simple type unions', () => {
      const program = createProgramFromSource('export type Foo = "foo" | "bar"');
      const docs = findDocs(program, 'test.ts'); //?

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('0.typeInfo.value', {
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
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo', {
        kind: 'primitive',
        value: 'string',
      });
    });

    it('should handle exported interfaces with typeof type references', () => {
      const program = createProgramFromSource(`
        export interface Foo {
          foo: typeof bar
        };

        const bar = 'baz'
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo', {
        kind: 'string',
        value: 'baz',
      });
    });

    it('should handle exported interfaces with exported typeof type references', () => {
      const program = createProgramFromSource(`
        export interface Foo {
          foo: typeof bar
        };

        export const bar = 'baz'
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo', {
        kind: 'string',
        value: 'baz',
      });
    });

    it('should handle exported interfaces with a generic', () => {
      const program = createProgramFromSource(`
        export interface Foo<T> {
          foo: T
        };
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.name', 'T');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.kind', 'generic');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.name', 'T');
    });

    it('should handle exported interfaces with an array', () => {
      const program = createProgramFromSource(`
        export interface Foo {
          foo: number[]
        };
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.kind', 'array');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.value', {
        kind: 'primitive',
        value: 'number',
      });
    });

    it('should handle exported interfaces with a generic and "any" default value', () => {
      const program = createProgramFromSource(`
        export interface Foo<T = any> {
          foo: T
        };
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.name', 'T');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.defaultValue', {
        kind: 'primitive',
        value: 'any',
      });
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.kind', 'generic');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.name', 'T');
    });

    it('should handle exported object types', () => {
      const program = createProgramFromSource(`
        export type Foo = {
          foo: string
        }
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('0.typeInfo.value.kind', 'typeLiteral');
      expect(docs).toHaveProperty('0.typeInfo.value.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.value.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.value.properties.0.typeInfo.kind', 'primitive');
      expect(docs).toHaveProperty('0.typeInfo.value.properties.0.typeInfo.value', 'string');
    });

    it('should handle exported object types with a generic and "any" default value', () => {
      const program = createProgramFromSource(`
        export type Foo<T = any> = {
          foo: T
        }
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.name', 'T');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.defaultValue', {
        kind: 'primitive',
        value: 'any',
      });
      expect(docs).toHaveProperty('0.typeInfo.value.kind', 'typeLiteral');
      expect(docs).toHaveProperty('0.typeInfo.value.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.value.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.value.properties.0.typeInfo.kind', 'generic');
      expect(docs).toHaveProperty('0.typeInfo.value.properties.0.typeInfo.name', 'T');
    });

    it('should handle exported Record types', () => {
      const program = createProgramFromSource(`
        export type Foo = Record<string, string>
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('0.typeInfo.value.kind', 'external');
      expect(docs).toHaveProperty('0.typeInfo.value.typeParameters.0.kind', 'primitive');
      expect(docs).toHaveProperty('0.typeInfo.value.typeParameters.0.value', 'string');
      expect(docs).toHaveProperty('0.typeInfo.value.typeParameters.1.kind', 'primitive');
      expect(docs).toHaveProperty('0.typeInfo.value.typeParameters.1.value', 'string');
    });

    it('should handle exported interfaces with an index signature', () => {
      const program = createProgramFromSource(`
        export interface PropMap {
          foo: string
          [key: string | number]: string
        }
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'PropMap');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');

      // TODO: Index Signature...
    });

    it('should handle exported interfaces with a generic with constraint and defaults', () => {
      const program = createProgramFromSource(`
        export interface Foo<T extends string = 'foo'> {
          foo: T
        };
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.name', 'T');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.defaultValue', {
        kind: 'string',
        value: 'foo',
      });
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.required', false);
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
    });

    it('should handle exported interfaces with a generic with constraint and defaults', () => {
      const program = createProgramFromSource(`
        export interface Foo<T> {
          foo: Bar<T>
        };

        export type Bar<T> = {value: T}
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.name', 'T');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.kind', 'symbol');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.name', 'Bar');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.typeParameters', [
        {kind: 'generic', name: 'T'},
      ]);
    });

    it('should handle exported interfaces with a union type involving generics', () => {
      const program = createProgramFromSource(`
        export interface Foo<T> {
          foo: T | Bar<T>
        };
        export type Bar<T> = {value: T}
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.kind', 'union');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.value.0', {
        kind: 'generic',
        name: 'T',
      });
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.value.1', {
        kind: 'symbol',
        name: 'Bar',
        typeParameters: [{kind: 'generic', name: 'T'}],
      });
    });

    it('should handle exported interfaces with external links', () => {
      const program = createProgramFromSource(`
        export interface Foo<T> {
          foo: Promise<T>
        };
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'interface');
      expect(docs).toHaveProperty('0.typeInfo.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'member');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.kind', 'external');
      expect(docs).toHaveProperty(
        '0.typeInfo.properties.0.typeInfo.url',
        expect.stringContaining('')
      );
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.typeParameters', [
        {kind: 'generic', name: 'T'},
      ]);
    });

    it('should handle exported objects', () => {
      const program = createProgramFromSource(`
        export const foo = {
          bar: 'baz'
        };
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'object');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'bar');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo', {
        kind: 'primitive',
        value: 'string',
      });
      expect(docs).toHaveProperty('0.typeInfo.properties.0.defaultValue', {
        kind: 'string',
        value: 'baz',
      });
    });

    it('should handle exported objects with "as" keyword', () => {
      const program = createProgramFromSource(`
        export const foo = {
          bar: 'baz' as string
        };
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'object');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'bar');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo', {
        kind: 'primitive',
        value: 'string',
      });
      expect(docs).toHaveProperty('0.typeInfo.properties.0.defaultValue', {
        kind: 'string',
        value: 'baz',
      });
    });

    it('should handle exported objects with "as" union', () => {
      const program = createProgramFromSource(`
        export const foo = {
          bar: 'bar' as 'bar' | 'baz'
        };
      `);
      const docs = findDocs(program, 'test.ts'); //?
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
      expect(docs).toHaveProperty('0.typeInfo.properties.0.defaultValue', {
        kind: 'string',
        value: 'bar',
      });
    });

    it('should handle exported objects with method declarations', () => {
      const program = createProgramFromSource(`
        export const foo = {
          getBar(input: string): string {
            return 'bar';
          }
        }
      `);
      const docs = findDocs(program, 'test.ts'); //?

      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'object');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'getBar');
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.kind', 'function');
      expect(docs).toHaveProperty(
        '0.typeInfo.properties.0.typeInfo.parameters.0.kind',
        'parameter'
      );
      expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo.parameters.0.name', 'input');
      expect(docs).toHaveProperty(
        '0.typeInfo.properties.0.typeInfo.parameters.0.typeInfo.kind',
        'primitive'
      );
      expect(docs).toHaveProperty(
        '0.typeInfo.properties.0.typeInfo.parameters.0.typeInfo.value',
        'string'
      );
    });

    it('should handle exported objects with method declarations', () => {
      const program = createProgramFromSource(`
        import ts from "typescript";

        export const foo: ts.Node = {}
      `);
      const docs = findDocs(program, 'test.ts'); //?

      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'qualifiedName');
      expect(docs).toHaveProperty('0.typeInfo.left.kind', 'symbol');
      expect(docs).toHaveProperty('0.typeInfo.left.name', 'ts');
      expect(docs).toHaveProperty('0.typeInfo.right.kind', 'string');
      expect(docs).toHaveProperty('0.typeInfo.right.value', 'Node');
    });

    it('should handle types that include other symbols when that symbol is exported', () => {
      const program = createProgramFromSource(`
        export type Foo = "foo";
        export type Bar = Foo;
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('1.name', 'Bar');
      expect(docs).toHaveProperty('1.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('1.typeInfo.value.kind', 'symbol');
      expect(docs).toHaveProperty('1.typeInfo.value.name', 'Foo');
    });

    // it.only('should handle types with generics', () => {
    //   const program = createProgramFromSource(`
    //     export type MaybePromise<T> = T | Promise<T>;
    //   `);
    //   const docs = findDocs(program, 'test.ts'); //?
    //   expect(docs).toHaveProperty('1.name', 'Bar');
    //   expect(docs).toHaveProperty('1.typeInfo', {kind: 'symbol', value: 'Foo'});
    // });

    it('should handle types that include other symbols when that symbol is NOT exported', () => {
      const program = createProgramFromSource(`
        type Foo = 'foo';
        export type Bar = Foo;
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'Bar');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'type');
      expect(docs).toHaveProperty('0.typeInfo.value.kind', 'string');
      expect(docs).toHaveProperty('0.typeInfo.value.value', 'foo');
    });

    it('should handle functions with required parameters', () => {
      const program = createProgramFromSource(`
        export function myFoo(input: string): boolean {
          return false
        }
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'myFoo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'function');
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.defaultValue', undefined);
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.required', true);
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.typeInfo', {
        kind: 'primitive',
        value: 'string',
      });
    });

    it('should handle functions with optional parameters', () => {
      const program = createProgramFromSource(`
        /** jsdoc for myFoo
         * @deprecated
         * @example
         * // my example
         */
        export function myFoo(input?: string): boolean {
          return false
        }
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'myFoo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'function');
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.defaultValue', undefined);
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.required', false);
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.typeInfo', {
        kind: 'primitive',
        value: 'string',
      });
    });

    it('should handle functions with optional parameters', () => {
      const program = createProgramFromSource(`
        export function myFoo(input = 'foo'): boolean {
          return false
        }
      `);
      const docs = findDocs(program, 'test.ts'); //?
      expect(docs).toHaveProperty('0.name', 'myFoo');
      expect(docs).toHaveProperty('0.typeInfo.kind', 'function');
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.defaultValue', {
        kind: 'string',
        value: 'foo',
      });
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.required', false);
      expect(docs).toHaveProperty('0.typeInfo.parameters.0.typeInfo', {
        kind: 'primitive',
        value: 'string',
      });
    });
  });

  it('should handle arrow functions with required parameters', () => {
    const program = createProgramFromSource(`
      export const myFoo = (input: string): boolean => {
        return false
      }
    `);
    const docs = findDocs(program, 'test.ts'); //?
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.typeInfo.kind', 'function');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.name', 'input');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.defaultValue', undefined);
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.required', true);
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.typeInfo', {
      kind: 'primitive',
      value: 'string',
    });
  });

  it('should handle arrow functions that are typed with required parameters', () => {
    const program = createProgramFromSource(`
      export const myFoo: (input: string) => boolean = (input) => {
        return false
      }
    `);
    const docs = findDocs(program, 'test.ts'); //?
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.typeInfo.kind', 'function');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.name', 'input');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.defaultValue', undefined);
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.required', true);
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.typeInfo', {
      kind: 'primitive',
      value: 'string',
    });
  });

  it('should handle functions with destructured parameters', () => {
    const program = createProgramFromSource(`
      export function myFoo(input: {foo: string; bar: string;}): boolean {
        return false
      }
    `);
    const docs = findDocs(program, 'test.ts'); //?
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.typeInfo.kind', 'function');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.name', 'input');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.defaultValue', undefined);
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.required', true);
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.typeInfo.kind', 'typeLiteral');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.typeInfo.properties.0.kind', 'member');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.typeInfo.properties.0.name', 'foo');
    expect(docs).toHaveProperty(
      '0.typeInfo.parameters.0.typeInfo.properties.0.typeInfo.kind',
      'primitive'
    );
    expect(docs).toHaveProperty(
      '0.typeInfo.parameters.0.typeInfo.properties.0.typeInfo.value',
      'string'
    );
  });

  it.only('should handle functions with destructured parameters', () => {
    const program = createProgramFromSource(`
      export function myFoo(input: Props): boolean {
        return false
      }
      export interface Props {
        foo: string
      }
    `);
    const docs = findDocs(program, 'test.ts'); //?
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.typeInfo.kind', 'function');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.name', 'input');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.defaultValue', undefined);
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.required', true);
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.typeInfo.kind', 'symbol');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.typeInfo.name', 'Props');
    expect(docs).toHaveProperty('0.typeInfo.parameters.0.declarations', 'Props');
  });

  it('should add jsdoc to object properties', () => {
    const program = createProgramFromSource(`
    export const foo = {
      /**
       * bar property
       *
       *
       */
      bar: 'baz'
    };
  `);
    const docs = findDocs(program, 'test.ts'); //?
    expect(docs).toHaveProperty('0.name', 'foo');
    expect(docs).toHaveProperty('0.typeInfo.kind', 'object');
    expect(docs).toHaveProperty('0.typeInfo.properties.0.name', 'bar');
    expect(docs).toHaveProperty('0.typeInfo.properties.0.typeInfo', {
      kind: 'primitive',
      value: 'string',
    });
    expect(docs).toHaveProperty('0.typeInfo.properties.0.defaultValue', {
      kind: 'string',
      value: 'baz',
    });
  });
});
