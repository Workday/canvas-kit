import {Property} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/** style props to for CSS position properties */
export type PositionStyleProps = {
  /**
   * - sets [CSS position property](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
   * */
  position?: Property.Position;
  /**
   * - sets [CSS z-index property](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
   * */
  zIndex?: Property.ZIndex;
  /**
   * - sets [CSS top property](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
   * */
  top?: number | string;
  /**
   * - sets [CSS right property](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
   * - no bidirectional support
   * */
  right?: number | string;
  /**
   * - sets [CSS bottom property](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)
   * */
  bottom?: number | string;
  /**
   * - sets [CSS left property](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
   * - no bidirectional support
   * */
  left?: number | string;
  /**
   * - sets [CSS inset property](https://developer.mozilla.org/en-US/docs/Web/CSS/inset)
   */
  inset?: number | string;
  /**
   * - sets [CSS inset-inline-start property](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start)
   * - bidirectional support
   * */
  insetInlineStart?: number | string;
  /**
   * - sets [CSS inset-inline-end property](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end)
   * - bidirectional support
   * */
  insetInlineEnd?: number | string;
};

export const positionStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'position',
    properties: ['position'],
    system: 'none',
  },
  {
    name: 'zIndex',
    properties: ['zIndex'],
    system: 'none',
  },
  {
    name: 'top',
    properties: ['top'],
    system: 'none',
  },
  {
    name: 'right',
    properties: ['right'],
    system: 'none',
  },
  {
    name: 'bottom',
    properties: ['bottom'],
    system: 'none',
  },
  {
    name: 'left',
    properties: ['left'],
    system: 'none',
  },
  {
    name: 'inset',
    properties: ['inset'],
    system: 'none',
  },
  {
    name: 'insetInlineStart',
    properties: ['insetInlineStart'],
    system: 'none',
  },
  {
    name: 'insetInlineEnd',
    properties: ['insetInlineEnd'],
    system: 'none',
  },
];

export const positionStyleFns = buildStyleFns(positionStyleFnConfigs);
/**
 * A style prop function that takes component props and returns position styles.
 * If no `PositionProps` are found, it returns an empty object.
 *
 * @example
 * ```
 * const BoxExample = () => (
 *   <Box position="absolute" top="50%">
 *     Hello, positions!
 *   </Box>
 * );
 * ```
 */
export const position = buildStylePropFn<PositionStyleProps>(positionStyleFns);
