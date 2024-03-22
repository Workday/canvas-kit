import * as React from 'react';
import {Theme, ThemeProvider, CacheProvider} from '@emotion/react';
import {InputProvider} from './InputProvider';
import {defaultCanvasTheme, PartialEmotionCanvasTheme, useTheme} from './theming';
import {brand} from '@workday/canvas-tokens-web';
import {createStyles, getCache} from '@workday/canvas-kit-styling';

export interface CanvasProviderProps {
  theme?: PartialEmotionCanvasTheme;
}

// copied from brand/_variables.css
const defaultBranding = createStyles({
  '--cnvs-brand-error-darkest': 'rgba(128,22,14,1)',
  '--cnvs-brand-common-alert-inner': 'var(--cnvs-base-palette-cantaloupe-400)',
  '--cnvs-brand-common-error-inner': 'var(--cnvs-base-palette-cinnamon-500)',
  '--cnvs-brand-common-focus-outline': 'var(--cnvs-base-palette-blueberry-400)',
  '--cnvs-brand-neutral-accent': 'var(--cnvs-base-palette-french-vanilla-100)',
  '--cnvs-brand-neutral-darkest': 'var(--cnvs-base-palette-licorice-400)',
  '--cnvs-brand-neutral-dark': 'var(--cnvs-base-palette-licorice-300)',
  '--cnvs-brand-neutral-base': 'var(--cnvs-base-palette-soap-600)',
  '--cnvs-brand-neutral-light': 'var(--cnvs-base-palette-soap-300)',
  '--cnvs-brand-neutral-lightest': 'var(--cnvs-base-palette-soap-200)',
  '--cnvs-brand-success-accent': 'var(--cnvs-base-palette-french-vanilla-100)',
  '--cnvs-brand-success-darkest': 'var(--cnvs-base-palette-green-apple-600)',
  '--cnvs-brand-success-dark': 'var(--cnvs-base-palette-green-apple-500)',
  '--cnvs-brand-success-base': 'var(--cnvs-base-palette-green-apple-400)',
  '--cnvs-brand-success-light': 'var(--cnvs-base-palette-green-apple-300)',
  '--cnvs-brand-success-lightest': 'var(--cnvs-base-palette-green-apple-100)',
  '--cnvs-brand-error-accent': 'var(--cnvs-base-palette-french-vanilla-100)',
  '--cnvs-brand-error-dark': 'var(--cnvs-base-palette-cinnamon-600)',
  '--cnvs-brand-error-base': 'var(--cnvs-base-palette-cinnamon-500)',
  '--cnvs-brand-error-light': 'var(--cnvs-base-palette-cinnamon-200)',
  '--cnvs-brand-error-lightest': 'var(--cnvs-base-palette-cinnamon-100)',
  '--cnvs-brand-alert-accent': 'var(--cnvs-base-palette-french-vanilla-100)',
  '--cnvs-brand-alert-darkest': 'var(--cnvs-base-palette-cantaloupe-600)',
  '--cnvs-brand-alert-dark': 'var(--cnvs-base-palette-cantaloupe-500)',
  '--cnvs-brand-alert-base': 'var(--cnvs-base-palette-cantaloupe-400)',
  '--cnvs-brand-alert-light': 'var(--cnvs-base-palette-cantaloupe-200)',
  '--cnvs-brand-alert-lightest': 'var(--cnvs-base-palette-cantaloupe-100)',
  '--cnvs-brand-primary-accent': 'var(--cnvs-base-palette-french-vanilla-100)',
  '--cnvs-brand-primary-darkest': 'var(--cnvs-base-palette-blueberry-600)',
  '--cnvs-brand-primary-dark': 'var(--cnvs-base-palette-blueberry-500)',
  '--cnvs-brand-primary-base': 'var(--cnvs-base-palette-blueberry-400)',
  '--cnvs-brand-primary-light': 'var(--cnvs-base-palette-blueberry-200)',
  '--cnvs-brand-primary-lightest': 'var(--cnvs-base-palette-blueberry-100)',
  '--cnvs-brand-gradient-primary':
    'linear-gradient(90deg, var(--cnvs-brand-primary-base) 0%, var(--cnvs-brand-primary-dark) 100%)',
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
