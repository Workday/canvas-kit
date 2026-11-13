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
import {sanaCanvasProviderTheme} from './theming/sanaTheme';

/**
 * Context for providing brand CSS variables to popup containers.
 * This carries the resolved CSS variable style map from CanvasProvider
 * to usePopupStack for proper popup theming, regardless of whether
 * a numerical or legacy theme is used.
 */
export const CanvasBrandStyleContext = React.createContext<React.CSSProperties>({});

/**
 * Context for providing the `data-theme` value to popup containers.
 *
 * Token stylesheets scope their variables to an attribute selector (e.g. Sana's
 * `[data-theme="sana-canvas"]` block defines ~300 variables — palette, shape, depth, type).
 * Portaled popups render under `document.body`, outside the `CanvasProvider` wrapper, so they
 * never inherit a nested `data-theme` and none of those variables resolve. Forwarding the
 * attribute itself lets the popup container match the same selector, so the whole theme applies
 * through normal cascade — rather than trying to mirror every variable as an inline style.
 */
export const CanvasThemeAttributeContext = React.createContext<string | undefined>(undefined);

export interface CanvasProviderProps {
  /**
   * ⚠️ Only use this prop if you intent to to theme a part of your application that is different from global theming.
   * For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#scoped-theming).
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
  [brand.common.caution.inner]: base.amber400,
  [brand.common.caution.outer]: base.amber500,
  [brand.common.critical]: base.red500,
  [brand.common.focus]: base.blue500,
  [brand.neutral25]: base.slate25,
  [brand.neutral50]: base.slate50,
  [brand.neutral200]: base.slate200,
  [brand.neutral600]: base.slate600,
  [brand.neutral700]: base.slate700,
  [brand.neutral800]: base.slate800,
  [brand.positive25]: base.green25,
  [brand.positive50]: base.green50,
  [brand.positive200]: base.green200,
  [brand.positive600]: base.green600,
  [brand.positive700]: base.green700,
  [brand.positive800]: base.green800,
  [brand.critical25]: base.red25,
  [brand.critical50]: base.red50,
  [brand.critical200]: base.red200,
  [brand.critical600]: base.red600,
  [brand.critical700]: base.red700,
  [brand.critical800]: base.red800,
  [brand.caution25]: base.amber25,
  [brand.caution50]: base.amber50,
  [brand.caution200]: base.amber200,
  [brand.caution400]: base.amber400,
  [brand.caution500]: base.amber500,
  [brand.caution600]: base.amber600,
  [brand.primary25]: base.blue25,
  [brand.primary50]: base.blue50,
  [brand.primary200]: base.blue200,
  [brand.primary600]: base.blue600,
  [brand.primary700]: base.blue700,
  [brand.primary800]: base.blue800,
  [brand.gradient.primary]:
    `linear-gradient(90deg, var(${brand.primary600}) 0%, var(${brand.primary700}) 100%)`,

  [system.color.brand.focus.primary]: brand.common.focus,
  [system.color.brand.border.primary]: brand.common.focus,
  [system.color.brand.accent.primary]: brand.primary600,
  ...(system.color.brand.accent.action
    ? {[system.color.brand.accent.action]: brand.primary600}
    : {}),
  [system.color.brand.accent.critical]: brand.critical600,
  [system.color.brand.accent.caution]: brand.caution400,
  [system.color.brand.accent.positive]: brand.positive600,
  [system.color.brand.fg.primary.default]: brand.primary600,
  [system.color.brand.fg.primary.strong]: brand.primary700,
  [system.color.brand.fg.critical.default]: brand.critical600,
  [system.color.brand.fg.critical.strong]: brand.critical700,
  [system.color.brand.fg.caution.default]: brand.caution600,
  [system.color.brand.fg.caution.strong]: brand.caution600,
  [system.color.brand.fg.positive.default]: brand.positive600,
  [system.color.brand.fg.positive.strong]: brand.positive700,
  [system.color.brand.fg.selected]: brand.primary700,
  [system.color.brand.focus.critical]: brand.critical700,
  [system.color.brand.border.critical]: brand.critical600,
  ...(system.color.brand.focus.caution
    ? {
        [system.color.brand.focus.caution.inner]: brand.common.caution.inner,
        [system.color.brand.focus.caution.outer]: brand.caution500,
      }
    : {}),
  [system.color.brand.border.caution]: brand.caution500,
  [system.color.brand.surface.primary.default]: brand.primary25,
  [system.color.brand.surface.primary.strong]: brand.primary50,
  [system.color.brand.surface.critical.default]: brand.critical25,
  [system.color.brand.surface.critical.strong]: brand.critical50,
  [system.color.brand.surface.caution.default]: brand.caution25,
  [system.color.brand.surface.caution.strong]: brand.caution50,
  [system.color.brand.surface.positive.default]: brand.positive25,
  [system.color.brand.surface.positive.strong]: brand.positive50,
  [system.color.brand.surface.selected]: brand.primary50,
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
  // Add console warning for unnecessary sanaCanvasProviderTheme usage
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      if (
        theme === sanaCanvasProviderTheme &&
        typeof document !== 'undefined' &&
        document.documentElement.getAttribute('data-theme') === 'sana-canvas'
      ) {
        console.warn(
          'Canvas Kit: You are passing sanaCanvasProviderTheme to CanvasProvider but ' +
            'data-theme="sana-canvas" is already set on <html>. The theme prop is not needed ' +
            'in this case and can be removed. Keep sanaCanvasProviderTheme when you cannot ' +
            'control <html> (embedded apps / microfrontends) so popups still get Sana brand ' +
            'variables. See: ' +
            'https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs'
        );
      }
    }
  }, [theme]);

  // Computed className/style win over consumer props — do not re-spread `props` over them.
  const {className, style, ...elemProps} = useCanvasThemeToCssVars(theme, props, themeScope);
  const cache = getCache();

  // Read parent context to support nested scoped providers
  const parentBrandStyle = React.useContext(CanvasBrandStyleContext);
  const parentThemeAttribute = React.useContext(CanvasThemeAttributeContext);

  // `data-theme` on this provider wins; otherwise inherit from a parent provider so nested
  // providers keep forwarding the outer theme attribute to popups.
  const themeAttribute =
    (props as React.HTMLAttributes<HTMLElement> & {'data-theme'?: string})['data-theme'] ??
    parentThemeAttribute;

  // Popup forwarding only needs CSS custom properties (not consumer layout styles).
  const mergedBrandStyle = React.useMemo(() => {
    const merged: React.CSSProperties = {};
    for (const [key, value] of Object.entries({...parentBrandStyle, ...style})) {
      if (key.startsWith('--') && typeof value === 'string') {
        // @ts-ignore - CSS custom property key
        merged[key] = value;
      }
    }
    return merged;
  }, [parentBrandStyle, style]);

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
      className={className}
      {...(elemProps as React.HTMLAttributes<HTMLDivElement>)}
      style={style}
    >
      {children}
    </div>
  );

  const wrappedContent = (
    <CanvasThemeAttributeContext.Provider value={themeAttribute}>
      <CanvasBrandStyleContext.Provider value={mergedBrandStyle}>
        {content}
      </CanvasBrandStyleContext.Provider>
    </CanvasThemeAttributeContext.Provider>
  );

  return (
    <CacheProvider value={cache}>
      {emotionTheme ? (
        <ThemeProvider theme={emotionTheme}>{wrappedContent}</ThemeProvider>
      ) : (
        wrappedContent
      )}
    </CacheProvider>
  );
};
