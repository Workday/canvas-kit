import * as canvasColorsWeb from '@workday/canvas-colors-web';

import {borderRadius} from './lib/radius';
import {BrandingColor, CanvasColor} from './lib/colors.types';
import depth, {CanvasDepth, CanvasDepthValue} from './lib/depth';
import InputProvider from './lib/InputProvider';
import {
  space,
  CanvasSpacing,
  CanvasSpacingNumber,
  CanvasSpacingValue,
  spacingNumbers,
} from './lib/spacing';
import type, {CanvasType, fontFamily, monoFontFamily, CanvasTypeVariant} from './lib/type';
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
  spacingNumbers,
  type,
  fontFamily,
  monoFontFamily,
  BrandingColor,
  CanvasDepth,
  CanvasDepthValue,
  CanvasSpacing,
  CanvasSpacingValue,
  CSSProperties,
  InputProvider,
};
export default canvas;

export type {
  CanvasColor,
  CanvasSpacingNumber,
  CanvasType,
  CanvasTypeVariant,
}
