import {Property} from 'csstype';

import {buildStyleFns, StyleFnConfig} from '../buildStyleFns';

/** style props to set CSS border width properties */
export type BorderWidthStyleProps = {
  /** sets [CSS border-width property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width) */
  borderWidth?: Property.BorderWidth | number;
  /** sets [CSS border-top-width property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width) */
  borderTopWidth?: Property.BorderTopWidth | number;
  /**
   * - sets [CSS border-right-width property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)
   * - no bidirectional support
   * */
  borderRightWidth?: Property.BorderRightWidth | number;
  /** sets [CSS border-bottom-width property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width) */
  borderBottomWidth?: Property.BorderBottomWidth | number;
  /**
   * - sets [CSS border-left-width property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)
   * - no bidirectional support
   * */
  borderLeftWidth?: Property.BorderLeftWidth | number;
  /**
   * - sets [CSS border-inline-start-width property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width)
   * - bidirectional support
   * */
  borderInlineStartWidth?: Property.BorderInlineStartWidth | number;
  /**
   * - sets [CSS border-inline-end property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end)
   * - bidirectional support
   * */
  borderInlineEndWidth?: Property.BorderInlineEndWidth | number;
};

export const borderWidthStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'borderWidth',
    properties: ['borderWidth'],
    system: 'none',
  },
  {
    name: 'borderTopWidth',
    properties: ['borderTopWidth'],
    system: 'none',
  },
  {
    name: 'borderRightWidth',
    properties: ['borderRightWidth'],
    system: 'none',
  },
  {
    name: 'borderBottomWidth',
    properties: ['borderBottomWidth'],
    system: 'none',
  },
  {
    name: 'borderLeftWidth',
    properties: ['borderLeftWidth'],
    system: 'none',
  },
  {
    name: 'borderInlineStartWidth',
    properties: ['borderInlineStartWidth'],
    system: 'none',
  },
  {
    name: 'borderInlineEndWidth',
    properties: ['borderInlineEndWidth'],
    system: 'none',
  },
];

export const borderWidthFns = buildStyleFns(borderWidthStyleFnConfigs);
