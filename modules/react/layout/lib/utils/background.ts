import {Property} from 'csstype';

import {StyleFnConfig, buildStyleFns, buildStylePropFn} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to set CSS background properties
 * @deprecated
 */
export type BackgroundStyleProps = {
  /**
   * - sets [CSS background property](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
   * - system tokens: `color`
   * @deprecated Use `cs` prop with `system.color.bg.*` tokens
   */
  background?: SystemPropValues['color'];
  /** sets [CSS background-attachment property](https://developer.mozilla.org/en-US/docs/Web/CSS/)
   * @deprecated
   */
  backgroundAttachment?: Property.BackgroundAttachment;
  /**
   * - sets [CSS background-color property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
   * - system tokens: `color`
   * @deprecated Use `cs` prop with `system.color.bg.*` tokens
   */
  backgroundColor?: SystemPropValues['color'];
  /** sets [CSS background-image property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
   * @deprecated
   */
  backgroundImage?: Property.BackgroundImage;
  /** sets [CSS background-position property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
   * @deprecated
   */
  backgroundPosition?: Property.BackgroundPosition;
  /** sets [CSS background-repeat property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
   * @deprecated
   */
  backgroundRepeat?: Property.BackgroundRepeat;
  /** sets [CSS background-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
   * @deprecated
   */
  backgroundSize?: Property.BackgroundSize;
};

/** @deprecated */
export const backgroundStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'background',
    properties: ['background'],
    system: 'color',
  },
  {
    name: 'backgroundAttachment',
    properties: ['backgroundAttachment'],
    system: 'none',
  },
  {
    name: 'backgroundColor',
    properties: ['backgroundColor'],
    system: 'color',
  },
  {
    name: 'backgroundImage',
    properties: ['backgroundImage'],
    system: 'none',
  },
  {
    name: 'backgroundPosition',
    properties: ['backgroundPosition'],
    system: 'none',
  },
  {
    name: 'backgroundRepeat',
    properties: ['backgroundRepeat'],
    system: 'none',
  },
  {
    name: 'backgroundSize',
    properties: ['backgroundSize'],
    system: 'none',
  },
];

/** @deprecated */
export const backgroundFns = buildStyleFns(backgroundStyleFnConfigs);
/**
 * A style prop function that takes component props and returns border styles.
 * Some props, such as background and backgroundColor, are connected to our design tokens.
 * If no `BackgroundStyleProps` are found, it returns an empty object.
 *
 * @example
 * ```tsx
 * const BackgroundExample = () => (
 *   <Box backgroundColor="blueberry500">
 *     Hello, background styles!
 *   </Box>
 * );
 *```
 @deprecated
 */
export const background = buildStylePropFn<BackgroundStyleProps>(backgroundFns);
