import {Property} from 'csstype';

/** style props to for grid container properties */
export type GridStyleProps = {
  /** sets `align-items` property */
  alignItems?: Property.AlignItems;
  /** sets `align-content` property */
  alignContent?: Property.AlignContent;
  /**
   * sets `display` property
   * @default 'grid'
   * */
  display?: 'grid' | 'inline-grid' | 'subgrid';
  /** sets `justify-items` property */
  justifyItems?: Property.JustifyItems;
  /** sets `justify-content` property */
  justifyContent?: Property.JustifyContent;

  // Container Types
  /** sets `grid-template` property */
  gridTemplate?: Property.GridTemplate;
  /** sets `grid-template-area` property */
  gridTemplateAreas?: Property.GridTemplateAreas;
  /** sets `grid-template-columns` property */
  gridTemplateColumns?: Property.GridTemplateColumns;
  /** sets `grid-template-rows` property */
  gridTemplateRows?: Property.GridTemplateRows;
  /** sets `gap` property */
  gridGap?: Property.GridGap;
  /** sets `column-gap` property */
  gridColumnGap?: Property.GridColumnGap;
  /** sets `row-gap` property */
  gridRowGap?: Property.GridRowGap;
  /** sets `place-items` property */
  gridPlaceItems?: Property.PlaceItems;
  /** sets `grid-auto-columns` property */
  gridAutoColumns?: Property.GridAutoColumns;
  /** sets `grid-auto-rows` property */
  gridAutoRows?: Property.GridAutoRows;
  /** sets `grid-area` property */
  gridArea?: Property.GridArea;
  /** sets `grid-auto-flow` property */
  gridAutoFlow?: Property.GridAutoFlow;
  /** sets `grid` property */
  grid?: Property.Grid;
};

const gridProps = {
  alignContent: 'alignContent',
  alignItems: 'alignItems',
  display: 'display',
  justifyContent: 'justifyContent',
  justifyItems: 'justifyItems',
  gridTemplateAreas: 'gridTemplateAreas',
  gridTemplate: 'gridTemplate',
  gridTemplateColumns: 'gridTemplateColumns',
  gridTemplateRows: 'gridTemplateRows',
  gridGap: 'gridGap',
  gridColumnGap: 'gridColumnGap',
  gridRowGap: 'gridRowGap',
  gridPlaceItems: 'gridPlaceItems',
  gridAutoColumns: 'gridAutoColumns',
  gridAutoRows: 'gridAutoRows',
  gridAutoFlow: 'gridAutoFlow',
  gridArea: 'gridArea',
  grid: 'grid',
};

/**
 * A style prop function that takes component props and returns grid styles.
 * If no `GridStyleProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `grid` with low-level, styled components
 * const GridExample = () => (
 *   <Grid gridAutoFlow="row" justifyContent="center" alignItems="center">
 *     Hello, Grid!
 *   </Grid>
 * );
 *
 */
export function grid<P extends GridStyleProps>(props: P) {
  const styles = {};
  for (const key in props) {
    if (key in gridProps) {
      const attr = gridProps[key as keyof GridStyleProps];
      const value = props[key];
      // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
      styles[attr] = value;
    }
  }
  return styles;
}
