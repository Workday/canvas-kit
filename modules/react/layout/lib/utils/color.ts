import {Property} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to set CSS color properties */
export type ColorStyleProps = {
  /**
   * - sets [CSS background-color property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
   * - system tokens: `color`
   * */
  backgroundColor?: SystemPropValues['color'];
  /**
   * - sets [CSS color property](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
   * - system tokens: `color`
   * */
  color?: SystemPropValues['color'];
  /** sets [CSS opacity property](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) */
  opacity?: Property.Opacity;
};

export const colorStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'backgroundColor',
    properties: ['backgroundColor'],
    system: 'color',
  },
  {
    name: 'color',
    properties: ['color'],
    system: 'color',
  },
  {
    name: 'opacity',
    properties: ['opacity'],
    system: 'none',
  },
];

export const colorFns = buildStyleFns(colorStyleFnConfigs);
/**
 * A style prop function that takes component props and returns color styles from Canvas token values.
 * If no `ColorStyleProps` are found, it returns an empty object.
 *
 * @example
 * ```tsx
 * const BoxExample = () => (
 *   <Box color="frenchVanilla100" opacity={0.6}>Hello, colors!</Box>
 * );
 * ```
 */
export const color = buildStylePropFn<ColorStyleProps>(colorFns);
