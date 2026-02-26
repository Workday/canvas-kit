import {
  alpha,
  alphaColor,
  composite,
  formatRGBA,
  minAlpha,
  rgbToHex,
} from '../lib/theming/palette/alpha';
import {hexToRgb} from '../lib/theming/palette/conversion';
import type {RGB} from '../lib/theming/palette/types';

describe('alpha utilities', () => {
  describe('minAlpha', () => {
    it('should calculate minimum alpha for high contrast colors', () => {
      const black: RGB = [0, 0, 0];
      const white: RGB = [1, 1, 1];
      expect(minAlpha(black, white)).toBeGreaterThan(0.9);
    });

    it('should calculate minimum alpha for low contrast colors', () => {
      const lightGray: RGB = [0.9, 0.9, 0.9];
      const white: RGB = [1, 1, 1];
      expect(minAlpha(lightGray, white)).toBeLessThan(0.2);
    });

    it('should return minimum alpha for identical colors', () => {
      const color: RGB = [0.5, 0.5, 0.5];
      const result = minAlpha(color, color);
      expect(result).toBeCloseTo(0.02, 2);
      expect(result).toBeGreaterThanOrEqual(0.01);
    });

    it('should handle dark color on dark background', () => {
      const darkGray: RGB = [0.2, 0.2, 0.2];
      const black: RGB = [0, 0, 0];
      const result = minAlpha(darkGray, black);
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1);
    });

    it('should never exceed 0.99', () => {
      const color1: RGB = [0.5, 0.3, 0.8];
      const color2: RGB = [0, 0, 0];
      expect(minAlpha(color1, color2)).toBeLessThanOrEqual(0.99);
    });
  });

  describe('alpha', () => {
    it('should calculate transparent color that composites to target', () => {
      const target: RGB = [0.5, 0.5, 0.5];
      const bg: RGB = [1, 1, 1];
      const a = 0.5;
      const transparent = alpha(target, bg, a);
      const composited = composite(transparent, bg, a);
      expect(composited[0]).toBeCloseTo(target[0], 2);
      expect(composited[1]).toBeCloseTo(target[1], 2);
      expect(composited[2]).toBeCloseTo(target[2], 2);
    });

    it('should handle alpha = 1 (fully opaque)', () => {
      const target: RGB = [0.3, 0.6, 0.9];
      const bg: RGB = [1, 1, 1];
      const transparent = alpha(target, bg, 1);
      expect(transparent[0]).toBeCloseTo(target[0], 2);
      expect(transparent[1]).toBeCloseTo(target[1], 2);
      expect(transparent[2]).toBeCloseTo(target[2], 2);
    });

    it('should clamp values between 0 and 1', () => {
      const target: RGB = [0.9, 0.9, 0.9];
      const bg: RGB = [0.8, 0.8, 0.8];
      const transparent = alpha(target, bg, 0.1);
      expect(transparent[0]).toBeGreaterThanOrEqual(0);
      expect(transparent[0]).toBeLessThanOrEqual(1);
      expect(transparent[1]).toBeGreaterThanOrEqual(0);
      expect(transparent[1]).toBeLessThanOrEqual(1);
      expect(transparent[2]).toBeGreaterThanOrEqual(0);
      expect(transparent[2]).toBeLessThanOrEqual(1);
    });
  });

  describe('composite', () => {
    it('should composite color over background with alpha', () => {
      const fg: RGB = [0, 0, 0];
      const bg: RGB = [1, 1, 1];
      const result = composite(fg, bg, 0.5);
      expect(result[0]).toBeCloseTo(0.5, 2);
      expect(result[1]).toBeCloseTo(0.5, 2);
      expect(result[2]).toBeCloseTo(0.5, 2);
    });

    it('should return background color when alpha = 0', () => {
      const fg: RGB = [0, 0, 0];
      const bg: RGB = [1, 1, 1];
      const result = composite(fg, bg, 0);
      expect(result[0]).toBe(1);
      expect(result[1]).toBe(1);
      expect(result[2]).toBe(1);
    });

    it('should return foreground color when alpha = 1', () => {
      const fg: RGB = [0.2, 0.4, 0.6];
      const bg: RGB = [1, 1, 1];
      const result = composite(fg, bg, 1);
      expect(result[0]).toBeCloseTo(0.2, 2);
      expect(result[1]).toBeCloseTo(0.4, 2);
      expect(result[2]).toBeCloseTo(0.6, 2);
    });

    it('should clamp alpha values outside 0-1 range', () => {
      const fg: RGB = [0.5, 0.5, 0.5];
      const bg: RGB = [1, 1, 1];
      expect(composite(fg, bg, -0.5)[0]).toBe(1);
      expect(composite(fg, bg, 1.5)[0]).toBeCloseTo(0.5, 2);
    });
  });

  describe('formatRGBA', () => {
    it('should format as rgb() when alpha omitted', () => {
      const color: RGB = [0.031, 0.459, 0.882];
      expect(formatRGBA(color)).toBe('rgb(8, 117, 225)');
    });

    it('should format as rgba() when alpha provided', () => {
      const color: RGB = [0.031, 0.459, 0.882];
      expect(formatRGBA(color, 0.75)).toBe('rgba(8, 117, 225, 0.75)');
    });

    it('should handle white and black', () => {
      expect(formatRGBA([1, 1, 1])).toBe('rgb(255, 255, 255)');
      expect(formatRGBA([0, 0, 0])).toBe('rgb(0, 0, 0)');
    });

    it('should handle alpha = 0 and 1', () => {
      const color: RGB = [0.5, 0.5, 0.5];
      expect(formatRGBA(color, 0)).toBe('rgba(128, 128, 128, 0.00)');
      expect(formatRGBA(color, 1)).toBe('rgba(128, 128, 128, 1.00)');
    });

    it('should clamp alpha values outside 0-1 range', () => {
      const color: RGB = [0.5, 0.5, 0.5];
      expect(formatRGBA(color, -0.5)).toBe('rgba(128, 128, 128, 0.00)');
      expect(formatRGBA(color, 1.5)).toBe('rgba(128, 128, 128, 1.00)');
    });

    it('should clamp RGB values outside 0-1 range', () => {
      const invalid: RGB = [-0.5, 1.5, 0.5];
      expect(formatRGBA(invalid)).toBe('rgb(0, 255, 128)');
    });
  });

  describe('rgbToHex', () => {
    it('should output #RRGGBB when alpha omitted', () => {
      const color: RGB = [0.031, 0.459, 0.882];
      expect(rgbToHex(color)).toBe('#0875e1');
    });

    it('should output #RRGGBBAA when alpha provided', () => {
      const color: RGB = [0.031, 0.459, 0.882];
      expect(rgbToHex(color, 0.75)).toBe('#0875e1bf');
    });

    it('should handle white and black', () => {
      expect(rgbToHex([1, 1, 1])).toBe('#ffffff');
      expect(rgbToHex([0, 0, 0])).toBe('#000000');
    });

    it('should handle alpha = 0 and 1', () => {
      expect(rgbToHex([1, 1, 1], 0)).toBe('#ffffff00');
      expect(rgbToHex([0, 0, 0], 1)).toBe('#000000ff');
    });

    it('should clamp alpha values', () => {
      const color: RGB = [0.5, 0.5, 0.5];
      expect(rgbToHex(color, -0.5)).toBe('#80808000');
      expect(rgbToHex(color, 1.5)).toBe('#808080ff');
    });

    it('should pad single digit hex values', () => {
      const color: RGB = [0.02, 0.02, 0.02];
      const result = rgbToHex(color);
      expect(result).toMatch(/^#[0-9a-f]{6}$/);
      expect(result.length).toBe(7);
    });

    it('should clamp out-of-range RGB values', () => {
      const invalid: RGB = [-0.5, 1.5, 0.5];
      expect(rgbToHex(invalid)).toBe('#00ff80');
      expect(rgbToHex(invalid, 0.5)).toBe('#00ff8080');
    });
  });

  describe('alphaColor', () => {
    describe('with RGB tuples', () => {
      it('should calculate transparent color with minimum alpha', () => {
        const target: RGB = [0.5, 0.5, 0.5];
        const bg: RGB = [1, 1, 1];
        const result = alphaColor(target, bg);

        expect(result.alpha).toBeGreaterThan(0);
        expect(result.alpha).toBeLessThanOrEqual(0.99);
        expect(Array.isArray(result.color)).toBe(true);
        expect(result.color.length).toBe(3);
        expect(result.rgba).toMatch(/^rgba\(\d+, \d+, \d+, \d+\.\d+\)$/);
        expect(result.hex).toMatch(/^#[0-9a-f]{8}$/);
      });

      it('should use provided target alpha', () => {
        const target: RGB = [0.5, 0.5, 0.5];
        const bg: RGB = [1, 1, 1];
        const result = alphaColor(target, bg, 0.6);
        expect(result.alpha).toBeCloseTo(0.6, 2);
      });

      it('should default to white background', () => {
        const target: RGB = [0.5, 0.5, 0.5];
        const result = alphaColor(target);
        expect(result).toBeDefined();
        expect(result.alpha).toBeGreaterThan(0);
      });

      it('should produce compositable result', () => {
        const target: RGB = [0.3, 0.6, 0.9];
        const bg: RGB = [1, 1, 1];
        const result = alphaColor(target, bg);
        const composited = composite(result.color, bg, result.alpha);
        expect(composited[0]).toBeCloseTo(target[0], 1);
        expect(composited[1]).toBeCloseTo(target[1], 1);
        expect(composited[2]).toBeCloseTo(target[2], 1);
      });

      it('should return original at 100% alpha when targetAlpha cannot achieve target', () => {
        const white: RGB = [1, 1, 1];
        const gray: RGB = [0.5, 0.5, 0.5];
        const result = alphaColor(white, gray, 0.5); // White on gray at 50% is impossible
        expect(result.alpha).toBe(1);
        expect(result.color[0]).toBeCloseTo(1, 5);
        expect(result.color[1]).toBeCloseTo(1, 5);
        expect(result.color[2]).toBeCloseTo(1, 5);
      });
    });

    describe('with hex strings', () => {
      it('should calculate transparent color from hex strings', () => {
        const result = alphaColor('#808080', '#FFFFFF');
        expect(result.alpha).toBeGreaterThan(0);
        expect(result.rgba).toMatch(/^rgba\(\d+, \d+, \d+, \d+\.\d+\)$/);
        expect(result.hex).toMatch(/^#[0-9a-f]{8}$/);
      });

      it('should default to white background', () => {
        const result = alphaColor('#808080');
        expect(result).toBeDefined();
        expect(result.alpha).toBeGreaterThan(0);
      });

      it('should use provided target alpha', () => {
        const result = alphaColor('#808080', '#FFFFFF', 0.7);
        expect(result.alpha).toBeCloseTo(0.7, 2);
      });

      it('should handle 3-character hex codes', () => {
        const result = alphaColor('#FFF', '#000');
        expect(result).toBeDefined();
        expect(result.alpha).toBeGreaterThan(0.9);
      });
    });
  });

  describe('round-trip conversions', () => {
    it('should preserve color through alphaColor → composite cycle', () => {
      const original: RGB = [0.2, 0.4, 0.8];
      const bg: RGB = [1, 1, 1];
      const result = alphaColor(original, bg);
      const composited = composite(result.color, bg, result.alpha);
      expect(composited[0]).toBeCloseTo(original[0], 1);
      expect(composited[1]).toBeCloseTo(original[1], 1);
      expect(composited[2]).toBeCloseTo(original[2], 1);
    });

    it('should match hex and RGB inputs', () => {
      const hexResult = alphaColor('#0875E1', '#FFFFFF');
      const rgbResult = alphaColor(hexToRgb('#0875E1'), hexToRgb('#FFFFFF'));
      expect(hexResult.alpha).toBeCloseTo(rgbResult.alpha, 2);
      expect(hexResult.hex).toBe(rgbResult.hex);
    });
  });

  describe('input validation', () => {
    describe('minAlpha', () => {
      it('should throw for invalid color tuples', () => {
        const valid: RGB = [0.5, 0.5, 0.5];
        expect(() => minAlpha(['invalid', 0.5, 0.5] as any, valid)).toThrow(TypeError);
      });

      it('should throw for non-array input', () => {
        const valid: RGB = [0.5, 0.5, 0.5];
        expect(() => minAlpha({r: 0.5, g: 0.5, b: 0.5} as any, valid)).toThrow('RGB tuple');
      });

      it('should throw for wrong array length', () => {
        const valid: RGB = [0.5, 0.5, 0.5];
        expect(() => minAlpha([0.5, 0.5] as any, valid)).toThrow(TypeError);
      });

      it('should throw for NaN values', () => {
        const valid: RGB = [0.5, 0.5, 0.5];
        expect(() => minAlpha([NaN, 0.5, 0.5], valid)).toThrow(RangeError);
      });

      it('should throw for Infinity values', () => {
        const valid: RGB = [0.5, 0.5, 0.5];
        expect(() => minAlpha([Infinity, 0.5, 0.5], valid)).toThrow(RangeError);
      });
    });

    describe('alphaColor', () => {
      it('should throw for invalid target alpha', () => {
        expect(() => alphaColor('#FFF', '#000', NaN)).toThrow(TypeError);
        expect(() => alphaColor('#FFF', '#000', NaN)).toThrow('finite number');
      });

      it('should throw for invalid hex colors', () => {
        expect(() => alphaColor('invalid', '#FFFFFF')).toThrow();
      });

      it('should throw for invalid background hex', () => {
        expect(() => alphaColor('#FFFFFF', 'invalid')).toThrow();
      });

      it('should throw for invalid RGB tuple', () => {
        expect(() => alphaColor([NaN, 0.5, 0.5])).toThrow(RangeError);
        expect(() => alphaColor([1, 2] as any)).toThrow(TypeError);
      });
    });
  });
});
