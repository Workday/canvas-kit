import {type, CanvasTypeProperties} from '@workday/canvas-kit-react/tokens';
import {FontFamily, FontSize, FontStyle, FontWeight} from './types';

export type FontFamilyTokens = keyof CanvasTypeProperties['fontFamilies'];
export type FontSizeTokens = keyof CanvasTypeProperties['fontSizes'];
export type FontWeightTokens = keyof CanvasTypeProperties['fontWeights'];
type FontValue = FontFamilyTokens & FontSizeTokens & FontWeightTokens;

/** style props to for color properties */
export type FontStyleProps = {
  /** sets `font-family` property */
  fontFamily?: FontFamily;
  /** sets `font-size` property */
  fontSize?: FontSize;
  /** sets `font-weight` property */
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
};

const getFontFamily = (value: FontFamily) => ({
  fontFamily: type.properties.fontFamilies[value as FontFamilyTokens] || value,
});

const getFontSize = (value: FontSize) => ({
  fontSize: type.properties.fontSizes[value as FontSizeTokens] || value,
});

const getFontWeight = (value: FontWeight) => ({
  fontWeight: type.properties.fontWeights[value as FontWeightTokens] || value,
});

const getFontStyle = (value: FontStyle) => ({
  fontStyle: value,
});

const fontProps = {
  fontFamily: getFontFamily,
  fontSize: getFontSize,
  fontWeight: getFontWeight,
  fontStyle: getFontStyle,
};

/**
 * A style prop function that takes components props and returns font styles from canvas token values.
 * If no `FontStyleProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `font` with low-level, styled components
 * const BoxExample = () => (
 *   <Box fontFamily="monospace" fontWeight="medium">Hello, fonts!</Box>
 * );
 *
 */
export function font<P extends FontStyleProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in fontProps) {
      const value = props[key as keyof FontStyleProps] as FontValue;
      const fontFn = fontProps[key as keyof FontStyleProps];
      const style = fontFn(value);
      styles = {...styles, ...style};
    }
  }

  return styles;
}
