import {CacheProvider, Theme, ThemeProvider} from '@emotion/react';
import * as React from 'react';

import {createStyles, getCache, maybeWrapCSSVariables} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {PartialEmotionCanvasTheme, defaultCanvasTheme, useTheme} from './theming';

export interface CanvasProviderProps {
  /**
   * ⚠️ Only use this prop if you intent to to theme a part of your application that is different from global theming.
   * For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#global-vs-scoped-theming).
   *
   * While we support theme overrides, we advise to use global theming via CSS Variables.
   */
  theme?: PartialEmotionCanvasTheme;
}

const mappedKeys = {
  lightest: 'lightest',
  lighter: 'lighter',
  light: 'light',
  main: 'base',
  dark: 'dark',
  darkest: 'darkest',
  contrast: 'accent',
};

/**
 * Mapping from deprecated theme palette keys to new numerical brand tokens.
 * This ensures backwards compatibility when consumers use the old theme format.
 * For example: palette.primary.main -> brand.primary600
 */
const numericalTokenMapping = {
  lightest: '25',
  lighter: '50',
  light: '200',
  main: '600',
  dark: '700',
  darkest: '800',
} as const;

/**
 * Mapping from deprecated theme palette colors to new brand token names.
 * For example: 'primary' -> 'primary', 'error' -> 'critical', 'success' -> 'positive'
 */
const brandColorMapping = {
  primary: 'primary',
  error: 'critical',
  success: 'positive',
  alert: 'caution',
  neutral: 'neutral',
} as const;

/**
 * Mapping from deprecated common palette keys to new brand.common tokens.
 *
 * ## Brandable System Tokens
 *
 * These are all the `system.color.brand.*` tokens that can be customized via theming.
 * Each token references a brand token that can be overridden through the CanvasProvider theme prop.
 *
 * ### Focus Tokens
 * - `system.color.brand.focus.primary` → `brand.primary.500` → Controlled by `focusOutline` (separately from `palette.primary.main`, which controls `brand.primary.600`)
 * - `system.color.brand.focus.critical` → `brand.critical.500` → Controlled by `palette.error.dark` or `errorInner`
 * - `system.color.brand.focus.caution.inner` → `brand.caution.400` → Controlled by `palette.alert.main` or `alertInner`
 * - `system.color.brand.focus.caution.outer` → `brand.caution.500` → Controlled by `palette.alert.dark` or `alertOuter`
 *
 * ### Border Tokens
 * - `system.color.brand.border.primary` → `brand.primary.500` → Controlled by `focusOutline` (separately from `palette.primary.main`, which controls `brand.primary.600`)
 * - `system.color.brand.border.critical` → `brand.critical.500` → Controlled by `palette.error.dark` or `errorInner`
 * - `system.color.brand.border.caution` → `brand.caution.500` → Controlled by `palette.alert.dark` or `alertOuter`
 *
 * ### Surface Tokens
 * - `system.color.brand.surface.primary.default` → `brand.primary.A25` → Controlled by `palette.primary.lightest`
 * - `system.color.brand.surface.primary.strong` → `brand.primary.A50` → Controlled by `palette.primary.lighter`
 * - `system.color.brand.surface.critical.default` → `brand.critical.A25` → Controlled by `palette.error.lightest`
 * - `system.color.brand.surface.critical.strong` → `brand.critical.A50` → Controlled by `palette.error.lighter`
 * - `system.color.brand.surface.caution.default` → `brand.caution.A25` → Controlled by `palette.alert.lightest`
 * - `system.color.brand.surface.caution.strong` → `brand.caution.A50` → Controlled by `palette.alert.lighter`
 * - `system.color.brand.surface.positive.default` → `brand.positive.A25` → Controlled by `palette.success.lightest`
 * - `system.color.brand.surface.positive.strong` → `brand.positive.A50` → Controlled by `palette.success.lighter`
 * - `system.color.brand.surface.selected` → `brand.primary.A50` → Controlled by `palette.primary.lighter`
 *
 * ### Accent Tokens
 * - `system.color.brand.accent.primary` → `brand.primary.600` → Controlled by `palette.primary.main`
 * - `system.color.brand.accent.critical` → `brand.critical.600` → Controlled by `palette.error.main`
 * - `system.color.brand.accent.caution` → `brand.caution.400` → Controlled by `palette.alert.main`
 * - `system.color.brand.accent.positive` → `brand.positive.600` → Controlled by `palette.success.main`
 * - `system.color.brand.accent.action` → `brand.primary.600` → Controlled by `palette.primary.main`
 *
 * ### Foreground (Text/Icon) Tokens
 * - `system.color.brand.fg.primary.default` → `brand.primary.600` → Controlled by `palette.primary.main`
 * - `system.color.brand.fg.primary.strong` → `brand.primary.700` → Controlled by `palette.primary.dark`
 * - `system.color.brand.fg.critical.default` → `brand.critical.600` → Controlled by `palette.error.main`
 * - `system.color.brand.fg.critical.strong` → `brand.critical.700` → Controlled by `palette.error.dark`
 * - `system.color.brand.fg.caution.default` → `brand.caution.600` → Controlled by `palette.alert.darkest`
 * - `system.color.brand.fg.caution.strong` → `brand.caution.700` → Controlled by `palette.alert.dark` (Note: no direct mapping, inherits default)
 * - `system.color.brand.fg.positive.default` → `brand.positive.600` → Controlled by `palette.success.main`
 * - `system.color.brand.fg.positive.strong` → `brand.positive.700` → Controlled by `palette.success.dark`
 * - `system.color.brand.fg.selected` → `brand.primary.700` → Controlled by `palette.primary.dark`
 */
