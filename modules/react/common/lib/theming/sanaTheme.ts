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
 * | `sanaCanvasProviderTheme` | Same — pass to root `CanvasProvider` when `<html>` is unavailable |
 */
import {cssVar} from '@workday/canvas-kit-styling';
import {base, brand} from '@workday/canvas-tokens-web';

import type {CanvasNumericalBrandTheme} from './types';

/**
 * `base.sana` is a pre-built map of `var(--token, fallback)` strings exported by
 * canvas-tokens-web specifically for these Sana-only base-palette steps — use them directly,
 * not `cssVar()` (which expects a bare variable name, not an already-wrapped `var()` string).
 * Referencing `base.*` (not `brand.*` of the same name) avoids a `var()` self-reference cycle:
 * CanvasProvider writes each ramp entry onto the identically-named `--cnvs-brand-*` variable, so
 * `brand.sana.neutral150` (itself `var(--cnvs-brand-neutral-150, ...)`) would point right back at
 * the variable being written.
 */
const sanaBasePalette = base.sana;

/**
 * Sana Canvas brand tokens for scoped `CanvasProvider` / popup forwarding.
 * Values are `var()` references to Sana brand variables — not merged from `defaultCanvasTheme`.
 *
 * Mirrors only what Sana's stylesheet itself defines: the `neutral` ramp, the `A300` step of
 * `primary`/`critical`/`caution`/`positive` (the one step Sana redefines for those families — a
 * stronger alpha wash on the matching hue), and the four `system.color.brand.*` tokens Sana
 * overrides. Every other key is intentionally omitted — Sana does not define a distinct value
 * for it, so writing it here would only reference the very variable being written (a `var()`
 * cycle that resolves to invalid, leaking the classic-theme fallback color instead of Sana's).
 *
 * `action.*` and `selected.*` are deliberately **not** set. Sana's stylesheet does not define
 * `--cnvs-brand-action-*` or `--cnvs-sys-color-brand-fg-selected`/`-surface-selected`; those are
 * derived downstream from the root theme. Forcing them here would pin values the root is meant
 * to own.
 *
 * Ramp values must reference `base.*` (the underlying palette), never `brand.*` of the same
 * name — CanvasProvider writes each entry onto the identically-named `--cnvs-brand-*` CSS
 * variable, so referencing `brand.*` here would create that same self-reference cycle. The
 * `system.color.brand.*` overrides are the exception: they target *different* CSS variables
 * (`--cnvs-sys-color-brand-*`) than the `brand.*` values they reference, so no cycle.
 *
 * Note this preset only covers brand tokens. The rest of Sana (shape, depth, type, non-brand
 * system colors) comes from the stylesheet's `[data-theme="sana-canvas"]` block — pass
 * `data-theme` to `CanvasProvider` alongside this preset and it is forwarded to portaled popups
 * so the full theme applies there too.
 */
export const sanaCanvasNumericalTheme: CanvasNumericalBrandTheme = {
  // Explicit brand vars only — multi-key ramps write 1:1; no system shortcut bundles run.
  themeScope: 'brand',
  brand: {
    primary: {
      A300: sanaBasePalette.blueA300,
    },
    critical: {
      A300: sanaBasePalette.redA300,
    },
    caution: {
      A300: sanaBasePalette.amberA300,
    },
    positive: {
      A300: sanaBasePalette.greenA300,
    },
    neutral: {
      '25': cssVar(base.neutral25),
      '50': cssVar(base.neutral50),
      '100': cssVar(base.neutral100),
      '150': sanaBasePalette.neutral150,
      '200': cssVar(base.neutral200),
      '300': cssVar(base.neutral300),
      '400': cssVar(base.neutral400),
      '500': cssVar(base.neutral500),
      '600': cssVar(base.neutral600),
      '700': cssVar(base.neutral700),
      '800': cssVar(base.neutral800),
      '850': sanaBasePalette.neutral850,
      '900': cssVar(base.neutral900),
      '950': cssVar(base.neutral950),
      '975': cssVar(base.neutral975),
      A25: cssVar(base.neutralA25),
      A50: cssVar(base.neutralA50),
      A100: cssVar(base.neutralA100),
      A150: sanaBasePalette.neutralA150,
      A200: cssVar(base.neutralA200),
      A300: cssVar(base.neutralA300),
      A400: cssVar(base.neutralA400),
      A500: cssVar(base.neutralA500),
      A600: cssVar(base.neutralA600),
      A700: cssVar(base.neutralA700),
      A800: cssVar(base.neutralA800),
      A850: sanaBasePalette.neutralA850,
      A900: cssVar(base.neutralA900),
      A950: cssVar(base.neutralA950),
      A975: cssVar(base.neutralA975),
    },
  },
  system: {
    color: {
      brand: {
        accent: {
          primary: cssVar(brand.neutral975),
          action: cssVar(brand.neutral975),
        },
        fg: {
          primary: {
            default: cssVar(brand.neutralA900),
            strong: cssVar(brand.neutralA950),
          },
        },
      },
    },
  },
};

/**
 * Pass to root `CanvasProvider` to forward Sana brand CSS variables onto popup containers
 * (menus, selects, modals, tooltips).
 *
 * **When to use it**
 * - **Required** when you cannot set `data-theme="sana-canvas"` on `<html>` (embedded apps,
 *   microfrontends, third-party shells). Popups portal to `document.body` and will not inherit
 *   a nested `data-theme` — this preset copies Sana brand vars onto the popup stack container.
 * - Also useful in tests without global Sana CSS, or custom popup hosts outside normal cascade.
 *
 * **When you can skip it**
 * - Prefer setting `data-theme="sana-canvas"` on `<html>` with Sana CSS imported. Popups then
 *   inherit brand variables from the document and no `theme` prop is needed.
 *
 * Pass `data-theme="sana-canvas"` alongside it. That attribute is forwarded to popup stack
 * containers, so the rest of Sana (shape, depth, type, non-brand system colors) applies to
 * portaled content through the stylesheet's own `[data-theme="sana-canvas"]` block — this preset
 * covers brand tokens, the attribute covers everything else.
 *
 * `action.*` and selected-state tokens are not set by this preset — Sana does not define them,
 * and they resolve from the root theme.
 *
 * @example
 * ```tsx
 * // Preferred — control <html>
 * import '@workday/canvas-tokens-web/css/sana/_variables.css';
 * // <html data-theme="sana-canvas">
 * <CanvasProvider><App /></CanvasProvider>
 *
 * // No access to <html> — pass both for full parity, including portaled popups
 * <CanvasProvider theme={sanaCanvasProviderTheme} data-theme="sana-canvas">
 *   <App />
 * </CanvasProvider>
 * ```
 */
export const sanaCanvasProviderTheme = sanaCanvasNumericalTheme;
