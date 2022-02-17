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

/** Style props to for flexbox item properties */
export const flexItemProps = {
  flex: 'flex',
  flexGrow: 'flexGrow',
  flexShrink: 'flexShrink',
  flexBasis: 'flexBasis',
  justifySelf: 'justifySelf',
  alignSelf: 'alignSelf',
  order: 'order',
};

export function getFlexItemStyles<P extends FlexItemStyleProps>(
  styleProps: P,
  key: keyof FlexItemStyleProps
) {
  const value = styleProps[key as keyof FlexItemStyleProps] || '';
  return {[key]: value};
}

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
  let styles = {};
  for (const key in props) {
    if (key in flexItemProps) {
      const style = getFlexItemStyles(props, key as keyof FlexItemStyleProps);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
