// style props
import {PartialEmotionCanvasTheme} from '../../../common';
import {BorderStyleProps, borderFns, getBorderStyles} from './border';
import {ColorStyleProps, colorFns, getColorStyles} from './color';
import {DepthStyleProps, depthFns, getDepthStyles} from './depth';
import {FlexItemStyleProps, flexItemProps, getFlexItemStyles} from './flexItem';
import {LayoutStyleProps, layoutProps, getLayoutStyles} from './layout';
import {OtherStyleProps, otherProps, getOtherStyles} from './other';
import {PositionStyleProps, positionFns, getPositionStyles} from './position';
import {getPseudoStyles, pseudoFns, PseudoStyleProps} from './pseudo';
import {SpaceStyleProps, spaceFns, getSpaceStyles} from './space';

export type CXStyleProps = ColorStyleProps &
  DepthStyleProps &
  BorderStyleProps &
  FlexItemStyleProps &
  LayoutStyleProps &
  OtherStyleProps &
  PositionStyleProps &
  SpaceStyleProps &
  PseudoStyleProps & {
    [key: string]: string | number;
  };

export function cxFn<S extends CXStyleProps>(styles: S, isRTL: boolean) {
  let cxStyles = {};

  for (const key in styles) {
    if (key in styles) {
      if (key in borderFns) {
        const style = getBorderStyles(styles, key as keyof BorderStyleProps, isRTL);
        cxStyles = {...cxStyles, ...style};
        continue;
      }

      if (key in colorFns) {
        const style = getColorStyles(styles, key as keyof ColorStyleProps);
        cxStyles = {...cxStyles, ...style};
        continue;
      }

      if (key in depthFns) {
        const cxStyle = getDepthStyles(styles, key as keyof DepthStyleProps);
        cxStyles = {...cxStyles, ...cxStyle};
        continue;
      }

      if (key in flexItemProps) {
        const style = getFlexItemStyles(styles, key as keyof FlexItemStyleProps);
        cxStyles = {...cxStyles, ...style};
        continue;
      }

      if (key in layoutProps) {
        const style = getLayoutStyles(styles, key as keyof LayoutStyleProps);
        cxStyles = {...cxStyles, ...style};
        continue;
      }

      if (key in otherProps) {
        const style = getOtherStyles(styles, key as keyof OtherStyleProps);
        cxStyles = {...cxStyles, ...style};
        continue;
      }

      if (key in positionFns) {
        const style = getPositionStyles(styles, key as keyof PositionStyleProps, isRTL);
        cxStyles = {...cxStyles, ...style};
        continue;
      }

      if (key in spaceFns) {
        const style = getSpaceStyles(styles, key as keyof SpaceStyleProps, isRTL);
        cxStyles = {...cxStyles, ...style};
        continue;
      }

      if (key in pseudoFns) {
        const style = getPseudoStyles(styles, key as keyof PseudoStyleProps, isRTL);
        cxStyles = {...cxStyles, ...style};
      }

      // Any other unsupported style property can be passed through to the style object
      cxStyles = {...cxStyles, [key]: styles[key]};
    }
  }

  return cxStyles;
}
