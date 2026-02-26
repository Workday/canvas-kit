/**
 * Generates an accessible color palette from a base color.
 *
 * This module provides functionality to generate WCAG-compliant color palettes
 * from any input color (hex, rgb, or oklch format). The generated palette
 * includes 13 steps from lightest to darkest, with guaranteed contrast ratios
 * at key steps (500, 600) for accessibility compliance.
 *
 * @example
 * ```tsx
 * import { generateAccessiblePalette } from '@workday/canvas-kit-labs-react/common';
 *
 * // Generate palette from a hex color
 * const palette = generateAccessiblePalette('#0875E1');
 *
 * // Access specific steps
 * const primary = palette.getHex(500); // Main brand color
 * const light = palette.getHex(100);   // Light variant
 * const dark = palette.getHex(800);    // Dark variant
 *
 * // Check accessibility
 * const step500 = palette.getStep(500);
 * console.log(step500?.wcagAA); // true - meets 4.5:1 contrast
 * ```
 */
import {formatRGBA, rgbToHex} from './alpha';
import {
  checkContrastRatio,
  clamp,
  hexToRgb,
  meetsWCAGContrast,
  oklchToHex,
  parseColorToOklch,
} from './conversion';
import {computeMaxChroma} from './gamut';
import type {
  AccessiblePalette,
  AlphaLevel,
  GamutType,
  GeneratePaletteOptions,
  OklchColor,
  PaletteStep,
  PaletteStepAlpha,
  PaletteType,
  RGB,
} from './types';

/**
 * Palette scale steps from lightest to darkest
 */
const SCALE = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 975] as const;

/**
 * Maximum step value (used for normalization)
 */
const SCALE_MAX = SCALE[SCALE.length - 1];

/**
 * Lightness bounds (0-1)
 */
const MAX_LIGHTNESS = 0.9984;
const MIN_LIGHTNESS = 0.2016;
const LIGHTNESS_RANGE = MAX_LIGHTNESS - MIN_LIGHTNESS;

/**
 * Threshold for determining dark mode based on background luminance
 */
const LUM_THRESHOLD = 0.18;

/**
 * Chroma distribution parameters
 */
const CHROMA_PEAK_POSITION = 0.6;
const CHROMA_FALLOFF_FACTOR = 0.6;

/**
 * Alpha channel values for brand tokens (true transparency; matches design tokens)
 * a100 primary: oklch(0.6225 0.2064 255.9 / 0.17); a50: / 0.11; a25: / 0.08; a200: / 0.31
 */
const ALPHA_LEVELS: Record<AlphaLevel, number> = {
  a25: 0.08,
  a50: 0.11,
  a100: 0.17,
  a200: 0.31,
};

/**
 * Default palette generation options
 */
const DEFAULT_OPTIONS: Required<GeneratePaletteOptions> = {
  gamut: 'sRGB',
  paletteType: 'accessible',
  backgroundLuminance: 1.0,
  minChroma: 0.02,
  hueShiftAmount: 5,
};

/**
 * Parses #RRGGBBAA to RGB (0-1) and alpha (0-1)
 */
