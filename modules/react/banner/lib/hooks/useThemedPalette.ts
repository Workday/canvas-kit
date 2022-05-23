import {CanvasThemePalette, EmotionCanvasTheme, useTheme} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';
import chroma from 'chroma-js';

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

export function getPaletteColors(
  type: paletteSelection,
  theme: EmotionCanvasTheme
): BackgroundColors {
  const palette = theme.canvas.palette[type];

  switch (type) {
    case 'error': {
      return getPaletteColorsFromTheme(palette, {contrast: colors.frenchVanilla100});
    }
    case 'alert': {
      return getPaletteColorsFromTheme(palette, {contrast: colors.blackPepper400});
    }
    default: {
      return getPaletteColorsFromTheme(palette);
    }
  }
}

export const useThemedPalette = (type: paletteSelection) => {
  const theme = useTheme();

  return getPaletteColors(type, theme);
};
