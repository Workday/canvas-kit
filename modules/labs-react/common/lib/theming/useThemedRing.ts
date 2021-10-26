import {useThemeRTL} from './useThemeRTL';
import {CanvasThemePalette, EmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {colors, CSSProperties, inputColors} from '@workday/canvas-kit-react/tokens';
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
  fallbackColors: ContrastColors,
  palette?: CanvasThemePalette
): ContrastColors => {
  return palette
    ? {
        outer: isAccessible(palette?.main) ? palette?.main : palette?.darkest,
        inner: palette?.main,
      }
    : fallbackColors;
};

export function getPaletteColors(
  type: paletteSelection,
  theme?: EmotionCanvasTheme
): ContrastColors {
  const palette = theme?.canvas.palette[type];

  switch (type) {
    case 'error': {
      return getPaletteColorsFromTheme(
        {
          outer: inputColors.error.border,
          inner: inputColors.error.border,
        },
        palette
      );
    }
    case 'alert': {
      return getPaletteColorsFromTheme(
        {
          outer: colors.cantaloupe600,
          inner: inputColors.alert.border,
        },
        palette
      );
    }
    default: {
      return getPaletteColorsFromTheme({}, palette);
    }
  }
}

export const useThemedRing = (type: paletteSelection): CSSProperties => {
  const {themeRTL, theme} = useThemeRTL();

  const paletteColors = getPaletteColors(type, theme);
  if (!(paletteColors?.outer || paletteColors?.inner)) {
    return {};
  }
  const errorBoxShadow = `inset 0 0 0 ${paletteColors.outer === paletteColors.inner ? 1 : 2}px ${
    paletteColors.inner
  }`;

  return themeRTL({
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
  });
};
