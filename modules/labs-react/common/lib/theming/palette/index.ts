/**
 * Accessible Palette Generator
 *
 * Utilities for generating WCAG-compliant color palettes from any input color.
 *
 * @example
 * ```tsx
 * import { generateAccessiblePalette } from '@workday/canvas-kit-labs-react/common';
 *
 * const palette = generateAccessiblePalette('#0875E1');
 * const primaryColor = palette.getHex(500);
 * ```
 */

export {
  generateAccessiblePalette,
  generateNeutralPalette,
  paletteSteps,
} from './generateAccessiblePalette';

export type {
  GamutType,
  PaletteType,
  AlphaLevel,
  PaletteStepAlpha,
  RGB,
  OklchColor,
  PaletteStep,
  AccessiblePalette,
  GeneratePaletteOptions,
} from './types';

// Re-export conversion utilities for advanced use cases
export {
  parseColorToOklch,
  hexToOklch,
  oklchToHex,
  hexToRgb,
  meetsWCAGContrast,
  createOklchColor,
  checkContrastRatio,
} from './conversion';

// Re-export gamut utilities for advanced use cases
export {computeMaxChroma, computeMaxChromaForGamuts, isInGamut, mapToGamut} from './gamut';

// Re-export alpha/transparency utilities
export {minAlpha, alpha, composite, formatRGBA, rgbToHex, alphaColor} from './alpha';

export type {AlphaColorResult} from './alpha';

// Re-export Color class for advanced use cases
export {default as Color} from 'colorjs.io';
