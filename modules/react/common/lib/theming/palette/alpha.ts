/**
 * Alpha compositing utilities for transparent colors over a background.
 * Porter-Duff blending. @see https://www.w3.org/TR/compositing-1/
 */

import type {RGB} from './types';
import {hexToRgb, clamp} from './conversion';

/**
 * Result of transparent color calculation
 */
export interface AlphaColorResult {
  /** RGB channels (values 0-1) */
  color: RGB;
  /** Alpha channel (0-1) */
  alpha: number;
  /** CSS rgba(r, g, b, a) string */
  rgba: string;
  /** Hex with alpha (#RRGGBBAA) */
  hex: string;
}

/**
 * Checks if color is a valid RGB tuple
 */
const isRGB = (color: RGB, param: string): void => {
  if (!Array.isArray(color) || color.length !== 3) {
    throw new TypeError(`${param} must be an RGB tuple [r, g, b]`);
  }
  if (
    typeof color[0] !== 'number' ||
    typeof color[1] !== 'number' ||
    typeof color[2] !== 'number'
  ) {
    throw new TypeError(`${param} must contain numeric values`);
  }
  if (!isFinite(color[0]) || !isFinite(color[1]) || !isFinite(color[2])) {
    throw new RangeError(`${param} values must be finite numbers`);
  }
};

const parseColor = (input: RGB | string): RGB =>
  typeof input === 'string' ? hexToRgb(input) : input;

/**
 * Minimum transparency needed to represent the solid color with the specified background.
 * @param color - Target RGB (0-1)
 * @param bgColor - Background RGB (0-1)
 * @returns Alpha 0.01-0.99
 */
export const minAlpha = (color: RGB, bgColor: RGB): number => {
  isRGB(color, 'color');
  isRGB(bgColor, 'bgColor');

  let result = 0.01;

  for (let i = 0; i < 3; i++) {
    const out = color[i];
    const bg = bgColor[i];
    // When the channel values are very close, we can assume they are the same.
    if (Math.abs(out - bg) < 0.0001) {
      continue;
    }

    const required = out > bg ? (out - bg) / (1 - bg) : (bg - out) / bg;
    if (required > result && required <= 1) {
      result = required;
    }
  }

  return clamp(result, 0, 1) * 0.99 + 0.01;
};

const alphaChannel = (target: number, bg: number, a: number): number => {
  if (a <= 0.001) {
    return target;
  }
  return clamp((target - bg * (1 - a)) / a, 0, 1);
};

/**
 * Calculates an alpha color that composites to the target over the background.
 * Inverse of composite: composite(alpha(target, bg, a), bg, a) equals target.
 *
 * @param color - Target color as RGB tuple (values 0-1)
 * @param bgColor - Background color as RGB tuple (values 0-1)
 * @param a - Alpha (0-1)
 * @returns Transparent RGB tuple that composites to color over bgColor
 */
export const alpha = (color: RGB, bgColor: RGB, a: number): RGB => [
  alphaChannel(color[0], bgColor[0], a),
  alphaChannel(color[1], bgColor[1], a),
  alphaChannel(color[2], bgColor[2], a),
];

/**
 * Composites a color with alpha over a background.
 * Output = alpha × Foreground + (1 - alpha) × Background
 *
 * @param color - Foreground color as RGB tuple (values 0-1)
 * @param bgColor - Background color as RGB tuple (values 0-1)
 * @param a - Alpha (0-1), clamped
 * @returns Composited RGB tuple
 *
 * @example
 * composite([0,0,0], [1,1,1], 0.5) // [0.5, 0.5, 0.5]
 */
export const composite = (color: RGB, bgColor: RGB, a: number): RGB => {
  const clamped = clamp(a, 0, 1);
  return [
    clamped * color[0] + (1 - clamped) * bgColor[0],
    clamped * color[1] + (1 - clamped) * bgColor[1],
    clamped * color[2] + (1 - clamped) * bgColor[2],
  ];
};

/**
 * Formats RGB tuple to CSS rgb() or rgba() string
 *
 * @param color - RGB tuple (values 0-1)
 * @param alpha - If omitted, rgb(); if provided, rgba()
 * @returns CSS color string
 */
export const formatRGBA = (color: RGB, alpha?: number): string => {
  const r = Math.round(clamp(color[0], 0, 1) * 255);
  const g = Math.round(clamp(color[1], 0, 1) * 255);
  const b = Math.round(clamp(color[2], 0, 1) * 255);
  if (alpha === undefined) {
    return `rgb(${r}, ${g}, ${b})`;
  }
  return `rgba(${r}, ${g}, ${b}, ${clamp(alpha, 0, 1).toFixed(2)})`;
};

/**
 * Converts RGB tuple to hex string
 *
 * @param color - RGB tuple (values 0-1)
 * @param alpha - If omitted, #RRGGBB; if provided, #RRGGBBAA
 * @returns Hex string (#RRGGBB or #RRGGBBAA)
 */
export const rgbToHex = (color: RGB, alpha?: number): string => {
  const toHex = (v: number) =>
    Math.round(clamp(v, 0, 1) * 255)
      .toString(16)
      .padStart(2, '0');
  const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`;
  if (alpha === undefined) {
    return hex;
  }
  return `${hex}${toHex(alpha)}`;
};

/**
 * Calculates an alpha color that appears identical when composited over the background.
 * Accepts either RGB tuples or hex strings (#RGB, #RRGGBB).
 *
 * @param color - Target color as RGB tuple (values 0-1)
 * @param bg - Background as RGB tuple (default: white [1,1,1])
 * @param targetAlpha - Alpha (0-1). Omit to use minimum required.
 * @returns {AlphaColorResult}
 * @throws {TypeError} Invalid color/bg or targetAlpha
 * @throws {RangeError} NaN or Infinity in color values
 * @throws {Error} Invalid hex format
 *
 * @example
 * alphaColor([0.5,0.5,0.5], [1,1,1])
 * alphaColor('#0875E1', '#FFFFFF', 0.85)
 */
export function alphaColor(color: RGB, bg?: RGB, targetAlpha?: number): AlphaColorResult;
export function alphaColor(
  hexColor: string,
  bgHex?: string,
  targetAlpha?: number
): AlphaColorResult;
export function alphaColor(
  colorOrHex: RGB | string,
  bg?: RGB | string,
  targetAlpha?: number
): AlphaColorResult {
  if (targetAlpha !== undefined && (typeof targetAlpha !== 'number' || !isFinite(targetAlpha))) {
    throw new TypeError('targetAlpha must be a finite number between 0 and 1');
  }

  const color = parseColor(colorOrHex);
  const bgColor = bg !== undefined ? parseColor(bg) : ([1, 1, 1] as RGB);

  isRGB(color, 'color');
  isRGB(bgColor, 'bgColor');

  const a = targetAlpha !== undefined ? clamp(targetAlpha, 0, 1) : minAlpha(color, bgColor);
  const transparent = alpha(color, bgColor, a);

  return {
    color: transparent,
    alpha: a,
    rgba: formatRGBA(transparent, a),
    hex: rgbToHex(transparent, a),
  };
}
