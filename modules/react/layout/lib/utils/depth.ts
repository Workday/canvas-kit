import {depth as depthTokens} from '@workday/canvas-kit-react/tokens';

export type DepthTokens = typeof depthTokens;
export type DepthTokenKeys = keyof DepthTokens;
export type DepthTokenValues = DepthTokens[keyof DepthTokens];

/** style props to for depth styles */
export type DepthStyleProps = {
  /** sets depth styles (box-shadow & border) */
  depth?: DepthTokenKeys;
};

export const depthFns = {
  depth: (value?: DepthTokenKeys) => (value ? depthTokens[value] : {}),
};

export function getDepthStyles<P extends DepthStyleProps>(
  styleProps: P,
  key: keyof DepthStyleProps
) {
  const value = styleProps[key as keyof DepthStyleProps];
  const styleFn = depthFns[key as keyof typeof depthFns];
  return styleFn(value);
}

/**
 * A style prop function that takes components props and returns depth styles from canvas token values.
 * If no `DepthStyleProps` are found, it returns an empty object.
 *
 * @example
 * // You'll mostly likely use `depth` with low-level, styled components
 * const BoxExample = () => (
 *   <Box depth={3}>Hello, box shadows!</Box>
 * );
 *
 */
export function depth<P extends DepthStyleProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in depthFns) {
      const style = getDepthStyles(props, key as keyof DepthStyleProps);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
