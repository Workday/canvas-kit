export type PropDeclaration = {
  value: any;
  label: string;
};

export type PropsDeclaration = {[key: string]: PropDeclaration[]};

export type Props = {
  [key: string]: any;
};

export type PropCombination = {
  label: string;
  props: Props;
  /** Optional description rendered below the column heading in ComponentStatesTable. */
  description?: string | string[];
};
