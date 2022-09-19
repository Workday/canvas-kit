import {Property} from 'csstype';
import {CanvasColor} from '@workday/canvas-kit-react/tokens';
import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/** style props to set CSS background properties */
export type BackgroundStyleProps = {
  /**
   * - sets CSS background property
   * - system tokens: `color`
   * */
  background?: CanvasColor | (string & {});
  /** sets CSS background-attachment property */
  backgroundAttachment?: Property.BackgroundAttachment;
  /**
   * - sets CSS background property
   * - system tokens: `color`
   * */
  backgroundColor?: CanvasColor | (string & {});
  /** sets CSS background-image property */
  backgroundImage?: Property.BackgroundImage;
  /** sets CSS background-position property */
  backgroundPosition?: Property.BackgroundPosition;
  /** sets CSS background-repeat property */
  backgroundRepeat?: Property.BackgroundRepeat;
  /** sets CSS background-size property */
  backgroundSize?: Property.BackgroundSize;
};

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
 */
export const background = buildStylePropFn<BackgroundStyleProps>(backgroundFns);
