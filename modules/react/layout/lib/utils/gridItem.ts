import {Property} from 'csstype';

/** style props to for grid item properties */
export type GridItemStyleProps = {
  // Child Types
  /** sets `grid-column-start` property */
  gridColumnStart?: Property.GridColumnStart;
  /** sets `grid-column-end` property */
  gridColumnEnd?: Property.GridColumnEnd;
  /** sets `grid-row-start` property */
  gridRowStart?: Property.GridRowStart;
  /** sets `grid-row-end` property */
  gridRowEnd?: Property.GridRowEnd;
  /** sets `grid-column` property */
  gridColumn?: Property.GridColumn;
  /** sets `grid-row` property */
  gridRow?: Property.GridRow;
  /** sets `grid-area` property */
  gridArea?: Property.GridArea;
  /** sets `justify-self` property */
  justifySelf?: Property.JustifySelf;
  /** sets `align-self` property */
  alignSelf?: Property.AlignSelf;
  /** sets `place-self` property */
  placeSelf?: Property.PlaceSelf;
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
 * If no `GridItemStyleProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `grid item` with low-level, styled components
 * const GridItemExample = () => (
 *   <Grid.Item gridRowStart="1" justifySelf="center" gridArea="Card">
 *     Hello, Grid Item!
 *   </Grid.Item>
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
