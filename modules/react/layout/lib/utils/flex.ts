import {Property, Globals} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to for CSS flexbox container properties */
export type FlexStyleProps = {
  /** sets [CSS align-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) */
  alignItems?: Property.AlignItems;
  /** sets [CSS align-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) */
  alignContent?: Property.AlignContent;
  /**
   * - sets [CSS display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   * - @default 'flex'
   * */
  display?: 'flex' | 'inline-flex' | 'none' | Globals | (string & {});
  /** sets [CSS justify-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items) */
  justifyItems?: Property.JustifyItems;
  /** sets [CSS justify-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) */
  justifyContent?: Property.JustifyContent;
  /** sets [CSS flex-wrap property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) */
  flexWrap?: Property.FlexWrap;
  /** sets [CSS flex-direction property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) */
  flexDirection?: Property.FlexDirection;
  /**
   * - sets [CSS gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
   * - system tokens: `space`
   * */
  gap?: SystemPropValues['space'];
  /**
   * - sets [CSS column-gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
   * - system tokens: `space`
   * */
  columnGap?: SystemPropValues['space'];
  /**
   * - sets [CSS row-gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
   * - system tokens: `space`
   * */
  rowGap?: SystemPropValues['space'];
};

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
 */
export const flex = buildStylePropFn<FlexStyleProps>(flexStyleFns);
