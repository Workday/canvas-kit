import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

import {
  BorderColorStyleProps,
  BorderColorValue,
  borderColorFns,
  getBorderColorStyles,
} from './color';
import {
  BorderRadiusStyleProps,
  BorderRadiusValue,
  borderRadiusFns,
  getBorderRadiusStyles,
} from './radius';
import {
  BorderShorthandStyleProps,
  BorderShorthandValue,
  borderShorthandFns,
  getBorderShorthandStyles,
} from './shorthand';
import {BorderLineStyleProps, borderLineStyleFns, getBorderLineStyles} from './style';
import {
  BorderWidthStyleProps,
  BorderWidthValue,
  borderWidthFns,
  getBorderWidthStyles,
} from './width';
import {PropertyBorder} from '../types';

export type BorderStyleProps = BorderShorthandStyleProps &
  BorderColorStyleProps &
  BorderRadiusStyleProps &
  BorderLineStyleProps &
  BorderWidthStyleProps;

export const borderFns = {
  ...borderColorFns,
  ...borderRadiusFns,
  ...borderShorthandFns,
  ...borderLineStyleFns,
  ...borderWidthFns,
};

export function getBorderStyles<P extends BorderStyleProps>(
  styleProps: P,
  key: keyof BorderStyleProps,
  isRTL: boolean
) {
  if (key in borderColorFns) {
    const value = styleProps[key as keyof BorderColorStyleProps] as BorderColorValue;
    return getBorderColorStyles(key as keyof BorderColorStyleProps, value, isRTL);
  }

  if (key in borderRadiusFns) {
    const value = styleProps[key as keyof BorderRadiusStyleProps] as BorderRadiusValue;
    return getBorderRadiusStyles(key as keyof BorderRadiusStyleProps, value);
  }

  if (key in borderShorthandFns) {
    const value = styleProps[key as keyof BorderShorthandStyleProps] as BorderShorthandValue;
    return getBorderShorthandStyles(key as keyof BorderShorthandStyleProps, value, isRTL);
  }

  if (key in borderLineStyleFns) {
    const value = styleProps[key as keyof BorderLineStyleProps] as PropertyBorder;
    return getBorderLineStyles(key as keyof BorderLineStyleProps, value, isRTL);
  }

  if (key in borderWidthFns) {
    const value = styleProps[key as keyof BorderWidthStyleProps] as BorderWidthValue;
    return getBorderWidthStyles(key as keyof BorderWidthStyleProps, value, isRTL);
  }
  // I'm not sure why TS thinks I need this
  return {};
}

/**
 * A style prop function that takes components props and returns border styles. Some props, such as borderRadius and borderColor, are connected to our design tokens.
 * If no `BorderStyleProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `border` with low-level, styled components
 * const BoxExample = () => (
 *   <Box border={`solid 1px #333333 ${colors.blackPepper400}`}>Hello, border styles!</Box>
 * );
 *
 */
export function border<P extends BorderStyleProps & {theme: PartialEmotionCanvasTheme}>(props: P) {
  const isRTL = props.theme.canvas?.direction === 'rtl';
  let styles = {};

  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      const style = getBorderStyles(props, key as keyof BorderStyleProps, isRTL);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
