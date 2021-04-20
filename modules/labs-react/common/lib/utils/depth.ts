import {depth as depthTokens} from '@workday/canvas-kit-react/tokens';

export type DepthTokens = typeof depthTokens;
export type DepthTokenKeys = keyof DepthTokens;
export type DepthTokenValues = DepthTokens[keyof DepthTokens];

export type DepthProps = {
  /** sets depth styles (box-shadow & border) */
  depth?: DepthTokenKeys;
};

// handler functions for depth props
export const depthProps = {
  depth: (token: DepthTokenKeys) => depthTokens[token],
};

/**
 * A style prop function that takes components props and returns depth styles from canvas token values.
 * If no `DepthProps` are found, it returns an empty object.
 *
 * @example
 * // You'll mostly likely use `depth` with low-level, styled components
 * const BoxExample = () => (
 *   <Box depth={3}>Hello, box shadows!</Box>
 * );
 *
 * // But it can also be used as a standalone function
 * const props = { depth: 1 };
 * const depthStyles = depth(props);
 *
 */
export function depth<P extends DepthProps>(props: P): DepthTokenValues {
  for (const key in props) {
    if (key in depthProps) {
      const token = props[key as keyof DepthProps] as DepthTokenKeys;
      const depthFn = depthProps[key as keyof DepthProps];
      return depthFn(token);
    }
  }
  return {} as DepthTokenValues;
}
