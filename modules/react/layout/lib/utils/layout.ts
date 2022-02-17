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

export const layoutProps = {
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

export function getLayoutStyles<P extends LayoutStyleProps>(
  styleProps: P,
  key: keyof LayoutStyleProps
) {
  const value = styleProps[key as keyof LayoutStyleProps];
  return {[key]: value};
}
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
  let styles = {};
  for (const key in props) {
    if (key in layoutProps) {
      const style = getLayoutStyles(props, key as keyof LayoutStyleProps);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
