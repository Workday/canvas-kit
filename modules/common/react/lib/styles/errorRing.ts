import {CanvasTheme} from '@workday/canvas-kit-labs-react-core';
import {ErrorType} from '../types';
import {CSSObject} from '@emotion/core';
import {colors, inputColors} from '@workday/canvas-kit-react-core';

export default function errorRing(error?: ErrorType, theme?: CanvasTheme): CSSObject {
  let errorBorderColor;
  let errorBoxShadow;

  if (error === ErrorType.Error) {
    errorBorderColor = theme ? theme.palette.error.darkest : inputColors.error.border;
    errorBoxShadow = `inset 0 0 0 1px ${
      theme ? theme.palette.error.main : inputColors.error.border
    }`;
  } else if (error === ErrorType.Alert) {
    errorBorderColor = theme ? theme.palette.alert.darkest : colors.cantaloupe600;
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
    '&:hover': {
      borderColor: errorBorderColor,
    },
    '&:focus:not([disabled])': {
      borderColor: errorBorderColor,
      boxShadow: `${errorBoxShadow},
        0 0 0 2px ${colors.frenchVanilla100},
        0 0 0 4px ${inputColors.focusBorder}`,
    },
  };
}
