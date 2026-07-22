import {BreakpointFnParam, CanvasBreakpoints} from './breakpoints';

/**
 * A single palette within a Canvas theme
 */

export type CanvasThemePalette = {
  lightest: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darkest: string;
  contrast: string;
};

type CanvasThemeCommonPalette = {
  focusOutline: string;
  alertInner: string;
  alertOuter: string;
  errorInner: string;
};

/**
 * Direction of page content for internationalization
 * @deprecated ⚠️ `ContentDirection` is deprecated. Use the `:dir()` CSS pseudo-class selector and CSS logical properties instead. For more information, see [MDN :dir()](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir) and [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
 */
export enum ContentDirection {
  LTR = 'ltr',
  RTL = 'rtl',
}

/**
 * The format of a Canvas theme for components that support it.
 * @deprecated ⚠️ `CanvasTheme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export interface CanvasTheme {
  palette: {
    common: CanvasThemeCommonPalette;
    primary: CanvasThemePalette;
    error: CanvasThemePalette;
    alert: CanvasThemePalette;
    success: CanvasThemePalette;
    neutral: CanvasThemePalette;
  };
  /**
   * ### Theme Breakpoints
   *
   * Breakpoints are used by media queries to conditionally apply or modify styles based on the viewport width.
   * This allows the UI to be responsive to various screen sizes.
   *
   * This breakpoints object contains `values` and several helper functions: `up`, `down`, `between`, and `only`.
   * You can find more detailed information by inspecting individual values and functions.
   */
  breakpoints: {
    /**
     * ### Breakpoint Values
     *
     * This object provides five breakpoint values
     * that correspond to the min-widths of our standard screen sizes.
     *
     * - `zero`: 0
     * - `s`: 320
     * - `m`: 768
     * - `l`: 1024
     * - `xl`: 1440
     *
     * And these are our standard screen size ranges:
     *
     * - `small` (320px - 767px) Used for mobile-sized screens
     * - `medium` (768px - 1023px) Used for tablet-sized screens
     * - `large` - (1024px - 1439px) Used for laptop and small desktop screens
     * - `extra-large` (≥1440px) Used for very large screens
     *
     * Note: Some applications may only require a subset of screen sizes and not use all breakpoints.
     *
     */
    values: CanvasBreakpoints;
    /**
     * ### Up
     *
     * _Returns a media query above the `min-width` for the range of a given breakpoint_
     *
     * Given a `start` breakpoint key ("zero", "s", "m", "l", "xl"),
     * this function returns a media query (string) using a `min-width`.
     *
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { up } = theme.canvas.breakpoints;
     * const mediaQuery = up('l'); // Returns '@media (min-width: 1024px)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.m,
     *   }
     * };
     * ```
     */
    up: (key: BreakpointFnParam) => string;
    /**
     * ### Down
     *
     * _Returns a media query below the `max-width` for the range of a given breakpoint_
     *
     * Given an `end` breakpoint key ("zero", "s", "m", "l", "xl"),
     * this function returns a media query (string) using a `max-width`.
     *
     * Note: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.
     * For example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).
     *
     * If the `xl` breakpoint is provided, this function returns a media query with only a `min-width` of `0`,
     * as seen in the second example below.
     *
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { down } = theme.canvas.breakpoints;
     * const mediaQuery = down('m'); // Returns '@media (max-width: 1023.5px)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.m,
     *   }
     * };
     * ```
     *
     * This example uses the `xl` breakpoint and only adds a `min-width` of `0` to the media query.
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { down } = theme.canvas.breakpoints;
     * const mediaQuery = down('xl'); // Returns '@media (min-width: 0)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.m,
     *   }
     * };
     * ```
     */
    down: (key: BreakpointFnParam) => string;
    /**
     * ### Between
     *
     * _Returns a media query between two given breakpoints_
     *
     * Given `start` and `end` breakpoint keys ("zero", "s", "m", "l", "xl"),
     * this function returns a media query (string) using a min-width and max-width.
     *
     * Note: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.
     * For example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).
     *
     * If the `xl` breakpoint is provided, this function returns a media query with only a `min-width`,
     * as seen in the second example below.
     *
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { between } = theme.canvas.breakpoints;
     * // Returns '@media (min-width: 320px) and (max-width: 1023.5px)'
     * const mediaQuery = between('s', 'm');
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.s,
     *   }
     * };
     * ```
     *
     * This example uses `xl` as the `end` breakpoint and only adds a min-width to the media query.
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { between } = theme.canvas.breakpoints;
     * const mediaQuery = between('m', 'xl'); // Returns '@media (min-width: 768px)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.s,
     *   }
     * };
     * ```
     */
    between: (start: BreakpointFnParam, end: BreakpointFnParam) => string;
    /**
     * ### Only
     *
     * _Returns a media query with a `min-width` and `max-width` for a given breakpoint_
     *
     * Given a breakpoint key ("zero", "s", "m", "l", "xl"),
     * this function returns a media query (string) using a `min-width` and `max-width`.
     *
     * Note: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.
     * For example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).
     *
     * If the `xl` breakpoint is provided, this function returns a media query with only a `min-width` of `1440px`,
     * as seen in the second example below.
     *
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { only } = theme.canvas.breakpoints;
     * const mediaQuery = only('s'); // Returns '@media (min-width: 320px) and (max-width: 767.5px)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.s,
     *   }
     * };
     * ```
     *
     * This example uses the `xl` breakpoint and only adds a `min-width` of `1440px` to the media query.
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { only } = theme.canvas.breakpoints;
     * const mediaQuery = only('xl'); // Returns '@media (min-width: 1440px)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.s,
     *   }
     * };
     * ```
     */
    only: (key: BreakpointFnParam) => string;
  };
  direction: ContentDirection;
}

