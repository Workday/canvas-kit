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
    it('should return color-mix of hover state using accent tokens', () => {
      const color = '--cnvs-sys-color-brand-accent-primary';
      const fallback = '--cnvs-brand-primary-base';
      const colorType = 'accent';

      const expected = colorSpace.hover({color, fallback, colorType});

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(--cnvs-sys-color-${colorType}-overlay-mixin, oklch(0 0 0 / 1)) calc(var(--cnvs-sys-opacity-${colorType}-hover, 0.18) * 100%))`
      );
    });
    it('should return color-mix of hover state using surface tokens', () => {
      const color = '--cnvs-sys-color-brand-surface-primary-default';
      const fallback = '--cnvs-brand-primary-base';
      const colorType = 'surface';

      const expected = colorSpace.hover({color, fallback, colorType});

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(--cnvs-sys-color-${colorType}-overlay-mixin, oklch(0.629 0.0281 255.62 / 1)) calc(var(--cnvs-sys-opacity-${colorType}-hover, 0.08) * 100%))`
      );
    });
  });
  describe('pressed', () => {
    it('should return color-mix of pressed state using accent tokens', () => {
      const color = '--cnvs-sys-color-brand-accent-primary';
      const fallback = '--cnvs-brand-primary-base';
      const colorType = 'accent';

      const expected = colorSpace.pressed({color, fallback, colorType});

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(--cnvs-sys-color-${colorType}-overlay-mixin, oklch(0 0 0 / 1)) calc(var(--cnvs-sys-opacity-${colorType}-pressed, 0.36) * 100%))`
      );
    });
    it('should return color-mix of pressed state using surface tokens', () => {
      const color = '--cnvs-sys-color-brand-surface-primary-default';
      const fallback = '--cnvs-brand-primary-base';
      const colorType = 'surface';

      const expected = colorSpace.pressed({color, fallback, colorType});

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(--cnvs-sys-color-${colorType}-overlay-mixin, oklch(0.629 0.0281 255.62 / 1)) calc(var(--cnvs-sys-opacity-${colorType}-pressed, 0.18) * 100%))`
      );
    });
  });
});
