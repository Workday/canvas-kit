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

// Helper function to map color names to brand token names
function getBrandColorName(color: string): string {
  const mapping: Record<string, string> = {
    primary: 'primary',
    error: 'critical',
    alert: 'caution',
    success: 'positive',
    neutral: 'neutral',
  };
  return mapping[color] || color;
}

// Mapping from brand token numerical keys to their corresponding system tokens
// This ensures when a user sets brand.primary600, all semantic tokens that reference it are also updated
const brandToSystemTokenMapping: Record<string, Array<{brand: string; system: string[]}>> = {
  primary: [
    {brand: '25', system: [system.color.brand.surface.primary.default]},
    {
      brand: '50',
      system: [system.color.brand.surface.primary.strong, system.color.brand.surface.selected],
    },
    {brand: '500', system: [system.color.brand.focus.primary, system.color.brand.border.primary]},
    {
      brand: '600',
      system: [
        system.color.brand.accent.primary,
        system.color.brand.accent.action,
        system.color.brand.fg.primary.default,
      ],
    },
    {brand: '700', system: [system.color.brand.fg.primary.strong, system.color.brand.fg.selected]},
  ],
  critical: [
    {brand: '25', system: [system.color.brand.surface.critical.default]},
    {brand: '50', system: [system.color.brand.surface.critical.strong]},
    {brand: '500', system: [system.color.brand.focus.critical, system.color.brand.border.critical]},
    {
      brand: '600',
      system: [system.color.brand.accent.critical, system.color.brand.fg.critical.default],
    },
    {brand: '700', system: [system.color.brand.fg.critical.strong]},
  ],
  caution: [
    {brand: '25', system: [system.color.brand.surface.caution.default]},
    {brand: '50', system: [system.color.brand.surface.caution.strong]},
    {
      brand: '400',
      system: [system.color.brand.accent.caution, system.color.brand.focus.caution.inner],
    },
    {
      brand: '500',
      system: [system.color.brand.focus.caution.outer, system.color.brand.border.caution],
    },
    {brand: '600', system: [system.color.brand.fg.caution.default]},
    {brand: '700', system: [system.color.brand.fg.caution.strong]},
  ],
  positive: [
    {brand: '25', system: [system.color.brand.surface.positive.default]},
    {brand: '50', system: [system.color.brand.surface.positive.strong]},
    {
      brand: '600',
      system: [system.color.brand.accent.positive, system.color.brand.fg.positive.default],
    },
    {brand: '700', system: [system.color.brand.fg.positive.strong]},
  ],
  neutral: [
    // Neutral doesn't have as many system token mappings in the semantic layer
  ],
};

/**
 * If you wish to reset the theme to the default, apply this class on the CanvasProvider.
 */
