import {PartialEmotionCanvasTheme} from '../../../../common';
import {PropertyBorder} from '../types';

/** Style props to set the border style properties */
export type BorderLineStyleProps = {
  /**
   * Sets `border-style` property
   * - Accepts string or number values
   * */
  borderStyle?: PropertyBorder;
  /**
   * Sets `border-top-style` property
   * - Accepts string or number values
   * */
  borderTopStyle?: PropertyBorder;
  /**
   * Sets `border-right-style` property
   * - No bidirectional support
   * - Please use `borderInlineStartStyle` for RTL support
   * - Accepts string or number values
   * */
  borderRightStyle?: PropertyBorder;
  /**
   * Sets `border-bottom-style` property
   * - Accepts string or number values
   * */
  borderBottomStyle?: PropertyBorder;
  /**
   * Sets `border-left-style` property
   * - No bidirectional support
   * - Please use `borderInlineEndStyle` for RTL support
   * - Accepts string or number values
   * */
  borderLeftStyle?: PropertyBorder;
  /**
   * Sets `border-left-style` property
   * - Built-in bidirectional support
   * - Properties are transformed to `borderLeftStyle` or `borderRightStyle`
   * - Accepts string or number values
   * */
  borderInlineStartStyle?: PropertyBorder;
  /**
   * Sets `border-right-style` property
   * - Built-in bidirectional support
   * - Properties are transformed to `borderLeftStyle` or `borderRightStyle`
   * - Accepts string or number values
   * */
  borderInlineEndStyle?: PropertyBorder;
};

export const borderLineStyleFns = {
  borderStyle: (value?: PropertyBorder) => ({borderStyle: value}),
  borderTopStyle: (value?: PropertyBorder) => ({borderTopStyle: value}),
  borderRightStyle: (value?: PropertyBorder) => ({borderRightStyle: value}),
  borderBottomStyle: (value?: PropertyBorder) => ({borderBottomStyle: value}),
  borderLeftStyle: (value?: PropertyBorder) => ({borderLeftStyle: value}),
  borderInlineStartStyle: (value?: PropertyBorder, isRTL = false) => {
    const key = isRTL ? 'borderRightStyle' : 'borderLeftStyle';
    return {[key]: value};
  },
  borderInlineEndStyle: (value?: PropertyBorder, isRTL = false) => {
    const key = isRTL ? 'borderLeftStyle' : 'borderRightStyle';
    return {[key]: value};
  },
};

export function getBorderLineStyles<P extends BorderLineStyleProps>(
  key: keyof BorderLineStyleProps,
  value: PropertyBorder,
  isRTL = false
) {
  const styleFn = borderLineStyleFns[key as keyof typeof borderLineStyleFns];
  return styleFn(value, isRTL);
}
