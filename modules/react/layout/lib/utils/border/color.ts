import {buildStyleFns, StyleFnConfig} from '../buildStyleFns';
import {SystemPropValues} from '../systemProps';

/** style props to set CSS border color properties */
export type BorderColorStyleProps = {
  /**
   * - sets [CSS border-color property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
   * - system tokens: `color`
   */
  borderColor?: SystemPropValues['color'];
  /**
   * - sets [CSS border-top-color property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
   * - system tokens: `color`
   */
  borderTopColor?: SystemPropValues['color'];
  /**
   * - sets [CSS border-right-color property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
   * - no bidirectional support
   * - system tokens: `color`
   */
  borderRightColor?: SystemPropValues['color'];
  /**
   * - sets [CSS border-bottom-color property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
   * - system tokens: `color`
   */
  borderBottomColor?: SystemPropValues['color'];
  /**
   * - sets [CSS border-left-color property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
   * - no bidirectional support
   * - system tokens: `color`
   */
  borderLeftColor?: SystemPropValues['color'];
  /**
   * - sets [CSS border-inline-start-color property ](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color)
   * - bidirectional support
   * - system tokens: `color`
   */
  borderInlineStartColor?: SystemPropValues['color'];
  /**
   * - sets [CSS border-inline-end-color property ](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color)
   * - bidirectional support
   * - system tokens: `color`
   */
  borderInlineEndColor?: SystemPropValues['color'];
};

export const borderColorStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'borderColor',
    properties: ['borderColor'],
    system: 'color',
  },
  {
    name: 'borderTopColor',
    properties: ['borderTopColor'],
    system: 'color',
  },
  {
    name: 'borderRightColor',
    properties: ['borderRightColor'],
    system: 'color',
  },
  {
    name: 'borderBottomColor',
    properties: ['borderBottomColor'],
    system: 'color',
  },
  {
    name: 'borderLeftColor',
    properties: ['borderLeftColor'],
    system: 'color',
  },
  {
    name: 'borderInlineStartColor',
    properties: ['borderInlineStartColor'],
    system: 'color',
  },
  {
    name: 'borderInlineEndColor',
    properties: ['borderInlineEndColor'],
    system: 'color',
  },
];

export const borderColorFns = buildStyleFns(borderColorStyleFnConfigs);
