export interface JSDoc {
  description: string;
  tags: Record<string, string>;
  declarations: Declaration[];
}

export interface Declaration {
  name: string;
  filePath: string;
}

/** Object parameters are used in function parameters, component props, and model config */
export interface ObjectParameter extends JSDoc {
  kind: 'parameter';
  name: string;
  defaultValue?: Value;
  type: Value;
  required: boolean;
  /** Is this a rest parameter? */
  rest?: boolean;
}

/** Members of an object type like an interface or a type alias of an object */
export interface TypeMember extends JSDoc {
  kind: 'member';
  name: string;
  type: Value;
}

/** Top level symbols exported by files */
export interface ExportedSymbol extends JSDoc {
  name: string;
  packageName: string;
  fileName: string;
  type: Value;
}

export interface ComponentValue {
  kind: 'component';
  props: ObjectParameter[];
}

export interface ModelValue {
  kind: 'model';
  defaultConfig: ObjectParameter[];
  requiredConfig: ObjectParameter[];
  state: TypeMember[];
  events: TypeMember[];
}

export interface ElemPropsHookValue {
  kind: 'elemPropsHook';
  parameters: ObjectParameter[];
  returnType: null;
}

/** All supported values of exported symbols */
export type Value =
  | SymbolValue
  | GenericValue
  | NumberLiteralValue
  | StringLiteralValue
  | PrimitiveValue
  | UnionValue
  | ObjectValue
  | ArrayValue
  | IndexedAccessValue
  | QualifiedNameValue
  | ParenthesisValue
  | InterfaceValue
  | TypeValue
  | TupleValue
  | TypeLiteralValue
  | ComponentValue
  | ModelValue
  | ElemPropsHookValue
  | IntersectionValue
  | TypeMember
  | ObjectParameter
  | FunctionValue
  | TypeParameter
  | ExternalSymbolValue
  | UnknownValue;

/** A value meant to link to an exported symbol. This should be treated like a pointer to an `ExportedSymbol` by name */
export interface SymbolValue {
  kind: 'symbol';
  name: string;
  typeParameters?: TypeParameter[];
}
export interface GenericValue {
  kind: 'generic';
  name: string;
}

export interface ObjectValue {
  kind: 'object';
  properties: ObjectParameter[];
}

export interface ArrayValue {
  kind: 'array';
  value: Value;
}

export interface IndexedAccessValue {
  kind: 'indexedAccess';
  object: Value;
  index: Value;
}

export interface QualifiedNameValue {
  kind: 'qualifiedName';
  left: Value;
  right: Value;
}

export interface ParenthesisValue {
  kind: 'parenthesis';
  value: Value;
}

export interface TypeParameter {
  kind: 'typeParameter';
  name: string;
  defaultValue?: Value;
  constraint?: Value;
  required: boolean;
}

export interface InterfaceValue {
  kind: 'interface';
  typeParameters: TypeParameter[];
  properties: TypeMember[];
  callSignature?: FunctionValue;
  indexSignature?: Value;
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
 *   indexSignature: {
 *     kind: 'indexSignature',
 *     parameter: { kind: 'primitive', value: 'string' },
 *     value: { kind: 'primitive', value: 'boolean' }
 *   }
 * }
 * ```
 */
export interface IndexSignatureValue {
  kind: 'indexSignature';
  parameter: PrimitiveValue;
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

export interface TypeLiteralValue {
  kind: 'typeLiteral';
  properties: TypeMember[];
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

export interface PrimitiveValue {
  kind: 'primitive';
  value: 'string' | 'number' | 'null' | 'undefined' | 'boolean' | 'any' | 'void';
}

export interface AnyValue {
  kind: 'primitive';
  value: 'any';
}

export interface UnknownValue {
  kind: 'unknown';
  value: 'unknown';
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
  parameters: ObjectParameter[];
  returnType: Value;
}
