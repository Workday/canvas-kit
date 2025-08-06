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
    (['lightest', 'lighter', 'light', 'main', 'dark', 'darkest', 'contrast'] as const).forEach(
      key => {
        // We only want to set custom colors if they do not match the default. The `defaultBranding` class will take care of the rest.
        // @ts-ignore
        if (palette[color][key] !== defaultCanvasTheme.palette[color][key]) {
          // @ts-ignore
          style[brand[color][mappedKeys[key]]] = palette[color][key];
        }
      }
    );
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
