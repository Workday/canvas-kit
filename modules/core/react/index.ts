import * as canvasColorsWeb from '@workday/canvas-colors-web';

import beta_type from './lib/beta_type';
import {borderRadius} from './lib/radius';
import {BrandingColor, CanvasColor} from './lib/colors.types';
import depth, {CanvasDepth, CanvasDepthValue} from './lib/depth';
import InputProvider from './lib/InputProvider';
import spacing, {
  CanvasSpacing,
  CanvasSpacingNumber,
  CanvasSpacingValue,
  space,
  SpaceProps,
  spacingNumbers,
} from './lib/spacing';
import type, {CanvasType, fontFamily, monoFontFamily} from './lib/type';
import {CSSProperties} from './lib/types';

const {default: colors, ...semanticColors} = canvasColorsWeb;
const canvas = {
  colors,
  depth,
  spacing,
  type,
  beta_type,
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
  space,
  SpaceProps,
  spacingNumbers,
  type,
  beta_type,
  fontFamily,
  monoFontFamily,
  BrandingColor,
  CanvasDepth,
  CanvasDepthValue,
  CanvasSpacing,
  CanvasSpacingNumber,
  CanvasSpacingValue,
  CanvasType,
  CanvasColor,
  CSSProperties,
  InputProvider,
};
export default canvas;