export const defaultBranding = createStyles({
  // Legacy deprecated brand tokens
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

  // New numerical scale brand tokens - Primary
  [brand.primary25]: base.blue25,
  [brand.primary50]: base.blue50,
  [brand.primary100]: base.blue100,
  [brand.primary200]: base.blue200,
  [brand.primary300]: base.blue300,
  [brand.primary400]: base.blue400,
  [brand.primary500]: base.blue500,
  [brand.primary600]: base.blue600,
  [brand.primary700]: base.blue700,
  [brand.primary800]: base.blue800,
  [brand.primary900]: base.blue900,
  [brand.primary950]: base.blue950,
  [brand.primary975]: base.blue975,

  // System tokens that point to primary brand tokens
  [system.color.brand.surface.primary.default]: brand.primary25,
  [system.color.brand.surface.primary.strong]: brand.primary50,
  [system.color.brand.surface.selected]: brand.primary50,
  [system.color.brand.focus.primary]: brand.primary500,
  [system.color.brand.border.primary]: brand.primary500,
  [system.color.brand.accent.primary]: brand.primary600,
  [system.color.brand.accent.action]: brand.primary600,
  [system.color.brand.fg.primary.default]: brand.primary600,
  [system.color.brand.fg.primary.strong]: brand.primary700,
  [system.color.brand.fg.selected]: brand.primary700,

  // New numerical scale brand tokens - Critical (error)
  [brand.critical25]: base.red25,
  [brand.critical50]: base.red50,
  [brand.critical100]: base.red100,
  [brand.critical200]: base.red200,
  [brand.critical300]: base.red300,
  [brand.critical400]: base.red400,
  [brand.critical500]: base.red500,
  [brand.critical600]: base.red600,
  [brand.critical700]: base.red700,
  [brand.critical800]: base.red800,
  [brand.critical900]: base.red900,
  [brand.critical950]: base.red950,
  [brand.critical975]: base.red975,

  // System tokens that point to critical brand tokens
  [system.color.brand.surface.critical.default]: brand.critical25,
  [system.color.brand.surface.critical.strong]: brand.critical50,
  [system.color.brand.focus.critical]: brand.critical500,
  [system.color.brand.border.critical]: brand.critical500,
  [system.color.brand.accent.critical]: brand.critical600,
  [system.color.brand.fg.critical.default]: brand.critical600,
  [system.color.brand.fg.critical.strong]: brand.critical700,

  // New numerical scale brand tokens - Caution (alert)
  [brand.caution25]: base.amber25,
  [brand.caution50]: base.amber50,
  [brand.caution100]: base.amber100,
  [brand.caution200]: base.amber200,
  [brand.caution300]: base.amber300,
  [brand.caution400]: base.amber400,
  [brand.caution500]: base.amber500,
  [brand.caution600]: base.amber600,
  [brand.caution700]: base.amber700,
  [brand.caution800]: base.amber800,
  [brand.caution900]: base.amber900,
  [brand.caution950]: base.amber950,
  [brand.caution975]: base.amber975,

  // System tokens that point to caution brand tokens
  [system.color.brand.surface.caution.default]: brand.caution25,
  [system.color.brand.surface.caution.strong]: brand.caution50,
  [system.color.brand.accent.caution]: brand.caution400,
  [system.color.brand.focus.caution.inner]: brand.caution400,
  [system.color.brand.focus.caution.outer]: brand.caution500,
  [system.color.brand.border.caution]: brand.caution500,
  [system.color.brand.fg.caution.default]: brand.caution600,
  [system.color.brand.fg.caution.strong]: brand.caution700,

  // New numerical scale brand tokens - Positive (success)
  [brand.positive25]: base.green25,
  [brand.positive50]: base.green50,
  [brand.positive100]: base.green100,
  [brand.positive200]: base.green200,
  [brand.positive300]: base.green300,
  [brand.positive400]: base.green400,
  [brand.positive500]: base.green500,
  [brand.positive600]: base.green600,
  [brand.positive700]: base.green700,
  [brand.positive800]: base.green800,
  [brand.positive900]: base.green900,
  [brand.positive950]: base.green950,
  [brand.positive975]: base.green975,

  // System tokens that point to positive brand tokens
  [system.color.brand.surface.positive.default]: brand.positive25,
  [system.color.brand.surface.positive.strong]: brand.positive50,
  [system.color.brand.accent.positive]: brand.positive600,
  [system.color.brand.fg.positive.default]: brand.positive600,
  [system.color.brand.fg.positive.strong]: brand.positive700,

  // New numerical scale brand tokens - Neutral
  [brand.neutral25]: base.slate25,
  [brand.neutral50]: base.slate50,
  [brand.neutral100]: base.slate100,
  [brand.neutral200]: base.slate200,
  [brand.neutral300]: base.slate300,
  [brand.neutral400]: base.slate400,
  [brand.neutral500]: base.slate500,
  [brand.neutral600]: base.slate600,
  [brand.neutral700]: base.slate700,
  [brand.neutral800]: base.slate800,
  [brand.neutral900]: base.slate900,
  [brand.neutral950]: base.slate950,
  [brand.neutral975]: base.slate975,
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
          //@ts-ignore
          style[brand.common.focusOutline] = maybeWrapCSSVariables(palette.common.focusOutline);
          //@ts-ignore
          style[brand.common.alertInner] = maybeWrapCSSVariables(palette.common.alertInner);
          //@ts-ignore
          style[brand.common.alertOuter] = maybeWrapCSSVariables(palette.common.alertOuter);
          //@ts-ignore
          style[brand.common.errorInner] = maybeWrapCSSVariables(palette.common.errorInner);
        }
      });
    } else {
      const brandColorName = getBrandColorName(color);

      // Map numerical keys to brand tokens AND their corresponding system tokens
      const numericalKeys = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 975];
      numericalKeys.forEach(numKey => {
        const numKeyStr = numKey.toString();
        //@ts-ignore
        const paletteValue = palette[color]?.[numKeyStr];
        //@ts-ignore
        if (paletteValue && paletteValue !== defaultCanvasTheme.palette[color]?.[numKeyStr]) {
          // 1. Set the brand token (e.g., brand.primary600)
          const brandTokenKey = `${brandColorName}${numKeyStr}`;
          //@ts-ignore
          if (brand[brandTokenKey]) {
            //@ts-ignore
            style[brand[brandTokenKey]] = maybeWrapCSSVariables(paletteValue);
          }

          // 2. Automatically set all system tokens that reference this brand token
          const mappings = brandToSystemTokenMapping[brandColorName];
          if (mappings) {
            const mapping = mappings.find(m => m.brand === numKeyStr);
            if (mapping) {
              mapping.system.forEach(systemToken => {
                (style as any)[systemToken] = maybeWrapCSSVariables(paletteValue);
              });
            }
          }
        }
      });

      // Legacy keys (maintain existing mapping for backward compatibility)
      (['lightest', 'lighter', 'light', 'main', 'dark', 'darkest', 'contrast'] as const).forEach(
        key => {
          // We only want to set custom colors if they do not match the default. The `defaultBranding` class will take care of the rest.
          //@ts-ignore
          if (palette[color][key] !== defaultCanvasTheme.palette[color][key]) {
            // @ts-ignore
            style[brand[color][mappedKeys[key]]] = maybeWrapCSSVariables(palette[color][key]);
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
