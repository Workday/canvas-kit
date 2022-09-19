import {Property} from 'csstype';
import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/** style props to for CSS flexbox container properties */
export type FlexStyleProps = {
  /** sets CSS align-items property */
  alignItems?: Property.AlignItems;
  /** sets CSS align-content property */
  alignContent?: Property.AlignContent;
  /**
   * - sets CSS display property
   * - @default 'flex'
   * */
  display?: 'flex' | 'inline-flex';
  /** sets CSS justify-items property */
  justifyItems?: Property.JustifyItems;
  /** sets CSS justify-content property */
  justifyContent?: Property.JustifyContent;
  /** sets CSS flex-wrap property */
  flexWrap?: Property.FlexWrap;
  /** sets CSS flex-direction property */
  flexDirection?: Property.FlexDirection;
};

const flexStyleFnConfigs: StyleFnConfig[] = [
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
