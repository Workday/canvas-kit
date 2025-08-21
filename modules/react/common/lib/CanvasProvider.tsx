import * as React from 'react';
import {Theme, ThemeProvider, CacheProvider} from '@emotion/react';
import {defaultCanvasTheme, PartialEmotionCanvasTheme, useTheme} from './theming';
import {InputProvider} from './InputProvider';
import {brand} from '@workday/canvas-tokens-web';
import {getCache, maybeWrapCSSVariables} from '@workday/canvas-kit-styling';

export interface CanvasProviderProps {
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

export const useCanvasThemeToCssVars = (
  theme: PartialEmotionCanvasTheme | undefined,
  elemProps: React.HTMLAttributes<HTMLElement>
) => {
  const filledTheme = useTheme(theme);
  const className = elemProps.className || '';
  const style = elemProps.style || {};
  const {palette} = filledTheme.canvas;
  (['common', 'primary', 'error', 'alert', 'success', 'neutral'] as const).forEach(color => {
    if (color === 'common') {
      //@ts-ignore
      style[brand.common.focusOutline] = maybeWrapCSSVariables(palette.common.focusOutline);
      //@ts-ignore
      style[brand.common.alertInner] = maybeWrapCSSVariables(palette.common.alertInner);
      //@ts-ignore
      style[brand.common.alertOuter] = maybeWrapCSSVariables(palette.common.alertOuter);
      //@ts-ignore
      style[brand.common.errorInner] = maybeWrapCSSVariables(palette.common.errorInner);
    }
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
  });
  return {...elemProps, className, style};
};

export const CanvasProvider = ({
  children,
  theme,
  ...props
}: CanvasProviderProps & React.HTMLAttributes<HTMLElement>) => {
  const elemProps = useCanvasThemeToCssVars(theme, props);
  const cache = getCache();
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme as Theme}>
        <InputProvider />
        <div
          dir={theme?.canvas?.direction || defaultCanvasTheme.direction}
          {...(elemProps as React.HTMLAttributes<HTMLDivElement>)}
        >
          {children}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};