/**
 * Indicates a component is themeable with a CanvasTheme
 * @deprecated `Themeable` is deprecated. If you want to theme your application, please use `<CanvasProvider theme={{canvas: {palette: {primary: {main: 'orange'}}}}} />` at the root of your application or use our CSS tokens to change individual component styles as seen in our [Button docs](https://workday.github.io/canvas-kit/?path=/docs/components-buttons--docs#custom-styles).
 */
export interface Themeable {
  theme?: EmotionCanvasTheme;
}

/**
 * For custom themes that do not overwrite every default.
 * @deprecated ⚠️ `RecursivePartial` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

/**
 * @deprecated ⚠️ `PartialCanvasTheme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export type PartialCanvasTheme = RecursivePartial<CanvasTheme>;

/**
 * @deprecated ⚠️ `PartialCanvasThemePalette` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export type PartialCanvasThemePalette = RecursivePartial<CanvasThemePalette>;

export type PartialEmotionCanvasTheme = {canvas?: PartialCanvasTheme};

declare module '@emotion/react' {
  export interface Theme {
    canvas: CanvasTheme;
  }
}

/**
 * @deprecated ⚠️ `EmotionCanvasTheme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export type EmotionCanvasTheme = {canvas: CanvasTheme};

/**
 * Numerical brand ramp keys. Each key maps 1:1 to a `--cnvs-brand-{family}-{key}` CSS variable.
 *
 * Common keys:
 * - `'600'` — main accent / button fill / default brand fg
 * - `'700'` — strong fg / selected text (when not using `selected.fg`)
 * - `'500'` — focus rings and border primary (independent of `'600'`)
 * - `'A50'` — selected surface tint (when not using `selected.surface`)
 * - `'25'` / `'A25'` — subtle brand surfaces
 */
export type CanvasBrandRamp = Partial<
  Record<
    | '25'
    | '50'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | '950'
    | '975'
    | 'A25'
    | 'A50'
    | 'A100'
    | 'A200',
    string
  >
>;

/**
 * Controls how partial theme input is expanded.
 *
 * - `'brand'` (default): predictable, design-aligned behavior. Setting only
 *   `brand.primary['600']` themes PrimaryButton and selected list/menu
 *   states. Other keys write only their CSS variable — no auto-generated ramps.
 * - `'full'`: legacy behavior for the deprecated `canvas.palette` shape — auto-fills
 *   lightest→darkest via `shiftColor` and forwards to many `system.color.brand.*`
 *   tokens. On the numerical `brand` shape, `'full'` disables the primary shortcut
 *   and writes each ramp key literally.
 */
