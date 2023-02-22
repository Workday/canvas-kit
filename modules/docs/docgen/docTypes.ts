export interface JSDoc {
  description: string;
  tags: Record<string, string>;
  declarations: Declaration[];
}

export interface Declaration {
  name: string;
  filePath: string;
}

export interface ObjectProperty extends JSDoc {
  kind: 'property';
  name: string;
  type: Value;
  defaultValue?: Value;
  required?: boolean;
}

export interface FunctionParameter extends JSDoc {
  kind: 'parameter';
  name: string;
  type: Value;
  defaultValue?: Value;
  required?: boolean;
  /** Is this a rest parameter? */
  rest?: boolean;
}

/**
 * Top level symbols exported by a file. An `ExportedSymbol` is some type of declaration using the
 * `export` keyword. Exported means it could be used by other code and we may want it to be
 * documented.
 */
export interface ExportedSymbol<T = any> extends JSDoc {
  name: string;
  packageName: string;
  fileName: string;
  type: Value | T;
}

/** All supported values of exported symbols */
export type Value =
  | SymbolValue
  | GenericValue
  | NumberLiteralValue
  | StringLiteralValue
  | BooleanLiteralValue
  | PrimitiveValue
  | UnionValue
  | ObjectValue
  | ArrayValue
  | IndexedAccessValue
  | IndexSignatureValue
  | QualifiedNameValue
  | ParenthesisValue
  | TypeValue
  | TupleValue
  | IntersectionValue
  | ObjectProperty
  | FunctionParameter
  | FunctionValue
  | CallExpression
  | TypeParameter
  | ExternalSymbolValue
  | ConditionalTypeValue
  | KeyofValue
  | InferValue
  | UnknownValue;

/**
 * A value meant to link to an exported symbol. This should be treated like a pointer to an
 * `ExportedSymbol` by name
 */
export interface SymbolValue {
  kind: 'symbol';
  name: string;
  displayName?: string;
  fileName?: string;
  value?: string;
  typeParameters?: TypeParameter[];
}

/**
 * A generic value is a Typescript generic
 *
 * ```ts
 * const A<T> = null
 * ```
 *
 * I this example, the `T` is the generic
 */
export interface GenericValue {
  kind: 'generic';
  name: string;
}

/**
 * All object-like values:
 * - interface `interface A {}
 * - type literals: `type A = {}`
 * - enum `enum A = {}`
 * - JS object `const a = {}`
 *
 * Objects have properties.
 */
export interface ObjectValue {
  kind: 'object';
  properties: ObjectProperty[];
  typeParameters?: TypeParameter[];
  callSignatures?: FunctionValue[];
  indexSignature?: IndexSignatureValue;
}

/**
 * All array-like values except for {@link TupleValue}. Could be types or values.
 */
export interface ArrayValue {
  kind: 'array';
  value: Value;
}

/**
 * `IndexedAccessValue` is anything referring to a property by a sting index:
 *
 * ```ts
 * A['b']
 * ```
 *
 * Types access properties this way.
 */
export interface IndexedAccessValue {
  kind: 'indexedAccess';
  object: Value;
  index: Value;
}

/**
 * `QualifiedNameValue` is a dot notation of property access of an object or can access types of a
 * Typescript namespace:
 *
 * ```ts
 * const a = { b: 'b' }
 * a.b // value access via qualified name
 *
 * namespace A {
 *   interface B {}
 * }
 * A.B // access a type from a namespace via qualified name
 * ```
 */
export interface QualifiedNameValue {
  kind: 'qualifiedName';
  left: Value;
  right: Value;
}

/**
 * Value using a parenthesis
 *
 * ```ts
 * (A)
 * ```
 *
 * Maintaining the parenthesis allows representation of more complex types.
 */
export interface ParenthesisValue {
  kind: 'parenthesis';
  value: Value;
}

