import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to for CSS space properties
 * @deprecated ⚠️ Style props are deprecated. Please use our `cs` prop with `createStencil` or `createStyles` to apply styles. For more information view our [Styling docs](* @deprecated ⚠️ `boxStyleFn` is deprecated and will be removed in a future major version. Please reference our new way of styling components [here](https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs).
 */
export type SpaceStyleProps = {
  /**
   * - sets [CSS margin-inline-start property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start)
   * - bidirectional support
   * - system tokens: `space`
   * @deprecated
   */
  marginInlineStart?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-inline-end property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end)
   * - bidirectional support
   * - system tokens: `space`
   * @deprecated
   */
  marginInlineEnd?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-inline-start property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start)
   * - bidirectional support
   * - system tokens: `space`
   * @deprecated
   */
  paddingInlineStart?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-inline-end property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end)
   * - bidirectional support
   * - system tokens: `space`
   * @deprecated
   */
  paddingInlineEnd?: SystemPropValues['space'];
  /**
   * - sets [CSS margin property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
   * - system tokens: `space`
   * @deprecated
   */
  margin?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-left](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left) and [margin-right properties](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
   * - system tokens: `space`
   * @deprecated
   */
  marginX?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-top](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top) and [margin-bottom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
   * - system tokens: `space`
   * @deprecated
   */
  marginY?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-top property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
   * - system tokens: `space`
   * @deprecated
   */
  marginTop?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-right property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
   * - no bidirectional support
   * - system tokens: `space`
   * @deprecated
   */
  marginRight?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-bottom property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
   * - system tokens: `space`
   * @deprecated
   */
  marginBottom?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-left property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)
   * - no bidirectional support
   * - system tokens: `space`
   * @deprecated
   */
  marginLeft?: SystemPropValues['space'];
  /**
   * - sets [CSS padding property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
   * - system tokens: `space`
   * @deprecated
   */
  padding?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-left]((https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left) and [padding-right properties](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
   * - system tokens: `space`
   * @deprecated
   */
  paddingX?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top) and [padding-bottom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)
   * - system tokens: `space`
   * @deprecated
   */
  paddingY?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-top property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
   * - system tokens: `space`
   * @deprecated
   */
  paddingTop?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-right property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
   * - no bidirectional support
   * - system tokens: `space`
   * @deprecated
   */
  paddingRight?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
   * - system tokens: `space`
   * @deprecated
   */
  paddingBottom?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-left property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
   * - no bidirectional support
   * - system tokens: `space`
   * @deprecated
   */
  paddingLeft?: SystemPropValues['space'];
};

/** @deprecated */
export const spaceStyleFnConfigs: StyleFnConfig[] = [
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

/** @deprecated */
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
 * @deprecated
 */
export const space = buildStylePropFn<SpaceStyleProps>(spaceStyleFns);
