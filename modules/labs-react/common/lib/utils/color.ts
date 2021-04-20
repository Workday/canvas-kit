import {colors as colorTokens, CanvasColor} from '@workday/canvas-kit-react/tokens';

export type ColorTokens = typeof colorTokens;

export type ColorProps = {
  /** sets background color styles */
  backgroundColor?: CanvasColor | (string & {});
  /** sets color styles */
  color?: CanvasColor | (string & {});
};

const getBackgroundColor = (value: CanvasColor | string) => ({
  backgroundColor: colorTokens[value] || value,
});

const getColor = (value: CanvasColor | string) => ({
  color: colorTokens[value] || value,
});

export const colorProps = {
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
 * // But it can also be used as a standalone function
 * const props = { color: 'frenchVanilla100' };
 * const colorStyles = color(props);
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
