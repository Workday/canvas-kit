import * as React from 'react';

import {colorSpace, maybeWrapCSSVariables} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {defaultCanvasTheme} from './theme';
import {
  CanvasBrandRamp,
  CanvasNumericalBrandTheme,
  CanvasProviderTheme,
  CanvasTheme,
  PartialEmotionCanvasTheme,
  isNumericalTheme,
} from './types';

/** True when a semantic theme intentionally passes a non-empty `canvas.palette`. */
export function hasExplicitSemanticPalette(
  theme: CanvasProviderTheme
): theme is PartialEmotionCanvasTheme {
  return (
    !isNumericalTheme(theme) &&
    !!theme.canvas?.palette &&
    Object.keys(theme.canvas.palette).length > 0
  );
}

/** Tokens that change when a consumer sets only their primary brand color. */
export const BRAND_SCOPE_PRIMARY_BUNDLE = {
  action: ['base', 'dark', 'darkest', 'accent'] as const,
  accent: ['primary', 'action'] as const,
  selected: {
    fg: system.color.brand.fg.selected,
    surface: system.color.brand.surface.selected,
  },
} as const;

/**
 * Independently brandable tokens — writable when explicitly provided,
 * but NEVER derived from primary.main / brand.primary.600.
 */
export const BRAND_SCOPE_INDEPENDENT = {
  focus: {
    primary: system.color.brand.focus.primary,
    brandToken: brand.primary500,
    semanticKey: 'focusOutline' as const,
  },
  border: {
    primary: system.color.brand.border.primary,
    brandToken: brand.primary500,
    semanticKey: 'focusOutline' as const,
  },
} as const;

const commonTokenMapping = {
  focusOutline: brand.common.focus,
  alertInner: brand.common.caution.inner,
  alertOuter: brand.common.caution.outer,
  errorInner: brand.common.critical,
} as const;

type BrandColor = 'primary' | 'critical' | 'caution' | 'positive' | 'neutral';

const brandColorMapping: Record<string, BrandColor> = {
  primary: 'primary',
  error: 'critical',
  success: 'positive',
  alert: 'caution',
  neutral: 'neutral',
};

const setStyleVar = (style: React.CSSProperties, token: string, value: string) => {
  // @ts-ignore - CSS custom property key
  style[token] = maybeWrapCSSVariables(value);
};

/** Maps a numerical brand ramp onto `brand.<color><rampKey>` CSS variables. */
export function writeNumericalBrandRamp(
  color: BrandColor | 'action',
  ramp: CanvasBrandRamp | undefined,
  style: React.CSSProperties,
  options?: {skipKeys?: Set<string>}
) {
  if (!ramp) {
    return;
  }
  (Object.keys(ramp) as Array<keyof CanvasBrandRamp>).forEach(rampKey => {
    if (options?.skipKeys?.has(rampKey)) {
      return;
    }
    const value = ramp[rampKey];
    if (value == null) {
      return;
    }
    const token =
      color === 'action'
        ? brand.action[rampKey as keyof typeof brand.action]
        : // @ts-ignore - dynamic token lookup
          brand[`${color}${rampKey}`];
    if (token) {
      setStyleVar(style, token, value);
    }
  });
}

/** Called when consumer sets only `primary.main` or `brand.primary['600']`. */
export function applyPrimaryBrandBundle(primaryColor: string, style: React.CSSProperties) {
  const value = maybeWrapCSSVariables(primaryColor);

  setStyleVar(style, brand.primary.base, value);
  setStyleVar(style, brand.primary600, value);
  setStyleVar(style, brand.action.base, value);

  if (system.color.brand.accent.primary) {
    setStyleVar(style, system.color.brand.accent.primary, value);
  }
  if (system.color.brand.accent.action) {
    setStyleVar(style, system.color.brand.accent.action, value);
  }

  if (BRAND_SCOPE_PRIMARY_BUNDLE.selected.fg) {
    setStyleVar(style, BRAND_SCOPE_PRIMARY_BUNDLE.selected.fg, `var(${brand.primary700})`);
  }
  if (BRAND_SCOPE_PRIMARY_BUNDLE.selected.surface) {
    setStyleVar(style, BRAND_SCOPE_PRIMARY_BUNDLE.selected.surface, `var(${brand.primaryA50})`);
  }

  const hoverColor = colorSpace.hover({
    color: `var(${brand.action.base})`,
    fallback: value,
    colorType: 'accent',
  });
  const pressedColor = colorSpace.pressed({
    color: `var(${brand.action.base})`,
    fallback: value,
    colorType: 'accent',
  });
  setStyleVar(style, brand.action.dark, hoverColor);
  setStyleVar(style, brand.action.darkest, pressedColor);
}

