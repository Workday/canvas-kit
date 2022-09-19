import {Property} from 'csstype';
import {depth as depthTokens} from '@workday/canvas-kit-react/tokens';
import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

export type DepthTokens = typeof depthTokens;
export type DepthTokenKeys = keyof DepthTokens;

/** style props to for depth styles */
export type DepthStyleProps = {
  /** sets CSS box-shadow styles */
  boxShadow?: Property.BoxShadow;
  /**
   * - sets CSS box-shadow styles
   * - system tokens: `depth`
   * */
  depth?: DepthTokenKeys;
};

const depthStyleFnConfigs: StyleFnConfig[] = [
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
 */
export const depth = buildStylePropFn<DepthStyleProps>(depthStyleFns);
