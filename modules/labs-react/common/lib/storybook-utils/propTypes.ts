type PropDeclaration = {
  value: any;
  label: string;
};

type PropsDeclaration = {[key: string]: PropDeclaration[]};

type Props = {
  [key: string]: any;
};

type PropCombination = {
  label: string;
  props: Props;
};
