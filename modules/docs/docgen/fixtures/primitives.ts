export const foo = 'bar';

/** interface */
export interface Foo {
  /** property */
  foo: 'bar';
}

export type Bar = {
  bar: 'baz';
};

export type MyUnion = 'foo' | 'bar';

export type MyMetaUnion = MyUnion | 'baz';

export function myFunction() {}
