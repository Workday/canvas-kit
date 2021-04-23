import {Property} from 'csstype';

/** style props to for flexbox properties */
export type FlexProps = {
  /** sets `align-items` property */
  alignItems?: Property.AlignItems;
  /** sets `align-content` property */
  alignContent?: Property.AlignContent;
  /** sets `display` property */
  display?: Property.Display;
  /** sets `justify-items` property */
  justifyItems?: Property.JustifyItems;
  /** sets `justify-content` property */
  justifyContent?: Property.JustifyContent;
  /** sets `flex-wrap` property */
  flexWrap?: Property.FlexWrap;
  /** sets `flex-wrap` property (alias for flexWrap) */
  wrap?: Property.FlexWrap;
  /** sets `flex-direction` property */
  flexDirection?: Property.FlexDirection;
  /** sets `flex-direction` property (alias for flexDirection) */
  direction?: Property.FlexDirection;
  /** sets `flex` property */
  flex?: number | string;
  /** sets `flex-grow` property */
  flexGrow?: number | string;
  /** sets `flex-grow` property (alias for flexGrow) */
  grow?: number | string;
  /** sets `flex-shrink` property */
  flexShrink?: number | string;
  /** sets `flex-shrink` property (alias for flexShrink) */
  shrink?: number | string;
  /** sets `flex-basis` property */
  flexBasis?: number | string;
  /** sets `flex-basis` property (alias for flexBasis) */
  basis?: number | string;
  /** sets `justify-self` property */
  justifySelf?: Property.JustifySelf;
  /** sets `align-self` property */
  alignSelf?: Property.AlignSelf;
  /** sets `order` property */
  order?: Property.Order;
};

const flexProps = {
  alignItems: 'alignItems',
  alignContent: 'alignContent',
  display: 'display',
  justifyItems: 'justifyItems',
  justifyContent: 'justifyContent',
  flexWrap: 'flexWrap',
  wrap: 'flexWrap',
  flexDirection: 'flexDirection',
  direction: 'flexDirection',
  flex: 'flex',
  flexGrow: 'flexGrow',
  grow: 'flexGrow',
  flexShrink: 'flexShrink',
  shrink: 'flexShrink',
  flexBasis: 'flexBasis',
  basis: 'basis',
  justifySelf: 'justifySelf',
  alignSelf: 'alignSelf',
  order: 'order',
};

/**
 * A style prop function that takes component props and returns flexbox styles.
 * If no `FlexProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `flex` with low-level, styled components
 * const FlexExample = () => (
 *   <Flex justifyContent="center" alignItems="center">
 *     Hello, flex!
 *   </Flex>
 * );
 *
 */
export function flex<P extends FlexProps>(props: P) {
  const styles = {};
  for (const key in props) {
    if (key in flexProps) {
      const attr = flexProps[key as keyof FlexProps];
      const value = props[key];
      // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
      styles[attr] = value;
    }
  }
  return styles;
}
