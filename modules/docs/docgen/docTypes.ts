export interface JSDoc {
  description: string;
  fullComment: string;
  tags: Record<string, string>;
}

/** Object parameters are used in function parameters, component props, and model config */
export interface ObjectParameter extends JSDoc {
  kind: 'parameter';
  name: string;
  defaultValue: Value;
  typeInfo: Value;
  required: boolean;
}

/** Members of an object type like an interface or a type alias of an object */
export interface TypeMember extends JSDoc {
  kind: 'member';
  name: string;
  typeInfo: Value;
}

export interface Doc extends JSDoc {
  name: string;
  packageName: string;
  fileName: string;
  typeInfo: Value;
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

export type Value =
  | SymbolValue
  | NumberLiteralValue
  | StringLiteralValue
  | PrimitiveValue
  | UnionValue
  | ObjectValue
  | InterfaceValue
  | ModelValue
  | ElemPropsHookValue
  | IntersectionValue
  | UnknownValue;

// TODO: Symbols can be many things...
export interface SymbolValue {
  kind: 'symbol';
  value: string;
}

export interface ObjectValue {
  kind: 'object';
  properties: ObjectParameter[];
}

export interface InterfaceValue {
  kind: 'interface';
  properties: TypeMember[];
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
  value: 'string' | 'number' | 'null' | 'undefined' | 'boolean';
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
