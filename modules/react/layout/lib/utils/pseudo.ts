import {cxFn, CXStyleProps} from './cx';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

export type PseudoStyleProps = {
  _hover?: CXStyleProps;
  _active?: CXStyleProps;
  _focus?: CXStyleProps;
  _disabled?: CXStyleProps;
  _readOnly?: CXStyleProps;
  _empty?: CXStyleProps;
  _checked?: CXStyleProps;
  _selected?: CXStyleProps;
  _hidden?: CXStyleProps;
  _visited?: CXStyleProps;
};

export const pseudoFns = {
  _hover: (styles: CXStyleProps, isRTL = false) => ({
    '&:hover': cxFn(styles, isRTL),
  }),
  _active: (styles: CXStyleProps, isRTL = false) => ({
    '&:active': cxFn(styles, isRTL),
  }),
  _focus: (styles: CXStyleProps, isRTL = false) => ({
    '&:focus': cxFn(styles, isRTL),
  }),
  _disabled: (styles: CXStyleProps, isRTL = false) => ({
    '&:disabled': cxFn(styles, isRTL),
  }),
  _readOnly: (styles: CXStyleProps, isRTL = false) => ({
    '&:readOnly': cxFn(styles, isRTL),
  }),
  _empty: (styles: CXStyleProps, isRTL = false) => ({
    '&:empty': cxFn(styles, isRTL),
  }),
  _checked: (styles: CXStyleProps, isRTL = false) => ({
    '&:checked': cxFn(styles, isRTL),
  }),
  _selected: (styles: CXStyleProps, isRTL = false) => ({
    '&:selected': cxFn(styles, isRTL),
  }),
  _hidden: (styles: CXStyleProps, isRTL = false) => ({
    '&:hidden': cxFn(styles, isRTL),
  }),
  _visited: (styles: CXStyleProps, isRTL = false) => ({
    '&:visited': cxFn(styles, isRTL),
  }),
};

export function getPseudoStyles<P extends PseudoStyleProps>(
  styleProps: P,
  key: keyof PseudoStyleProps,
  isRTL: boolean
) {
  const value = styleProps[key as keyof PseudoStyleProps] || {};
  const styleFn = pseudoFns[key as keyof typeof pseudoFns];
  return styleFn(value, isRTL);
}

export function pseudo<P extends PseudoStyleProps & {theme: PartialEmotionCanvasTheme}>(props: P) {
  const isRTL = props.theme.canvas?.direction === 'rtl';
  let styles = {};

  for (const key in props) {
    if (props.hasOwnProperty(key) && pseudoFns.hasOwnProperty(key)) {
      const style = getPseudoStyles(props, key as keyof PseudoStyleProps, isRTL);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
