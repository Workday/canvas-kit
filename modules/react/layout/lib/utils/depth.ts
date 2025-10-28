import {Property} from 'csstype';
import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to for depth styles
 * @deprecated
 */
export type DepthStyleProps = {
  /** sets [CSS box-shadow styles](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
   * @deprecated
   */
  boxShadow?: Property.BoxShadow;
  /**
   * - sets [CSS box-shadow styles](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
   * - system tokens: `depth`
   * @deprecated
   */
  depth?: SystemPropValues['depth'];
};

/** @deprecated */
export const depthStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'boxShadow',
    properties: ['boxShadow'],
    system: 'none',
  },
  {
    name: 'depth',
    properties: ['boxShadow'],
    system: 'depth',
  },
];

/** @deprecated */
export const depthStyleFns = buildStyleFns(depthStyleFnConfigs);
/**
 * A style prop function that takes component props and returns depth styles from Canvas token values.
 * If no `DepthStyleProps` are found, it returns an empty object.
 *
 * @example
 * ```tsx
 * const DepthExample = () => (
 *   <Box depth={3}>Hello, box shadows!</Box>
 * );
 * ```
 * @deprecated
 */
export const depth = buildStylePropFn<DepthStyleProps>(depthStyleFns);
