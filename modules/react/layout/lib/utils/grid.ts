import {
  PropertyAlignItems,
  PropertyAlignContent,
  PropertyAlignSelf,
  PropertyJustifyItems,
  PropertyJustifyContent,
  PropertyJustifySelf,
  PropertyGridTemplate,
  PropertyGridTemplateColumns,
  PropertyGridTemplateRows,
  PropertyGridGap,
  PropertyGridColumnsGap,
  PropertyGridRowGap,
  PropertyPlaceItems,
  PropertyAutoColumns,
  PropertyAutoRows,
  PropertyGridAutoFlow,
  PropertyGrid,
} from './types';

/** style props to for grid container properties */
export type GridStyleProps = {
  /** sets `align-items` property */
  alignItems?: PropertyAlignItems;
  /** sets `align-content` property */
  alignContent?: PropertyAlignContent;
  /**
   * sets `display` property
   * @default 'grid'
   * */
  display?: 'grid' | 'inline-grid' | 'subgrid';
  /** sets `justify-items` property */
  justifyItems?: PropertyJustifyItems;
  /** sets `justify-content` property */
  justifyContent?: PropertyJustifyContent;

  // Container Types
  /** sets `grid-template` property */
  gridTemplate?: PropertyGridTemplate;
  /** sets `grid-template-columns` property */
  gridTemplateColumns?: PropertyGridTemplateColumns;
  /** sets `grid-template-rows` property */
  gridTemplateRow?: PropertyGridTemplateRows;
  /** sets `gap` property */
  gridGap?: PropertyGridGap;
  /** sets `column-gap` property */
  gridColumnGap?: PropertyGridColumnsGap;
  /** sets `row-gap` property */
  gridRowGap?: PropertyGridRowGap;
  /** sets `place-items` property */
  gridPlaceItems?: PropertyPlaceItems;
  /** sets `grid-auto-columns` property */
  gridAutoColumns?: PropertyAutoColumns;
  /** sets `grid-auto-rows` property */
  gridAutoRows?: PropertyAutoRows;
  /** sets `grid-auto-flow` property */
  gridAutoFlow?: PropertyGridAutoFlow;
  /** sets `grid` property */
  grid?: PropertyGrid;
};

const gridProps = {
  alignContent: 'alignContent',
  alignItems: 'alignItems',
  display: 'display',
  justifyContent: 'justifyContent',
  justifyItems: 'justifyItems',
  gridTemplate: 'gridTemplate',
  gridTemplateColumns: 'gridTemplateColumns',
  gridTemplateRow: 'gridTemplateRow',
  gridGap: 'gridGap',
  gridColumnGap: 'gridColumnGap',
  gridRowGap: 'gridRowGap',
  gridPlaceItems: 'gridPlaceItems',
  gridAutoColumns: 'gridAutoColumns',
  gridAutoRows: 'gridAutoRows',
  gridAutoFlow: 'gridAutoFlow',
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
