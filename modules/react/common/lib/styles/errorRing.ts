import {EmotionCanvasTheme} from '../theming/index';
import {ErrorType} from '../types';
import {CSSObject} from '@emotion/styled';
import {brand, system} from '@workday/canvas-tokens-web';
import {cssVar} from '@workday/canvas-kit-styling';

export function getErrorColors(error?: ErrorType, theme?: EmotionCanvasTheme) {
  if (error === ErrorType.Error) {
    if (theme) {
      const palette = theme.canvas.palette;
      return {
        outer: palette.common.errorInner,
        inner: palette.common.errorInner,
      };
    } else {
      return {
        outer: brand.common.errorInner,
        inner: brand.common.errorInner,
      };
    }
  } else if (error === ErrorType.Alert) {
    if (theme) {
      const palette = theme.canvas.palette;
      return {
        outer: palette.common.alertOuter,
        inner: palette.common.alertInner,
      };
    } else {
      return {
        outer: brand.common.alertOuter,
        inner: brand.common.alertInner,
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
    '&:hover, &:disabled, &.hover, &.disabled': {
      borderColor: errorColors.outer,
    },
    '&:focus-visible:not([disabled]), &.focus:not([disabled])': {
      borderColor: errorColors.outer,
      boxShadow: `${errorBoxShadow},
        0 0 0 2px ${cssVar(system.color.border.inverse)},
        0 0 0 4px ${
          theme ? theme.canvas.palette.common.focusOutline : cssVar(brand.common.focusOutline)
        }`,
    },
  };
}
