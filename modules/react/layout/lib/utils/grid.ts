import {Property} from 'csstype';
import {CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

export type GridSpacePropsValues = CanvasSpaceKeys | number | (string & {});

/** style props to for CSS grid container properties */
export type GridStyleProps = {
  /** sets CSS align-items property */
  alignItems?: Property.AlignItems;
  /** sets CSS align-content property */
  alignContent?: Property.AlignContent;
  /**
   * - sets CSS display property
   * - @default 'grid'
   * */
  display?: 'grid' | 'inline-grid';
  /** sets CSS justify-items property */
  justifyItems?: Property.JustifyItems;
  /** sets CSS justify-content property */
  justifyContent?: Property.JustifyContent;
  /** sets CSS grid-template property */
  gridTemplate?: Property.GridTemplate;
  /** sets CSS grid-template-area property */
  gridTemplateAreas?: Property.GridTemplateAreas;
  /** sets CSS grid-template-columns property */
  gridTemplateColumns?: Property.GridTemplateColumns;
  /** sets CSS grid-template-rows property */
  gridTemplateRows?: Property.GridTemplateRows;
  /**
   * - sets CSS column-gap property
   * - system tokens: `space`
   * */
  gridColumnGap?: Property.GridColumnGap | GridSpacePropsValues;
  /**
   * - sets CSS row-gap property
   * - system tokens: `space`
   * */
  gridRowGap?: Property.GridRowGap | GridSpacePropsValues;
  /**
   * - sets CSS grid-gap property
   * - system tokens: `space`
   * */
  gridGap?: Property.GridGap | GridSpacePropsValues;
  /** sets CSS place-items property */
  gridPlaceItems?: Property.PlaceItems;
  /** sets CSS grid-auto-columns property */
  gridAutoColumns?: Property.GridAutoColumns;
  /** sets CSS grid-auto-rows property */
  gridAutoRows?: Property.GridAutoRows;
  /** sets CSS grid-area property */
  gridArea?: Property.GridArea;
  /** sets CSS grid-auto-flow property */
  gridAutoFlow?: Property.GridAutoFlow;
  /** sets CSS grid property */
  grid?: Property.Grid;
};

const gridStyleFnConfigs: StyleFnConfig[] = [
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
    name: 'gridColumnGap',
    properties: ['gridColumnGap'],
    system: 'none',
  },
  {
    name: 'gridRowGap',
    properties: ['gridRowGap'],
    system: 'none',
  },
  {
    name: 'gridGap',
    properties: ['gridGap'],
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
