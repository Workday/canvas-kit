import * as CSS from 'csstype';

export type PositionProps = {
  /** sets position styles  */
  position?: CSS.PositionProperty;
  /** sets zIndex styles  */
  zIndex?: CSS.ZIndexProperty;
  /** sets top styles  */
  top?: number | string;
  /** sets right styles  */
  right?: number | string;
  /** sets bottom styles  */
  bottom?: number | string;
  /** sets left styles  */
  left?: number | string;
};

export const positionKeys = {
  position: 'position',
  zIndex: 'zIndex',
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

/**
 * A style prop function that takes components props and returns position styles from canvas token values.
 * If no `DepthProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `position` with low-level, styled components
 * const BoxExample = () => (
 *   <Box position="absolute" top="50%">
 *     Hello, positions!
 *   </Box>
 * );
 *
 * // But it can also be used as a standalone function
 * const props = {position: "absolute", top: "50%"};
 * const positionStyles = position(props);
 *
 */
export function position<P extends PositionProps>(props: P) {
  const styles = {};
  for (const key in props) {
    if (key in positionKeys) {
      const attr = positionKeys[key as keyof PositionProps];
      const value = props[key];
      // @ts-ignore
      styles[attr] = value;
    }
  }
  return styles;
}
