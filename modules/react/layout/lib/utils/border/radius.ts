import {
  borderRadius as borderRadiusTokens,
  CanvasBorderRadiusKeys,
} from '@workday/canvas-kit-react/tokens';

export type BorderRadiusValue = CanvasBorderRadiusKeys | number | (string & {});

function getRadius(value?: BorderRadiusValue) {
  if (value && value in borderRadiusTokens) {
    return borderRadiusTokens[value as CanvasBorderRadiusKeys];
  }
  return value;
}

/** style props to set the border radius properties */
export type BorderRadiusStyleProps = {
  /**
   * Sets `border-radius` property
   * - Accepts Canvas border radius tokens, strings, or numbers
   * */
  borderRadius?: BorderRadiusValue;
  /**
   * Sets `border-top-left-radius` property
   * - Accepts Canvas border radius tokens, strings, or numbers
   * */
  borderTopLeftRadius?: BorderRadiusValue;
  /**
   * Sets `border-top-right-radius` property
   * - Accepts Canvas border radius tokens, strings, or numbers
   * */
  borderTopRightRadius?: BorderRadiusValue;
  /**
   * Sets `border-bottom-left-radius` property
   * - Accepts Canvas border radius tokens, strings, or numbers
   * */
  borderBottomLeftRadius?: BorderRadiusValue;
  /**
   * Sets `border-bottom-right-radius` property
   * - Accepts Canvas border radius tokens, strings, or numbers
   * */
  borderBottomRightRadius?: BorderRadiusValue;
};

export const borderRadiusFns = {
  borderRadius: (value?: BorderRadiusValue) => ({borderRadius: getRadius(value)}),
  borderTopLeftRadius: (value?: BorderRadiusValue) => ({borderTopLeftRadius: getRadius(value)}),
  borderTopRightRadius: (value?: BorderRadiusValue) => ({borderTopRightRadius: getRadius(value)}),
  borderBottomLeftRadius: (value?: BorderRadiusValue) => ({
    borderBottomLeftRadius: getRadius(value),
  }),
  borderBottomRightRadius: (value?: BorderRadiusValue) => ({
    borderBottomRightRadius: getRadius(value),
  }),
};

export function getBorderRadiusStyles(key: keyof BorderRadiusStyleProps, value: BorderRadiusValue) {
  // const value = props[key as keyof BorderRadiusStyleProps];
  const styleFn = borderRadiusFns[key as keyof typeof borderRadiusFns];
  return styleFn(value);
}
