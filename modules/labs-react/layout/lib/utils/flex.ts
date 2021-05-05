import {Property} from 'csstype';

/** style props to for flexbox container properties */
export type FlexStyleProps = {
  /** sets `align-items` property */
  alignItems?: Property.AlignItems;
  /** sets `align-content` property */
  alignContent?: Property.AlignContent;
  /** sets `display` property */
  display?: 'flex' | 'inline-flex';
  /** sets `justify-items` property */
  justifyItems?: Property.JustifyItems;
  /** sets `justify-content` property */
  justifyContent?: Property.JustifyContent;
  /** sets `flex-wrap` property */
  flexWrap?: Property.FlexWrap;
  /** sets `flex-direction` property */
  flexDirection?: Property.FlexDirection;
};

const flexProps = {
  alignContent: 'alignContent',
  alignItems: 'alignItems',
  display: 'display',
  flexDirection: 'flexDirection',
  flexWrap: 'flexWrap',
  justifyContent: 'justifyContent',
  justifyItems: 'justifyItems',
};

/**
 * A style prop function that takes component props and returns flexbox styles.
 * If no `FlexStyleProps` are found, it returns an empty object.
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
export function flex<P extends FlexStyleProps>(props: P) {
  const styles = {};
  for (const key in props) {
    if (key in flexProps) {
      const attr = flexProps[key as keyof FlexStyleProps];
      const value = props[key];
      // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
      styles[attr] = value;
    }
  }
  return styles;
}
