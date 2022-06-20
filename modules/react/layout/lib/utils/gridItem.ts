import {
  PropertyJustifySelf,
  PropertyAlignSelf,
  PropertyColumnStart,
  PropertyColumnEnd,
  PropertyRowStart,
  PropertyRowEnd,
  PropertyGridColumn,
  PropertyGridRow,
  PropertyGridArea,
  PropertyPlaceSelf,
} from './types';

/** style props to for grid item properties */
export type GridItemStyleProps = {
  // Child Types
  /**
   * sets `display` property
   * @default 'grid'
   * */
  /** sets `grid-column-start` property */
  gridColumnStart?: PropertyColumnStart;
  /** sets `grid-column-end` property */
  gridColumnEnd?: PropertyColumnEnd;
  /** sets `grid-row-start` property */
  gridRowStart?: PropertyRowStart;
  /** sets `grid-row-end` property */
  gridRowEnd?: PropertyRowEnd;
  /** sets `grid-column` property */
  gridColumn?: PropertyGridColumn;
  /** sets `grid-row` property */
  gridRow?: PropertyGridRow;
  /** sets `grid-area` property */
  gridArea?: PropertyGridArea;
  /** sets `justify-self` property */
  justifySelf?: PropertyJustifySelf;
  /** sets `align-self` property */
  alignSelf?: PropertyAlignSelf;
  /** sets `place-self` property */
  placeSelf?: PropertyPlaceSelf;
};

/** style props to for grid item properties */
const gridItemProps = {
  //Child Props
  gridColumnStart: 'gridColumnStart',
  gridColumnEnd: 'gridColumnEnd',
  gridRowStart: 'gridRowStart',
  gridRowEnd: 'gridRowEnd',
  gridColumn: 'gridColumn',
  gridRow: 'gridRow',
  gridArea: 'gridArea',
  justifySelf: 'justifySelf',
  alignSelf: 'alignSelf',
  placeSelf: 'placeSelf',
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

export function gridItem<P extends GridItemStyleProps>(props: P) {
  const styles = {};
  for (const key in props) {
    if (key in gridItemProps) {
      const attr = gridItemProps[key as keyof GridItemStyleProps];
      const value = props[key];
      // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
      styles[attr] = value;
    }
  }
  return styles;
}
