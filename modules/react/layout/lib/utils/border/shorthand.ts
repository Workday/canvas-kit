export type BorderShorthandValue = string;

/** Style props to set the border properties */
export type BorderShorthandStyleProps = {
  /**
   * Sets `border` property
   * - Accepts string values
   * */
  border?: BorderShorthandValue;
  /**
   * Sets `border-top` property
   * - Accepts string values
   * */
  borderTop?: BorderShorthandValue;
  /**
   * Sets `border-right` property
   * - No bidirectional support
   * - Please use `borderInlineEnd` for RTL support
   * - Accepts string values
   * */
  borderRight?: BorderShorthandValue;
  /**
   * Sets `border-bottom` property
   * - Accepts string values
   * */
  borderBottom?: BorderShorthandValue;
  /**
   * Sets `border-left` property
   * - No bidirectional support
   * - Please use `borderInlineStart` for RTL support
   * - Accepts string values
   * */
  borderLeft?: BorderShorthandValue;
  /**
   * Sets `border-left` property
   * - Built-in bidirectional support
   * - Properties are transformed to `borderLeft` or `borderRight`
   * - Accepts string values
   * */
  borderInlineStart?: BorderShorthandValue;
  /**
   * Sets `border-right` property
   * - Built-in bidirectional support
   * - Properties are transformed to `borderLeft` or `borderRight`
   * - Accepts string values
   * */
  borderInlineEnd?: BorderShorthandValue;
};

export const borderShorthandFns = {
  border: (value?: BorderShorthandValue) => ({border: value}),
  borderTop: (value?: BorderShorthandValue) => ({borderTop: value}),
  borderRight: (value?: BorderShorthandValue) => ({borderRight: value}),
  borderBottom: (value?: BorderShorthandValue) => ({borderBottom: value}),
  borderLeft: (value?: BorderShorthandValue) => ({borderLeft: value}),
  borderInlineStart: (value?: BorderShorthandValue, isRTL = false) => {
    const key = isRTL ? 'borderRight' : 'borderLeft';
    return {[key]: value};
  },
  borderInlineEnd: (value?: BorderShorthandValue, isRTL = false) => {
    const key = isRTL ? 'borderLeft' : 'borderRight';
    return {[key]: value};
  },
};

export function getBorderShorthandStyles(
  key: keyof BorderShorthandStyleProps,
  value: BorderShorthandValue,
  isRTL = false
) {
  const styleFn = borderShorthandFns[key as keyof typeof borderShorthandFns];
  return styleFn(value, isRTL);
}
