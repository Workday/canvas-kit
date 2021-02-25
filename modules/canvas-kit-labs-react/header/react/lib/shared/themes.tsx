import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, gradients, iconColors, depth, CSSProperties} from '@workday/canvas-kit-react-core';
import chroma from 'chroma-js';
import {HeaderTheme, SearchTheme} from './types';

export interface ThemeAttributes {
  color: string;
  background: string;
  depth: CSSProperties;
  systemIcon: {
    color: string;
    colorHover: string;
  };
  linkColor: string;
  linkFadeOutColor: string;
  currentLinkColor: string;
  chipColor: string;
}

export interface Themes {
  [key: string]: ThemeAttributes;
}

export const themes: Themes = {
  [HeaderTheme.White]: {
    color: colors.blackPepper400,
    background: colors.frenchVanilla100,
    depth: depth['1'],
    systemIcon: {
      color: iconColors.standard,
      colorHover: iconColors.hover,
    },
    linkColor: colors.blackPepper400,
    linkFadeOutColor: colors.licorice200,
    currentLinkColor: colors.blueberry500,
    chipColor: colors.blueberry400,
  },
  [HeaderTheme.Blue]: {
    color: colors.frenchVanilla100,
    background: gradients.blueberry,
    depth: depth['3'],
    systemIcon: {
      color: colors.frenchVanilla100,
      colorHover: colors.blueberry200,
    },
    linkColor: colors.frenchVanilla100,
    linkFadeOutColor: chroma(colors.frenchVanilla100)
      .alpha(0.5)
      .css(),
    currentLinkColor: colors.frenchVanilla100,
    chipColor: colors.frenchVanilla100,
  },
  [HeaderTheme.Transparent]: {
    color: colors.frenchVanilla100,
    background: 'transparent',
    depth: {boxShadow: 'none'},
    systemIcon: {
      color: colors.frenchVanilla100,
      colorHover: colors.blueberry200,
    },
    linkColor: colors.frenchVanilla100,
    linkFadeOutColor: chroma(colors.frenchVanilla100)
      .alpha(0.5)
      .css(),
    currentLinkColor: colors.frenchVanilla100,
    chipColor: colors.frenchVanilla100,
  },
};

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
