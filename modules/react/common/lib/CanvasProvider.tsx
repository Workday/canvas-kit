import * as React from 'react';
import {Theme, ThemeProvider, CacheProvider} from '@emotion/react';
import {InputProvider} from './InputProvider';
import {defaultCanvasTheme, PartialEmotionCanvasTheme, useTheme} from './theming';
import {brand} from '@workday/canvas-tokens-web';
// eslint-disable-next-line @emotion/no-vanilla
import {cache} from '@emotion/css';

export interface CanvasProviderProps {
  theme?: PartialEmotionCanvasTheme;
}

const mappedKeys = {
  lightest: 'lightest',
  light: 'light',
  main: 'base',
  dark: 'dark',
  darkest: 'darkest',
  contrast: 'accent',
};

const useCanvasThemeToCssVars = (
  theme: PartialEmotionCanvasTheme | undefined,
  elemProps: React.HTMLAttributes<HTMLElement>
) => {
  const filledTheme = useTheme(theme);
  const {palette} = filledTheme.canvas;
  const style = (['common', 'primary', 'error', 'alert', 'success', 'neutral'] as const).reduce(
    (result, color) => {
      if (color === 'common') {
        // @ts-ignore
        result[brand.common.focusOutline] = palette.common.focusOutline;
      }
      (['lightest', 'light', 'main', 'dark', 'darkest', 'contrast'] as const).forEach(key => {
        // @ts-ignore
        result[brand[color][mappedKeys[key]]] = palette[color][key];
      });
      return result;
    },
    elemProps.style || {}
  );
  return {...elemProps, style};
};

export const CanvasProvider = ({
  children,
  theme = {canvas: defaultCanvasTheme},
  ...props
}: CanvasProviderProps & React.HTMLAttributes<HTMLElement>) => {
  const elemProps = useCanvasThemeToCssVars(theme, props);
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
