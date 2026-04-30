import {Globals, Property} from 'csstype';

import {StyleFnConfig, buildStyleFns, buildStylePropFn} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to for CSS grid container properties
 * @deprecated ⚠️ Style props are deprecated. Please use our `cs` prop with `createStencil` or `createStyles` to apply styles. For more information view our [Styling docs](* @deprecated ⚠️ `boxStyleFn` is deprecated and will be removed in a future major version. Please reference our new way of styling components [here](https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs).
 */
export type GridStyleProps = {
  /** sets [CSS align-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
   * @deprecated
   */
  alignItems?: Property.AlignItems;
  /** sets [CSS align-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
   * @deprecated
   */
  alignContent?: Property.AlignContent;
  /**
   * - sets [CSS display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   * - @default 'grid'
   * @deprecated
   */
  display?: 'grid' | 'inline-grid' | 'none' | Globals | (string & {});
  /** sets [CSS justify-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
   * @deprecated
   */
  justifyItems?: Property.JustifyItems;
  /** sets [CSS justify-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   * @deprecated
   */
  justifyContent?: Property.JustifyContent;
  /** sets [CSS grid-template property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)
   * @deprecated
   */
  gridTemplate?: Property.GridTemplate;
  /** sets [CSS grid-template-areas property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
   * @deprecated
   */
  gridTemplateAreas?: Property.GridTemplateAreas;
  /** sets [CSS grid-template-columns property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
   * @deprecated
   */
  gridTemplateColumns?: Property.GridTemplateColumns;
  /** sets [CSS grid-template-rows property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)
   * @deprecated
   */
  gridTemplateRows?: Property.GridTemplateRows;
  /**
   * - sets [CSS column-gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
   * - system tokens: `space`
   * @deprecated
   */
  gridColumnGap?: Property.GridColumnGap | SystemPropValues['space'];
  /**
   * - sets [CSS row-gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
   * - system tokens: `space`
   * @deprecated
   */
  gridRowGap?: Property.GridRowGap | SystemPropValues['space'];
  /**
   * - sets [CSS grid-gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap)
   * - system tokens: `space`
   * @deprecated
   */
  gridGap?: Property.GridGap | SystemPropValues['space'];
  /** sets [CSS place-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items)
   * @deprecated
   */
  gridPlaceItems?: Property.PlaceItems;
  /** sets [CSS grid-auto-columns property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
   * @deprecated
   */
  gridAutoColumns?: Property.GridAutoColumns;
  /** sets [CSS grid-auto-rows property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
   * @deprecated
   */
  gridAutoRows?: Property.GridAutoRows;
  /** sets [CSS grid-area property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
   * @deprecated
   */
  gridArea?: Property.GridArea;
  /** sets [CSS grid-auto-flow property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
   * @deprecated
   */
  gridAutoFlow?: Property.GridAutoFlow;
  /** sets [CSS grid property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid)
   * @deprecated
   */
  grid?: Property.Grid;
};

/** @deprecated */
export const gridStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'gridGap',
    properties: ['gridGap'],
    system: 'space',
  },
  {
    name: 'gridRowGap',
    properties: ['gridRowGap'],
    system: 'space',
  },
  {
    name: 'gridColumnGap',
    properties: ['gridColumnGap'],
    system: 'space',
  },
  {
    name: 'alignContent',
    properties: ['alignContent'],
    system: 'none',
  },
  {
    name: 'alignItems',
    properties: ['alignItems'],
    system: 'none',
  },
  {
    name: 'display',
    properties: ['display'],
    system: 'none',
  },
  {
    name: 'justifyContent',
    properties: ['justifyContent'],
    system: 'none',
  },
  {
    name: 'justifyItems',
    properties: ['justifyItems'],
    system: 'none',
  },
  {
    name: 'gridTemplateAreas',
    properties: ['gridTemplateAreas'],
    system: 'none',
  },
  {
    name: 'gridTemplate',
    properties: ['gridTemplate'],
    system: 'none',
  },
  {
    name: 'gridTemplateColumns',
    properties: ['gridTemplateColumns'],
    system: 'none',
  },
  {
    name: 'gridTemplateRows',
    properties: ['gridTemplateRows'],
    system: 'none',
  },
  {
    name: 'gridPlaceItems',
    properties: ['gridPlaceItems'],
    system: 'none',
  },
  {
    name: 'gridAutoColumns',
    properties: ['gridAutoColumns'],
    system: 'none',
  },
  {
    name: 'gridAutoRows',
    properties: ['gridAutoRows'],
    system: 'none',
  },
  {
    name: 'gridAutoFlow',
    properties: ['gridAutoFlow'],
    system: 'none',
  },
  {
    name: 'gridArea',
    properties: ['gridArea'],
    system: 'none',
  },
  {
    name: 'grid',
    properties: ['grid'],
    system: 'none',
  },
];

/** @deprecated */
export const gridStyleFns = buildStyleFns(gridStyleFnConfigs);
/**
 * A style prop function that takes component props and returns grid styles.
 * If no `GridStyleProps` are found, it returns an empty object.
 * Space tokens are available for gridGap, gridRowGap, gridColumnGap props.
 *
 * @example
 * ```tsx
 * const GridExample = () => (
 *   <Grid gridAutoFlow="row" justifyContent="center" alignItems="center">
 *     Hello, Grid!
 *   </Grid>
 * );
 * ```
 * @deprecated
 */
export const grid = buildStylePropFn<GridStyleProps>(gridStyleFns);
