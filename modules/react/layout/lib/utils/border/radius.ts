import {CanvasBorderRadiusKeys} from '@workday/canvas-kit-react/tokens';

import {buildStyleFns, StyleFnConfig} from '../buildStyleFns';

/** style props to set CSS border radius properties */
export type BorderRadiusStyleProps = {
  /**
   * - sets CSS border-radius property
   * - system tokens: `shape`
   * */
  borderRadius?: CanvasBorderRadiusKeys | number | (string & {});
  /**
   * - sets CSS border-top-left-radius property
   * - system tokens: `shape`
   * */
  borderTopLeftRadius?: CanvasBorderRadiusKeys | number | (string & {});
  /**
   * - sets CSS border-top-right-radius property
   * - system tokens: `shape`
   * */
  borderTopRightRadius?: CanvasBorderRadiusKeys | number | (string & {});
  /**
   * - sets CSS border-bottom-left-radius property
   * - system tokens: `shape`
   * */
  borderBottomLeftRadius?: CanvasBorderRadiusKeys | number | (string & {});
  /**
   * - sets CSS border-bottom-right-radius property
   * - system tokens: `shape`
   * */
  borderBottomRightRadius?: CanvasBorderRadiusKeys | number | (string & {});
  /**
   * - sets CSS border-top-inline-start-radius property
   * - bidirectional support
   * - system tokens: `shape`
   * */
  borderTopInlineStartRadius?: CanvasBorderRadiusKeys | number | (string & {});
  /**
   * - sets CSS border-top-inline-end-radius property
   * - bidirectional support
   * - system tokens: `shape`
   * */
  borderTopInlineEndRadius?: CanvasBorderRadiusKeys | number | (string & {});
  /**
   * - sets CSS border-bottom-inline-start-radius property
   * - bidirectional support
   * - system tokens: `shape`
   * */
  borderBottomInlineStartRadius?: CanvasBorderRadiusKeys | number | (string & {});
  /**
   * - sets CSS border-bottom-inline-end-radius property
   * - bidirectional support) *
   * - system tokens: `shape`
   * */
  borderBottomInlineEndRadius?: CanvasBorderRadiusKeys | number | (string & {});
};

const borderRadiusStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'borderRadius',
    properties: ['borderRadius'],
    system: 'shape',
  },
  {
    name: 'borderTopLeftRadius',
    properties: ['borderTopLeftRadius'],
    system: 'shape',
  },
  {
    name: 'borderTopRightRadius',
    properties: ['borderTopRightRadius'],
    system: 'shape',
  },
  {
    name: 'borderBottomLeftRadius',
    properties: ['borderBottomLeftRadius'],
    system: 'shape',
  },
  {
    name: 'borderBottomRightRadius',
    properties: ['borderBottomRightRadius'],
    system: 'shape',
  },
  {
    name: 'borderTopInlineStartRadius',
    properties: ['borderTopInlineStartRadius'],
    system: 'shape',
  },
  {
    name: 'borderTopInlineEndRadius',
    properties: ['borderTopInlineEndRadius'],
    system: 'shape',
  },
  {
    name: 'borderBottomInlineStartRadius',
    properties: ['borderBottomInlineStartRadius'],
    system: 'shape',
  },
  {
    name: 'borderBottomInlineEndRadius',
    properties: ['borderBottomInlineEndRadius'],
    system: 'shape',
  },
];

export const borderRadiusFns = buildStyleFns(borderRadiusStyleFnConfigs);