const commonTokenMapping = {
  focusOutline: brand.common.focus, // maps to brand.primary500
  alertInner: brand.common.caution.inner, // maps to brand.caution400
  alertOuter: brand.common.caution.outer, // maps to brand.caution500
  errorInner: brand.common.critical, // maps to brand.critical500
} as const;

/**
 * If you wish to reset the theme to the default, apply this class on the CanvasProvider.
 */
export const defaultBranding = createStyles({
  [brand.common.alertInner]: base.amber400,
  [brand.common.alertOuter]: base.amber500,
  [brand.common.errorInner]: base.red500,
  [brand.common.focusOutline]: base.blue500,
  [brand.neutral.accent]: base.neutral0,
  [brand.neutral.darkest]: base.slate800,
  [brand.neutral.dark]: base.slate700,
  [brand.neutral.base]: base.slate600,
  [brand.neutral.light]: base.slate200,
  [brand.neutral.lighter]: base.slate50,
  [brand.neutral.lightest]: base.slate25,
  [brand.success.accent]: base.neutral0,
  [brand.success.darkest]: base.green800,
  [brand.success.dark]: base.green700,
  [brand.success.base]: base.green600,
  [brand.success.light]: base.green200,
  [brand.success.lighter]: base.green50,
  [brand.success.lightest]: base.green25,
  [brand.error.accent]: base.neutral0,
  [brand.error.darkest]: base.red800,
  [brand.error.dark]: base.red700,
  [brand.error.base]: base.red600,
  [brand.error.light]: base.red200,
  [brand.error.lighter]: base.red50,
  [brand.error.lightest]: base.red25,
  [brand.alert.accent]: base.neutral900,
  [brand.alert.darkest]: base.amber600,
  [brand.alert.dark]: base.amber500,
  [brand.alert.base]: base.amber400,
  [brand.alert.light]: base.amber200,
  [brand.alert.lighter]: base.amber50,
  [brand.alert.lightest]: base.amber25,
  [brand.primary.accent]: base.neutral0,
  [brand.primary.darkest]: base.blue800,
  [brand.primary.dark]: base.blue700,
  [brand.primary.base]: base.blue600,
  [brand.primary.light]: base.blue200,
  [brand.primary.lighter]: base.blue50,
  [brand.primary.lightest]: base.blue25,
  [brand.gradient.primary]:
    `linear-gradient(90deg, ${brand.primary.base} 0%, ${brand.primary.dark} 100%)`,
});

