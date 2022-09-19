import {buildStylePropFn} from './buildStyleFns';
// background fns
import {BackgroundStyleProps, backgroundFns} from './background';
// border fns
import {BorderColorStyleProps, borderColorFns} from './border/color';
import {BorderLineStyleProps, borderLineStyleFns} from './border/lineStyle';
import {BorderRadiusStyleProps, borderRadiusFns} from './border/radius';
import {BorderShorthandStyleProps, borderShorthandFns} from './border/shorthand';
import {BorderWidthStyleProps, borderWidthFns} from './border/width';
// color
import {ColorStyleProps, colorFns} from './color';
// depth
import {DepthStyleProps, depthStyleFns} from './depth';
// flex
import {FlexStyleProps, flexStyleFns} from './flex';
import {FlexItemStyleProps, flexItemStyleFns} from './flexItem';
// grid
import {GridStyleProps, gridStyleFns} from './grid';
import {GridItemStyleProps, gridItemStyleFns} from './gridItem';
// layout
import {LayoutStyleProps, layoutStyleFns} from './layout';
// other
import {OtherStyleProps, otherStyleFns} from './other';
// position
import {PositionStyleProps, positionStyleFns} from './position';
// pseudo
import {PseudoStyleProps} from './pseudo';
// space
import {SpaceStyleProps, spaceStyleFns} from './space';
// text
import {TextStyleProps, textStyleFns} from './text';

export type StyleProps = BackgroundStyleProps &
  BorderColorStyleProps &
  BorderLineStyleProps &
  BorderRadiusStyleProps &
  BorderShorthandStyleProps &
  BorderWidthStyleProps &
  ColorStyleProps &
  DepthStyleProps &
  FlexStyleProps &
  FlexItemStyleProps &
  GridStyleProps &
  GridItemStyleProps &
  LayoutStyleProps &
  OtherStyleProps &
  PositionStyleProps &
  PseudoStyleProps &
  SpaceStyleProps &
  TextStyleProps;

export const baseStylePropFn = buildStylePropFn<StyleProps>({
  ...backgroundFns,
  ...borderColorFns,
  ...borderLineStyleFns,
  ...borderRadiusFns,
  ...borderShorthandFns,
  ...borderWidthFns,
  ...colorFns,
  ...depthStyleFns,
  ...flexStyleFns,
  ...flexItemStyleFns,
  ...gridStyleFns,
  ...gridItemStyleFns,
  ...layoutStyleFns,
  ...otherStyleFns,
  ...positionStyleFns,
  ...spaceStyleFns,
  ...textStyleFns,
});
