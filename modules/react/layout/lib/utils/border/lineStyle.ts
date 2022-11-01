import {Property} from 'csstype';

import {buildStyleFns, StyleFnConfig} from '../buildStyleFns';

/** style props to set CSS border style properties */
export type BorderLineStyleProps = {
  /** sets [CSS border-collapse property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse) */
  borderCollapse?: Property.BorderCollapse;
  /** sets [CSS border-spacing property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing) */
  borderSpacing?: Property.BorderSpacing;
  /** sets [CSS border-style property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) */
  borderStyle?: Property.Border;
  /** sets [CSS border-top-style property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style) */
  borderTopStyle?: Property.Border;
  /**
   * - sets [CSS border-right-style property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style)
   * - no bidirectional support
   */
  borderRightStyle?: Property.Border;
  /** sets [CSS border-bottom-style property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style) */
  borderBottomStyle?: Property.Border;
  /**
   * - sets [CSS border-left-style property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style)
   * - no bidirectional support
   */
  borderLeftStyle?: Property.Border;
  /**
   * - sets [CSS border-inline-start-style property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style)
   * - bidirectional support
   */
  borderInlineStartStyle?: Property.Border;
  /**
   * - sets [CSS border-inline-end-style property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style)
   * - bidirectional support
   */
  borderInlineEndStyle?: Property.Border;
};

export const borderLineStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'borderCollapse',
    properties: ['borderCollapse'],
    system: 'none',
  },
  {
    name: 'borderSpacing',
    properties: ['borderSpacing'],
    system: 'none',
  },
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
