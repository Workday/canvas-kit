import {Property} from 'csstype';

import {buildStyleFns, StyleFnConfig} from '../buildStyleFns';

/** style props to set CSS border properties */
export type BorderShorthandStyleProps = {
  /** sets [CSS border property](https://developer.mozilla.org/en-US/docs/Web/CSS/border) */
  border?: Property.Border;
  /** sets [CSS border-top property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top) */
  borderTop?: Property.BorderTop;
  /**
   * - sets [CSS border-right property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
   * - no bidirectional support
   * */
  borderRight?: Property.BorderRight;
  /** sets [CSS border-bottom property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom) */
  borderBottom?: Property.BorderBottom;
  /**
   * - sets [CSS border-left property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
   * - no bidirectional support
   * */
  borderLeft?: Property.BorderLeft;
  /**
   * - sets [CSS border-inline-start property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start)
   * - bidirectional support
   * */
  borderInlineStart?: Property.BorderInlineStart;
  /**
   * - sets [CSS border-inline-end property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end)
   * - bidirectional support
   * */
  borderInlineEnd?: Property.BorderInlineEnd;
};

export const borderShorthandStyleFnConfigs: StyleFnConfig[] = [
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
