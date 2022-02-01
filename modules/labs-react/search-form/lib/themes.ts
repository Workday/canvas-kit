import {focusRing} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';
import {CSSObject} from '@emotion/react';

export enum SearchTheme {
  Light,
  Dark,
  Transparent,
}

export interface SearchThemes {
  [key: string]: CSSObject;
}

export const searchThemes: SearchThemes = {
  [SearchTheme.Transparent]: {
    background: 'rgba(0, 0, 0, 0)',
    backgroundFocus: 'rgba(0, 0, 0, 0)',
    color: colors.blackPepper300,
    colorFocus: colors.blackPepper300,
    placeholderColor: colors.licorice300,
    placeholderColorFocus: colors.licorice300,
    boxShadow: 'none',
    boxShadowFocus: 'none',
  },
  [SearchTheme.Light]: {
    background: colors.soap200,
    backgroundFocus: colors.soap200,
    backgroundHover: colors.soap300,
    color: colors.blackPepper300,
    placeholderColor: colors.licorice300,
    boxShadow: 'none',
    boxShadowFocus: focusRing().boxShadow,
  },
  [SearchTheme.Dark]: {
    background: 'rgba(0, 0, 0, 0.2)',
    backgroundFocus: colors.frenchVanilla100,
    color: colors.frenchVanilla100,
    colorFocus: colors.blackPepper300,
    placeholderColor: colors.frenchVanilla100,
    placeholderColorFocus: colors.licorice300,
    boxShadow: 'none',
  },
};
