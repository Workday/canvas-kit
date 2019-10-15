import * as canvasColorsWeb from '@workday/canvas-colors-web';

import {borderRadius} from './lib/radius';
import {BrandingColor, CanvasColor} from './lib/colors.types';
import depth, {CanvasDepth, CanvasDepthValue} from './lib/depth';
import InputProvider from './lib/InputProvider';
import CanvasProvider from './lib/CanvasProvider';
import spacing, {
  CanvasSpacing,
  CanvasSpacingNumber,
  CanvasSpacingValue,
  spacingNumbers,
} from './lib/spacing';
import type, {CanvasType, fontFamily, monoFontFamily, CanvasTypeVariant} from './lib/type';
import {CSSProperties, CanvasTheme} from './lib/types';

const {default: colors, ...semanticColors} = canvasColorsWeb;
const canvas = {
  colors,
  depth,
  spacing,
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
  depth,
  spacing,
  spacingNumbers,
  type,
  fontFamily,
  monoFontFamily,
  BrandingColor,
  CanvasDepth,
  CanvasDepthValue,
  CanvasSpacing,
  CanvasSpacingNumber,
  CanvasSpacingValue,
  CanvasType,
  CanvasTypeVariant,
  CanvasColor,
  CSSProperties,
  CanvasTheme,
  InputProvider,
  CanvasProvider,
};
export default canvas;
