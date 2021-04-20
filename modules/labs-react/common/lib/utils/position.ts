import * as CSS from 'csstype';

export type PositionProps = {
  /** sets position styles  */
  position?: CSS.Property.Position;
  /** sets zIndex styles  */
  zIndex?: CSS.Property.ZIndex;
  /** sets top styles  */
  top?: number | string;
  /** sets right styles  */
  right?: number | string;
  /** sets bottom styles  */
  bottom?: number | string;
  /** sets left styles  */
  left?: number | string;
};

export const positionProps = {
  position: 'position',
  zIndex: 'zIndex',
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

/**
 * A style prop function that takes components props and returns position styles.
 * If no `PositionProps` are found, it returns an empty object.
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
    if (key in positionProps) {
      const attr = positionProps[key as keyof PositionProps];
      const value = props[key];
      // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
      styles[attr] = value;
    }
  }
  return styles;
}
