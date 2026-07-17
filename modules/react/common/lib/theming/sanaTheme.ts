/**
 * Sana Canvas theme presets.
 *
 * Sana is a distinct theme from classic Canvas — not a delta on `defaultCanvasTheme`.
 * Full visual treatment (fonts, shapes, system surfaces) comes from global CSS:
 * import `@workday/canvas-tokens-web/css/sana/_variables.css` and set
 * `data-theme="sana-canvas"` on `<html>`.
 *
 * These JS presets reference Sana brand CSS variables so `CanvasProvider` can forward
 * them to popup containers (menus, selects, modals). Keep in sync with
 * `@workday/canvas-tokens-web/css/sana/_variables.css`.
 *
 * | Preset | Use case |
 * |--------|----------|
 * | `sanaCanvasNumericalTheme` | Numerical `brand` shape for popup forwarding |
 * | `sanaCanvasProviderTheme` | Same — pass to root `CanvasProvider` with global Sana CSS |
 */
import {brand} from '@workday/canvas-tokens-web';

import type {CanvasNumericalBrandTheme} from './types';

/** Reference a canvas-tokens CSS variable (resolves under `[data-theme="sana-canvas"]`). */
const varRef = (token: string) => `var(${token})`;

/**
 * Sana Canvas brand tokens for scoped `CanvasProvider` / popup forwarding.
 * Values are `var()` references to Sana brand variables — not merged from `defaultCanvasTheme`.
 */
export const sanaCanvasNumericalTheme: CanvasNumericalBrandTheme = {
  themeScope: 'full',
  brand: {
    action: {
      base: varRef(brand.neutral975),
      dark: varRef(brand.neutral950),
      darkest: varRef(brand.neutral900),
      accent: varRef(brand.neutral0),
      lightest: varRef(brand.neutral25),
      lighter: varRef(brand.neutral50),
      light: varRef(brand.neutral200),
    },
    neutral: {
      '25': varRef(brand.neutral25),
      '50': varRef(brand.neutral50),
      '100': varRef(brand.neutral100),
      '150': varRef(brand.neutral150),
      '200': varRef(brand.neutral200),
      '300': varRef(brand.neutral300),
      '400': varRef(brand.neutral400),
      '500': varRef(brand.neutral500),
      '600': varRef(brand.neutral600),
      '700': varRef(brand.neutral700),
      '800': varRef(brand.neutral800),
      '850': varRef(brand.neutral850),
      '900': varRef(brand.neutral900),
      '950': varRef(brand.neutral950),
      '975': varRef(brand.neutral975),
      A25: varRef(brand.neutralA25),
      A50: varRef(brand.neutralA50),
      A100: varRef(brand.neutralA100),
      A150: varRef(brand.neutralA150),
      A200: varRef(brand.neutralA200),
    },
    primary: {
      '500': varRef(brand.primary500),
      '600': varRef(brand.primary600),
      '700': varRef(brand.primary700),
      A25: varRef(brand.primaryA25),
      A50: varRef(brand.primaryA50),
      A100: varRef(brand.primaryA100),
    },
    critical: {
      '500': varRef(brand.critical500),
      '600': varRef(brand.critical600),
      '700': varRef(brand.critical700),
      A25: varRef(brand.criticalA25),
      A50: varRef(brand.criticalA50),
    },
    caution: {
      '400': varRef(brand.caution400),
      '500': varRef(brand.caution500),
      A25: varRef(brand.cautionA25),
      A50: varRef(brand.cautionA50),
    },
    positive: {
      '600': varRef(brand.positive600),
      '800': varRef(brand.positive800),
      A25: varRef(brand.positiveA25),
      A50: varRef(brand.positiveA50),
    },
  },
  selected: {
    fg: varRef(brand.neutralA900),
    surface: varRef(brand.neutralA100),
  },
};

/**
 * Pass to `CanvasProvider` at app root when using global Sana CSS — forwards Sana brand
 * variables to popup containers.
 *
 * @example
 * ```tsx
 * // index.css: import sana/_variables.css last; <html data-theme="sana-canvas">
 * <CanvasProvider theme={sanaCanvasProviderTheme}><App /></CanvasProvider>
 * ```
 */
export const sanaCanvasProviderTheme = sanaCanvasNumericalTheme;
