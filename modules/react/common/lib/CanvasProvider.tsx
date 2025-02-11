import * as React from 'react';
import {Theme, ThemeProvider, CacheProvider} from '@emotion/react';
import {InputProvider} from './InputProvider';
import {defaultCanvasTheme, PartialEmotionCanvasTheme, useTheme} from './theming';
import {brand, base} from '@workday/canvas-tokens-web';
import {createStyles, getCache} from '@workday/canvas-kit-styling';

export interface CanvasProviderProps {
  theme?: PartialEmotionCanvasTheme;
}

// copied from brand/_variables.css
const defaultBranding = createStyles({
  [brand.error.darkest]: 'rgba(128,22,14,1)',
  [brand.common.alertInner]: base.cantaloupe400,
  [brand.common.errorInner]: base.cinnamon500,
  [brand.common.focusOutline]: base.blueberry400,
  [brand.neutral.accent]: base.frenchVanilla100,
  [brand.neutral.darkest]: base.licorice400,
  [brand.neutral.dark]: base.licorice300,
  [brand.neutral.base]: base.soap600,
  [brand.neutral.light]: base.soap300,
  [brand.neutral.lightest]: base.soap200,
  [brand.success.accent]: base.frenchVanilla100,
  [brand.success.darkest]: base.greenApple600,
  [brand.success.dark]: base.greenApple500,
  [brand.success.base]: base.greenApple400,
  [brand.success.light]: base.greenApple300,
  [brand.success.lightest]: base.greenApple100,
  [brand.error.accent]: base.frenchVanilla100,
  [brand.error.dark]: base.cinnamon600,
  [brand.error.base]: base.cinnamon500,
  [brand.error.light]: base.cinnamon200,
  [brand.error.lightest]: base.cinnamon100,
  [brand.alert.accent]: base.frenchVanilla100,
  [brand.alert.darkest]: base.cantaloupe600,
  [brand.alert.dark]: base.cantaloupe500,
  [brand.alert.base]: base.cantaloupe400,
  [brand.alert.light]: base.cantaloupe200,
  [brand.alert.lightest]: base.cantaloupe100,
  [brand.primary.accent]: base.frenchVanilla100,
  [brand.primary.darkest]: base.blueberry600,
  [brand.primary.dark]: base.blueberry500,
  [brand.primary.base]: base.blueberry400,
  [brand.primary.light]: base.blueberry200,
  [brand.primary.lightest]: base.blueberry100,
  [brand.gradient
    .primary]: `linear-gradient(90deg, ${brand.primary.base} 0%, ${brand.primary.dark} 100%)`,
});

const mappedKeys = {
  lightest: 'lightest',
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
  const className = (elemProps.className || '').split(' ').concat(defaultBranding).join(' ');
  const style = elemProps.style || {};
  const {palette} = filledTheme.canvas;
  (['common', 'primary', 'error', 'alert', 'success', 'neutral'] as const).forEach(color => {
    if (color === 'common') {
      // @ts-ignore
      style[brand.common.focusOutline] = palette.common.focusOutline;
    }
    (['lightest', 'light', 'main', 'dark', 'darkest', 'contrast'] as const).forEach(key => {
      // We only want to set custom colors if they do not match the default. The `defaultBranding` class will take care of the rest.
      // @ts-ignore
      if (palette[color][key] !== defaultCanvasTheme.palette[color][key]) {
        // @ts-ignore
        style[brand[color][mappedKeys[key]]] = palette[color][key];
      }
    });
  });
  return {...elemProps, className, style};
};

export const CanvasProvider = ({
  children,
  theme = {canvas: defaultCanvasTheme},
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
