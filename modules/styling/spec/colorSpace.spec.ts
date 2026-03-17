import {colorSpace} from '../lib/colorSpace';

describe('CSS color-mix Functions', () => {
  describe('darken', () => {
    it('should return color-mix of darkening of a color', () => {
      const color = '--cnvs-sys-color-surface-alt-strong';
      const fallback = '--cnvs-sys-color-bg-alt-strong';
      const mixinColor = '--cnvs-sys-color-surface-overlay-mixin';
      const mixinValue = '--cnvs-sys-opacity-surface-hover';
      const expected = colorSpace.darken({color, fallback, mixinColor, mixinValue});

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(${mixinColor}, black) calc(var(${mixinValue}, 0) * 100%))`
      );
    });
  });
  describe('hover', () => {
    it('should return color-mix of hover state', () => {
      const color = '--cnvs-sys-color-surface-alt-strong';
      const fallback = '--cnvs-sys-color-bg-alt-strong';
      const colorType = 'accent';

      const expected = colorSpace.hover({color, fallback, colorType});

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(system.color.${colorType}.overlay.mixin}, black) calc(var(system.opacity.${colorType}.hover}, 0) * 100%))`
      );
    });
  });
  describe('pressed', () => {
    it('should return color-mix of pressed state', () => {
      const color = '--cnvs-sys-color-surface-alt-strong';
      const fallback = '--cnvs-sys-color-bg-alt-strong';
      const colorType = 'accent';

      const expected = colorSpace.pressed({color, fallback, colorType});

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(system.color.${colorType}.overlay.mixin}, black) calc(var(system.opacity.${colorType}.pressed, 0) * 100%))`
      );
    });
  });
});
