export type BorderWidthValue = string | number;

/** Style props to set the border width properties */
export type BorderWidthStyleProps = {
  /**
   * Sets `border-width` property
   * - Accepts string or number values
   * */
  borderWidth?: BorderWidthValue;
  /**
   * Sets `border-top-width` property
   * - Accepts string or number values
   * */
  borderTopWidth?: BorderWidthValue;
  /**
   * Sets `border-right-width` property
   * - No bidirectional support
   * - Please use `borderInlineEndWidth` for RTL support
   * - Accepts string or number values
   * */
  borderRightWidth?: BorderWidthValue;
  /**
   * Sets `border-bottom-width` property
   * - Accepts string or number values
   * */
  borderBottomWidth?: BorderWidthValue;
  /**
   * Sets `border-left-width` property
   * - No bidirectional support
   * - Please use `borderInlineStartWidth` for RTL support
   * - Accepts string or number values
   * */
  borderLeftWidth?: BorderWidthValue;
  /**
   * Sets `border-left-width` property
   * - Built-in bidirectional support
   * - Properties are transformed to `borderLeftWidth` or `borderRightWidth`
   * - Accepts string or number values
   * */
  borderInlineStartWidth?: BorderWidthValue;
  /**
   * Sets `border-right-width` property
   * - Built-in bidirectional support
   * - Properties are transformed to `borderLeftWidth` or `borderRightWidth`
   * - Accepts string or number values
   * */
  borderInlineEndWidth?: BorderWidthValue;
};

export const borderWidthFns = {
  borderWidth: (value?: BorderWidthValue) => ({borderWidth: value}),
  borderTopWidth: (value?: BorderWidthValue) => ({borderTopWidth: value}),
  borderRightWidth: (value?: BorderWidthValue) => ({borderRightWidth: value}),
  borderBottomWidth: (value?: BorderWidthValue) => ({borderBottomWidth: value}),
  borderLeftWidth: (value?: BorderWidthValue) => ({borderLeftWidth: value}),
  borderInlineStartWidth: (value?: BorderWidthValue, isRTL = false) => {
    const key = isRTL ? 'borderRightWidth' : 'borderLeftWidth';
    return {[key]: value};
  },
  borderInlineEndWidth: (value?: BorderWidthValue, isRTL = false) => {
    const key = isRTL ? 'borderLeftWidth' : 'borderRightWidth';
    return {[key]: value};
  },
};

export function getBorderWidthStyles(
  key: keyof BorderWidthStyleProps,
  value: BorderWidthValue,
  isRTL = false
) {
  const styleFn = borderWidthFns[key as keyof typeof borderWidthFns];
  return styleFn(value, isRTL);
}
