import {colors as colorTokens, CanvasColor} from '@workday/canvas-kit-react/tokens';

export type ColorTokens = typeof colorTokens;

export type ColorValue = CanvasColor | (string & {});

function getColor(value?: ColorValue) {
  if (value && value in colorTokens) {
    return colorTokens[value];
  }
  return value;
}

/** style props to for color properties */
export type ColorStyleProps = {
  /** sets `background` property */
  background?: ColorValue;
  /** sets `background-color` property */
  backgroundColor?: ColorValue;
  /** sets `background-image` property */
  backgroundImage?: string;
  /** sets `color` property */
  color?: ColorValue;
};

export const colorFns = {
  background: (value?: ColorValue) => ({background: getColor(value)}),
  backgroundColor: (value?: ColorValue) => ({backgroundColor: getColor(value)}),
  backgroundImage: (value?: string) => ({backgroundImage: value}),
  color: (value?: ColorValue) => ({color: getColor(value)}),
};

export function getColorStyles<P extends ColorStyleProps>(
  styleProps: P,
  key: keyof ColorStyleProps
) {
  const value = styleProps[key as keyof ColorStyleProps];
  const styleFn = colorFns[key as keyof typeof colorFns];
  return styleFn(value);
}

/**
 * A style prop function that takes components props and returns color styles from canvas token values.
 * If no `ColorStyleProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `color` with low-level, styled components
 * const BoxExample = () => (
 *   <Box backgroundColor="blueberry500" color="frenchVanilla100">Hello, colors!</Box>
 * );
 *
 */
export function color<P extends ColorStyleProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in colorFns) {
      const style = getColorStyles(props, key as keyof typeof colorFns);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
