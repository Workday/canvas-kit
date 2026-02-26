import {colorSpace} from '../lib/colorSpace';

describe('CSS color-mix Functions', () => {
  describe('darken', () => {
    it('should return color-mix of darkening of a color', () => {
      const color = '--cnvs-sys-color-surface-alt-strong';
      const fallback = '--cnvs-sys-color-bg-alt-strong';
      const mixinColor = '--cnvs-sys-color-surface-overlay-mixin';
      const mixinValue = '--cnvs-sys-opacity-surface-hover';
      const expected = colorSpace.darken(color, fallback, mixinColor, mixinValue);

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(${mixinColor}, black) calc(var(${mixinValue}, 0) * 100%))`
      );
    });
  });
});
