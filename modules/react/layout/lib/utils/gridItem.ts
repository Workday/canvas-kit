import {Property} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/** style props to for CSS grid item properties */
export type GridItemStyleProps = {
  /** sets CSS grid-column-start property */
  gridColumnStart?: Property.GridColumnStart;
  /** sets CSS grid-column-end property */
  gridColumnEnd?: Property.GridColumnEnd;
  /** sets CSS grid-row-start property */
  gridRowStart?: Property.GridRowStart;
  /** sets CSS grid-row-end property */
  gridRowEnd?: Property.GridRowEnd;
  /** sets CSS grid-column property */
  gridColumn?: Property.GridColumn;
  /** sets CSS grid-row property */
  gridRow?: Property.GridRow;
  /** sets CSS grid-area property */
  gridArea?: Property.GridArea;
  /** sets CSS justify-self property */
  justifySelf?: Property.JustifySelf;
  /** sets CSS align-self property */
  alignSelf?: Property.AlignSelf;
  /** sets CSS place-self property */
  placeSelf?: Property.PlaceSelf;
};

const gridItemStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'gridColumnStart',
    properties: ['gridColumnStart'],
    system: 'none',
  },
  {
    name: 'gridColumnEnd',
    properties: ['gridColumnEnd'],
    system: 'none',
  },
  {
    name: 'gridRowStart',
    properties: ['gridRowStart'],
    system: 'none',
  },
  {
    name: 'gridRowEnd',
    properties: ['gridRowEnd'],
    system: 'none',
  },
  {
    name: 'gridColumn',
    properties: ['gridColumn'],
    system: 'none',
  },
  {
    name: 'gridRow',
    properties: ['gridRow'],
    system: 'none',
  },
  {
    name: 'gridArea',
    properties: ['gridArea'],
    system: 'none',
  },
  {
    name: 'justifySelf',
    properties: ['justifySelf'],
    system: 'none',
  },
  {
    name: 'alignSelf',
    properties: ['alignSelf'],
    system: 'none',
  },
  {
    name: 'placeSelf',
    properties: ['placeSelf'],
    system: 'none',
  },
];

export const gridItemStyleFns = buildStyleFns(gridItemStyleFnConfigs);
/**
 * A style prop function that takes component props and returns grid styles.
 * If no `GridItemStyleProps` are found, it returns an empty object.
 *
 * @example
 * ```tsx
 * const GridItemExample = () => (
 *   <Grid.Item gridRowStart="1" justifySelf="center" gridArea="Card">
 *     Hello, Grid Item!
 *   </Grid.Item>
 * );
 * ```
 */
export const gridItem = buildStylePropFn<GridItemStyleProps>(gridItemStyleFns);
