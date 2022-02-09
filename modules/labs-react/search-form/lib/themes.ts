import {focusRing} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';

export enum SearchTheme {
  Light,
  Dark,
  Transparent,
}

export interface SearchThemeAttributes {
  background?: string;
  backgroundFocus?: string;
  backgroundHover?: string;
  color?: string;
  colorFocus?: string;
  placeholderColor?: string;
  placeholderColorFocus?: string;
  boxShadow?: string | string[];
  boxShadowFocus?: string | string[];
}

export interface SearchThemes {
  [key: string]: SearchThemeAttributes;
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
    boxShadowFocus: focusRing().boxShadow as SearchThemeAttributes['boxShadowFocus'],
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
