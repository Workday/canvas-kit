import {createProgramFromSource} from './createProgramFromSource';
import {parse} from '../docParser';

describe('docParser', () => {
  describe('simple values', () => {
    it('should find an exported type of string', () => {
      const program = createProgramFromSource('export type Foo = never');
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.value', 'never');
    });

    it('should find an exported type of string', () => {
      const program = createProgramFromSource('export type Foo = "foo"');
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value', {kind: 'string', value: 'foo'});
    });

    it('should find an exported type of number', () => {
      const program = createProgramFromSource('export type Foo = 10');
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value', {kind: 'number', value: 10});
    });

    it('should find an exported type of a template string', () => {
      const program = createProgramFromSource("export type Foo = `${'a'|'b'}.${'c'|'d'}`");
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'union');
      expect(docs).toHaveProperty('0.type.value.value.0.kind', 'string');
      expect(docs).toHaveProperty('0.type.value.value.0.value', 'a.c');
      expect(docs).toHaveProperty('0.type.value.value.1.kind', 'string');
      expect(docs).toHaveProperty('0.type.value.value.1.value', 'a.d');
      expect(docs).toHaveProperty('0.type.value.value.2.kind', 'string');
      expect(docs).toHaveProperty('0.type.value.value.2.value', 'b.c');
      expect(docs).toHaveProperty('0.type.value.value.3.kind', 'string');
      expect(docs).toHaveProperty('0.type.value.value.3.value', 'b.d');
    });

    it('should find an exported type of array', () => {
      const program = createProgramFromSource('export type Foo = number[]');
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'array');
      expect(docs).toHaveProperty('0.type.value.value', {kind: 'primitive', value: 'number'});
    });

    it('should find an exported type of a parenthesis type', () => {
      const program = createProgramFromSource('export type Foo = (number)');
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'parenthesis');
      expect(docs).toHaveProperty('0.type.value.value.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.value.value', 'number');
    });

    it('should find an exported type of a function type', () => {
      const program = createProgramFromSource(`
        export type Foo = (input: number) => void;
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'function');
      expect(docs).toHaveProperty('0.type.value.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.type.value.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.type.value.parameters.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.parameters.0.type.value', 'number');
      expect(docs).toHaveProperty('0.type.value.returnType.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.returnType.value', 'void');
    });

    it('should find an exported type of a function return type', () => {
      const program = createProgramFromSource(`
        export type Foo = (input: number) => Bar;

        export interface Bar {
          foo: string
        };
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'function');
      expect(docs).toHaveProperty('0.type.value.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.type.value.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.type.value.parameters.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.parameters.0.type.value', 'number');
      expect(docs).toHaveProperty('0.type.value.returnType.kind', 'symbol');
      expect(docs).toHaveProperty('0.type.value.returnType.name', 'Bar');
    });

    it('should find an external type of a function return type', () => {
      const program = createProgramFromSource(`
        export type Foo = (input: number) => Element;
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'function');
      expect(docs).toHaveProperty('0.type.value.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.type.value.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.type.value.parameters.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.parameters.0.type.value', 'number');
      expect(docs).toHaveProperty('0.type.value.returnType.kind', 'external');
    });

    it('should find rest parameters of a function', () => {
      const program = createProgramFromSource(`
        export const Foo = (...args: string[]) => null;
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'function');
      expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.type.parameters.0.name', 'args');
      expect(docs).toHaveProperty('0.type.parameters.0.rest', true);
      expect(docs).toHaveProperty('0.type.parameters.0.type.kind', 'array');
      expect(docs).toHaveProperty('0.type.parameters.0.type.value.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.parameters.0.type.value.value', 'string');
    });

    it('should find an external type of a function return union type', () => {
      const program = createProgramFromSource(`
        export const Foo = (input: {}) => null as Element | null;
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'function');
      expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.type.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.type.parameters.0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.parameters.0.type.properties', []);
      expect(docs).toHaveProperty('0.type.returnType.kind', 'union');
      expect(docs).toHaveProperty('0.type.returnType.value.0.kind', 'external');
      expect(docs).toHaveProperty('0.type.returnType.value.0.name', 'Element');
      expect(docs).toHaveProperty(
        '0.type.returnType.value.0.url',
        expect.stringContaining('element')
      );
      expect(docs).toHaveProperty('0.type.returnType.value.1.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.returnType.value.1.value', 'null');
    });

    it('should find an external type of a function return union type', () => {
      const program = createProgramFromSource(`
        export const keys = ['foo', 'bar'] as const;
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'keys');
      expect(docs).toHaveProperty('0.type.kind', 'union');
      expect(docs).toHaveProperty('0.type.value.0.kind', 'string');
      expect(docs).toHaveProperty('0.type.value.0.value', 'foo');
      expect(docs).toHaveProperty('0.type.value.1.kind', 'string');
      expect(docs).toHaveProperty('0.type.value.1.value', 'bar');
    });

    it('should infer the type of an array', () => {
      const program = createProgramFromSource(`
        export const keys = ['foo', 'bar'];
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'keys');
      expect(docs).toHaveProperty('0.type.kind', 'array');
      expect(docs).toHaveProperty('0.type.value.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.value', 'string');
    });

    it('should find an external type of a function return type with generics', () => {
      const program = createProgramFromSource(`
        export type Foo = (input: number) => Promise<Bar>;

        interface Bar {}
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'function');
      expect(docs).toHaveProperty('0.type.value.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.type.value.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.type.value.parameters.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.parameters.0.type.value', 'number');
      expect(docs).toHaveProperty('0.type.value.returnType.kind', 'external');
    });

    it('should find an exported type of an exported IndexedAccessType', () => {
      const program = createProgramFromSource(`
        export type Foo = Bar['bar']
        export type Bar = {
          bar: string
        }
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.value', 'string');
    });

    it('should handle a keyof of an exported symbol when used in conjunction with an IndexedAccessType', () => {
      const program = createProgramFromSource(`
        export type D = {
          d: C['c'] | 'd'
        }
        type C = {
          c: 'c' | B
        }
        export type A = { a: 1, b: 1} // needs to be exported for keyof to work
        type B = keyof A
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'D');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'd');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'union');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.0.kind', 'union');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.0.value.0.kind', 'string');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.0.value.0.value', 'c');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.0.value.1.kind', 'keyof');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.0.value.1.name.kind', 'symbol');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.0.value.1.name.name', 'A');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.1.kind', 'string');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.1.value', 'd');
    });

    it('should find an exported type of an exported IndexedAccessType that uses keyof', () => {
      const program = createProgramFromSource(`
        type A {
          a: 'a',
          b: 'b'
        }
        export type Foo = {
          foo: Bar['bar']
        }
        export type Bar = {
          bar: keyof A
        }
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'union');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.0.kind', 'string');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.0.value', 'a');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.1.kind', 'string');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.1.value', 'b');
    });

    it('should find an exported type of an IndexedAccessType exported from another file', () => {
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
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.value', 'string');
    });

    it('should find an exported type of a variable with a forced type', () => {
      const program = createProgramFromSource(`
        export const foo: Foo[] = [];

        export type Foo = {
          foo: string
        }
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.type.kind', 'array');
      expect(docs).toHaveProperty('0.type.value.kind', 'symbol');
      expect(docs).toHaveProperty('0.type.value.name', 'Foo');
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
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.type.kind', 'array');
      expect(docs).toHaveProperty('0.type.value.kind', 'symbol');
      expect(docs).toHaveProperty('0.type.value.name', 'Bar');
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
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.description', 'Foo is a type');
      expect(docs).toHaveProperty('0.tags', {
        example: expect.stringContaining('// this is an example'),
      });
    });

    it('should handle simple type unions', () => {
      const program = createProgramFromSource('export type Foo = "foo" | "bar"');
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value', {
        kind: 'union',
        value: [
          {kind: 'string', value: 'foo'},
          {kind: 'string', value: 'bar'},
        ],
      });
    });

    it('should handle a tuple type', () => {
      const program = createProgramFromSource('export type Foo = [string, "bar"]');
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'tuple');
      expect(docs).toHaveProperty('0.type.value.value.0.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.value.0.value', 'string');
      expect(docs).toHaveProperty('0.type.value.value.1.kind', 'string');
      expect(docs).toHaveProperty('0.type.value.value.1.value', 'bar');
    });

    it('should handle exported interfaces', () => {
      const program = createProgramFromSource(`
        export interface Foo {
          foo: string
        };
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type', {
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
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type', {
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
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'symbol');
      expect(docs).toHaveProperty('0.type.properties.0.type.name', 'bar');
    });

    it('should handle exported interfaces with a generic', () => {
      const program = createProgramFromSource(`
        export interface Foo<T> {
          foo: T
        };
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.type.typeParameters.0.name', 'T');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'generic');
      expect(docs).toHaveProperty('0.type.properties.0.type.name', 'T');
    });

    it('should handle exported interfaces with an array', () => {
      const program = createProgramFromSource(`
        export interface Foo {
          foo: number[]
        };
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'array');
      expect(docs).toHaveProperty('0.type.properties.0.type.value', {
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
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.type.typeParameters.0.name', 'T');
      expect(docs).toHaveProperty('0.type.typeParameters.0.defaultValue', {
        kind: 'primitive',
        value: 'any',
      });
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'generic');
      expect(docs).toHaveProperty('0.type.properties.0.type.name', 'T');
    });

    it('should handle exported interfaces with a MethodSignature', () => {
      const program = createProgramFromSource(`
        export interface Foo {
          foo(): void
        };
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'function');
    });

    it('should handle exported types with type literal values', () => {
      const program = createProgramFromSource(`
        export type Foo = {
          foo: string
        }
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.properties.0.type.value', 'string');
    });

    it('should handle exported object types with a generic and "any" default value', () => {
      const program = createProgramFromSource(`
        export type Foo<T = any> = {
          foo: T
        }
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.type.typeParameters.0.name', 'T');
      expect(docs).toHaveProperty('0.type.typeParameters.0.defaultValue', {
        kind: 'primitive',
        value: 'any',
      });
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'generic');
      expect(docs).toHaveProperty('0.type.properties.0.type.name', 'T');
    });

    it('should handle exported Record types', () => {
      const program = createProgramFromSource(`
        export type Foo = Record<string, string>
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'external');
      expect(docs).toHaveProperty('0.type.value.typeParameters.0.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.typeParameters.0.value', 'string');
      expect(docs).toHaveProperty('0.type.value.typeParameters.1.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.value.typeParameters.1.value', 'string');
    });

    it('should handle exported interfaces with an index signature', () => {
      const program = createProgramFromSource(`
        export interface PropMap {
          foo: string
          [key: string | number]: string
        }
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'PropMap');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');

      // TODO: Index Signature...
    });

    it('should handle exported interfaces with a generic with constraint and defaults', () => {
      const program = createProgramFromSource(`
        export interface Foo<T extends string = 'foo'> {
          foo: T
        };
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.type.typeParameters.0.name', 'T');
      expect(docs).toHaveProperty('0.type.typeParameters.0.defaultValue', {
        kind: 'string',
        value: 'foo',
      });
      expect(docs).toHaveProperty('0.type.typeParameters.0.required', false);
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
    });

    it('should handle exported interfaces with a generic with constraint and defaults', () => {
      const program = createProgramFromSource(`
        export interface Foo<T> {
          foo: Bar<T>
        };

        export type Bar<T> = {value: T}
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.type.typeParameters.0.name', 'T');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'symbol');
      expect(docs).toHaveProperty('0.type.properties.0.type.name', 'Bar');
      expect(docs).toHaveProperty('0.type.properties.0.type.typeParameters', [
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
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'union');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.0', {
        kind: 'generic',
        name: 'T',
      });
      expect(docs).toHaveProperty('0.type.properties.0.type.value.1.kind', 'symbol');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.1.name', 'Bar');
      expect(docs).toHaveProperty('0.type.properties.0.type.value.1.typeParameters', [
        {kind: 'generic', name: 'T'},
      ]);
    });

    it('should handle exported interfaces with external links', () => {
      const program = createProgramFromSource(`
        export interface Foo<T> {
          foo: Promise<T>
        };
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.typeParameters.0.kind', 'typeParameter');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'foo');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'external');
      expect(docs).toHaveProperty('0.type.properties.0.type.url', expect.stringContaining(''));
      expect(docs).toHaveProperty('0.type.properties.0.type.typeParameters', [
        {kind: 'generic', name: 'T'},
      ]);
    });

    it('should handle exported objects', () => {
      const program = createProgramFromSource(`
        export const foo = {
          bar: 'baz'
        };
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'bar');
      expect(docs).toHaveProperty('0.type.properties.0.type', {
        kind: 'primitive',
        value: 'string',
      });
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue', {
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
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'bar');
      expect(docs).toHaveProperty('0.type.properties.0.type', {
        kind: 'primitive',
        value: 'string',
      });
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue', {
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
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'bar');
      expect(docs).toHaveProperty('0.type.properties.0.type', {
        kind: 'union',
        value: [
          {kind: 'string', value: 'bar'},
          {kind: 'string', value: 'baz'},
        ],
      });
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue', {
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
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'getBar');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'function');
      expect(docs).toHaveProperty('0.type.properties.0.type.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.type.properties.0.type.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.type.properties.0.type.parameters.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.properties.0.type.parameters.0.type.value', 'string');
    });

    it('should handle ObjectLiteralExpression for defaultValue', () => {
      const program = createProgramFromSource(`
        const d = 'D'
        const e = {e: 'E'}
        export const a = {
          b: {
            c: 'C',
            d,
            ...e
          }
        };
        `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'a');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'b');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.properties.0.name', 'c');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.properties.1.name', 'd');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.properties.2.name', 'e');
    });

    it('should handle ArrayLiteralExpression for defaultValue', () => {
      const program = createProgramFromSource(`
        const c = ['c' as const]
        export const a = {
          b: ['b', ...c, ...['d']],
          c: undefined
        }
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'a');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'b');
      expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'array');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.kind', 'tuple');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.value.0.kind', 'string');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.value.0.value', 'b');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.value.1.kind', 'string');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.value.1.value', 'c');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.value.2.kind', 'string');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.value.2.value', 'd');
    });

    it('should handle call expressions for defaultValue', () => {
      const program = createProgramFromSource(`
        export const a = {
          a: getA();
        }

        function getA() { return 'a' }
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'a');
      expect(docs).toHaveProperty('0.type.kind', 'object');
      expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.properties.0.name', 'a');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.properties.0.defaultValue.value', 'string');
    });

    it('should handle exported objects with method declarations', () => {
      const program = createProgramFromSource(`
        import ts from "typescript";

        export const foo: ts.Node = {}
      `);
      const docs = parse(program, 'test.ts');

      expect(docs).toHaveProperty('0.name', 'foo');
      expect(docs).toHaveProperty('0.type.kind', 'qualifiedName');
      expect(docs).toHaveProperty('0.type.left.kind', 'symbol');
      expect(docs).toHaveProperty('0.type.left.name', 'ts');
      expect(docs).toHaveProperty('0.type.right.kind', 'string');
      expect(docs).toHaveProperty('0.type.right.value', 'Node');
    });

    it('should handle types that include other symbols when that symbol is exported', () => {
      const program = createProgramFromSource(`
        export type Foo = "foo";
        export type Bar = Foo;
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('1.name', 'Bar');
      expect(docs).toHaveProperty('1.type.kind', 'type');
      expect(docs).toHaveProperty('1.type.value.kind', 'symbol');
      expect(docs).toHaveProperty('1.type.value.name', 'Foo');
    });

    // it.only('should handle types with generics', () => {
    //   const program = createProgramFromSource(`
    //     export type MaybePromise<T> = T | Promise<T>;
    //   `);
    //   const docs = parse(program, 'test.ts');
    //   expect(docs).toHaveProperty('1.name', 'Bar');
    //   expect(docs).toHaveProperty('1.type', {kind: 'symbol', value: 'Foo'});
    // });

    it('should handle types that include other symbols when that symbol is NOT exported', () => {
      const program = createProgramFromSource(`
        type Foo<T> = T;
        export type Bar = Foo<'foo'>;
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'Bar');
      expect(docs).toHaveProperty('0.type.kind', 'type');
      expect(docs).toHaveProperty('0.type.value.kind', 'string');
      expect(docs).toHaveProperty('0.type.value.value', 'foo');
    });

    it('should handle functions with required parameters', () => {
      const program = createProgramFromSource(`
        export function myFoo(input: string): boolean {
          return false
        }
      `);
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'myFoo');
      expect(docs).toHaveProperty('0.type.kind', 'function');
      expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.type.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.type.parameters.0.defaultValue', undefined);
      expect(docs).toHaveProperty('0.type.parameters.0.required', true);
      expect(docs).toHaveProperty('0.type.parameters.0.type', {
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
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'myFoo');
      expect(docs).toHaveProperty('0.type.kind', 'function');
      expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.type.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.type.parameters.0.defaultValue', undefined);
      expect(docs).toHaveProperty('0.type.parameters.0.required', false);
      expect(docs).toHaveProperty('0.type.parameters.0.type', {
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
      const docs = parse(program, 'test.ts');
      expect(docs).toHaveProperty('0.name', 'myFoo');
      expect(docs).toHaveProperty('0.type.kind', 'function');
      expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
      expect(docs).toHaveProperty('0.type.parameters.0.name', 'input');
      expect(docs).toHaveProperty('0.type.parameters.0.defaultValue', {
        kind: 'string',
        value: 'foo',
      });
      expect(docs).toHaveProperty('0.type.parameters.0.required', false);
      expect(docs).toHaveProperty('0.type.parameters.0.type', {
        kind: 'primitive',
        value: 'string',
      });
    });
  });

  it('should handle functions with defaulted object binding property parameters with literal values', () => {
    const program = createProgramFromSource(`
      export function myFoo({foo = 'bar'}: {foo: string}): boolean {
        return false
      }
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.type.parameters.0.type.kind', 'object');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.name', 'foo');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.type.value', 'string');
    expect(docs).toHaveProperty(
      '0.type.parameters.0.type.properties.0.defaultValue.kind',
      'string'
    );
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.defaultValue.value', 'bar');
  });

  it('should handle functions with defaulted object binding property parameters with non-literal values', () => {
    const program = createProgramFromSource(`
      const bar = 'bar';
      export function myFoo({foo = bar}: {foo: string}): boolean {
        return false
      }
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.type.parameters.0.type.kind', 'object');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.name', 'foo');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.type.value', 'string');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.defaultValue', undefined);
  });

  it('should handle arrow functions with required parameters', () => {
    const program = createProgramFromSource(`
      export const myFoo = (input: string): boolean => {
        return false
      }
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.type.parameters.0.name', 'input');
    expect(docs).toHaveProperty('0.type.parameters.0.defaultValue', undefined);
    expect(docs).toHaveProperty('0.type.parameters.0.required', true);
    expect(docs).toHaveProperty('0.type.parameters.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.parameters.0.type.value', 'string');
  });

  it('should handle arrow functions that are typed with required parameters', () => {
    const program = createProgramFromSource(`
      export const myFoo: (input: string) => boolean = (input) => {
        return false
      }
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.type.parameters.0.name', 'input');
    expect(docs).toHaveProperty('0.type.parameters.0.defaultValue', undefined);
    expect(docs).toHaveProperty('0.type.parameters.0.required', true);
    expect(docs).toHaveProperty('0.type.parameters.0.type', {
      kind: 'primitive',
      value: 'string',
    });
  });

  it('should handle functions with object parameter type', () => {
    const program = createProgramFromSource(`
      export function myFoo(input: {foo: string; bar: string;}): boolean {
        return false
      }
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.type.parameters.0.name', 'input');
    expect(docs).toHaveProperty('0.type.parameters.0.defaultValue', undefined);
    expect(docs).toHaveProperty('0.type.parameters.0.required', true);
    expect(docs).toHaveProperty('0.type.parameters.0.type.kind', 'object');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.name', 'foo');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.type.value', 'string');
  });

  it('should handle functions with exported destructured parameters', () => {
    const program = createProgramFromSource(`
      export function myFoo(input: Props): boolean {
        return false
      }
      export interface Props {
        foo: string
      }
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.type.parameters.0.name', 'input');
    expect(docs).toHaveProperty('0.type.parameters.0.defaultValue', undefined);
    expect(docs).toHaveProperty('0.type.parameters.0.required', true);
    expect(docs).toHaveProperty('0.type.parameters.0.type.kind', 'symbol');
    expect(docs).toHaveProperty('0.type.parameters.0.type.name', 'Props');
    expect(docs).toHaveProperty('0.type.parameters.0.declarations.0.name', 'input');
    expect(docs).toHaveProperty('0.type.parameters.0.declarations.0.filePath', 'test.ts');
  });

  it('should handle functions with destructured parameters', () => {
    const program = createProgramFromSource(`
      export function myFoo(input: Props): boolean {
        return false
      }
      interface Props {
        foo: string
      }
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.type.parameters.0.name', 'input');
    expect(docs).toHaveProperty('0.type.parameters.0.defaultValue', undefined);
    expect(docs).toHaveProperty('0.type.parameters.0.required', true);
    expect(docs).toHaveProperty('0.type.parameters.0.type.kind', 'object');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.name', 'foo');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.parameters.0.type.properties.0.type.value', 'string');
  });

  it('should handle functions with additional properties', () => {
    const program = createProgramFromSource(`
      export function myFoo(input: string): boolean {
        return false
      }

      myFoo.myStaticMember = 'bar'
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.members.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.members.0.name', 'myStaticMember');
    expect(docs).toHaveProperty('0.type.members.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.members.0.type.value', 'string');
  });

  it('should handle functions with type parameters properties', () => {
    const program = createProgramFromSource(`
      export function myFoo<T extends string = ''>(input: T): boolean {
        return false
      }

      myFoo.myStaticMember = 'bar'
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'myFoo');
    expect(docs).toHaveProperty('0.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.typeParameters.0.kind', 'typeParameter');
    expect(docs).toHaveProperty('0.type.typeParameters.0.name', 'T');
    expect(docs).toHaveProperty('0.type.typeParameters.0.defaultValue.kind', 'string');
    expect(docs).toHaveProperty('0.type.typeParameters.0.defaultValue.value', '');
    expect(docs).toHaveProperty('0.type.typeParameters.0.constraint.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.typeParameters.0.constraint.value', 'string');
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
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'foo');
    expect(docs).toHaveProperty('0.type.kind', 'object');
    expect(docs).toHaveProperty('0.type.properties.0.name', 'bar');
    expect(docs).toHaveProperty('0.type.properties.0.type', {
      kind: 'primitive',
      value: 'string',
    });
    expect(docs).toHaveProperty('0.type.properties.0.defaultValue', {
      kind: 'string',
      value: 'baz',
    });
  });

  it('should handle conditional types', () => {
    const program = createProgramFromSource(`
      export type Foo<T> = T extends string ? true : false
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'Foo');
    expect(docs).toHaveProperty('0.type.kind', 'type');
    expect(docs).toHaveProperty('0.type.value.check.kind', 'generic');
    expect(docs).toHaveProperty('0.type.value.check.name', 'T');
    expect(docs).toHaveProperty('0.type.value.extends.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.value.extends.value', 'string');
    expect(docs).toHaveProperty('0.type.value.trueType.kind', 'boolean');
    expect(docs).toHaveProperty('0.type.value.trueType.value', true);
    expect(docs).toHaveProperty('0.type.value.falseType.kind', 'boolean');
    expect(docs).toHaveProperty('0.type.value.falseType.value', false);
  });

  it('should handle interfaces with index types', () => {
    const program = createProgramFromSource(`
      export interface Foo {
        [key: string]: number
      }
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'Foo');
    expect(docs).toHaveProperty('0.type.kind', 'object');
    expect(docs).toHaveProperty('0.type.indexSignature.kind', 'indexSignature');
    expect(docs).toHaveProperty('0.type.indexSignature.name', 'key');
    expect(docs).toHaveProperty('0.type.indexSignature.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.indexSignature.type.value', 'string');
    expect(docs).toHaveProperty('0.type.indexSignature.value.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.indexSignature.value.value', 'number');
  });

  it('should handle enums', () => {
    const program = createProgramFromSource(`
      export enum MyEnum {
        Foo = 'foo',
        Bar = 'bar',
      }
    `);
    const docs = parse(program, 'test.ts');
    expect(docs).toHaveProperty('0.name', 'MyEnum');
    expect(docs).toHaveProperty('0.type.kind', 'object');
    expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.properties.0.name', 'Foo');
    expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'string');
    expect(docs).toHaveProperty('0.type.properties.0.type.value', 'foo');
    expect(docs).toHaveProperty('0.type.properties.1.name', 'Bar');
    expect(docs).toHaveProperty('0.type.properties.1.type.kind', 'string');
    expect(docs).toHaveProperty('0.type.properties.1.type.value', 'bar');
  });

  it('should use the type checker evaluated value of local types', () => {
    const program = createProgramFromSource(`
      type ValueOf<T> = T[keyof T];
      type Foo = {
        foo: 'foo',
        bar: 'bar',
      }

      export type Bar = ValueOf<Foo>
    `);
    const docs = parse(program, 'test.ts');

    expect(docs).toHaveProperty('0.name', 'Bar');
    expect(docs).toHaveProperty('0.type.kind', 'type');
    expect(docs).toHaveProperty('0.type.value.kind', 'union');
    expect(docs).toHaveProperty('0.type.value.value.0.kind', 'string');
    expect(docs).toHaveProperty('0.type.value.value.0.value', 'foo');
    expect(docs).toHaveProperty('0.type.value.value.1.kind', 'string');
    expect(docs).toHaveProperty('0.type.value.value.1.value', 'bar');
  });

  it('should handle large unions', () => {
    const program = createProgramFromSource(`
      type Letters = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' |  'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
      type Numbers = '1' | '2'
      type A = \`\${Letters}\${Numbers}\`

      export type B = A
    `);
    const docs = parse(program, 'test.ts');

    expect(docs).toHaveProperty('0.name', 'B');
    expect(docs).toHaveProperty('0.type.kind', 'type');
    expect(docs).toHaveProperty('0.type.value.kind', 'union');
    expect(docs).toHaveProperty('0.type.value.value.length', 52);
  });

  it('should handle large unions', () => {
    const program = createProgramFromSource(`
      type Letters = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' |  'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
      type Numbers = '1' | '2'
      type A = \`\${Letters}\${Numbers}\`

      export type B = A
    `);
    const docs = parse(program, 'test.ts');

    expect(docs).toHaveProperty('0.name', 'B');
    expect(docs).toHaveProperty('0.type.kind', 'type');
    expect(docs).toHaveProperty('0.type.value.kind', 'union');
    expect(docs).toHaveProperty('0.type.value.value.length', 52);
  });

  it('should handle keyof from an enum', () => {
    const program = createProgramFromSource(`
      enum A { a, b }

      export type B = keyof typeof A
    `);
    const docs = parse(program, 'test.ts');

    expect(docs).toHaveProperty('0.name', 'B');
    expect(docs).toHaveProperty('0.type.kind', 'type');
    expect(docs).toHaveProperty('0.type.value.kind', 'union');
    expect(docs).toHaveProperty('0.type.value.value.0.kind', 'string');
    expect(docs).toHaveProperty('0.type.value.value.0.value', 'a');
    expect(docs).toHaveProperty('0.type.value.value.1.kind', 'string');
    expect(docs).toHaveProperty('0.type.value.value.1.value', 'b');
  });

  it('should handle keyof from a type', () => {
    const program = createProgramFromSource(`
      type A = {
        a: '1';
        b: '2';
        c: '3';
        d: '4';
      };

      export type B = keyof A;
    `);
    const docs = parse(program, 'test.ts');

    expect(docs).toHaveProperty('0.name', 'B');
    expect(docs).toHaveProperty('0.type.kind', 'type');
    expect(docs).toHaveProperty('0.type.value.kind', 'union');
    expect(docs).toHaveProperty('0.type.value.value.0.kind', 'string');
    expect(docs).toHaveProperty('0.type.value.value.0.value', 'a');
    expect(docs).toHaveProperty('0.type.value.value.1.kind', 'string');
    expect(docs).toHaveProperty('0.type.value.value.1.value', 'b');
    expect(docs).toHaveProperty('0.type.value.value.2.kind', 'string');
    expect(docs).toHaveProperty('0.type.value.value.2.value', 'c');
    expect(docs).toHaveProperty('0.type.value.value.3.kind', 'string');
    expect(docs).toHaveProperty('0.type.value.value.3.value', 'd');
  });

  it('should handle function value index signatures', () => {
    const program = createProgramFromSource(`
      export type A = {
        [key: string]: (a: unknown) => {};
      };
    `);
    const docs = parse(program, 'test.ts');

    expect(docs).toHaveProperty('0.name', 'A');
    expect(docs).toHaveProperty('0.type.kind', 'object');
    expect(docs).toHaveProperty('0.type.indexSignature.kind', 'indexSignature');
    expect(docs).toHaveProperty('0.type.indexSignature.name', 'key');
    expect(docs).toHaveProperty('0.type.indexSignature.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.indexSignature.type.value', 'string');
    expect(docs).toHaveProperty('0.type.indexSignature.value.kind', 'function');
    expect(docs).toHaveProperty('0.type.indexSignature.value.parameters.0.kind', 'parameter');
    expect(docs).toHaveProperty('0.type.indexSignature.value.parameters.0.name', 'a');
    expect(docs).toHaveProperty('0.type.indexSignature.value.parameters.0.required', true);
    expect(docs).toHaveProperty('0.type.indexSignature.value.parameters.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.indexSignature.value.parameters.0.type.value', 'unknown');
  });

  it('should handle the "infer" keyword', () => {
    const program = createProgramFromSource(`
      export type A<T> = T extends { a: infer A } ? A : T
    `);

    const docs = parse(program, 'test.ts');

    expect(docs).toHaveProperty('0.name', 'A');
    expect(docs).toHaveProperty('0.type.kind', 'type');
    expect(docs).toHaveProperty('0.type.typeParameters.0.kind', 'typeParameter');
    expect(docs).toHaveProperty('0.type.typeParameters.0.name', 'T');
    expect(docs).toHaveProperty('0.type.value.kind', 'conditional');
    expect(docs).toHaveProperty('0.type.value.extends.kind', 'object');
    expect(docs).toHaveProperty('0.type.value.extends.properties.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.value.extends.properties.0.type.kind', 'infer');
    expect(docs).toHaveProperty(
      '0.type.value.extends.properties.0.type.value.kind',
      'typeParameter'
    );
    expect(docs).toHaveProperty('0.type.value.extends.properties.0.type.value.name', 'A');
  });

  it('should handle a ClassDeclaration with no interface', () => {
    const program = createProgramFromSource(`
      export class A {
        a = 'b'

        onClick() {}
      }
    `);

    const docs = parse(program, 'test.ts');

    expect(docs).toHaveProperty('0.name', 'A');
    expect(docs).toHaveProperty('0.type.kind', 'object');
    expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.properties.0.name', 'a');
    expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.properties.0.type.value', 'string');
    expect(docs).toHaveProperty('0.type.properties.1.kind', 'property');
    expect(docs).toHaveProperty('0.type.properties.1.name', 'onClick');
    expect(docs).toHaveProperty('0.type.properties.1.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.properties.1.type.returnType.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.properties.1.type.returnType.value', 'void');
  });

  it('should handle a ClassDeclaration that implements an interface', () => {
    const program = createProgramFromSource(`
      export class A implements B {
        a = 'b'

        onClick() {}
      }

      interface B {
        a: string;
        onClick(): void
      }
    `);

    const docs = parse(program, 'test.ts');

    expect(docs).toHaveProperty('0.name', 'A');
    expect(docs).toHaveProperty('0.type.kind', 'object');
    expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.properties.0.name', 'a');
    expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.properties.0.type.value', 'string');
    expect(docs).toHaveProperty('0.type.properties.1.kind', 'property');
    expect(docs).toHaveProperty('0.type.properties.1.name', 'onClick');
    expect(docs).toHaveProperty('0.type.properties.1.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.properties.1.type.returnType.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.properties.1.type.returnType.value', 'void');
  });

  it('should handle a ClassDeclaration with TypeParameters', () => {
    const program = createProgramFromSource(`
      export class A<T> {
        a = 'b'

        onClick() {}
      }
    `);

    const docs = parse(program, 'test.ts');

    expect(docs).toHaveProperty('0.name', 'A');
    expect(docs).toHaveProperty('0.type.kind', 'object');
    expect(docs).toHaveProperty('0.type.properties.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.properties.0.name', 'a');
    expect(docs).toHaveProperty('0.type.properties.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.properties.0.type.value', 'string');
    expect(docs).toHaveProperty('0.type.properties.1.kind', 'property');
    expect(docs).toHaveProperty('0.type.properties.1.name', 'onClick');
    expect(docs).toHaveProperty('0.type.properties.1.type.kind', 'function');
    expect(docs).toHaveProperty('0.type.properties.1.type.returnType.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.properties.1.type.returnType.value', 'void');
  });
});
