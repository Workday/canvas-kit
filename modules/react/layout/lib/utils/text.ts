import {
  LetterSpacing,
  LineHeight,
  TextAlign,
  TextDecoration,
  TextShadow,
  TextTransform,
  WhiteSpace,
  WordBreak,
} from './types';

/** style props to for text properties */
export type TextStyleProps = {
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  /** sets `text-align` property */
  textAlign?: TextAlign;
  /** sets `text-decoration` property */
  textDecoration?: TextDecoration;
  /** sets `text-transform` property */
  textTransform?: TextTransform;
  /** sets `text-shadow` property */
  textShadow?: TextShadow;
  whiteSpace?: WhiteSpace;
  /** sets `text-align` property */
  wordBreak?: WordBreak;
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
