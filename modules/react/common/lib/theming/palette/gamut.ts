/**
 * Gamut calculation utilities for determining maximum chroma values
 * within sRGB and Display P3 color spaces.
 *
 * Uses colorjs.io for accurate gamut boundary calculations.
 */

import Color from 'colorjs.io';
import type {GamutType} from './types';

/**
 * Computes the maximum chroma for a given hue and lightness within a gamut.
 * Uses binary search to find the gamut boundary.
 *
 * @param hue - Hue angle in degrees (0-360)
 * @param lightness - Lightness value (0-1)
 * @param gamut - Target color gamut ('sRGB' or 'P3')
 * @returns Maximum chroma value that stays within the gamut
 */
export const computeMaxChroma = (
  hue: number,
  lightness: number,
  gamut: GamutType = 'sRGB'
): number => {
  const colorSpace = gamut === 'P3' ? 'p3' : 'srgb';

  // Binary search for maximum chroma
  let low = 0;
  let high = 0.4; // Maximum reasonable chroma in OKLCH
  let maxChroma = 0;

  const maxIterations = 50;
  const precision = 0.0001;

  for (let i = 0; i < maxIterations && high - low > precision; i++) {
    const testChroma = (low + high) / 2;
    const color = new Color('oklch', [lightness, testChroma, hue]);

    if (color.inGamut(colorSpace)) {
      maxChroma = testChroma;
      low = testChroma;
    } else {
      high = testChroma;
    }
  }

  return maxChroma;
};

/**
 * Computes maximum chroma for both sRGB and P3 gamuts
 *
 * @param hue - Hue angle in degrees (0-360)
 * @param lightness - Lightness value (0-1)
 * @returns Object with max chroma for each gamut
 */
export const computeMaxChromaForGamuts = (
  hue: number,
  lightness: number
): {sRGB: number; p3: number} => {
  return {
    sRGB: computeMaxChroma(hue, lightness, 'sRGB'),
    p3: computeMaxChroma(hue, lightness, 'P3'),
  };
};

/**
 * Checks if an OKLCH color is within the specified gamut
 *
 * @param l - Lightness (0-1)
 * @param c - Chroma (0-0.4+)
 * @param h - Hue (0-360)
 * @param gamut - Target gamut
 * @returns True if the color is within gamut
 */
export const isInGamut = (l: number, c: number, h: number, gamut: GamutType = 'sRGB'): boolean => {
  const colorSpace = gamut === 'P3' ? 'p3' : 'srgb';
  const color = new Color('oklch', [l, c, h]);
  return color.inGamut(colorSpace);
};

/**
 * Maps an OKLCH color to the specified gamut if it's out of gamut
 *
 * @param l - Lightness (0-1)
 * @param c - Chroma (0-0.4+)
 * @param h - Hue (0-360)
 * @param gamut - Target gamut
 * @returns Mapped Color object within the gamut
 */
export const mapToGamut = (l: number, c: number, h: number, gamut: GamutType = 'sRGB'): Color => {
  const colorSpace = gamut === 'P3' ? 'p3' : 'srgb';
  const color = new Color('oklch', [l, c, h]);
  return color.toGamut(colorSpace);
};
