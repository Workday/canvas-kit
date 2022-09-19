import {Property} from 'csstype';
import {CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

type SpacePropValues = CanvasSpaceKeys | number | (string & {});

/** style props to for CSS layout properties */
export type LayoutStyleProps = {
  /** sets CSS display property */
  display?: Property.Display;
  /**
   * - sets CSS height property
   * - system tokens: `space`
   * */
  height?: SpacePropValues;
  /** sets CSS list-style property */
  listStyle?: Property.ListStyle;
  /**
   * - sets CSS max-height property
   * - system tokens: `space`
   * */
  maxHeight?: SpacePropValues;
  /**
   * - sets CSS max-width property
   * - system tokens: `space`
   * */
  maxWidth?: SpacePropValues;
  /**
   * - sets CSS min-height property
   * - system tokens: `space`
   * */
  minHeight?: SpacePropValues;
  /**
   * - sets CSS min-width property
   * - system tokens: `space`
   * */
  minWidth?: SpacePropValues;
  /** sets CSS overflow property */
  overflow?: Property.Overflow;
  /** sets CSS overflow-x property */
  overflowX?: Property.OverflowX;
  /** sets CSS overflow-y property */
  overflowY?: Property.OverflowY;
  /** sets CSS vertical-align property */
  verticalAlign?: Property.VerticalAlign;
  /**
   * - sets CSS width property
   * - system tokens: `space`
   * */
  width?: SpacePropValues;
};

const layoutStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'display',
    properties: ['display'],
    system: 'none',
  },
  {
    name: 'height',
    properties: ['height'],
    system: 'space',
  },
  {
    name: 'listStyle',
    properties: ['listStyle'],
    system: 'none',
  },
  {
    name: 'maxHeight',
    properties: ['maxHeight'],
    system: 'space',
  },
  {
    name: 'maxWidth',
    properties: ['maxWidth'],
    system: 'space',
  },
  {
    name: 'minHeight',
    properties: ['minHeight'],
    system: 'space',
  },
  {
    name: 'minWidth',
    properties: ['minWidth'],
    system: 'space',
  },
  {
    name: 'overflow',
    properties: ['overflow'],
    system: 'none',
  },
  {
    name: 'overflowX',
    properties: ['overflowX'],
    system: 'none',
  },
  {
    name: 'overflowY',
    properties: ['overflowY'],
    system: 'none',
  },
  {
    name: 'verticalAlign',
    properties: ['verticalAlign'],
    system: 'none',
  },
  {
    name: 'width',
    properties: ['width'],
    system: 'space',
  },
];

export const layoutStyleFns = buildStyleFns(layoutStyleFnConfigs);
/**
 * A style prop function that takes component props and returns layout styles.
 * If no `LayoutStyleProps` are found, it returns an empty object.
 *
 * @example
 * ```tsx
 * const LayoutExample = () => (
 *   <Box display="inline-block" height="50%">
 *     Hello, layout!
 *   </Box>
 * );
 * ```
 */
export const layout = buildStylePropFn<LayoutStyleProps>(layoutStyleFns);
