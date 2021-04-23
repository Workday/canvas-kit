import {colors as colorTokens, CanvasColor} from '@workday/canvas-kit-react/tokens';

export type ColorTokens = typeof colorTokens;

/** style props to for color properties */
export type ColorProps = {
  /** sets `background-color` property */
  backgroundColor?: CanvasColor | (string & {});
  /** sets `color` property */
  color?: CanvasColor | (string & {});
};

const getBackgroundColor = (value: CanvasColor | string) => ({
  backgroundColor: colorTokens[value] || value,
});

const getColor = (value: CanvasColor | string) => ({
  color: colorTokens[value] || value,
});

const colorProps = {
  backgroundColor: getBackgroundColor,
  color: getColor,
};

/**
 * A style prop function that takes components props and returns color styles from canvas token values.
 * If no `ColorProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `color` with low-level, styled components
 * const BoxExample = () => (
 *   <Box backgroundColor="blueberry500" color="frenchVanilla100">Hello, colors!</Box>
 * );
 *
 */
export function color<P extends ColorProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in colorProps) {
      const value = props[key as keyof ColorProps] as CanvasColor | string;
      const colorFn = colorProps[key as keyof ColorProps];
      const style = colorFn(value);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
