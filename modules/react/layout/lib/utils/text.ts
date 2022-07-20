import {Property} from 'csstype';

/** style props to for text properties */
export type TextStyleProps = {
  /** sets `line-height` property */
  lineHeight?: Property.LineHeight;
  /** sets `letter-spacing` property */
  letterSpacing?: Property.LetterSpacing;
  /** sets `text-align` property */
  textAlign?: Property.TextAlign;
  /** sets `text-decoration` property */
  textDecoration?: Property.TextDecoration;
  /** sets `text-transform` property */
  textTransform?: Property.TextTransform;
  /** sets `text-shadow` property */
  textShadow?: Property.TextShadow;
  /** sets `white-space` property */
  whiteSpace?: Property.WhiteSpace;
  /** sets `word-break` property */
  wordBreak?: Property.WordBreak;
};

const textProps = [
  'lineHeight',
  'letterSpacing',
  'textAlign',
  'textDecoration',
  'textTransform',
  'textShadow',
  'whiteSpace',
  'wordBreak',
];

/**
 * A style prop function that takes components props and returns text styles.
 * If no `TextStyleProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `text-align` with low-level, styled components
 * const BoxExample = () => (
 *   <Box textAlign="center">Hello, alignment!</Box>
 * );
 *
 */
export function text<P extends TextStyleProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (textProps.includes(key)) {
      const value = props[key as keyof TextStyleProps] as string;
      styles = {...styles, [key]: value};
    }
  }
  return styles;
}
