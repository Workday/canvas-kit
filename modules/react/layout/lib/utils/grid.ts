import {Property, Globals} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';
import {SystemPropValues} from './systemProps';

/** style props to for CSS grid container properties */
export type GridStyleProps = {
  /** sets [CSS align-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) */
  alignItems?: Property.AlignItems;
  /** sets [CSS align-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) */
  alignContent?: Property.AlignContent;
  /**
   * - sets [CSS display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   * - @default 'grid'
   * */
  display?: 'grid' | 'inline-grid' | 'none' | Globals | (string & {});
  /** sets [CSS justify-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items) */
  justifyItems?: Property.JustifyItems;
  /** sets [CSS justify-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) */
  justifyContent?: Property.JustifyContent;
  /** sets [CSS grid-template property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template) */
  gridTemplate?: Property.GridTemplate;
  /** sets [CSS grid-template-areas property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) */
  gridTemplateAreas?: Property.GridTemplateAreas;
  /** sets [CSS grid-template-columns property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) */
  gridTemplateColumns?: Property.GridTemplateColumns;
  /** sets [CSS grid-template-rows property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows) */
  gridTemplateRows?: Property.GridTemplateRows;
  /**
   * - sets [CSS column-gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
   * - system tokens: `space`
   * */
  gridColumnGap?: Property.GridColumnGap | SystemPropValues['space'];
  /**
   * - sets [CSS row-gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
   * - system tokens: `space`
   * */
  gridRowGap?: Property.GridRowGap | SystemPropValues['space'];
  /**
   * - sets [CSS grid-gap property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap)
   * - system tokens: `space`
   * */
  gridGap?: Property.GridGap | SystemPropValues['space'];
  /** sets [CSS place-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items) */
  gridPlaceItems?: Property.PlaceItems;
  /** sets [CSS grid-auto-columns property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns) */
  gridAutoColumns?: Property.GridAutoColumns;
  /** sets [CSS grid-auto-rows property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows) */
  gridAutoRows?: Property.GridAutoRows;
  /** sets [CSS grid-area property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area) */
  gridArea?: Property.GridArea;
  /** sets [CSS grid-auto-flow property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) */
  gridAutoFlow?: Property.GridAutoFlow;
  /** sets [CSS grid property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) */
  grid?: Property.Grid;
};

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
 */
export const grid = buildStylePropFn<GridStyleProps>(gridStyleFns);
