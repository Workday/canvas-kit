import {buildStyleFns, StyleFnConfig} from '../buildStyleFns';
import {SystemPropValues} from '../systemProps';

/** style props to set CSS border radius properties */
export type BorderRadiusStyleProps = {
  /**
   * - sets [CSS border-radius property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
   * - system tokens: `shape`
   * */
  borderRadius?: SystemPropValues['shape'];
  /**
   * - sets [CSS border-top-left-radius property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
   * - system tokens: `shape`
   * */
  borderTopLeftRadius?: SystemPropValues['shape'];
  /**
   * - sets [CSS border-top-right-radius property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
   * - system tokens: `shape`
   * */
  borderTopRightRadius?: SystemPropValues['shape'];
  /**
   * - sets [CSS border-bottom-left-radius property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
   * - system tokens: `shape`
   * */
  borderBottomLeftRadius?: SystemPropValues['shape'];
  /**
   * - sets [CSS border-bottom-right-radius property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
   * - system tokens: `shape`
   * */
  borderBottomRightRadius?: SystemPropValues['shape'];
};

export const borderRadiusStyleFnConfigs: StyleFnConfig[] = [
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
