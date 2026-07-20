import {CacheProvider, Theme, ThemeProvider} from '@emotion/react';
import * as React from 'react';

import {createStyles, getCache} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {
  CanvasProviderTheme,
  CanvasThemingScope,
  EmotionCanvasTheme,
  PartialEmotionCanvasTheme,
  defaultCanvasTheme,
  getTheme,
  isNumericalTheme,
  resolveThemingScope,
  useTheme,
} from './theming';
import {
  hasExplicitSemanticPalette,
  writeBrandScopeSemantic,
  writeNumericalTheme,
  writeSemanticTheme,
} from './theming/brandScope';

export interface CanvasProviderProps {
  /**
   * ⚠️ Only use this prop if you intent to to theme a part of your application that is different from global theming.
   * For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#global-vs-scoped-theming).
   *
   * While we support theme overrides, we advise to use global theming via CSS Variables.
   */
  theme?: CanvasProviderTheme;
  /**
   * How partial theme input expands. Default `'brand'`.
   *
   * **Numerical `brand` shape:** `'brand'` applies the `primary['600']` shortcut
   * (PrimaryButton + selected states). `'full'` writes each ramp key literally with
   * no shortcuts. Other `brand.*` keys always map 1:1 to CSS variables.
   *
   * **Legacy `canvas.palette` shape:** `'brand'` = primary.main shortcut only.
   * `'full'` = auto-generated ramps + broad `system.color.brand.*` forwarding.
   *
   * @default 'brand'
   */
  themeScope?: CanvasThemingScope;
}

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

  [system.color.brand.focus.primary]: brand.common.focusOutline,
  [system.color.brand.border.primary]: brand.common.focusOutline,
  [system.color.brand.accent.primary]: brand.primary.base,
  ...(system.color.brand.accent.action
    ? {[system.color.brand.accent.action]: brand.primary.base}
    : {}),
  [system.color.brand.accent.critical]: brand.error.base,
  [system.color.brand.accent.caution]: brand.alert.base,
  [system.color.brand.accent.positive]: brand.success.base,
  [system.color.brand.fg.primary.default]: brand.primary.base,
  [system.color.brand.fg.primary.strong]: brand.primary.dark,
  [system.color.brand.fg.critical.default]: brand.error.base,
  [system.color.brand.fg.critical.strong]: brand.error.dark,
  [system.color.brand.fg.caution.default]: brand.alert.darkest,
  [system.color.brand.fg.caution.strong]: brand.alert.darkest,
  [system.color.brand.fg.positive.default]: brand.success.base,
  [system.color.brand.fg.positive.strong]: brand.success.dark,
  [system.color.brand.fg.selected]: brand.primary.dark,
  [system.color.brand.focus.critical]: brand.error.dark,
  [system.color.brand.border.critical]: brand.error.base,
  ...(system.color.brand.focus.caution
    ? {
        [system.color.brand.focus.caution.inner]: brand.common.alertInner,
        [system.color.brand.focus.caution.outer]: brand.alert.dark,
      }
    : {}),
  [system.color.brand.border.caution]: brand.alert.dark,
  [system.color.brand.surface.primary.default]: brand.primary.lightest,
  [system.color.brand.surface.primary.strong]: brand.primary.lighter,
  [system.color.brand.surface.critical.default]: brand.error.lightest,
  [system.color.brand.surface.critical.strong]: brand.error.lighter,
  [system.color.brand.surface.caution.default]: brand.alert.lightest,
  [system.color.brand.surface.caution.strong]: brand.alert.lighter,
  [system.color.brand.surface.positive.default]: brand.success.lightest,
  [system.color.brand.surface.positive.strong]: brand.success.lighter,
  [system.color.brand.surface.selected]: brand.primary.lighter,
});

/** Pure function — safe to call outside React hooks (e.g. usePopupStack). */
export function canvasThemeToCssVars(
  theme: CanvasProviderTheme | undefined,
  elemProps: React.HTMLAttributes<HTMLElement>,
  options?: {
    themeScope?: CanvasThemingScope;
    filledSemanticTheme?: EmotionCanvasTheme;
  }
) {
  const className = elemProps.className || '';
  const style: React.CSSProperties = {...(elemProps.style || {})};
  const scope = options?.themeScope ?? resolveThemingScope(theme);

  if (!theme) {
    return {...elemProps, className, style};
  }

  if (isNumericalTheme(theme)) {
    writeNumericalTheme(theme, style, scope);
  } else if (!hasExplicitSemanticPalette(theme)) {
    // `{canvas: {}}` — no inline overrides; global CSS (e.g. Sana) cascades through.
  } else if (scope === 'brand') {
    writeBrandScopeSemantic(theme, style);
  } else {
    const filledTheme =
      options?.filledSemanticTheme ?? getTheme(theme as PartialEmotionCanvasTheme);
    writeSemanticTheme(filledTheme.canvas.palette, style, {writeAll: true});
  }

  return {...elemProps, className, style};
}

export const useCanvasThemeToCssVars = (
  /**
   * @deprecated ⚠️ `theme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
   */
  theme: CanvasProviderTheme | undefined,
  elemProps: React.HTMLAttributes<HTMLElement>,
  themeScope?: CanvasThemingScope
) => {
  const filledTheme = useTheme(
    isNumericalTheme(theme) ? undefined : (theme as PartialEmotionCanvasTheme)
  );
  const resolvedScope = themeScope ?? resolveThemingScope(theme);

  return canvasThemeToCssVars(theme, elemProps, {
    themeScope: resolvedScope,
    filledSemanticTheme:
      !isNumericalTheme(theme) && resolvedScope === 'full' ? filledTheme : undefined,
  });
};

export const CanvasProvider = ({
  children,
  theme,
  themeScope,
  ...props
}: CanvasProviderProps & React.HTMLAttributes<HTMLElement>) => {
  const {className, ...elemProps} = useCanvasThemeToCssVars(theme, props, themeScope);
  const cache = getCache();
  const rest = {...elemProps, ...props};
  const emotionTheme = theme
    ? isNumericalTheme(theme)
      ? ({canvas: defaultCanvasTheme} as Theme)
      : (theme as Theme)
    : undefined;
  const content = (
    <div
      dir={
        isNumericalTheme(theme)
          ? theme.direction || defaultCanvasTheme.direction
          : theme?.canvas?.direction || defaultCanvasTheme.direction
      }
      {...(rest as React.HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </div>
  );

  return (
    <CacheProvider value={cache}>
      {emotionTheme ? <ThemeProvider theme={emotionTheme}>{content}</ThemeProvider> : content}
    </CacheProvider>
  );
};
