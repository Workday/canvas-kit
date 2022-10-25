import {BackgroundStyleProps} from './background';
import {BorderStyleProps} from './border';
import {ColorStyleProps} from './color';
import {DepthStyleProps} from './depth';
import {FlexStyleProps} from './flex';
import {FlexItemStyleProps} from './flexItem';
import {GridStyleProps} from './grid';
import {GridItemStyleProps} from './gridItem';
import {LayoutStyleProps} from './layout';
import {OtherStyleProps} from './other';
import {PositionStyleProps} from './position';
import {SpaceStyleProps} from './space';
import {TextStyleProps} from './text';

/**
 * Common Style Props
 * ---
 *Types for common style props shared across all components
 *
 * - background
 * - border
 * - color
 * - depth
 * - flexItem
 * - gridItem
 * - layout
 * - other
 * - position
 * - space
 * - text
 */
export type CommonStyleProps = BackgroundStyleProps &
  BorderStyleProps &
  ColorStyleProps &
  DepthStyleProps &
  FlexItemStyleProps &
  GridItemStyleProps &
  LayoutStyleProps &
  OtherStyleProps &
  PositionStyleProps &
  SpaceStyleProps &
  TextStyleProps;

/**
 * All Style Props
 * ---
 * Types for every style prop
 * - common
 * - flex
 * - grid
 */
export type AllStyleProps = CommonStyleProps &
  // Omitting 'display' here to default to the standard csstype type Property.Display
  Omit<FlexStyleProps, 'display'> &
  // Omitting 'display' here to default to the standard csstype type Property.Display
  Omit<GridStyleProps, 'display'>;
