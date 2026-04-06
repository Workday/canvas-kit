import {Property} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/** style props to for CSS grid item properties
 * @deprecated ⚠️ Style props are deprecated. Please use our `cs` prop with `createStencil` or `createStyles` to apply styles. For more information view our [Styling docs](* @deprecated ⚠️ `boxStyleFn` is deprecated and will be removed in a future major version. Please reference our new way of styling components [here](https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs).
 */
export type GridItemStyleProps = {
  /** sets [CSS grid-column-start property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)
   * @deprecated
   */
  gridColumnStart?: Property.GridColumnStart;
  /** sets [CSS grid-column-end property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)
   * @deprecated
   */
  gridColumnEnd?: Property.GridColumnEnd;
  /** sets [CSS grid-row-start property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)
   * @deprecated
   */
  gridRowStart?: Property.GridRowStart;
  /** sets [CSS grid-row-end property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)
   * @deprecated
   */
  gridRowEnd?: Property.GridRowEnd;
  /** sets [CSS grid-column property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
   * @deprecated
   */
  gridColumn?: Property.GridColumn;
  /** sets [CSS grid-row property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
   * @deprecated
   */
  gridRow?: Property.GridRow;
  /** sets [CSS grid-area property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
   * @deprecated
   */
  gridArea?: Property.GridArea;
  /** sets [CSS justify-self property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
   * @deprecated
   */
  justifySelf?: Property.JustifySelf;
  /** sets [CSS align-self property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
   * @deprecated
   */
  alignSelf?: Property.AlignSelf;
  /** sets [CSS place-self property](https://developer.mozilla.org/en-US/docs/Web/CSS/place-self)
   * @deprecated
   */
  placeSelf?: Property.PlaceSelf;
};

/** @deprecated */
export const gridItemStyleFnConfigs: StyleFnConfig[] = [
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

/** @deprecated */
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
 * @deprecated
 */
export const gridItem = buildStylePropFn<GridItemStyleProps>(gridItemStyleFns);
