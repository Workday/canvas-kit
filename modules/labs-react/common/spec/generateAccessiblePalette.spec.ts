import {hexToRgb} from '../lib/theming/palette/conversion';
import {generateAccessiblePalette} from '../lib/theming/palette/generateAccessiblePalette';

describe('generateAccessiblePalette', () => {
  const testColor = '#0875E1';

  describe('alpha tokens', () => {
    it('getAlphaHex(step, "a100") should match getHex(step) RGB with alpha channel 0.17', () => {
      const palette = generateAccessiblePalette(testColor);
      const solidHex = palette.getHex(600);
      const alpha100Hex = palette.getAlphaHex(600, 'a100');

      expect(alpha100Hex).toBeDefined();
      // a100 is #RRGGBBAA with same RGB as solid, alpha = 0.17 (0x2b)
      expect(alpha100Hex!.slice(0, 7)).toBe(solidHex);
      expect(alpha100Hex!.slice(7, 9).toLowerCase()).toBe('2b');
    });

    it('getAlphaHex(step, "a25") should return hex with alpha (#RRGGBBAA)', () => {
      const palette = generateAccessiblePalette(testColor);
      const alpha25Hex = palette.getAlphaHex(600, 'a25');

      expect(alpha25Hex).toBeDefined();
      expect(alpha25Hex).toMatch(/^#[0-9a-fA-F]{8}$/);
    });

    it('getAlphaHex and getAlphaRgba should return values for all alpha levels', () => {
      const palette = generateAccessiblePalette(testColor);
      const levels = ['a25', 'a50', 'a100', 'a200'] as const;

      for (const level of levels) {
        const hex = palette.getAlphaHex(600, level);
        const rgba = palette.getAlphaRgba(600, level);

        expect(hex).toBeDefined();
        expect(hex).toMatch(/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/);
        expect(rgba).toBeDefined();
        expect(rgba).toMatch(/^rgba?\(/);
      }
    });

    it('alpha variant has same RGB as solid step with correct alpha channel', () => {
      const palette = generateAccessiblePalette(testColor);
      const solidHex = palette.getHex(600)!;
      const solidRgb = hexToRgb(solidHex) as [number, number, number];

      // a50: same RGB as step, alpha = 0.11
      const alpha50Hex = palette.getAlphaHex(600, 'a50')!;
      const alpha50R = parseInt(alpha50Hex.slice(1, 3), 16) / 255;
      const alpha50G = parseInt(alpha50Hex.slice(3, 5), 16) / 255;
      const alpha50B = parseInt(alpha50Hex.slice(5, 7), 16) / 255;
      const alpha50A = parseInt(alpha50Hex.slice(7, 9), 16) / 255;

      const eps = 1 / 255;
      expect(Math.abs(alpha50R - solidRgb[0])).toBeLessThanOrEqual(eps);
      expect(Math.abs(alpha50G - solidRgb[1])).toBeLessThanOrEqual(eps);
      expect(Math.abs(alpha50B - solidRgb[2])).toBeLessThanOrEqual(eps);
      expect(Math.abs(alpha50A - 0.11)).toBeLessThanOrEqual(eps);
    });

    it('getAlphaOklch returns oklch(L C H / alpha) string', () => {
      const palette = generateAccessiblePalette(testColor);
      const oklch = palette.getAlphaOklch(600, 'a50');

      expect(oklch).toBeDefined();
      expect(oklch).toMatch(/^oklch\([\d.]+ [\d.]+ [\d.]+ \/ 0\.11\)$/);
    });
  });

  describe('step.alpha', () => {
    it('each step should have alpha record with a25, a50, a100, a200', () => {
      const palette = generateAccessiblePalette(testColor);
      const step = palette.getStep(600);

      expect(step?.alpha).toBeDefined();
      expect(step?.alpha?.a25).toMatch(/^#[0-9a-fA-F]{8}$/);
      expect(step?.alpha?.a50).toMatch(/^#[0-9a-fA-F]{8}$/);
      expect(step?.alpha?.a100).toMatch(/^#[0-9a-fA-F]{8}$/);
      expect(step?.alpha?.a200).toMatch(/^#[0-9a-fA-F]{8}$/);
    });
  });
});
