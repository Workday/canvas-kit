import chroma from 'chroma-js';

import {CanvasThemePalette, EmotionCanvasTheme, useTheme} from '@workday/canvas-kit-react/common';

type paletteSelection = Exclude<keyof EmotionCanvasTheme['canvas']['palette'], 'common'>;

interface BackgroundColors {
  normal?: string;
  hover?: string;
  contrast?: string;
}

const isAccessible = (foreground: string, background: string) => {
  return chroma.contrast(foreground, background) >= 3;
};

const getPaletteColorsFromTheme = (
  palette: CanvasThemePalette,
  fallbackColors?: BackgroundColors
): BackgroundColors => {
  return {
    hover: palette.dark,
    normal: palette.main,
    contrast: isAccessible(palette.contrast, palette.main)
      ? palette.contrast
      : fallbackColors?.contrast,
  };
};

/**
 * @deprecated ⚠️ `getPaletteColors` is deprecated. Use CSS variables from `@workday/canvas-tokens-web` instead. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export const getPaletteColors = (
  type: paletteSelection,
  theme: EmotionCanvasTheme
): BackgroundColors => {
  const palette = theme.canvas.palette[type];

  switch (type) {
    case 'error': {
      return getPaletteColorsFromTheme(palette, {contrast: '#FFFFFF'});
    }
    case 'alert': {
      return getPaletteColorsFromTheme(palette, {contrast: '#333333'});
    }
    default: {
      return getPaletteColorsFromTheme(palette);
    }
  }
};

/**
 * @deprecated ⚠️ `useThemedPalette` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export const useThemedPalette = (type: paletteSelection) => {
  const theme = useTheme();

  return getPaletteColors(type, theme);
};