export type CanvasThemingScope = 'brand' | 'full';

/**
 * Preferred theme input for `CanvasProvider`. Each value maps directly to brand CSS
 * variables unless noted as a shortcut below.
 *
 * @example Minimal — brand buttons + selected states only
 * ```tsx
 * <CanvasProvider theme={{brand: {primary: {'600': base.magenta600}}}} />
 * ```
 *
 * @example Explicit — focus independent of primary
 * ```tsx
 * <CanvasProvider theme={{
 *   brand: {primary: {'600': base.red600, '500': base.blue500}},
 *   selected: {fg: base.red700, surface: base.redA50},
 * }} />
 * ```
 *
 * @see sanaCanvasProviderTheme for Sana global theme + popup parity
 */
export interface CanvasNumericalBrandTheme {
  brand?: {
    /**
     * Primary brand ramp (`--cnvs-brand-primary-*`).
     *
     * **Shortcut (brand scope only):** when `'600'` is the only key under `primary`,
     * also sets:
     * - `PrimaryButton` — `brand.action.base`, `accent.primary`, `accent.action`
     * - Selected `Menu.Item` — `system.color.brand.fg.selected`, `surface.selected`
     *
     * Does **not** set focus rings — use `'500'` or `canvas.palette.common.focusOutline`.
     *
     * | Key | CSS variable | Typical consumers |
     * |-----|--------------|-------------------|
     * | `'600'` | `--cnvs-brand-primary-600` | PrimaryButton, brand links, accent.primary |
     * | `'700'` | `--cnvs-brand-primary-700` | Strong primary fg, selected text |
     * | `'500'` | `--cnvs-brand-primary-500` | Focus rings, border primary |
     * | `'A50'` | `--cnvs-brand-primary-A50` | Selected/hover surfaces |
     */
    primary?: CanvasBrandRamp;

    /**
     * Button-specific ramp (`--cnvs-brand-action-*`). PrimaryButton reads
     * these **before** `brand.primary`.
     *
     * | Key | Typical consumers |
     * |-----|-------------------|
     * | `base` | PrimaryButton background |
     * | `dark` / `darkest` | PrimaryButton hover / pressed |
     * | `accent` | PrimaryButton label color |
     */
    action?: CanvasBrandRamp;

    /**
     * Critical/error ramp (`--cnvs-brand-critical-*`).
     *
     * | Key | Typical consumers |
     * |-----|-------------------|
     * | `'600'` | TextInput error, DeleteButton, critical fg |
     * | `'500'` | Critical focus ring, error border |
     * | `'A25'` / `'A50'` | Error surface tints |
     */
    critical?: CanvasBrandRamp;

    /**
     * Caution/warning ramp (`--cnvs-brand-caution-*`).
     *
     * | Key | Typical consumers |
     * |-----|-------------------|
     * | `'400'` | Caution accent, TextInput caution |
     * | `'500'` | Caution focus outer, caution border |
     * | `'A25'` / `'A50'` | Caution surface tints |
     */
    caution?: CanvasBrandRamp;

    /**
     * Positive/success ramp (`--cnvs-brand-positive-*`).
     *
     * | Key | Typical consumers |
     * |-----|-------------------|
     * | `'600'` | Checkbox/Radio checked, success fg |
     * | `'A25'` / `'A50'` | Success surface tints |
     */
    positive?: CanvasBrandRamp;

    /**
     * Neutral brand ramp (`--cnvs-brand-neutral-*`). Sana Canvas uses `base.neutral*`
     * instead of legacy `base.slate*` — see {@link sanaCanvasNumericalTheme}.
     *
     * Affects brand-neutral text, borders, and surfaces where components reference
     * `brand.neutral.*` or `system.color.brand` tokens tied to neutral.
     */
    neutral?: CanvasBrandRamp;
  };

