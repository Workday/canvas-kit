import {Property} from 'csstype';
import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/** style props to for CSS flex item properties */
export type FlexItemStyleProps = {
  /** sets CSS flex property */
  flex?: Property.Flex;
  /** sets CSS flex-grow property */
  flexGrow?: Property.FlexGrow;
  /** sets CSS flex-shrink property */
  flexShrink?: Property.FlexShrink;
  /** sets CSS flex-basis property */
  flexBasis?: Property.FlexBasis;
  /** sets CSS justify-self property */
  justifySelf?: Property.JustifySelf;
  /** sets CSS align-self property */
  alignSelf?: Property.AlignSelf;
  /** sets CSS order property */
  order?: Property.Order;
};

const flexItemStyleFnConfigs: StyleFnConfig[] = [
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
