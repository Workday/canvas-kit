import {
  PropertyAlignItems,
  PropertyAlignContent,
  PropertyJustifyItems,
  PropertyJustifyContent,
  PropertyFlexWrap,
  PropertyFlexDirection,
} from './types';

/** style props to for flexbox container properties */
export type FlexStyleProps = {
  /** sets `align-items` property */
  alignItems?: PropertyAlignItems;
  /** sets `align-content` property */
  alignContent?: PropertyAlignContent;
  /**
   * sets `display` property
   * @default 'flex'
   * */
  display?: 'flex' | 'inline-flex';
  /** sets `justify-items` property */
  justifyItems?: PropertyJustifyItems;
  /** sets `justify-content` property */
  justifyContent?: PropertyJustifyContent;
  /** sets `flex-wrap` property */
  flexWrap?: PropertyFlexWrap;
  /** sets `flex-direction` property */
  flexDirection?: PropertyFlexDirection;
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
