import {StyleFnConfig, buildStyleFns} from '../buildStyleFns';
import {SystemPropValues} from '../systemProps';

/** style props to set CSS border radius properties
 * @deprecated
 */
export type BorderRadiusStyleProps = {
  /**
   * - sets [CSS border-radius property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
   * - system tokens: `shape`
   * @deprecated ⚠️ Please use the `cs` prop with `createStyles` and `createStencil` to apply styles to our components. For more information, view our [Styling docs](https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs).
   */
  borderRadius?: SystemPropValues['shape'];
  /**
   * - sets [CSS border-top-left-radius property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
   * - system tokens: `shape`
   * @deprecated
   */
  borderTopLeftRadius?: SystemPropValues['shape'];
  /**
   * - sets [CSS border-top-right-radius property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
   * - system tokens: `shape`
   * @deprecated
   */
  borderTopRightRadius?: SystemPropValues['shape'];
  /**
   * - sets [CSS border-bottom-left-radius property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
   * - system tokens: `shape`
   * @deprecated
   */
  borderBottomLeftRadius?: SystemPropValues['shape'];
  /**
   * - sets [CSS border-bottom-right-radius property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
   * - system tokens: `shape`
   * @deprecated
   */
  borderBottomRightRadius?: SystemPropValues['shape'];
};

/** @deprecated */
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

/** @deprecated */
export const borderRadiusFns = buildStyleFns(borderRadiusStyleFnConfigs);
