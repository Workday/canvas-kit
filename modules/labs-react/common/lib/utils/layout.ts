import {Property} from 'csstype';

/** style props to for layout properties */
export type LayoutProps = {
  /** sets `display` property */
  display?: Property.Display;
  /** sets `height` property */
  height?: number | string;
  /** sets `max-height` property */
  maxHeight?: number | string;
  /** sets `max-width` property */
  maxWidth?: number | string;
  /** sets `min-height` property */
  minHeight?: number | string;
  /** sets `min-width` property */
  minWidth?: number | string;
  /** sets `overflow` property */
  overflow?: Property.Overflow;
  /** sets `overflow-x` property */
  overflowX?: Property.OverflowX;
  /** sets `overflow-y` property */
  overflowY?: Property.OverflowY;
  /** sets `vertical-align` property */
  verticalAlign?: Property.VerticalAlign;
  /** sets `width` property */
  width?: number | string;
};

const layoutProps = {
  display: 'display',
  height: 'height',
  maxHeight: 'maxHeight',
  maxWidth: 'maxWidth',
  minHeight: 'minHeight',
  minWidth: 'minWidth',
  overflow: 'overflow',
  overflowX: 'overflowX',
  overflowY: 'overflowY',
  verticalAlign: 'verticalAlign',
  width: 'width',
};

/**
 * A style prop function that takes components props and returns layout styles.
 * If no `LayoutProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `layout` with low-level, styled components
 * const BoxExample = () => (
 *   <Box display="inline-block" height="50%">
 *     Hello, positions!
 *   </Box>
 * );
 *
 */
export function layout<P extends LayoutProps>(props: P) {
  const styles = {};
  for (const key in props) {
    if (key in layoutProps) {
      const attr = layoutProps[key as keyof LayoutProps];
      const value = props[key];
      // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
      styles[attr] = value;
    }
  }
  return styles;
}
