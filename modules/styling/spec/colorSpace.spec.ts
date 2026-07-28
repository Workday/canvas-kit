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
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(--cnvs-sys-color-${colorType}-overlay-hover, oklch(0.0847 0 0 / 0.17)) calc(var(--cnvs-sys-opacity-${colorType}-hover, 0.18) * 100%))`
      );
    });
    it('should return color-mix of hover state using the default surface overlay tokens', () => {
      const color = '--cnvs-sys-color-brand-surface-primary-default';
      const fallback = '--cnvs-brand-primary-base';
      const colorType = 'surface';

      const expected = colorSpace.hover({color, fallback, colorType});

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(--cnvs-sys-color-${colorType}-overlay-hover-default, oklch(0.3343 0.0951 253.3 / 0.05)) calc(var(--cnvs-sys-opacity-${colorType}-hover, 0.08) * 100%))`
      );
    });
    it('should return color-mix of hover state using the inverse surface overlay tokens', () => {
      const color = '--cnvs-sys-color-brand-surface-primary-default';
      const fallback = '--cnvs-brand-primary-base';
      const colorType = 'surface';
      const surfaceType = 'inverse';

      const expected = colorSpace.hover({color, fallback, colorType, surfaceType});

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(--cnvs-sys-color-${colorType}-overlay-hover-inverse, oklch(1 0 0 / 0.16)) calc(var(--cnvs-sys-opacity-${colorType}-hover, 0.08) * 100%))`
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
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(--cnvs-sys-color-${colorType}-overlay-pressed, oklch(0.0847 0 0 / 0.36)) calc(var(--cnvs-sys-opacity-${colorType}-pressed, 0.36) * 100%))`
      );
    });
    it('should return color-mix of pressed state using the default surface overlay tokens', () => {
      const color = '--cnvs-sys-color-brand-surface-primary-default';
      const fallback = '--cnvs-brand-primary-base';
      const colorType = 'surface';

      const expected = colorSpace.pressed({color, fallback, colorType});

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(--cnvs-sys-color-${colorType}-overlay-pressed-default, oklch(0.3337 0.0688 250.79 / 0.09)) calc(var(--cnvs-sys-opacity-${colorType}-pressed, 0.18) * 100%))`
      );
    });
    it('should return color-mix of pressed state using the inverse surface overlay tokens', () => {
      const color = '--cnvs-sys-color-brand-surface-primary-default';
      const fallback = '--cnvs-brand-primary-base';
      const colorType = 'surface';
      const surfaceType = 'inverse';

      const expected = colorSpace.pressed({color, fallback, colorType, surfaceType});

      expect(expected).toBe(
        `color-mix(in srgb, var(${color}, var(${fallback})) , var(--cnvs-sys-color-${colorType}-overlay-pressed-inverse, oklch(1 0 0 / 0.26)) calc(var(--cnvs-sys-opacity-${colorType}-pressed, 0.18) * 100%))`
      );
    });
  });
});
