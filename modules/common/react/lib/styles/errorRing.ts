import {ErrorType} from '../types';
import {CSSObject} from 'create-emotion';
import {colors, inputColors} from '@workday/canvas-kit-react-core';

export default function errorRing(error?: ErrorType): CSSObject {
  let errorBorderColor;
  let errorRingColor;

  if (error === ErrorType.Error) {
    errorRingColor = inputColors.error.border;
  } else if (error === ErrorType.Alert) {
    errorRingColor = inputColors.warning.border;
    errorBorderColor = colors.cantaloupe600;
  } else {
    return {};
  }

  return {
    border: errorBorderColor ? `1px solid ${errorBorderColor}` : 'none',
    transition: '100ms box-shadow',
    boxShadow: `inset 0 0 0 2px ${errorRingColor}`,
    '&:hover': {
      borderColor: errorBorderColor,
    },
    '&:focus:not([disabled])': {
      borderColor: errorBorderColor,
      boxShadow: `inset 0 0 0 2px ${errorRingColor},
        0 0 0 2px ${colors.frenchVanilla100},
        0 0 0 4px ${inputColors.focusBorder}`,
    },
  };
}