  /**
   * Selected-state shortcuts. Prefer these over indirect `brand.primary['700']` /
   * `brand.primary.A50` when customizing list/menu selection.
   *
   * | Key | CSS variable | Typical consumers |
   * |-----|--------------|-------------------|
   * | `fg` | `--cnvs-sys-color-brand-fg-selected` | Menu.Item, SegmentedControl selected text |
   * | `surface` | `--cnvs-sys-color-brand-surface-selected` | Menu.Item, list selected background |
   */
  selected?: {
    /** Selected text/icon color */
    fg?: string;
    /** Selected row/chip background */
    surface?: string;
  };

  /**
   * Escape hatch for `system.color.brand.*` tokens not covered by `brand` ramps.
   * Keys mirror the token path, e.g. `{color: {brand: {focus: {primary: '#00f'}}}}`.
   */
  system?: {
    color?: {
      brand?: Record<string, unknown>;
    };
  };

  /** Text direction for the provider subtree. */
  direction?: ContentDirection;

  /**
   * @default 'brand'
   * @see CanvasThemingScope
   */
  themeScope?: CanvasThemingScope;
}

/**
 * Theme input accepted by {@link CanvasProvider}.
 * - Numerical `brand` shape (preferred)
 * - Deprecated `canvas.palette` shape (legacy)
 */
export type CanvasProviderTheme =
  | (PartialEmotionCanvasTheme & {themeScope?: CanvasThemingScope})
  | CanvasNumericalBrandTheme;

export function isNumericalTheme(
  theme: CanvasProviderTheme | undefined
): theme is CanvasNumericalBrandTheme {
  if (!theme) {
    return false;
  }
  if ('canvas' in theme) {
    return false;
  }
  return 'brand' in theme || 'system' in theme || 'selected' in theme;
}

const EXTENDED_RAMP_KEYS = new Set([
  '25',
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
  '975',
  'A25',
  'A50',
  'A100',
  'A200',
  'lightest',
  'lighter',
  'light',
  'main',
  'dark',
  'darkest',
  'contrast',
]);

export function resolveThemingScope(theme: CanvasProviderTheme | undefined): CanvasThemingScope {
  if (!theme) {
    return 'brand';
  }
  if (theme.themeScope) {
    return theme.themeScope;
  }

  if (isNumericalTheme(theme)) {
    return theme.themeScope ?? 'brand';
  }

  const palette = theme.canvas?.palette;
  if (!palette) {
    return 'brand';
  }

  if (palette.common && Object.keys(palette.common).length > 0) {
    const commonOnlyFocus =
      Object.keys(palette.common).length === 1 && palette.common.focusOutline != null;
    if (!commonOnlyFocus) {
      return 'full';
    }
  }

  for (const color of ['primary', 'error', 'alert', 'success', 'neutral'] as const) {
    const colorPalette = palette[color];
    if (!colorPalette) {
      continue;
    }
    for (const key of Object.keys(colorPalette)) {
      if (color === 'primary' && key === 'main') {
        continue;
      }
      if (EXTENDED_RAMP_KEYS.has(key)) {
        return 'full';
      }
    }
  }

  return 'brand';
}

export function isPrimaryOnlyInput(theme: CanvasProviderTheme | undefined): boolean {
  if (!theme) {
    return false;
  }
  if (isNumericalTheme(theme)) {
    if (theme.system || theme.selected) {
      return false;
    }
    const brand = theme.brand;
    if (!brand) {
      return false;
    }
    const hasNonPrimary = ['critical', 'caution', 'positive', 'neutral', 'action'].some(
      k => brand[k as keyof typeof brand] != null
    );
    if (hasNonPrimary) {
      return false;
    }
    const primary = brand.primary;
    if (!primary) {
      return false;
    }
    const keys = Object.keys(primary);
    return keys.length === 1 && keys[0] === '600';
  }

  const palette = theme.canvas?.palette;
  if (!palette?.primary) {
    return false;
  }
  const primaryKeys = Object.keys(palette.primary);
  const hasOnlyMain = primaryKeys.length === 1 && palette.primary.main != null;
  const hasCommon = palette.common != null && Object.keys(palette.common).length > 0;
  const hasOtherColors = ['error', 'alert', 'success', 'neutral'].some(
    c => palette[c as keyof typeof palette] != null
  );
  return hasOnlyMain && !hasOtherColors && !hasCommon;
}
