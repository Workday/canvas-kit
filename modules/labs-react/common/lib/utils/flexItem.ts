import {PropertyJustifySelf, PropertyAlignSelf, PropertyOrder} from './types';

/** style props to for flexbox item properties */
export type FlexItemStyleProps = {
  /** sets `flex` property */
  flex?: number | string;
  /** sets `flex-grow` property */
  flexGrow?: number | string;
  /** sets `flex-shrink` property */
  flexShrink?: number | string;
  /** sets `flex-basis` property */
  flexBasis?: number | string;
  /** sets `justify-self` property */
  justifySelf?: PropertyJustifySelf;
  /** sets `align-self` property */
  alignSelf?: PropertyAlignSelf;
  /** sets `order` property */
  order?: PropertyOrder;
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
 * If no `FlexItemStyleProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `flexItem` with low-level, styled components
 * const FlexItemExample = () => (
 *   <Box flex={1} flexBasis="auto" alignSelf={center}>
 *     Hello, flex item!
 *   </Box>
 * );
 *
 */
export function flexItem<P extends FlexItemStyleProps>(props: P) {
  const styles = {};
  for (const key in props) {
    if (key in flexItemProps) {
      const attr = flexItemProps[key as keyof FlexItemStyleProps];
      const value = props[key];
      // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
      styles[attr] = value;
    }
  }
  return styles;
}
