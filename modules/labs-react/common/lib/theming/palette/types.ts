/**
 * Types for the accessible palette generator
 */

/**
 * Supported color gamuts for palette generation
 * - sRGB: Standard RGB color space (default, widest support)
 * - P3: Display P3 color space (wider gamut, supported on modern devices)
 */
export type GamutType = 'sRGB' | 'P3';

/**
 * Type of palette to generate
 * - accessible: Optimized for WCAG contrast requirements
 * - neutral: Low chroma palette for backgrounds/surfaces
 */
export type PaletteType = 'accessible' | 'neutral';

/**
 * Alpha level for brand tokens (alpha channel = true transparency).
 * - a25: 8% opacity (0.08)
 * - a50: 11% opacity (0.11)
 * - a100: 17% opacity (0.17)
 * - a200: 31% opacity (0.31)
 */
export type AlphaLevel = 'a25' | 'a50' | 'a100' | 'a200';

/**
 * Color representation as RGB tuple (values 0-1)
 */
export type RGB = [number, number, number];

/**
 * OKLCH color representation
 */
export interface OklchColor {
  /** Lightness (0-1) */
  l: number;
  /** Chroma (0-0.4+) */
  c: number;
  /** Hue (0-360) */
  h: number;
}

/**
 * Alpha variants for a palette step (hex with alpha #RRGGBBAA)
 */
export type PaletteStepAlpha = Record<AlphaLevel, string>;

/**
 * A single step in the color palette
 */
export interface PaletteStep {
  /** Step number (25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 975) */
  step: number;
  /** Hex color value */
  hex: string;
  /** OKLCH color values */
  oklch: OklchColor;
  /** Contrast ratio against the background */
  contrastRatio: number;
  /** Whether the step meets WCAG AA contrast requirements (4.5:1) */
  wcagAA: boolean;
  /** Whether the step meets WCAG AAA contrast requirements (7:1) */
  wcagAAA: boolean;
  /** Alpha variants (a25, a50, a100, a200) — hex with alpha for compositing over palette background */
  alpha?: PaletteStepAlpha;
}

/**
 * Complete accessible color palette
 */
export interface AccessiblePalette {
  /** All palette steps from lightest to darkest */
  steps: PaletteStep[];
  /** Input color that was used to generate the palette */
  inputColor: string;
  /** Whether the palette is for dark mode */
  isDarkMode: boolean;
  /** Get a specific step by number */
  getStep: (step: number) => PaletteStep | undefined;
  /** Get hex color for a specific step */
  getHex: (step: number) => string | undefined;
  /** Get hex with alpha for a step at the given alpha level (#RRGGBBAA) */
  getAlphaHex: (step: number, alphaLevel: AlphaLevel) => string | undefined;
  /** Get rgba string for a step at the given alpha level */
  getAlphaRgba: (step: number, alphaLevel: AlphaLevel) => string | undefined;
  /** Get oklch(L C H / alpha) string for a step at the given alpha level */
  getAlphaOklch: (step: number, alphaLevel: AlphaLevel) => string | undefined;
}

/**
 * Options for generating an accessible palette
 */
export interface GeneratePaletteOptions {
  /**
   * Color gamut to use for palette generation
   * @default 'sRGB'
   */
  gamut?: GamutType;

  /**
   * Type of palette to generate
   * @default 'accessible'
   */
  paletteType?: PaletteType;

  /**
   * Background luminance (0-1). Values below 0.18 are considered dark mode.
   * - 1.0 = white background (light mode)
   * - 0.0 = black background (dark mode)
   * @default 1.0
   */
  backgroundLuminance?: number;

  /**
   * Minimum chroma for the palette
   * @default 0.02
   */
  minChroma?: number;

  /**
   * Amount of hue shift to apply (0-10)
   * @default 5
   */
  hueShiftAmount?: number;
}
