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
import {base, brand} from '@workday/canvas-tokens-web';

import type {CanvasNumericalBrandTheme} from './types';

/** Reference a canvas-tokens CSS variable (resolves under `[data-theme="sana-canvas"]`). */
const varRef = (token: string) => `var(${token})`;

/**
 * Sana extends the neutral ramp with base-palette steps not yet exported from
 * canvas-tokens-web JS. Defined in `@workday/canvas-tokens-web/css/sana/_variables.css`.
 */
const sanaBaseNeutral = {
  '150': '--cnvs-base-palette-neutral-150',
  '850': '--cnvs-base-palette-neutral-850',
  A150: '--cnvs-base-palette-neutral-a150',
  A850: '--cnvs-base-palette-neutral-a850',
} as const;

/**
 * Sana's only distinct step for `primary`/`critical`/`caution`/`positive` — a stronger alpha
 * wash (`A300`) on top of the matching base-palette hue. Not yet exported from canvas-tokens-web
 * JS; defined in `@workday/canvas-tokens-web/css/sana/_variables.css`.
 */
const sanaBaseAccentA300 = {
  primary: '--cnvs-base-palette-blue-a300',
  critical: '--cnvs-base-palette-red-a300',
  caution: '--cnvs-base-palette-amber-a300',
  positive: '--cnvs-base-palette-green-a300',
} as const;

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
 * The `selected.fg`/`selected.surface` shortcuts (`system.color.brand.fg`/`surface.selected`,
 * aliases for `primary.700`/`primary.A50`) are likewise omitted — Sana doesn't redefine those
 * ramp steps either, so selected `Menu.Item`/`Menu.Option` state stays on the classic values.
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
      A300: varRef(sanaBaseAccentA300.primary),
    },
    critical: {
      A300: varRef(sanaBaseAccentA300.critical),
    },
    caution: {
      A300: varRef(sanaBaseAccentA300.caution),
    },
    positive: {
      A300: varRef(sanaBaseAccentA300.positive),
    },
    action: {
      base: varRef(brand.neutral975),
      dark: varRef(brand.neutral950),
      darkest: varRef(brand.neutral900),
      darker: varRef(brand.neutral975),
      accent: varRef(base.neutral0),
      lightest: varRef(brand.neutral25),
      lighter: varRef(brand.neutral50),
      light: varRef(brand.neutral200),
    },
    neutral: {
      '25': varRef(base.neutral25),
      '50': varRef(base.neutral50),
      '100': varRef(base.neutral100),
      '150': varRef(sanaBaseNeutral['150']),
      '200': varRef(base.neutral200),
      '300': varRef(base.neutral300),
      '400': varRef(base.neutral400),
      '500': varRef(base.neutral500),
      '600': varRef(base.neutral600),
      '700': varRef(base.neutral700),
      '800': varRef(base.neutral800),
      '850': varRef(sanaBaseNeutral['850']),
      '900': varRef(base.neutral900),
      '950': varRef(base.neutral950),
      '975': varRef(base.neutral975),
      A25: varRef(base.neutralA25),
      A50: varRef(base.neutralA50),
      A100: varRef(base.neutralA100),
      A150: varRef(sanaBaseNeutral.A150),
      A200: varRef(base.neutralA200),
      A300: varRef(base.neutralA300),
      A400: varRef(base.neutralA400),
      A500: varRef(base.neutralA500),
      A600: varRef(base.neutralA600),
      A700: varRef(base.neutralA700),
      A800: varRef(base.neutralA800),
      A850: varRef(sanaBaseNeutral.A850),
      A900: varRef(base.neutralA900),
      A950: varRef(base.neutralA950),
      A975: varRef(base.neutralA975),
    },
  },
  // `selected` is intentionally omitted — see the `primary`/`critical`/`caution`/`positive` note
  // above. Selected Menu.Item/Menu.Option state falls through to the classic
  // `brand.primary.700` / `brand.primary.A50` values, unchanged by Sana.
  //
  // Unlike `selected`, Sana's stylesheet *does* redefine these four `system.color.brand.*`
  // tokens, so forward them for portal parity (see the doc comment above).
  system: {
    color: {
      brand: {
        accent: {
          primary: varRef(brand.neutral975),
          action: varRef(brand.neutral975),
        },
        fg: {
          primary: {
            default: varRef(brand.neutralA900),
            strong: varRef(brand.neutralA950),
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
 * `-surface-selected`) is unaffected either way — Sana doesn't redefine `brand.primary`, so
 * those resolve to the classic `brand.primary.700` / `.A50` values with or without this preset.
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
