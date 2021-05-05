import {colors as colorTokens, CanvasColor} from '@workday/canvas-kit-react/tokens';

export type ColorTokens = typeof colorTokens;

/** style props to for color properties */
export type ColorStyleProps = {
  /** sets `background` property */
  background?: CanvasColor | (string & {});
  /** sets `background-color` property */
  backgroundColor?: CanvasColor | (string & {});
  /** sets `background-image` property */
  backgroundImage?: string;
  /** sets `color` property */
  color?: CanvasColor | (string & {});
};

const getBackground = (value: CanvasColor | string) => ({
  background: colorTokens[value] || value,
});

const getBackgroundColor = (value: CanvasColor | string) => ({
  backgroundColor: colorTokens[value] || value,
});

const getBackgroundImage = (value: string) => ({
  backgroundImage: value,
});

const getColor = (value: CanvasColor | string) => ({
  color: colorTokens[value] || value,
});

const colorProps = {
  background: getBackground,
  backgroundColor: getBackgroundColor,
  backgroundImage: getBackgroundImage,
  color: getColor,
};

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
    if (key in colorProps) {
      const value = props[key as keyof ColorStyleProps] as CanvasColor | string;
      const colorFn = colorProps[key as keyof ColorStyleProps];
      const style = colorFn(value);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
