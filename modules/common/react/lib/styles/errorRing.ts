import {ErrorType} from '../types';
import {CSSObject} from '@emotion/core';
import {colors, inputColors} from '@workday/canvas-kit-react-core';

export default function errorRing(error?: ErrorType): CSSObject {
  let errorBorderColor;
  let errorBoxShadow;

  if (error === ErrorType.Error) {
    errorBorderColor = inputColors.error.border;
    errorBoxShadow = `inset 0 0 0 1px ${inputColors.error.border}`;
  } else if (error === ErrorType.Alert) {
    errorBorderColor = colors.cantaloupe600;
    errorBoxShadow = `inset 0 0 0 2px ${inputColors.warning.border}`;
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
