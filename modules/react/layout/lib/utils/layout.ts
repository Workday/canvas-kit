import {Property} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to for CSS layout properties */
export type LayoutStyleProps = {
  /** sets [CSS display property](https://developer.mozilla.org/en-US/docs/Web/CSS/displaydisplay) */
  display?: Property.Display;
  /**
   * - sets [CSS height property](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
   * - system tokens: `space`
   * */
  height?: SystemPropValues['space'];
  /** sets [CSS list-style property](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style) */
  listStyle?: Property.ListStyle;
  /**
   * - sets [CSS max-height property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
   * - system tokens: `space`
   * */
  maxHeight?: SystemPropValues['space'];
  /**
   * - sets [CSS max-width property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
   * - system tokens: `space`
   * */
  maxWidth?: SystemPropValues['space'];
  /**
   * - sets [CSS min-height property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)
   * - system tokens: `space`
   * */
  minHeight?: SystemPropValues['space'];
  /**
   * - sets [CSS min-width property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
   * - system tokens: `space`
   * */
  minWidth?: SystemPropValues['space'];
  /** sets [CSS overflow property](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) */
  overflow?: Property.Overflow;
  /** sets [CSS overflow-x property](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x) */
  overflowX?: Property.OverflowX;
  /** sets [CSS overflow-y property](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y) */
  overflowY?: Property.OverflowY;
  /** sets [CSS vertical-align property](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) */
  verticalAlign?: Property.VerticalAlign;
  /**
   * - sets [CSS width property](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
   * - system tokens: `space`
   * */
  width?: SystemPropValues['space'];
};

export const layoutStyleFnConfigs: StyleFnConfig[] = [
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
