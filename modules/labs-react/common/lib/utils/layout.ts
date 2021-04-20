import * as CSS from 'csstype';

export type LayoutProps = {
  /** sets display styles  */
  display?: CSS.Property.Display;
  // /** sets height styles */
  height?: number | string;
  /** sets max-height styles */
  maxHeight?: number | string;
  /** sets max-width styles */
  maxWidth?: number | string;
  /** sets min-height styles */
  minHeight?: number | string;
  /** sets min-width styles */
  minWidth?: number | string;
  /** sets overflow styles */
  overflow?: CSS.Property.Overflow;
  /** sets overflow-x styles */
  overflowX?: CSS.Property.OverflowX;
  /** sets overflow-y styles */
  overflowY?: CSS.Property.OverflowY;
  /** sets vertical-align styles */
  verticalAlign?: CSS.Property.VerticalAlign;
  // /** sets width styles */
  width?: number | string;
};

export const layoutProps = {
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
 * // But it can also be used as a standalone function
 * const props = {display: "inline-block", height: "50%"};
 * const layoutStyles = layout(props);
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