/** Writes first-class selected shortcuts from numerical theme input. */
export function writeSelectedShortcuts(
  selected: CanvasNumericalBrandTheme['selected'] | undefined,
  style: React.CSSProperties
) {
  if (!selected) {
    return;
  }
  if (selected.fg && BRAND_SCOPE_PRIMARY_BUNDLE.selected.fg) {
    setStyleVar(style, BRAND_SCOPE_PRIMARY_BUNDLE.selected.fg, selected.fg);
  }
  if (selected.surface && BRAND_SCOPE_PRIMARY_BUNDLE.selected.surface) {
    setStyleVar(style, BRAND_SCOPE_PRIMARY_BUNDLE.selected.surface, selected.surface);
  }
}

function writeFocusBorderBundle(value: string, style: React.CSSProperties) {
  setStyleVar(style, brand.common.focusOutline, value);
  setStyleVar(style, brand.primary500, value);
  if (BRAND_SCOPE_INDEPENDENT.focus.primary) {
    setStyleVar(style, BRAND_SCOPE_INDEPENDENT.focus.primary, value);
  }
  if (BRAND_SCOPE_INDEPENDENT.border.primary) {
    setStyleVar(style, BRAND_SCOPE_INDEPENDENT.border.primary, value);
  }
}

/** Writes focus/border from explicit common or brand.primary.500 input — never from primary.main. */
export function writeIndependentBrandTokens(
  theme: CanvasProviderTheme | undefined,
  style: React.CSSProperties
) {
  if (!theme) {
    return;
  }

  if (isNumericalTheme(theme)) {
    const focusValue = theme.brand?.primary?.['500'];
    if (focusValue) {
      writeFocusBorderBundle(focusValue, style);
    }
    if (theme.system) {
      writeSystemBrandOverrides(theme.system, style);
    }
    return;
  }

  const common = theme.canvas?.palette?.common;
  if (!common) {
    return;
  }

  (['focusOutline', 'alertInner', 'alertOuter', 'errorInner'] as const).forEach(key => {
    const rawValue = common[key];
    if (rawValue == null) {
      return;
    }
    if (rawValue === defaultCanvasTheme.palette.common[key]) {
      return;
    }

    const value = maybeWrapCSSVariables(rawValue);
    // @ts-ignore
    setStyleVar(style, brand.common[key], value);
    // @ts-ignore
    setStyleVar(style, commonTokenMapping[key], value);

    if (key === 'focusOutline') {
      writeFocusBorderBundle(value, style);
    }
    if (key === 'alertInner' && system.color.brand.focus.caution?.inner) {
      setStyleVar(style, system.color.brand.focus.caution.inner, value);
    }
    if (key === 'alertOuter' && system.color.brand.border.caution) {
      setStyleVar(style, system.color.brand.border.caution, value);
    }
    if (key === 'errorInner') {
      if (system.color.brand.focus.critical) {
        setStyleVar(style, system.color.brand.focus.critical, value);
      }
      if (system.color.brand.border.critical) {
        setStyleVar(style, system.color.brand.border.critical, value);
      }
    }
  });
}

/** Walks nested system override object and sets matching system CSS vars. */
export function writeSystemBrandOverrides(
  systemOverrides: {color?: {brand?: Record<string, unknown>}} | undefined,
  style: React.CSSProperties
) {
  const brandOverrides = systemOverrides?.color?.brand;
  if (!brandOverrides) {
    return;
  }

  const walk = (node: Record<string, unknown>, path: string[]) => {
    Object.entries(node).forEach(([key, val]) => {
      if (val && typeof val === 'object') {
        walk(val as Record<string, unknown>, [...path, key]);
      } else if (typeof val === 'string') {
        let tokenNode: unknown = system.color.brand;
        for (const seg of [...path, key]) {
          // @ts-ignore
          tokenNode = tokenNode?.[seg];
        }
        if (typeof tokenNode === 'string') {
          const cssVarName = tokenNode.match(/--[\w-]+/)?.[0] ?? tokenNode;
          setStyleVar(style, cssVarName, val);
        }
      }
    });
  };
  walk(brandOverrides, []);
}

const mappedKeys = {
  lightest: 'lightest',
  lighter: 'lighter',
  light: 'light',
  main: 'base',
  dark: 'dark',
  darkest: 'darkest',
  contrast: 'accent',
} as const;

const numericalTokenMapping = {
  lightest: '25',
  lighter: '50',
  light: '200',
  main: '600',
  dark: '700',
  darkest: '800',
} as const;

