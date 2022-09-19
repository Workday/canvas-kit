import {Property} from 'csstype';

import {buildStyleFns, StyleFnConfig} from '../buildStyleFns';

/** style props to set CSS border style properties */
export type BorderLineStyleProps = {
  /** sets CSS border-style property */
  borderStyle?: Property.Border;
  /** sets CSS border-top-style property */
  borderTopStyle?: Property.Border;
  /**
   * - sets CSS border-right-style property
   * - no bidirectional support
   */
  borderRightStyle?: Property.Border;
  /** sets CSS border-bottom-style property */
  borderBottomStyle?: Property.Border;
  /**
   * - sets CSS border-left-style property
   * - no bidirectional support
   */
  borderLeftStyle?: Property.Border;
  /**
   * - sets CSS border-inline-start-style property
   * - bidirectional support
   */
  borderInlineStartStyle?: Property.Border;
  /**
   * - sets CSS border-inline-end-style property
   * - bidirectional support
   */
  borderInlineEndStyle?: Property.Border;
};

const borderLineStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'borderStyle',
    properties: ['borderStyle'],
    system: 'none',
  },
  {
    name: 'borderTopStyle',
    properties: ['borderTopStyle'],
    system: 'none',
  },
  {
    name: 'borderRightStyle',
    properties: ['borderRightStyle'],
    system: 'none',
  },
  {
    name: 'borderBottomStyle',
    properties: ['borderBottomStyle'],
    system: 'none',
  },
  {
    name: 'borderLeftStyle',
    properties: ['borderLeftStyle'],
    system: 'none',
  },
  {
    name: 'borderInlineStartStyle',
    properties: ['borderInlineStartStyle'],
    system: 'none',
  },
  {
    name: 'borderInlineEndStyle',
    properties: ['borderInlineEndStyle'],
    system: 'none',
  },
];

export const borderLineStyleFns = buildStyleFns(borderLineStyleFnConfigs);
