import {Property} from 'csstype';

/** style props to for position properties */
export type PositionProps = {
  /** sets `position` property  */
  position?: Property.Position;
  /** sets `zIndex` property  */
  zIndex?: Property.ZIndex;
  /** sets `top` property  */
  top?: number | string;
  /** sets `right` property  */
  right?: number | string;
  /** sets `bottom` property  */
  bottom?: number | string;
  /** sets `left` property  */
  left?: number | string;
};

const positionProps = {
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
