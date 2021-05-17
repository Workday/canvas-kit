import {Property} from 'csstype';

/** style props to for flexbox item properties */
export type FlexItemProps = {
  /** sets `flex` property */
  flex?: number | string;
  /** sets `flex-grow` property */
  flexGrow?: number | string;
  /** sets `flex-shrink` property */
  flexShrink?: number | string;
  /** sets `flex-basis` property */
  flexBasis?: number | string;
  /** sets `justify-self` property */
  justifySelf?: Property.JustifySelf;
  /** sets `align-self` property */
  alignSelf?: Property.AlignSelf;
  /** sets `order` property */
  order?: Property.Order;
};

/** style props to for flexbox item properties */
const flexItemProps = {
  flex: 'flex',
  flexGrow: 'flexGrow',
  flexShrink: 'flexShrink',
  flexBasis: 'flexBasis',
  justifySelf: 'justifySelf',
  alignSelf: 'alignSelf',
  order: 'order',
};

/**
 * A style prop function that takes component props and returns flexbox item styles.
 * If no `FlexItemProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `flexItem` with low-level, styled components
 * const FlexItemExample = () => (
 *   <Box flex={1} alignSelf={center}>
 *     Hello, flex item!
 *   </Box>
 * );
 *
 */
export function flexItem<P extends FlexItemProps>(props: P) {
  const styles = {};
  for (const key in props) {
    if (key in flexItemProps) {
      const attr = flexItemProps[key as keyof FlexItemProps];
      const value = props[key];
      // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
      styles[attr] = value;
    }
  }
  return styles;
}
