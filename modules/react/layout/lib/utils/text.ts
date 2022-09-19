import {Property} from 'csstype';
import {CanvasTypeProperties} from '@workday/canvas-kit-react/tokens';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/** style props to for CSS font and text properties */
export type TextStyleProps = {
  /**
   * - sets CSS font-family property
   * - system tokens: `font` */
  fontFamily?: Property.FontFamily | keyof CanvasTypeProperties['fontFamilies'];
  /**
   * - sets CSS font-size property
   * - system tokens: `fontSize` */
  fontSize?: Property.FontSize | keyof CanvasTypeProperties['fontSizes'];
  /** sets CSS font-style property */
  fontStyle?: Property.FontStyle;
  /**
   * - sets CSS font-weight property
   * - system tokens: `fontWeight` */
  fontWeight?: Property.FontWeight | keyof CanvasTypeProperties['fontWeights'];
  /** sets CSS line-height property */
  lineHeight?: Property.LineHeight;
  /** sets CSS letter-spacing property */
  letterSpacing?: Property.LetterSpacing;
  /** sets CSS text-align property */
  textAlign?: Property.TextAlign;
  /** sets CSS text-decoration property */
  textDecoration?: Property.TextDecoration;
  /** sets CSS text-overflow property */
  textOverflow?: Property.TextOverflow;
  /** sets CSS text-transform property */
  textTransform?: Property.TextTransform;
  /** sets CSS text-shadow property */
  textShadow?: Property.TextShadow;
  /** sets CSS white-space property */
  whiteSpace?: Property.WhiteSpace;
  /** sets CSS word-break property */
  wordBreak?: Property.WordBreak;
};

const TextStyleFnConfigs: StyleFnConfig[] = [
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

export const textStyleFns = buildStyleFns(TextStyleFnConfigs);
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
