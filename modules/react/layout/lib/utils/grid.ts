import {Property} from 'csstype';
import {space as spaceTokens, CanvasSpace, CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';

export type GridSpacePropsValues = CanvasSpaceKeys | number | (string & {});

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
  display?: 'grid' | 'inline-grid';
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
  /** sets `column-gap` property */
  gridColumnGap?: Property.GridColumnGap | GridSpacePropsValues;
  /** sets `row-gap` property */
  gridRowGap?: Property.GridRowGap | GridSpacePropsValues;
  /** sets `gap` property */
  gridGap?: Property.GridGap | GridSpacePropsValues;
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

export type gridSpaceProps = {
  /** sets `gap` property */
  gridGap?: Property.GridGap | GridSpacePropsValues;
};

const gridGap = (value: GridSpacePropsValues) => {
  return {gridGap: spaceTokens[value as keyof CanvasSpace] || value};
};
const gridRowGap = (value: GridSpacePropsValues) => {
  return {gridRowGap: spaceTokens[value as keyof CanvasSpace] || value};
};
const gridColumnGap = (value: GridSpacePropsValues) => {
  return {gridColumnGap: spaceTokens[value as keyof CanvasSpace] || value};
};

const gridSpaceStyleProps = {
  gridGap,
  gridRowGap,
  gridColumnGap,
};

export type SpaceStyleProps = gridSpaceProps & GridStyleProps;

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
  gridColumnGap: 'gridColumnGap',
  gridRowGap: 'gridRowGap',
  gridGap: 'gridGap',
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
 * Space tokens are available for `gridGap`, `gridRowGap`, `gridColumnGap` (`zero`, `xxxs`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `xxxl`).
 * Values: `zero: 0px`, `xxxs: 4px`, `xxs: 8px`, `xs: 12px`, `s: 16px`, `m: 24px`, `l: 32px`, `xl: 40px`, `xxl: 64px`, `xxxl: 80px`.
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
export function grid<P extends SpaceStyleProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      if (key in gridProps) {
        const attr = gridProps[key as keyof GridStyleProps];
        const value = props[key];
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles[attr] = value;
        continue;
      }
      if (key in gridSpaceStyleProps) {
        const value = props[key as keyof gridSpaceProps] as GridSpacePropsValues;
        const spaceFn = gridSpaceStyleProps[key as keyof gridSpaceProps];
        const style = spaceFn(value);
        styles = {...styles, ...style};
      }
    }
  }
  return styles;
}
