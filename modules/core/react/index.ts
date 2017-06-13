import * as canvasColorsWeb from '@workday/canvas-colors-web';
import {BrandingColors, CanvasColor} from './lib/colors.types';
import depth, {CanvasDepth, CanvasDepthValue} from './lib/depth';
import spacing, {
  spacingNumbers,
  space,
  SpaceProps,
  CanvasSpacingNumbers,
  CanvasSpacing,
  CanvasSpacingValue,
} from './lib/spacing';
import type, {fontFamily, monoFontFamily, CanvasType} from './lib/type';
import beta_type from './lib/beta_type';
import InputProvider from './lib/InputProvider';
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

export * from '@workday/canvas-colors-web';
export {
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
  BrandingColors,
  CanvasDepth,
  CanvasDepthValue,
  CanvasSpacing,
  CanvasSpacingNumbers,
  CanvasSpacingValue,
  CanvasType,
  CanvasColor,
  CSSProperties,
  InputProvider,
};
export default canvas;
