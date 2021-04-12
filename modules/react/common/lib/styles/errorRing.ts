import {EmotionCanvasTheme} from '../theming/index';
import {ErrorType} from '../types';
import {CSSObject} from '@emotion/core';
import {colors, inputColors} from '@workday/canvas-kit-react/tokens';
import chroma from 'chroma-js';

const isAccessible = (foreground: string, background: string = colors.frenchVanilla100) => {
  return chroma.contrast(foreground, background) >= 3;
};

export function getErrorColors(error?: ErrorType, theme?: EmotionCanvasTheme) {
  if (error === ErrorType.Error) {
    if (theme) {
      const palette = theme.canvas.palette.error;
      return {
        outer: isAccessible(palette.main) ? palette.main : palette.darkest,
        inner: palette.main,
      };
    } else {
      return {
        outer: inputColors.error.border,
        inner: inputColors.error.border,
      };
    }
  } else if (error === ErrorType.Alert) {
    if (theme) {
      const palette = theme.canvas.palette.alert;
      return {
        outer: isAccessible(palette.main) ? palette.main : palette.darkest,
        inner: palette.main,
      };
    } else {
      return {
        outer: colors.cantaloupe600,
        inner: inputColors.alert.border,
      };
    }
  } else {
    return {};
  }
}

export function errorRing(error?: ErrorType, theme?: EmotionCanvasTheme): CSSObject {
  if (error !== ErrorType.Error && error !== ErrorType.Alert) {
    return {};
  }
  const errorColors = getErrorColors(error, theme);
  const errorBoxShadow = `inset 0 0 0 ${errorColors.outer === errorColors.inner ? 1 : 2}px ${
    errorColors.inner
  }`;

  return {
    borderColor: errorColors.outer,
    transition: '100ms box-shadow',
    boxShadow: errorBoxShadow,
    '&:hover, &:disabled': {
      borderColor: errorColors.outer,
    },
    '&:focus:not([disabled])': {
      borderColor: errorColors.outer,
      boxShadow: `${errorBoxShadow},
        0 0 0 2px ${colors.frenchVanilla100},
        0 0 0 4px ${theme ? theme.canvas.palette.common.focusOutline : inputColors.focusBorder}`,
    },
  };
}
