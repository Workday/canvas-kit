import {
  PropertyDisplay,
  PropertyListStyle,
  PropertyOverflow,
  PropertyOverflowX,
  PropertyOverflowY,
  PropertyVerticalAlign,
} from './types';

/** style props to for layout properties */
export type LayoutStyleProps = {
  /** sets `display` property */
  display?: PropertyDisplay;
  /** sets `height` property */
  height?: number | string;
  /** sets `list-style property */
  listStyle?: PropertyListStyle;
  /** sets `max-height` property */
  maxHeight?: number | string;
  /** sets `max-width` property */
  maxWidth?: number | string;
  /** sets `min-height` property */
  minHeight?: number | string;
  /** sets `min-width` property */
  minWidth?: number | string;
  /** sets `overflow` property */
  overflow?: PropertyOverflow;
  /** sets `overflow-x` property */
  overflowX?: PropertyOverflowX;
  /** sets `overflow-y` property */
  overflowY?: PropertyOverflowY;
  /** sets `vertical-align` property */
  verticalAlign?: PropertyVerticalAlign;
  /** sets `width` property */
  width?: number | string;
};

const layoutProps = {
  display: 'display',
  height: 'height',
  listStyle: 'listStyle',
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
 * If no `LayoutStyleProps` are found, it returns an empty object.
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
export function layout<P extends LayoutStyleProps>(props: P) {
  const styles = {};
  for (const key in props) {
    if (key in layoutProps) {
      const attr = layoutProps[key as keyof LayoutStyleProps];
      const value = props[key];
      // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
      styles[attr] = value;
    }
  }
  return styles;
}
