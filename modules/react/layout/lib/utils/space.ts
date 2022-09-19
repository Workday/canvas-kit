import {CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

type SpacePropValues = CanvasSpaceKeys | number | (string & {});

/** style props to for CSS space properties */
export type SpaceStyleProps = {
  /**
   * - sets CSS margin-inline-start property
   * - bidirectional support
   * - system tokens: `space`
   * */
  marginInlineStart?: SpacePropValues;
  /**
   * - sets CSS margin-inline-end property
   * - bidirectional support
   * - system tokens: `space`
   * */
  marginInlineEnd?: SpacePropValues;
  /**
   * - sets CSS padding-inline-start property
   * - bidirectional support
   * - system tokens: `space`
   * */
  paddingInlineStart?: SpacePropValues;
  /**
   * - sets CSS padding-inline-end property
   * - bidirectional support
   * - system tokens: `space`
   * */
  paddingInlineEnd?: SpacePropValues;
  /**
   * - sets CSS margin property
   * - system tokens: `space`
   * */
  margin?: SpacePropValues;
  /**
   * - sets CSS margin-left and margin-right properties
   * - system tokens: `space`
   * */
  marginX?: SpacePropValues;
  /**
   * - sets CSS margin-top and margin-bottom properties
   * - system tokens: `space`
   * */
  marginY?: SpacePropValues;
  /**
   * - sets CSS margin-top property
   * - system tokens: `space`
   * */
  marginTop?: SpacePropValues;
  /**
   * - sets CSS margin-right property
   * - no bidirectional support
   * - system tokens: `space`
   * */
  marginRight?: SpacePropValues;
  /**
   * - sets CSS margin-bottom property
   * - system tokens: `space`
   * */
  marginBottom?: SpacePropValues;
  /**
   * - sets CSS margin-left property
   * - no bidirectional support
   * - system tokens: `space`
   * */
  marginLeft?: SpacePropValues;
  /**
   * - sets CSS padding property
   * - system tokens: `space`
   * */
  padding?: SpacePropValues;
  /**
   * - sets CSS padding-left and margin-right properties
   * - system tokens: `space`
   * */
  paddingX?: SpacePropValues;
  /**
   * - sets CSS padding-top and padding-bottom properties
   * - system tokens: `space`
   * */
  paddingY?: SpacePropValues;
  /**
   * - sets CSS padding-top property
   * - system tokens: `space`
   * */
  paddingTop?: SpacePropValues;
  /**
   * - sets CSS padding-right property
   * - no bidirectional support
   * - system tokens: `space`
   * */
  paddingRight?: SpacePropValues;
  /**
   * - sets CSS padding-bottom
   * - system tokens: `space`
   * */
  paddingBottom?: SpacePropValues;
  /**
   * - sets CSS padding-left property
   * - no bidirectional support
   * - system tokens: `space`
   * */
  paddingLeft?: SpacePropValues;
};

const spaceStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'marginInlineStart',
    properties: ['marginInlineStart'],
    system: 'space',
  },
  {
    name: 'marginInlineEnd',
    properties: ['marginInlineEnd'],
    system: 'space',
  },
  {
    name: 'paddingInlineStart',
    properties: ['paddingInlineStart'],
    system: 'space',
  },
  {
    name: 'paddingInlineEnd',
    properties: ['paddingInlineEnd'],
    system: 'space',
  },
  {
    name: 'margin',
    properties: ['margin'],
    system: 'space',
  },
  {
    name: 'marginX',
    properties: ['marginLeft', 'marginRight'],
    system: 'space',
  },
  {
    name: 'marginY',
    properties: ['marginTop', 'marginBottom'],
    system: 'space',
  },
  {
    name: 'marginTop',
    properties: ['marginTop'],
    system: 'space',
  },
  {
    name: 'marginRight',
    properties: ['marginRight'],
    system: 'space',
  },
  {
    name: 'marginBottom',
    properties: ['marginBottom'],
    system: 'space',
  },
  {
    name: 'marginLeft',
    properties: ['marginLeft'],
    system: 'space',
  },
  {
    name: 'padding',
    properties: ['padding'],
    system: 'space',
  },
  {
    name: 'paddingX',
    properties: ['paddingLeft', 'paddingRight'],
    system: 'space',
  },
  {
    name: 'paddingY',
    properties: ['paddingTop', 'paddingBottom'],
    system: 'space',
  },
  {
    name: 'paddingTop',
    properties: ['paddingTop'],
    system: 'space',
  },
  {
    name: 'paddingRight',
    properties: ['paddingRight'],
    system: 'space',
  },
  {
    name: 'paddingBottom',
    properties: ['paddingBottom'],
    system: 'space',
  },
  {
    name: 'paddingLeft',
    properties: ['paddingLeft'],
    system: 'space',
  },
];

export const spaceStyleFns = buildStyleFns(spaceStyleFnConfigs);
/**
 * A style prop function that takes component props and returns space styles.
 * If no `SpaceStyleProps` are found, it returns an empty object.
 *
 * @example
 * ```tsx
 * const BoxExample = () => (
 *   <Box padding="xs" margin="m">
 *     Hello, space!
 *   </Box>
 * );
 * ```
 */
export const space = buildStylePropFn<SpaceStyleProps>(spaceStyleFns);
