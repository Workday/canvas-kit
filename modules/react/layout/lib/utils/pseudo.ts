import {StyleProps, baseStylePropFn} from './baseStylePropFn';

/** style props to for CSS pseudo-class properties */
export type PseudoStyleProps = {
  _hover?: StyleProps;
  _active?: StyleProps;
  _focus?: StyleProps;
  _disabled?: StyleProps;
  _readOnly?: StyleProps;
  _empty?: StyleProps;
  _checked?: StyleProps;
  _selected?: StyleProps;
  _hidden?: StyleProps;
  _visited?: StyleProps;
};

const pseudoStyleProps = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus',
  _disabled: '&:disabled',
  _readOnly: '&:readOnly',
  _empty: '&:empty',
  _checked: '&:checked',
  _selected: '&:selected',
  _hidden: '&:hidden',
  _visited: '&:visited',
};

export function pseudo<P extends PseudoStyleProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in props && key in pseudoStyleProps) {
      const property = pseudoStyleProps[key as keyof PseudoStyleProps];
      styles = {
        ...styles,
        [property]: baseStylePropFn(props[key] as {}),
      };
    }
  }
  return styles;
}
