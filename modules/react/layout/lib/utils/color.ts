import {Property} from 'csstype';
import {CanvasColor} from '@workday/canvas-kit-react/tokens';
import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/** style props to set CSS color properties */
export type ColorStyleProps = {
  /**
   * - sets CSS backgroundColor property
   * - system tokens: `color`
   * */
  backgroundColor?: CanvasColor | (string & {});
  /**
   * - sets CSS color property
   * - system tokens: `color`
   * */
  color?: CanvasColor | (string & {});
  /** sets CSS opacity property */
  opacity?: Property.Opacity;
};

const colorStyleFnConfigs: StyleFnConfig[] = [
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
