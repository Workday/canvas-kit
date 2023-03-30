import {CanvasThemePalette, EmotionCanvasTheme, useTheme} from '@workday/canvas-kit-react/common';
import {colors, CSSProperties, inputColors, statusColors} from '@workday/canvas-kit-react/tokens';
import chroma from 'chroma-js';

type paletteSelection = Exclude<keyof EmotionCanvasTheme['canvas']['palette'], 'common'>;
interface ContrastColors {
  outer?: string;
  inner?: string;
}

const isAccessible = (foreground: string, background: string = colors.frenchVanilla100) => {
  return chroma.contrast(foreground, background) >= 3;
};

const getPaletteColorsFromTheme = (
  palette: CanvasThemePalette,
  fallbackColors?: ContrastColors
): ContrastColors => {
  return {
    outer: isAccessible(palette.main)
      ? palette.main
      : isAccessible(palette.darkest)
      ? palette.darkest
      : fallbackColors?.outer,
    inner: fallbackColors?.inner ? fallbackColors.inner : palette.main,
  };
};

export function getPaletteColorsForFocusRing(
  type: paletteSelection,
  theme: EmotionCanvasTheme
): ContrastColors {
  const palette = theme.canvas.palette[type];

  switch (type) {
    case 'error': {
      return getPaletteColorsFromTheme(palette, {outer: inputColors.error.border});
    }
    case 'alert': {
      return getPaletteColorsFromTheme(palette, {outer: colors.cantaloupe600});
    }
    case 'success': {
      return getPaletteColorsFromTheme(palette, {
        outer: colors.greenApple600,
        // The theme default for success.main is set to the darkest GreenApple
        // For our default ring, we need to override it so the inner ring is a bit lighter
        inner: palette.main === colors.greenApple600 ? statusColors.success : palette.main,
      });
    }
    default: {
      return getPaletteColorsFromTheme(palette);
    }
  }
}

export const useThemedRing = (type: paletteSelection): CSSProperties => {
  const theme = useTheme();

  const paletteColors = getPaletteColorsForFocusRing(type, theme);
  if (!(paletteColors?.outer || paletteColors?.inner)) {
    return {};
  }
  const errorBoxShadow = `inset 0 0 0 ${paletteColors.outer === paletteColors.inner ? 1 : 2}px ${
    paletteColors.inner
  }`;

  return {
    borderColor: paletteColors.outer,
    transition: '100ms box-shadow',
    boxShadow: errorBoxShadow,
    '&:hover, &:disabled': {
      borderColor: paletteColors.outer,
    },
    '&:focus:not([disabled])': {
      borderColor: paletteColors.outer,
      boxShadow: `${errorBoxShadow},
        0 0 0 2px ${colors.frenchVanilla100},
        0 0 0 4px ${theme ? theme.canvas.palette.common.focusOutline : inputColors.focusBorder}`,
    },
  };
};
