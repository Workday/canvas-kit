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
];

export const borderRadiusFns = buildStyleFns(borderRadiusStyleFnConfigs);
