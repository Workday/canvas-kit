import {Property} from 'csstype';

import {buildStyleFns, StyleFnConfig} from '../buildStyleFns';

/** style props to set CSS border properties */
export type BorderShorthandStyleProps = {
  /** sets CSS border property */
  border?: Property.Border;
  /** sets CSS border-top property */
  borderTop?: Property.BorderTop;
  /**
   * - sets CSS border-right property
   * - no bidirectional support
   * */
  borderRight?: Property.BorderRight;
  /** sets CSS border-bottom property */
  borderBottom?: Property.BorderBottom;
  /**
   * - sets CSS border-left property
   * - no bidirectional support
   * */
  borderLeft?: Property.BorderLeft;
  /**
   * - sets CSS border-inline-start property
   * - bidirectional support
   * */
  borderInlineStart?: Property.BorderInlineStart;
  /**
   * - sets CSS border-inline-end property
   * - bidirectional support
   * */
  borderInlineEnd?: Property.BorderInlineEnd;
};

const borderShorthandStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'border',
    properties: ['border'],
    system: 'none',
  },
  {
    name: 'borderTop',
    properties: ['borderTop'],
    system: 'none',
  },
  {
    name: 'borderRight',
    properties: ['borderRight'],
    system: 'none',
  },
  {
    name: 'borderBottom',
    properties: ['borderBottom'],
    system: 'none',
  },
  {
    name: 'borderLeft',
    properties: ['borderLeft'],
    system: 'none',
  },
  {
    name: 'borderInlineStart',
    properties: ['borderInlineStart'],
    system: 'none',
  },
  {
    name: 'borderInlineEnd',
    properties: ['borderInlineEnd'],
    system: 'none',
  },
];

export const borderShorthandFns = buildStyleFns(borderShorthandStyleFnConfigs);
