import {Property} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to for CSS font and text properties */
export type TextStyleProps = {
  /**
   * - sets [CSS font-family property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
   * - system tokens: `font` */
  fontFamily?: Property.FontFamily | SystemPropValues['font'];
  /**
   * - sets [CSS font-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
   * - system tokens: `fontSize` */
  fontSize?: Property.FontSize | SystemPropValues['fontSize'];
  /** sets [CSS font-style property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) */
  fontStyle?: Property.FontStyle;
  /**
   * - sets [CSS font-weight property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
   * - system tokens: `fontWeight` */
  fontWeight?: Property.FontWeight | SystemPropValues['fontWeight'];
  /** sets [CSS line-height property](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) */
  lineHeight?: Property.LineHeight;
  /** sets [CSS letter-spacing property](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) */
  letterSpacing?: Property.LetterSpacing;
  /** sets [CSS text-align property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align) */
  textAlign?: Property.TextAlign;
  /** sets [CSS text-decoration property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) */
  textDecoration?: Property.TextDecoration;
  /** sets [CSS text-overflow property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow) */
  textOverflow?: Property.TextOverflow;
  /** sets [CSS text-transform property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) */
  textTransform?: Property.TextTransform;
  /** sets [CSS text-shadow property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow) */
  textShadow?: Property.TextShadow;
  /** sets [CSS white-space property](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) */
  whiteSpace?: Property.WhiteSpace;
  /** sets [CSS word-break property](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break) */
  wordBreak?: Property.WordBreak;
};

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
 */
export const text = buildStylePropFn<TextStyleProps>(textStyleFns);
