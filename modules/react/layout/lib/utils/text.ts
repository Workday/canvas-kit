import {Property} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to for CSS font and text properties
 * @deprecated ⚠️ Style props are deprecated. Please use our `cs` prop with `createStencil` or `createStyles` to apply styles. For more information view our [Styling docs](* @deprecated ⚠️ `boxStyleFn` is deprecated and will be removed in a future major version. Please reference our new way of styling components [here](https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs).
 */
export type TextStyleProps = {
  /**
   * - sets [CSS font-family property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
   * - system tokens: `font`
   * @deprecated
   */
  fontFamily?: Property.FontFamily | SystemPropValues['font'];
  /**
   * - sets [CSS font-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
   * - system tokens: `fontSize`
   * @deprecated
   */
  fontSize?: Property.FontSize | SystemPropValues['fontSize'];
  /** sets [CSS font-style property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
   * @deprecated
   */
  fontStyle?: Property.FontStyle;
  /**
   * - sets [CSS font-weight property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
   * - system tokens: `fontWeight`
   * @deprecated
   */
  fontWeight?: Property.FontWeight | SystemPropValues['fontWeight'];
  /** sets [CSS line-height property](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
   * @deprecated
   */
  lineHeight?: Property.LineHeight;
  /** sets [CSS letter-spacing property](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
   * @deprecated
   */
  letterSpacing?: Property.LetterSpacing;
  /** sets [CSS text-align property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
   * @deprecated
   */
  textAlign?: Property.TextAlign;
  /** sets [CSS text-decoration property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
   * @deprecated
   */
  textDecoration?: Property.TextDecoration;
  /** sets [CSS text-overflow property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
   * @deprecated
   */
  textOverflow?: Property.TextOverflow;
  /** sets [CSS text-transform property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
   * @deprecated
   */
  textTransform?: Property.TextTransform;
  /** sets [CSS text-shadow property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
   * @deprecated
   */
  textShadow?: Property.TextShadow;
  /** sets [CSS white-space property](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
   * @deprecated
   */
  whiteSpace?: Property.WhiteSpace;
  /** sets [CSS word-break property](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
   * @deprecated
   */
  wordBreak?: Property.WordBreak;
};

/** @deprecated */
export const textStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'fontFamily',
    properties: ['fontFamily'],
    system: 'font',
  },
  {
    name: 'fontSize',
    properties: ['fontSize'],
    system: 'fontSize',
  },
  {
    name: 'fontStyle',
    properties: ['fontStyle'],
    system: 'none',
  },
  {
    name: 'fontWeight',
    properties: ['fontWeight'],
    system: 'fontWeight',
  },
  {
    name: 'lineHeight',
    properties: ['lineHeight'],
    system: 'none',
  },
  {
    name: 'letterSpacing',
    properties: ['letterSpacing'],
    system: 'none',
  },
  {
    name: 'textAlign',
    properties: ['textAlign'],
    system: 'none',
  },
  {
    name: 'textDecoration',
    properties: ['textDecoration'],
    system: 'none',
  },
  {
    name: 'textOverflow',
    properties: ['textOverflow'],
    system: 'none',
  },
  {
    name: 'textTransform',
    properties: ['textTransform'],
    system: 'none',
  },
  {
    name: 'textShadow',
    properties: ['textShadow'],
    system: 'none',
  },
  {
    name: 'whiteSpace',
    properties: ['whiteSpace'],
    system: 'none',
  },
  {
    name: 'wordBreak',
    properties: ['wordBreak'],
    system: 'none',
  },
];

/** @deprecated */
export const textStyleFns = buildStyleFns(textStyleFnConfigs);
/**
 * A style prop function that takes component props and returns font and text styles.
 * If no `TextStyleProps` are found, it returns an empty object.
 *
 * @example
 * ```
 * const BoxExample = () => (
 *   <Box textAlign="center" fontWeight="medium">Hello, alignment!</Box>
 * );
 * ```
 * @deprecated
 */
export const text = buildStylePropFn<TextStyleProps>(textStyleFns);
