import {CanvasTheme} from '@workday/canvas-kit-labs-react-core';
import {ErrorType} from '../types';
import {CSSObject} from '@emotion/core';
import {colors, inputColors} from '@workday/canvas-kit-react-core';
import chroma from 'chroma-js';

export default function errorRing(error?: ErrorType, theme?: CanvasTheme): CSSObject {
  let errorBorderColor;
  let errorBoxShadow;

  if (error === ErrorType.Error) {
    errorBorderColor = theme
      ? chroma.contrast(theme.palette.error.main, colors.frenchVanilla100) >= 3
        ? theme.palette.error.main
        : theme.palette.error.darkest
      : inputColors.error.border;
    errorBoxShadow = `inset 0 0 0 1px ${
      theme ? theme.palette.error.main : inputColors.error.border
    }`;
  } else if (error === ErrorType.Alert) {
    errorBorderColor = theme
      ? chroma.contrast(theme.palette.alert.main, colors.frenchVanilla100) >= 3
        ? theme.palette.alert.main
        : theme.palette.alert.darkest
      : colors.cantaloupe600;
    errorBoxShadow = `inset 0 0 0 2px ${
      theme ? theme.palette.alert.main : inputColors.warning.border
    }`;
  } else {
    return {};
  }

  return {
    borderColor: errorBorderColor,
    transition: '100ms box-shadow',
    boxShadow: errorBoxShadow,
    '&:hover, &:disabled': {
      borderColor: errorBorderColor,
    },
    '&:focus:not([disabled])': {
      borderColor: errorBorderColor,
      boxShadow: `${errorBoxShadow},
        0 0 0 2px ${colors.frenchVanilla100},
        0 0 0 4px ${theme ? theme.palette.common.focusOutline : inputColors.focusBorder}`,
    },
  };
}
