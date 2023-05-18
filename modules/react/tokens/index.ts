import {
  buttonColors,
  chartingColorOffsets,
  chartingColors,
  colors,
  commonColors,
  gradients,
  iconColors,
  inputColors,
  statusColors,
  typeColors,
} from '@workday/canvas-colors-web';

import {borderRadius, CanvasBorderRadius, CanvasBorderRadiusKeys, CanvasBorderRadiusValues} from './lib/radius';
import {BrandingColor, CanvasColor} from './lib/colors.types';
import {depth, CanvasDepth, CanvasDepthValues} from './lib/depth';
import {
  space,
  CanvasSpace,
  CanvasSpaceKeys,
  CanvasSpaceValues,
  CanvasSpaceNumberValues,
  CanvasSpaceNumbers,
  spaceNumbers,
  remToPxValue
} from './lib/space';
import {type,
  fontFamily,
  monoFontFamily,
  CanvasType,
  CanvasTypeProperties,
  CanvasTypeVariants,
  CanvasTypeHierarchy,
} from './lib/type';
import {CSSProperties} from './lib/types';

export const canvas = {
  buttonColors,
  chartingColorOffsets,
  chartingColors,
  colors,
  commonColors,
  depth,
  fontFamily,
  gradients,
  iconColors,
  inputColors,
  monoFontFamily,
  space,
  statusColors,
  type,
  typeColors,
};

export * from '@workday/canvas-colors-web';
export {
  borderRadius,
  colors,
  gradients,
  depth,
  space,
  spaceNumbers,
  remToPxValue,
  type,
  fontFamily,
  monoFontFamily,
  BrandingColor,
};

export type {
  CanvasBorderRadius,
  CanvasBorderRadiusKeys,
  CanvasBorderRadiusValues,
  CanvasColor,
  CanvasDepth,
  CanvasDepthValues,
  CanvasSpace,
  CanvasSpaceKeys,
  CanvasSpaceValues,
  CanvasSpaceNumberValues,
  CanvasSpaceNumbers,
  CanvasType,
  CanvasTypeProperties,
  CanvasTypeVariants,
  CanvasTypeHierarchy,
  CSSProperties,
}
