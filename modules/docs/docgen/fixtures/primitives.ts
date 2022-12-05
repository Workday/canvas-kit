import {exportedString} from './importedFrom';

// export const myString = 'bar';
// export const myNumber = 10;

// export const myAliasString = exportedString;

/** interface */
export interface MyInterface {
  /** property */
  foo: MyUnion | 'baz';
  bar: typeof exportedString;
  baz: 'foo' | 'bar';
}

interface MyInterface2 {
  /** property */
  foo: MyUnion | 'baz';
  bar: typeof exportedString;
  baz: 'foo' | 'bar';
}

// export type MyObjectType = {
//   bar: 'baz';
// };

export const myObject = {
  /** foo doc */
  foo: 'bar' as MyUnion | 'baz',
  bar: typeof exportedString,
  baz: 'bar' as 'foo' | 'bar',
};

export const myObject2: MyInterface = {
  foo: 'bar',
  bar: exportedString,
  baz: 'bar',
};

export type MyUnion = 'foo' | 'bar';

// export type MyMetaUnion = MyUnion | 'baz';

// export type PrimitiveString = string;
// export type PrimitiveNumber = number;

// export function myFunction() {}

const temp = 'foo';
