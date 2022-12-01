export interface JSDoc {
  description: string;
  fullComment: string;
  tags: Record<string, string>;
}

export interface Prop extends JSDoc {
  type: 'prop';
  name: string;
  defaultValue: string | undefined;
  typeInfo: {
    name: string;
    raw: string;
    value: string | {value: string}[];
  };
  required: boolean;
}

// TODO: Symbols can be many things...
export interface SymbolDoc extends JSDoc {
  type: 'symbol';
  name: string;
  typeInfo: {
    name: string;
    raw: string;
    value: string | {value: string}[];
  };
}

export interface ObjectDoc extends JSDoc {
  type: 'object';
  name: string;
  packageName: string;
  props: Prop[];
}

export type PrimitiveDoc = NumberLiteralDoc | StringLiteralDoc;

export interface NumberLiteralDoc {
  type: 'number';
  value: number;
}

export interface StringLiteralDoc {
  type: 'string';
  value: string;
}

export interface UnionDoc extends JSDoc {
  type: 'union';
  name: string;
  packageName: string;
  types: PrimitiveDoc;
}

export interface ModelDoc extends JSDoc {
  type: 'model';
  name: string;
  packageName: string;
  defaultConfig: Prop[];
  requiredConfig: Prop[];
  state: Prop[];
  events: Prop[];
}

export type Doc = SymbolDoc | ModelDoc | ObjectDoc;
