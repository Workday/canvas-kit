import {Property, Globals} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to for CSS flexbox container properties
 * @deprecated
 */
export type FlexStyleProps = {
  /** sets [CSS align-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
   * @deprecated
   */
  alignItems?: Property.AlignItems;
  /** sets [CSS align-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
   * @deprecated
   */
  alignContent?: Property.AlignContent;
  /**
   * - sets [CSS display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   * - @default 'flex'
   * @deprecated
   */
  display?: 'flex' | 'inline-flex' | 'none' | Globals | (string & {});
  /** sets [CSS justify-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
   * @deprecated
   */
  justifyItems?: Property.JustifyItems;
  /** sets [CSS justify-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   * @deprecated
   */
  justifyContent?: Property.JustifyContent;
  /** sets [CSS flex-wrap property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
   * @deprecated
   */
  flexWrap?: Property.FlexWrap;
  /** sets [CSS flex-direction property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
   * @deprecated
   */
  flexDirection?: Property.FlexDirection;
  /**
   * - sets [CSS gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
   * - system tokens: `space`
   * @deprecated
   */
  gap?: SystemPropValues['space'];
  /**
   * - sets [CSS column-gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
   * - system tokens: `space`
   * @deprecated
   */
  columnGap?: SystemPropValues['space'];
  /**
   * - sets [CSS row-gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
   * - system tokens: `space`
   * @deprecated
   */
  rowGap?: SystemPropValues['space'];
};

/** @deprecated */
export const flexStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'alignContent',
    properties: ['alignContent'],
    system: 'none',
  },
  {
    name: 'alignItems',
    properties: ['alignItems'],
    system: 'none',
  },
  {
    name: 'display',
    properties: ['display'],
    system: 'none',
  },
  {
    name: 'flexDirection',
    properties: ['flexDirection'],
    system: 'none',
  },
  {
    name: 'flexWrap',
    properties: ['flexWrap'],
    system: 'none',
  },
  {
    name: 'justifyContent',
    properties: ['justifyContent'],
    system: 'none',
  },
  {
    name: 'justifyItems',
    properties: ['justifyItems'],
    system: 'none',
  },
  {
    name: 'gap',
    properties: ['gap'],
    system: 'space',
  },
  {
    name: 'columnGap',
    properties: ['columnGap'],
    system: 'space',
  },
  {
    name: 'rowGap',
    properties: ['rowGap'],
    system: 'space',
  },
];

/** @deprecated */
export const flexStyleFns = buildStyleFns(flexStyleFnConfigs);
/**
 * A style prop function that takes component props and returns flexbox styles.
 * If no `FlexStyleProps` are found, it returns an empty object.
 *
 * @example
 * ```tsx
 * const FlexExample = () => (
 *   <Flex justifyContent="center" alignItems="center">
 *     Hello, flex!
 *   </Flex>
 * );
 * ```
 * @deprecated ⚠️ `flex` is deprecated and will be removed in a future major version. Please reference our new way of styling components [here](https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs
 */
export const flex = buildStylePropFn<FlexStyleProps>(flexStyleFns);
