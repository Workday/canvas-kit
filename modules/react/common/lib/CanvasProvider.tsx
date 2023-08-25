import * as React from 'react';
import {Theme, ThemeProvider} from '@emotion/react';
import {InputProvider} from './InputProvider';
import {defaultCanvasTheme, newTheme, PartialEmotionCanvasTheme, useTheme} from './theming';

export interface CanvasProviderProps {
  theme: PartialEmotionCanvasTheme;
}

const useCanvasThemeToCssVars = (
  theme: PartialEmotionCanvasTheme,
  elemProps: React.HTMLAttributes<HTMLElement>
) => {
  const filledTheme = useTheme(theme);
  const {palette} = filledTheme.canvas;
  const style = (['common', 'primary', 'error', 'alert', 'success', 'neutral'] as const).reduce(
    (result, color) => {
      if (color === 'common') {
        // @ts-ignore
        result[newTheme.colors.common.focusOutline] = palette.common.focusOutline;
      }
      (['lightest', 'light', 'main', 'dark', 'darkest', 'contrast'] as const).forEach(key => {
        // @ts-ignore
        result[newTheme.colors[color][key]] = palette[color][key];
      });
      return result;
    },
    elemProps.style || {}
  );
  return {...elemProps, style};
};

export const CanvasProvider = ({
  children,
  theme,
  ...props
}: CanvasProviderProps & React.HTMLAttributes<HTMLElement>) => {
  const elemProps = useCanvasThemeToCssVars(theme, props);
  return (
    <ThemeProvider theme={theme as Theme}>
      <InputProvider />
      <div
        dir={(theme.canvas && theme.canvas.direction) || defaultCanvasTheme.direction}
        {...(elemProps as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};