export const useCanvasThemeToCssVars = (
  /**
   * @deprecated ⚠️ `theme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
   */
  theme: PartialEmotionCanvasTheme | undefined,
  elemProps: React.HTMLAttributes<HTMLElement>
) => {
  const filledTheme = useTheme(theme);
  const className = (elemProps.className || '').split(' ').concat(defaultBranding).join(' ');
  const style = elemProps.style || {};
  const {palette} = filledTheme.canvas;

  (['common', 'primary', 'error', 'alert', 'success', 'neutral'] as const).forEach(color => {
    if (color === 'common') {
      (['focusOutline', 'alertInner', 'alertOuter', 'errorInner'] as const).forEach(key => {
        if (palette.common[key] !== defaultCanvasTheme.palette.common[key]) {
          const value = maybeWrapCSSVariables(palette.common[key]);

          // Set deprecated token for backwards compatibility
          //@ts-ignore
          style[brand.common[key]] = value;

          // Forward to new brand.common tokens
          //@ts-ignore
          style[commonTokenMapping[key]] = value;

          // Additional system token forwarding for focusOutline
          if (key === 'focusOutline') {
            // system.color.brand.focus.primary -> brand.primary.500 (via brand.common.focus)
            // @ts-ignore
            style[system.color.brand.focus.primary] = value;
            // system.color.brand.border.primary -> brand.primary.500
            // @ts-ignore
            style[system.color.brand.border.primary] = value;
          }

          // Additional system token forwarding for alertInner
          if (key === 'alertInner') {
            // Forward alertInner to system.color.brand.focus.caution.inner
            // This token is used by components (e.g., TextInput with error="caution")
            // for inner focus ring styling. Maps to brand.caution400 via brand.common.caution.inner.
            // This ensures backwards compatibility when users customize alertInner in their theme.
            // @ts-ignore
            style[system.color.brand.focus.caution.inner] = value;
          }

          // Additional system token forwarding for alertOuter
          if (key === 'alertOuter') {
            // Forward alertOuter to system.color.brand.border.caution
            // This token is used by components (e.g., TextInput with error="caution")
            // for border and outer focus ring styling. Maps to brand.caution500 via brand.common.caution.outer.
            // This ensures backwards compatibility when users customize alertOuter in their theme.
            // @ts-ignore
            style[system.color.brand.border.caution] = value;
          }

          // Additional system token forwarding for errorInner
          if (key === 'errorInner') {
            // Forward errorInner to system.color.brand.focus.critical and system.color.brand.border.critical
            // These tokens are used by components (e.g., TextInput with error="error", Switch) for critical
            // focus ring and border styling. Maps to brand.critical500 via brand.common.errorInner.
            // This ensures backwards compatibility when users customize errorInner in their theme.
            // @ts-ignore
            style[system.color.brand.focus.critical] = value;
            // @ts-ignore
            style[system.color.brand.border.critical] = value;
          }
        }
      });
    } else {
      (['lightest', 'lighter', 'light', 'main', 'dark', 'darkest', 'contrast'] as const).forEach(
        key => {
          // We only want to set custom colors if they do not match the default. The `defaultBranding` class will take care of the rest.
          //@ts-ignore
          if (palette[color][key] !== defaultCanvasTheme.palette[color][key]) {
            const value = maybeWrapCSSVariables(palette[color][key]);

            // Set deprecated token (e.g., brand.primary.base) for backwards compatibility
            // @ts-ignore
            style[brand[color][mappedKeys[key]]] = value;

            // Forward to new numerical brand tokens (e.g., brand.primary600)
            // Skip 'contrast' as it doesn't map to numerical tokens
            if (key !== 'contrast' && key in numericalTokenMapping) {
              const newBrandColor = brandColorMapping[color as keyof typeof brandColorMapping];
              const numericalSuffix =
                numericalTokenMapping[key as keyof typeof numericalTokenMapping];

              // @ts-ignore - Dynamically access brand tokens like brand.primary600
              const numericalToken = brand[newBrandColor + numericalSuffix];
              if (numericalToken) {
                // @ts-ignore
                style[numericalToken] = value;
              }

              // Forward to all relevant system.color.brand.* tokens
              // These system tokens reference the numerical brand tokens, so updating them ensures full compatibility
              if (key === 'main') {
                // system.color.brand.accent.{color} -> brand.{color}.600 (except caution -> 400)
                // @ts-ignore
                const systemAccentToken = system.color.brand.accent[newBrandColor];
                if (systemAccentToken) {
                  // @ts-ignore
                  style[systemAccentToken] = value;
                }

                // system.color.brand.fg.{color}.default -> brand.{color}.600
                // @ts-ignore
                const systemFgToken = system.color.brand.fg[newBrandColor]?.default;
                if (systemFgToken) {
                  // @ts-ignore
                  style[systemFgToken] = value;
                }

                // system.color.brand.focus.primary (maps to brand.primary.500 per docs)
                // For primary only, update focus when 'main' changes — unless focusOutline was customized (it takes precedence)
                if (newBrandColor === 'primary') {
                  const focusOutlineCustomized =
                    palette.common.focusOutline !== defaultCanvasTheme.palette.common.focusOutline;
                  if (!focusOutlineCustomized) {
                    // @ts-ignore
                    const focusToken = system.color.brand.focus.primary;
                    if (focusToken) {
                      // @ts-ignore
                      style[focusToken] = value;
                    }
                  }
                }
              } else if (key === 'dark') {
                // system.color.brand.fg.{color}.strong -> brand.{color}.700
                // @ts-ignore
                const systemFgStrongToken = system.color.brand.fg[newBrandColor]?.strong;
                if (systemFgStrongToken) {
                  // @ts-ignore
                  style[systemFgStrongToken] = value;
                }

                // system.color.brand.fg.selected -> brand.primary.700 (for primary only)
                if (newBrandColor === 'primary') {
                  // @ts-ignore
                  const selectedToken = system.color.brand.fg.selected;
                  if (selectedToken) {
                    // @ts-ignore
                    style[selectedToken] = value;
                  }
                }

                // system.color.brand.focus.critical & system.color.brand.border.critical -> brand.critical.500 (palette.error.dark)
                if (newBrandColor === 'critical') {
                  // @ts-ignore
                  const focusCriticalToken = system.color.brand.focus.critical;
                  if (focusCriticalToken) {
                    // @ts-ignore
                    style[focusCriticalToken] = value;
                  }
                  // @ts-ignore
                  const borderCriticalToken = system.color.brand.border.critical;
                  if (borderCriticalToken) {
                    // @ts-ignore
                    style[borderCriticalToken] = value;
                  }
                }

                // system.color.brand.focus.caution.outer & system.color.brand.border.caution -> brand.caution.500 (palette.alert.dark)
                if (newBrandColor === 'caution') {
                  // @ts-ignore
                  const focusCautionOuterToken = system.color.brand.focus.caution?.outer;
                  if (focusCautionOuterToken) {
                    // @ts-ignore
                    style[focusCautionOuterToken] = value;
                  }
                  // @ts-ignore
                  const borderCautionToken = system.color.brand.border.caution;
                  if (borderCautionToken) {
                    // @ts-ignore
                    style[borderCautionToken] = value;
                  }
                }
              } else if (key === 'lighter') {
                // system.color.brand.surface.{color}.strong -> brand.{color}.A50
                // Note: A50 tokens are different from regular 50 tokens but we'll forward the lighter value
                // @ts-ignore
                const surfaceStrongToken = system.color.brand.surface[newBrandColor]?.strong;
                if (surfaceStrongToken) {
                  // @ts-ignore
                  style[surfaceStrongToken] = value;
                }

                // system.color.brand.surface.selected -> brand.primary.A50 (for primary only)
                if (newBrandColor === 'primary') {
                  // @ts-ignore
                  const selectedSurfaceToken = system.color.brand.surface.selected;
                  if (selectedSurfaceToken) {
                    // @ts-ignore
                    style[selectedSurfaceToken] = value;
                  }
                }
              } else if (key === 'lightest') {
                // system.color.brand.surface.{color}.default -> brand.{color}.A25
                // @ts-ignore
                const surfaceDefaultToken = system.color.brand.surface[newBrandColor]?.default;
                if (surfaceDefaultToken) {
                  // @ts-ignore
                  style[surfaceDefaultToken] = value;
                }
              }
            }
          }
        }
      );
    }
  });

  return {...elemProps, className, style};
};

export const CanvasProvider = ({
  children,
  theme = {canvas: {}}, // default to empty theme to avoid breaking changes
  ...props
}: CanvasProviderProps & React.HTMLAttributes<HTMLElement>) => {
  const {className, ...elemProps} = useCanvasThemeToCssVars(theme, props);
  const cache = getCache();
  const rest = {...elemProps, ...props};
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme as Theme}>
        <div
          dir={theme?.canvas?.direction || defaultCanvasTheme.direction}
          {...(rest as React.HTMLAttributes<HTMLDivElement>)}
        >
          {children}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};