/** Full-scope semantic writer — filled palette compared against defaults unless `writeAll`. */
export function writeSemanticTheme(
  palette: CanvasTheme['palette'],
  style: React.CSSProperties,
  options?: {writeAll?: boolean}
) {
  const writeAll = options?.writeAll ?? false;

  (['common', 'primary', 'error', 'alert', 'success', 'neutral'] as const).forEach(color => {
    if (color === 'common') {
      (['focusOutline', 'alertInner', 'alertOuter', 'errorInner'] as const).forEach(key => {
        if (writeAll || palette.common[key] !== defaultCanvasTheme.palette.common[key]) {
          const value = maybeWrapCSSVariables(palette.common[key]);
          // @ts-ignore
          setStyleVar(style, brand.common[key], value);
          // @ts-ignore
          setStyleVar(style, commonTokenMapping[key], value);

          if (key === 'focusOutline') {
            writeFocusBorderBundle(value, style);
          }
          if (key === 'alertInner' && system.color.brand.focus.caution?.inner) {
            setStyleVar(style, system.color.brand.focus.caution.inner, value);
          }
          if (key === 'alertOuter' && system.color.brand.border.caution) {
            setStyleVar(style, system.color.brand.border.caution, value);
          }
          if (key === 'errorInner') {
            if (system.color.brand.focus.critical) {
              setStyleVar(style, system.color.brand.focus.critical, value);
            }
            if (system.color.brand.border.critical) {
              setStyleVar(style, system.color.brand.border.critical, value);
            }
          }
        }
      });
    } else {
      (['lightest', 'lighter', 'light', 'main', 'dark', 'darkest', 'contrast'] as const).forEach(
        key => {
          // @ts-ignore
          if (writeAll || palette[color][key] !== defaultCanvasTheme.palette[color][key]) {
            // @ts-ignore
            const value = maybeWrapCSSVariables(palette[color][key]);
            // @ts-ignore
            setStyleVar(style, brand[color][mappedKeys[key]], value);

            if (key !== 'contrast' && key in numericalTokenMapping) {
              const newBrandColor = brandColorMapping[color];
              const numericalSuffix =
                numericalTokenMapping[key as keyof typeof numericalTokenMapping];
              // @ts-ignore
              const numericalToken = brand[newBrandColor + numericalSuffix];
              if (numericalToken) {
                setStyleVar(style, numericalToken, value);
              }

              if (key === 'main') {
                // @ts-ignore
                const systemAccentToken = system.color.brand.accent[newBrandColor];
                if (systemAccentToken) {
                  setStyleVar(style, systemAccentToken, value);
                }
                // @ts-ignore
                const systemFgToken = system.color.brand.fg[newBrandColor]?.default;
                if (systemFgToken) {
                  setStyleVar(style, systemFgToken, value);
                }
              } else if (key === 'dark') {
                // @ts-ignore
                const systemFgStrongToken = system.color.brand.fg[newBrandColor]?.strong;
                if (systemFgStrongToken) {
                  setStyleVar(style, systemFgStrongToken, value);
                }
                if (newBrandColor === 'primary' && system.color.brand.fg.selected) {
                  setStyleVar(style, system.color.brand.fg.selected, value);
                }
                if (newBrandColor === 'critical') {
                  if (system.color.brand.focus.critical) {
                    setStyleVar(style, system.color.brand.focus.critical, value);
                  }
                  if (system.color.brand.border.critical) {
                    setStyleVar(style, system.color.brand.border.critical, value);
                  }
                }
                if (newBrandColor === 'caution') {
                  if (system.color.brand.focus.caution?.outer) {
                    setStyleVar(style, system.color.brand.focus.caution.outer, value);
                  }
                  if (system.color.brand.border.caution) {
                    setStyleVar(style, system.color.brand.border.caution, value);
                  }
                }
              } else if (key === 'lighter') {
                // @ts-ignore
                const surfaceStrongToken = system.color.brand.surface[newBrandColor]?.strong;
                if (surfaceStrongToken) {
                  setStyleVar(style, surfaceStrongToken, value);
                }
                if (newBrandColor === 'primary' && system.color.brand.surface.selected) {
                  setStyleVar(style, system.color.brand.surface.selected, value);
                }
              } else if (key === 'lightest') {
                // @ts-ignore
                const surfaceDefaultToken = system.color.brand.surface[newBrandColor]?.default;
                if (surfaceDefaultToken) {
                  setStyleVar(style, surfaceDefaultToken, value);
                }
              }
            }
          }
        }
      );
    }
  });
}

/** Writes numerical theme — brand scope applies primary shortcut; full scope is literal 1:1 only. */
export function writeNumericalTheme(
  theme: CanvasNumericalBrandTheme,
  style: React.CSSProperties,
  scope: 'brand' | 'full'
) {
  const primaryRamp = theme.brand?.primary;
  const primaryOnly =
    scope === 'brand' && primaryRamp?.['600'] && Object.keys(primaryRamp).length === 1;

  if (primaryOnly && primaryRamp?.['600']) {
    applyPrimaryBrandBundle(primaryRamp['600'], style);
  } else if (theme.brand) {
    (['primary', 'critical', 'caution', 'positive', 'neutral', 'action'] as const).forEach(
      color => {
        writeNumericalBrandRamp(color, theme.brand?.[color], style);
      }
    );
  }

  writeSelectedShortcuts(theme.selected, style);
  writeIndependentBrandTokens(theme, style);
}

/** Brand-scope semantic path — reads raw input only, not useTheme-filled palette. */
export function writeBrandScopeSemantic(
  theme: PartialEmotionCanvasTheme,
  style: React.CSSProperties
) {
  const rawMain = theme.canvas?.palette?.primary?.main;
  if (rawMain) {
    applyPrimaryBrandBundle(rawMain, style);
  }
  writeIndependentBrandTokens(theme, style);
}
