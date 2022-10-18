import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to for CSS space properties */
export type SpaceStyleProps = {
  /**
   * - sets [CSS margin-inline-start property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start)
   * - bidirectional support
   * - system tokens: `space`
   * */
  marginInlineStart?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-inline-end property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end)
   * - bidirectional support
   * - system tokens: `space`
   * */
  marginInlineEnd?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-inline-start property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start)
   * - bidirectional support
   * - system tokens: `space`
   * */
  paddingInlineStart?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-inline-end property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end)
   * - bidirectional support
   * - system tokens: `space`
   * */
  paddingInlineEnd?: SystemPropValues['space'];
  /**
   * - sets [CSS margin property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
   * - system tokens: `space`
   * */
  margin?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-left](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left) and [margin-right properties](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
   * - system tokens: `space`
   * */
  marginX?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-top](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top) and [margin-bottom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
   * - system tokens: `space`
   * */
  marginY?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-top property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
   * - system tokens: `space`
   * */
  marginTop?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-right property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
   * - no bidirectional support
   * - system tokens: `space`
   * */
  marginRight?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-bottom property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
   * - system tokens: `space`
   * */
  marginBottom?: SystemPropValues['space'];
  /**
   * - sets [CSS margin-left property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)
   * - no bidirectional support
   * - system tokens: `space`
   * */
  marginLeft?: SystemPropValues['space'];
  /**
   * - sets [CSS padding property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
   * - system tokens: `space`
   * */
  padding?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-left]((https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left) and [padding-right properties](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
   * - system tokens: `space`
   * */
  paddingX?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top) and [padding-bottom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)
   * - system tokens: `space`
   * */
  paddingY?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-top property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
   * - system tokens: `space`
   * */
  paddingTop?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-right property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
   * - no bidirectional support
   * - system tokens: `space`
   * */
  paddingRight?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
   * - system tokens: `space`
   * */
  paddingBottom?: SystemPropValues['space'];
  /**
   * - sets [CSS padding-left property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
   * - no bidirectional support
   * - system tokens: `space`
   * */
  paddingLeft?: SystemPropValues['space'];
};

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
