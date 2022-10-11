import {Property} from 'csstype';
import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/** style props to for CSS flex item properties */
export type FlexItemStyleProps = {
  /** sets [CSS flex property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) */
  flex?: Property.Flex;
  /** sets [CSS flex-grow property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) */
  flexGrow?: Property.FlexGrow;
  /** sets [CSS flex-shrink property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) */
  flexShrink?: Property.FlexShrink;
  /** sets [CSS flex-basis property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) */
  flexBasis?: Property.FlexBasis;
  /** sets [CSS justify-self property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self) */
  justifySelf?: Property.JustifySelf;
  /** sets [CSS align-self property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) */
  alignSelf?: Property.AlignSelf;
  /** sets [CSS order property](https://developer.mozilla.org/en-US/docs/Web/CSS/order) */
  order?: Property.Order;
};

export const flexItemStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'flex',
    properties: ['flex'],
    system: 'none',
  },
  {
    name: 'flexGrow',
    properties: ['flexGrow'],
    system: 'none',
  },
  {
    name: 'flexShrink',
    properties: ['flexShrink'],
    system: 'none',
  },
  {
    name: 'flexBasis',
    properties: ['flexBasis'],
    system: 'none',
  },
  {
    name: 'justifySelf',
    properties: ['justifySelf'],
    system: 'none',
  },
  {
    name: 'alignSelf',
    properties: ['alignSelf'],
    system: 'none',
  },
  {
    name: 'order',
    properties: ['order'],
    system: 'none',
  },
];

export const flexItemStyleFns = buildStyleFns(flexItemStyleFnConfigs);
/**
 * A style prop function that takes component props and returns flexbox item styles.
 * If no `FlexItemStyleProps` are found, it returns an empty object.
 *
 * @example
 * ```tsx
 * const FlexItemExample = () => (
 *   <Box flex={1} flexBasis="auto" alignSelf={center}>
 *     Hello, flex item!
 *   </Box>
 * );
 * ```
 */
export const flexItem = buildStylePropFn<FlexItemStyleProps>(flexItemStyleFns);