/**
 * A type parameter is a generic with optional constraints.
 *
 * ```ts
 * type A<T extends string = 'a'>
 * ```
 *
 * The TypeParameters is the `<T extends string = 'a'>`
 */
export interface TypeParameter {
  kind: 'typeParameter';
  name: string;
  defaultValue?: Value;
  constraint?: Value;
  required: boolean;
}

/**
 * A value representing the `keyof` keyword.
 *
 * ```ts
 * keyof A
 * ```
 */
export interface KeyofValue {
  kind: 'keyof';
  name: SymbolValue;
}

/**
 * A TypeValue is anything using the `type` keyword:
 *
 * ```ts
 * type Foo = 'bar'
 *
 * // output
 * {
 *   kind: 'type',
 *   value: {
 *     kind: 'string',
 *     value: 'bar'
 *   }
 * }
 * ```
 */
export interface TypeValue {
  kind: 'type';
  value: Value;
  typeParameters: TypeParameter[];
}

/**
 * Conditional types in Typescript. This allows more complex representations of types:
 *
 * ```ts
 * type A<T> = T extends string ? true : false
 * ```
 *
 * // output
 * {
 *   kind: 'conditional',
 *   check: {
 *     kind: 'generic',
 *     name: 'T'
 *   },
 *   extends: {
 *     kind: 'primitive',
 *     value: 'string'
 *   },
 *   trueType: {
 *     kind: 'boolean',
 *     value: true
 *   },
 *   falseType: {
 *     kind: 'boolean',
 *     value: false
 *   }
 * }
 */
export interface ConditionalTypeValue {
  kind: 'conditional';
  check: Value;
  extends: Value;
  trueType: Value;
  falseType: Value;
}

/**
 * Index Signatures are signatures of an interface
 *
 * ```ts
 * interface Foo {
 *   [key: string]: boolean
 * }
 *
 * // output
 * {
 *   kind: 'interface',
 *   properties: [
 *     {
 *       kind: 'indexSignature',
 *       name: 'key',
 *       type: {kind: 'primitive', value: 'boolean'},
 *       value: {kind: 'primitive', value: 'string'},
 *     }
 *   ]
 * }
 * ```
 */
export interface IndexSignatureValue {
  kind: 'indexSignature';
  name: string;
  type: Value;
  value: Value;
}

/**
 * ```ts
 * type Foo = [string, boolean]
 *
 * // output
 * {
 *   kind: 'type',
 *   value: [
 *     { kind: 'primitive', value: 'string' },
 *     { kind: 'primitive', value: 'boolean' }
 *   ]
 * }
 * ```
 */
export interface TupleValue {
  kind: 'tuple';
  value: Value[];
}

export interface ExternalSymbolValue {
  kind: 'external';
  name: string;
  url: string;
  typeParameters?: TypeParameter[];
}

export interface NumberLiteralValue {
  kind: 'number';
  value: number;
}

export interface StringLiteralValue {
  kind: 'string';
  value: string;
}

export interface BooleanLiteralValue {
  kind: 'boolean';
  value: boolean;
}

export interface PrimitiveValue {
  kind: 'primitive';
  value:
    | 'string'
    | 'number'
    | 'null'
    | 'undefined'
    | 'boolean'
    | 'any'
    | 'void'
    | 'unknown'
    | 'never'
    | 'any';
}

export interface UnknownValue {
  kind: 'unknown';
  value: 'unknown';
  text: string;
}

export interface UnionValue {
  kind: 'union';
  value: Value[];
}

export interface IntersectionValue {
  kind: 'intersection';
  value: Value[];
}

export interface FunctionValue {
  kind: 'function';
  name?: SymbolValue;
  typeParameters?: TypeParameter[];
  parameters: FunctionParameter[];
  members?: Value[];
  returnType: Value;
}

export interface CallExpression {
  kind: 'callExpression';
  name?: SymbolValue;
  parameters: Value[];
}

export interface InferValue {
  kind: 'infer';
  value: Value;
}
