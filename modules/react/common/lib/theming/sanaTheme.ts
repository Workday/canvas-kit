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
const sanaBaseNeutral = base.sana;

/**
 * Sana Canvas brand tokens for scoped `CanvasProvider` / popup forwarding.
 * Values are `var()` references to Sana brand variables — not merged from `defaultCanvasTheme`.
 *
 * `action` and `neutral` are fully populated: Sana's palette is neutral/monochrome-driven, so
 * `action.*` reads directly from the `neutral` ramp (see
 * `@workday/canvas-tokens-web/css/sana/_variables.css`). `primary`/`critical`/`caution`/`positive`
 * only set `A300` — the one step Sana actually redefines for those families (a stronger alpha
 * wash on the matching hue) — every other key is intentionally omitted: Sana does not define a
 * distinct value for it, so writing it here would only reference the very variable being written
 * (a `var()` cycle that resolves to invalid, leaking the classic-theme fallback color instead of
 * Sana's).
 *
 * `selected.fg`/`selected.surface` are forwarded too — they write directly onto
 * `--cnvs-sys-color-brand-fg-selected`/`-surface-selected` (independent of the `primary` ramp),
 * and Sana keeps selected `Menu.Item`/`Menu.Option` state on its neutral ramp
 * (`neutralA900`/`neutralA100`), same as classic. Forwarding them keeps portaled popups in sync
 * with in-document Sana styling and matches classic's own behavior — no color change intended.
 *
 * `system.color.brand.accent.primary`/`.action` and `.fg.primary.default`/`.strong` **are**
 * forwarded (via the `system.color.brand.*` escape hatch — see
 * {@link CanvasNumericalBrandTheme.system}) — unlike `selected`, Sana's stylesheet does
 * redefine these four, to `brand.neutral.975` / `.A900` / `.A950`, so portaled popups need the
 * override too for parity with in-document Sana styling.
 *
 * Ramp values must reference `base.*` (the underlying palette), never `brand.*` of the same
 * name — CanvasProvider writes each entry onto the identically-named `--cnvs-brand-*` CSS
 * variable, so referencing `brand.*` here would create that same self-reference cycle. The
 * `system.color.brand.*` overrides above are the exception: they target *different* CSS
 * variables (`--cnvs-sys-color-brand-*`) than the `brand.*` values they reference, so no cycle.
 */
export const sanaCanvasNumericalTheme: CanvasNumericalBrandTheme = {
  // Explicit brand vars only — multi-key ramps write 1:1; no system shortcut bundles run.
  themeScope: 'brand',
  brand: {
    primary: {
      A300: sanaBaseNeutral.blueA300,
    },
    critical: {
      A300: sanaBaseNeutral.redA300,
    },
    caution: {
      A300: sanaBaseNeutral.amberA300,
    },
    positive: {
      A300: sanaBaseNeutral.greenA300,
    },
    action: {
      base: cssVar(brand.neutral975),
      dark: cssVar(brand.neutral950),
      darkest: cssVar(brand.neutral900),
      darker: cssVar(brand.neutral975),
      accent: cssVar(base.neutral0),
      lightest: cssVar(brand.neutral25),
      lighter: cssVar(brand.neutral50),
      light: cssVar(brand.neutral200),
    },
    neutral: {
      '25': cssVar(base.neutral25),
      '50': cssVar(base.neutral50),
      '100': cssVar(base.neutral100),
      '150': sanaBaseNeutral.neutral150,
      '200': cssVar(base.neutral200),
      '300': cssVar(base.neutral300),
      '400': cssVar(base.neutral400),
      '500': cssVar(base.neutral500),
      '600': cssVar(base.neutral600),
      '700': cssVar(base.neutral700),
      '800': cssVar(base.neutral800),
      '850': sanaBaseNeutral.neutral850,
      '900': cssVar(base.neutral900),
      '950': cssVar(base.neutral950),
      '975': cssVar(base.neutral975),
      A25: cssVar(base.neutralA25),
      A50: cssVar(base.neutralA50),
      A100: cssVar(base.neutralA100),
      A150: sanaBaseNeutral.neutralA150,
      A200: cssVar(base.neutralA200),
      A300: cssVar(base.neutralA300),
      A400: cssVar(base.neutralA400),
      A500: cssVar(base.neutralA500),
      A600: cssVar(base.neutralA600),
      A700: cssVar(base.neutralA700),
      A800: cssVar(base.neutralA800),
      A850: sanaBaseNeutral.neutralA850,
      A900: cssVar(base.neutralA900),
      A950: cssVar(base.neutralA950),
      A975: cssVar(base.neutralA975),
    },
  },
  // Selected Menu.Item/Menu.Option state — writes directly onto
  // `--cnvs-sys-color-brand-fg-selected` / `-surface-selected` (not derived from
  // `primary.700`/`primary.A50`, so no var() cycle risk referencing `brand.*` here).
  // Sana keeps this on its neutral ramp rather than primary; forwarded for portal parity.
  selected: {
    fg: cssVar(brand.neutralA900),
    surface: cssVar(brand.neutralA100),
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
 * Selected `Menu.Item`/`Menu.Option` state (`--cnvs-sys-color-brand-fg-selected` /
 * `-surface-selected`) is forwarded to Sana's neutral values (`neutralA900`/`neutralA100`,
 * same as classic) so portaled popups match in-document Sana styling — no color change either way.
 *
 * `--cnvs-sys-color-brand-accent-primary`/`-accent-action`/`-fg-primary-default`/
 * `-fg-primary-strong` are different: Sana's stylesheet *does* redefine them (to Sana neutral
 * tones), so without this preset a popup outside `data-theme="sana-canvas"`'s reach falls back
 * to classic primary-derived colors for those four, out of step with the rest of a Sana UI.
 *
 * @example
 * ```tsx
 * // Preferred — control <html>
 * import '@workday/canvas-tokens-web/css/sana/_variables.css';
 * // <html data-theme="sana-canvas">
 * <CanvasProvider><App /></CanvasProvider>
 *
 * // No access to <html> — required for popup parity
 * <CanvasProvider theme={sanaCanvasProviderTheme}><App /></CanvasProvider>
 * ```
 */
export const sanaCanvasProviderTheme = sanaCanvasNumericalTheme;
