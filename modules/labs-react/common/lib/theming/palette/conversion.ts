/**
 * Color conversion utilities for transforming between color spaces
 * and checking WCAG contrast requirements.
 *
 * Uses colorjs.io for accurate color space conversions.
 */
import Color from 'colorjs.io';

import type {GamutType, OklchColor, RGB} from './types';

/**
 * Checks if a contrast ratio meets WCAG requirements
 */
export const meetsWCAGContrast = (ratio: number, level: 'AA' | 'AAA' = 'AA'): boolean =>
  ratio >= (level === 'AAA' ? 7 : 4.5);

/**
 * Clamps a value between min and max
 */
export const clamp = (x: number, min: number, max: number): number =>
  x < min ? min : x > max ? max : x;

/**
 * Creates an OKLCH Color object
 */
export const createOklchColor = (l: number, c: number, h: number): Color =>
  new Color('oklch', [l, c, h]);

/**
 * Converts OKLCH color to sRGB hex string
 */
export const oklchToHex = (l: number, c: number, h: number): string => {
  const color = createOklchColor(l, c, h);
  return color.to('srgb').toString({format: 'hex'});
};

/**
 * Converts hex color to OKLCH
 */
export const hexToOklch = (hex: string): OklchColor => {
  const color = new Color(hex);
  const oklch = color.to('oklch');
  const [l, c, h] = oklch.coords;
  return {l: l || 0, c: c || 0, h: h || 0};
};

/**
 * Parses a hex color string to RGB values (0-1 range)
 */
export const hexToRgb = (hex: string): RGB => {
  const color = new Color(hex);
  const srgb = color.to('srgb');
  return srgb.coords as RGB;
};

/**
 * Parses any supported color format to OKLCH
 * Uses colorjs.io which supports a wide variety of color formats:
 * hex (#fff, #ffffff), rgb(), hsl(), oklch(), oklab(), lab(), lch(), etc.
 */
export const parseColorToOklch = (colorString: string): OklchColor => {
  try {
    const color = new Color(colorString);
    const oklch = color.to('oklch');
    const [l, c, h] = oklch.coords;
    return {l: l || 0, c: c || 0, h: h || 0};
  } catch {
    // Return a default blue if parsing fails
    return {l: 0.5, c: 0.15, h: 255};
  }
};

/**
 * Calculates contrast ratio between an OKLCH color and a background
 */
export const checkContrastRatio = (
  oklch: OklchColor,
  backgroundLuminance: number,
  gamut: GamutType = 'sRGB'
): number => {
  const colorSpace = gamut === 'P3' ? 'p3' : 'srgb';
  const color = createOklchColor(oklch.l, oklch.c, oklch.h);

  // Create background color based on luminance
  const bgValue = backgroundLuminance > 0.5 ? 1 : 0;
  const bgColor = new Color(colorSpace, [bgValue, bgValue, bgValue]);

  // Use colorjs.io's built-in contrast calculation
  return color.contrast(bgColor, 'WCAG21');
};

/**
 * Creates background colors for light and dark modes
 */
export const createBackgroundColors = (gamut: GamutType) => {
  const colorSpace = gamut === 'P3' ? 'p3' : 'srgb';
  return {
    light: new Color(colorSpace, [1, 1, 1]),
    dark: new Color(colorSpace, [0, 0, 0]),
  };
};

/**
 * Checks if a color is within the specified gamut
 */
export const isInGamut = (color: Color, gamut: GamutType = 'sRGB'): boolean => {
  const colorSpace = gamut === 'P3' ? 'p3' : 'srgb';
  return color.inGamut(colorSpace);
};

/**
 * Converts a Color object to the specified gamut, mapping out-of-gamut colors
 */
export const toGamut = (color: Color, gamut: GamutType = 'sRGB'): Color => {
  const colorSpace = gamut === 'P3' ? 'p3' : 'srgb';
  return color.toGamut(colorSpace);
};