const parseHexWithAlpha = (hex: string): {color: RGB; alpha: number} => {
  const s = hex.replace(/^#/, '');
  if (s.length !== 8) {
    return {color: hexToRgb(hex) as RGB, alpha: 1};
  }
  const r = parseInt(s.slice(0, 2), 16) / 255;
  const g = parseInt(s.slice(2, 4), 16) / 255;
  const b = parseInt(s.slice(4, 6), 16) / 255;
  const a = parseInt(s.slice(6, 8), 16) / 255;
  return {color: [r, g, b], alpha: a};
};

/**
 * Normalizes a step value to 0-1 range
 */
const normalizeStep = (step: number): number => step / SCALE_MAX;

/**
 * Computes the lightness value for a given step in the color scale
 *
 * @param step - The step value (25, 50, 100, 200, etc.)
 * @param backgroundY - Background lightness value (0-1)
 * @param applyGuarantees - Whether to apply WCAG contrast guarantees
 * @returns Computed lightness value (0-1)
 */
const computeLightness = (step: number, backgroundY: number, applyGuarantees = false): number => {
  const normalizedStep = normalizeStep(step);
  const shouldInvert = backgroundY < LUM_THRESHOLD;
  let lightness = shouldInvert
    ? MIN_LIGHTNESS + normalizedStep * LIGHTNESS_RANGE
    : MAX_LIGHTNESS - normalizedStep * LIGHTNESS_RANGE;

  if (applyGuarantees) {
    // Apply small lightness adjustments to guarantee WCAG contrast requirements:
    // - Step 500: Move slightly away from background for better contrast
    // - Step 600: Move slightly toward background to create distinction from 500
    const adjustment = shouldInvert ? -0.01 : 0.01;
    if (step === 500) {
      lightness += adjustment;
    } else if (step === 600) {
      lightness -= adjustment;
    }
  }

  return clamp(lightness, 0, 1);
};

/**
 * Computes chroma value for a given normalized position
 *
 * @param scaleValue - Normalized position in scale (0-1)
 * @param minChroma - Minimum chroma value
 * @param maxChroma - Maximum chroma value
 * @param paletteType - Type of palette ('accessible' or 'neutral')
 * @returns Computed chroma value
 */
const computeChroma = (
  scaleValue: number,
  minChroma: number,
  maxChroma: number,
  paletteType: PaletteType = 'accessible'
): number => {
  if (paletteType === 'neutral') {
    const neutralChroma = -0.8 * scaleValue * scaleValue + 0.8 * scaleValue;
    const neutralMaxChroma = Math.min(maxChroma * 0.3, 0.08);
    return minChroma + neutralChroma * neutralMaxChroma;
  }

  const adjustedValue = scaleValue - CHROMA_PEAK_POSITION;
  const chromaDifference = maxChroma - minChroma;
  const chromaAtPeak = minChroma + chromaDifference;
  const chromaValue =
    chromaAtPeak -
    chromaDifference * CHROMA_FALLOFF_FACTOR * Math.pow(adjustedValue / CHROMA_PEAK_POSITION, 2);

  return clamp(chromaValue, minChroma, maxChroma);
};

/**
 * Computes hue with optional shifting for better saturation at certain ranges
 *
 * @param scaleValue - Normalized position in scale (0-1)
 * @param baseHue - Base hue value (0-360)
 * @param lightness - Lightness value for context
 * @param hueShiftAmount - Amount of hue shift to apply
 * @returns Computed hue value
 */
const computeScaleHue = (
  scaleValue: number,
  baseHue: number,
  lightness?: number,
  hueShiftAmount = 5
): number => {
  const normalizedHue = ((baseHue % 360) + 360) % 360;
  const isYellowAdjacent = normalizedHue >= 60 && normalizedHue <= 100;

  if (isYellowAdjacent && lightness !== undefined) {
    // Enhanced hue shifting for yellow-adjacent colors to increase chroma
    const lightnessPosition = lightness;
    const shiftIntensity = 1 - lightnessPosition;
    let targetShiftedHue;

    if (normalizedHue >= 90) {
      targetShiftedHue = 45 + (normalizedHue - 90) * 0.5;
    } else if (normalizedHue >= 80) {
      targetShiftedHue = 40 + (normalizedHue - 80) * 0.5;
    } else {
      targetShiftedHue = 35 + (normalizedHue - 60) * 0.25;
    }

    const hueShiftDistance = (normalizedHue - targetShiftedHue) * shiftIntensity;
    const enhancedShiftScale = hueShiftAmount / 5;
    const adjustedHueShift = hueShiftDistance * enhancedShiftScale;
    const targetHue = normalizedHue - adjustedHueShift;

    return ((targetHue % 360) + 360) % 360;
  }

  const standardShift = hueShiftAmount * (1 - scaleValue);
  return baseHue + standardShift;
};

/**
 * Computes a single color in the scale
 */
const computeScaleColor = (
  scaleNumber: number,
  baseHue: number,
  minChroma: number,
  maxChroma: number,
  backgroundY: number,
  gamut: GamutType,
  paletteType: PaletteType,
  hueShiftAmount: number
): OklchColor => {
  const normalizedStep = normalizeStep(scaleNumber);
  const lightness = computeLightness(scaleNumber, backgroundY, true);
  const hue = computeScaleHue(normalizedStep, baseHue, lightness, hueShiftAmount);
  const desiredChroma = computeChroma(normalizedStep, minChroma, maxChroma, paletteType);
  const maxPossibleChroma = computeMaxChroma(hue, lightness, gamut);
  const chroma = Math.min(desiredChroma, maxPossibleChroma);

  return {l: lightness, c: chroma, h: hue};
};

/**
 * Generates an accessible color palette from any supported color format.
 *
 * The function accepts colors in the following formats:
 * - Hex: `#fff`, `#ffffff`, `fff`, `ffffff`
 * - RGB: `rgb(255, 128, 0)`, `rgba(255, 128, 0, 1)`
 * - OKLCH: `oklch(0.7 0.15 250)`, `oklch(70% 0.15 250deg)`
 *
 * @param color - Input color in hex, rgb, or oklch format
 * @param options - Optional configuration for palette generation
 * @returns An AccessiblePalette object with all color steps and helper methods
 *
 * @example
 * ```tsx
 * // Basic usage with hex color
 * const palette = generateAccessiblePalette('#0875E1');
 *
 * // With options
 * const darkModePalette = generateAccessiblePalette('#0875E1', {
 *   backgroundLuminance: 0.1, // Dark background
 *   paletteType: 'accessible',
 * });
 *
 * // Using the palette
 * const styles = {
 *   backgroundColor: palette.getHex(100),
 *   color: palette.getHex(900),
 *   borderColor: palette.getHex(300),
 * };
 * ```
 */
export function generateAccessiblePalette(
  color: string,
  options: GeneratePaletteOptions = {}
): AccessiblePalette {
  const opts = {...DEFAULT_OPTIONS, ...options};
  const {gamut, paletteType, backgroundLuminance, minChroma, hueShiftAmount} = opts;

  // Parse input color to OKLCH
  const inputOklch = parseColorToOklch(color);
  const baseHue = inputOklch.h || 0;

  // Calculate max chroma at the middle of the scale for reference
  const lightness500 = computeLightness(500, backgroundLuminance);
  const maxChroma = computeMaxChroma(baseHue, lightness500, gamut);

  // Generate all steps
  const steps: PaletteStep[] = SCALE.map(step => {
    const oklch = computeScaleColor(
      step,
      baseHue,
      minChroma,
      maxChroma,
      backgroundLuminance,
      gamut,
      paletteType,
      hueShiftAmount
    );

    const hex = oklchToHex(oklch.l, oklch.c, oklch.h);
    const contrastRatioValue = checkContrastRatio(oklch, backgroundLuminance, gamut);

    return {
      step,
      hex,
      oklch,
      contrastRatio: contrastRatioValue,
      wcagAA: meetsWCAGContrast(contrastRatioValue, 'AA'),
      wcagAAA: meetsWCAGContrast(contrastRatioValue, 'AAA'),
    };
  });

  // Compute alpha variants: same step color with alpha channel (true transparency)
  const alphaLevelKeys = Object.keys(ALPHA_LEVELS) as AlphaLevel[];
  for (const step of steps) {
    const stepRgb = hexToRgb(step.hex) as RGB;
    const alphaRecord: PaletteStepAlpha = {} as PaletteStepAlpha;
    for (const level of alphaLevelKeys) {
      alphaRecord[level] = rgbToHex(stepRgb, ALPHA_LEVELS[level]);
    }
    step.alpha = alphaRecord;
  }

  const isDarkMode = backgroundLuminance < LUM_THRESHOLD;

  return {
    steps,
    inputColor: color,
    isDarkMode,
    getStep: (step: number) => steps.find(s => s.step === step),
    getHex: (step: number) => steps.find(s => s.step === step)?.hex,
    getAlphaHex: (step: number, alphaLevel: AlphaLevel) =>
      steps.find(s => s.step === step)?.alpha?.[alphaLevel],
    getAlphaRgba: (step: number, alphaLevel: AlphaLevel) => {
      const hexWithAlpha = steps.find(s => s.step === step)?.alpha?.[alphaLevel];
      if (!hexWithAlpha) {
        return undefined;
      }
      const {color: rgb, alpha: a} = parseHexWithAlpha(hexWithAlpha);
      return formatRGBA(rgb, a);
    },
    getAlphaOklch: (step: number, alphaLevel: AlphaLevel) => {
      const s = steps.find(st => st.step === step);
      if (!s?.alpha?.[alphaLevel]) {
        return undefined;
      }
      const {l, c, h} = s.oklch;
      const a = ALPHA_LEVELS[alphaLevel];
      return `oklch(${l.toFixed(4)} ${c.toFixed(4)} ${h.toFixed(2)} / ${a})`;
    },
  };
}

/**
 * Generates a neutral (low-chroma) palette from a base hue.
 * Useful for creating background/surface color scales.
 *
 * @param hue - Base hue value (0-360) or a color string to extract hue from
 * @param options - Optional configuration for palette generation
 * @returns An AccessiblePalette with neutral (desaturated) colors
 *
 * @example
 * ```tsx
 * // Generate a neutral blue-tinted gray scale
 * const neutralPalette = generateNeutralPalette(220);
 *
 * // Or extract hue from an existing color
 * const neutralPalette = generateNeutralPalette('#0875E1');
 * ```
 */
export function generateNeutralPalette(
  hue: number | string,
  options: Omit<GeneratePaletteOptions, 'paletteType'> = {}
): AccessiblePalette {
  const baseHue = typeof hue === 'number' ? hue : parseColorToOklch(hue).h;
  const baseColor = `oklch(0.5 0.1 ${baseHue})`;

  return generateAccessiblePalette(baseColor, {
    ...options,
    paletteType: 'neutral',
  });
}

export {SCALE as paletteSteps};
