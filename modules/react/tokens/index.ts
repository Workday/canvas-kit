import * as canvasColorsWeb from '@workday/canvas-colors-web';

import {borderRadius, CanvasBorderRadius, CanvasBorderRadiusKeys, CanvasBorderRadiusValues} from './lib/radius';
import {BrandingColor, CanvasColor} from './lib/colors.types';
import depth, {CanvasDepth, CanvasDepthValue} from './lib/depth';
import {
  space,
  CanvasSpace,
  CanvasSpaceKeys,
  CanvasSpaceValues,
  CanvasSpaceNumberValues,
  CanvasSpaceNumbers,
  spaceNumbers,
} from './lib/space';
import {type, CanvasType, fontFamily, monoFontFamily, CanvasTypeVariant} from './lib/type';
import {CSSProperties} from './lib/types';

const {default: colors, gradients, ...semanticColors} = canvasColorsWeb;
const canvas = {
  colors,
  depth,
  space,
  type,
  fontFamily,
  monoFontFamily,
  ...semanticColors,
};

export * from './lib/TypeWrappers';
export * from '@workday/canvas-colors-web';
export {
  borderRadius,
  colors,
  gradients,
  depth,
  space,
  spaceNumbers,
  type,
  fontFamily,
  monoFontFamily,
  BrandingColor,
  CanvasDepth,
  CanvasDepthValue,
  CSSProperties,
};
export default canvas;

export type {
  CanvasBorderRadius,
  CanvasBorderRadiusKeys,
  CanvasBorderRadiusValues,
  CanvasColor,
  CanvasSpace,
  CanvasSpaceKeys,
  CanvasSpaceValues,
  CanvasSpaceNumberValues,
  CanvasSpaceNumbers,
  CanvasType,
  CanvasTypeVariant,
}
