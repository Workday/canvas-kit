import {colors as colorTokens, CanvasColor} from '@workday/canvas-kit-react/tokens';

export type BorderColorValue = CanvasColor | (string & {});

function getColor(value?: BorderColorValue) {
  if (value && value in colorTokens) {
    return colorTokens[value];
  }
  return value;
}

export const borderColorFns = {
  borderColor: (value?: BorderColorValue) => ({borderColor: getColor(value)}),
  borderTopColor: (value?: BorderColorValue) => ({borderTopColor: getColor(value)}),
  borderRightColor: (value?: BorderColorValue) => ({borderRightColor: getColor(value)}),
  borderBottomColor: (value?: BorderColorValue) => ({borderBottomColor: getColor(value)}),
  borderLeftColor: (value?: BorderColorValue) => ({borderLeftColor: getColor(value)}),
  borderInlineStartColor: (value?: BorderColorValue, isRTL = false) => {
    const key = isRTL ? 'borderRightColor' : 'borderLeftColor';
    return {[key]: getColor(value)};
  },
  borderInlineEndColor: (value?: BorderColorValue, isRTL = false) => {
    const key = isRTL ? 'borderLeftColor' : 'borderRightColor';
    return {[key]: getColor(value)};
  },
};

/** Style props to set the border color properties */
export type BorderColorStyleProps = {
  /**
   * Sets `border-color` property |
   * - Accepts Canvas color tokens or other string values
   * */
  borderColor?: BorderColorValue;
  /**
   * Sets `border-top-color` property
   * - Accepts Canvas color tokens or other string values
   * */
  borderTopColor?: BorderColorValue;
  /**
   * Sets `border-right-color` property
   * - No bidirectional support
   * - Please use `borderInlineEndColor` for RTL support
   * - Accepts Canvas color tokens or other string values
   * */
  borderRightColor?: BorderColorValue;
  /**
   * Sets `border-bottom-color` property
   * - Accepts Canvas color tokens or other string values
   * */
  borderBottomColor?: BorderColorValue;
  /**
   * Sets `border-left-color` property
   * - No bidirectional support
   * - Please use `borderInlineStartColor` for RTL support
   * - Accepts Canvas color tokens or other string values
   * */
  borderLeftColor?: BorderColorValue;
  /**
   * Sets `border-left-color` property
   * - Built-in bidirectional support
   * - Properties are transformed to `borderLeftColor` or `borderRightColor`
   * - Accepts Canvas color tokens or other string values
   * */
  borderInlineStartColor?: BorderColorValue;
  /**
   * Sets `border-right-color` property
   * - Built-in bidirectional support
   * - Properties are transformed to `borderLeftColor` or `borderRightColor`
   * - Accepts Canvas color tokens or other string values
   * */
  borderInlineEndColor?: BorderColorValue;
};

export function getBorderColorStyles(
  key: keyof BorderColorStyleProps,
  value: BorderColorValue,
  isRTL = false
) {
  const styleFn = borderColorFns[key as keyof typeof borderColorFns];
  return styleFn(value, isRTL);
}
