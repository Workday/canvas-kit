import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, iconColors, depth, CSSProperties} from '@workday/canvas-kit-react-core';
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
    background: colors.gradients.blueberry,
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
  background?: string
  backgroundFocused?: string
  color?: string
  colorFocused?: string
  placeholderColor?: string
  placeholderColorFocused?: string
  boxShadow?: string | string[]
  boxShadowFocused?: string | string[]
}

export interface SearchThemes {
  [key: string]: SearchThemeAttributes;
}

export const searchThemes: SearchThemes = {
  [SearchTheme.Transparent]: {
    background: 'rgba(0, 0, 0, 0)',
    backgroundFocused: 'rgba(0, 0, 0, 0)',
    color: colors.blackPepper300,
    colorFocused: colors.blackPepper300,
    placeholderColor: colors.licorice300,
    placeholderColorFocused: colors.licorice300,
    boxShadow: 'none',
    boxShadowFocused: 'none',
  },
  [SearchTheme.Light]: {
    background: colors.soap200,
    backgroundFocused: colors.soap200,
    color: colors.blackPepper300,
    placeholderColor: colors.licorice300,
    boxShadow: 'none',
    boxShadowFocused: focusRing().boxShadow,
  },
  [SearchTheme.Dark]: {
    background: 'rgba(0,0,0,0.2)',
    backgroundFocused: colors.frenchVanilla100,
    color: colors.frenchVanilla100,
    colorFocused: colors.blackPepper300,
    placeholderColor: colors.frenchVanilla100,
    placeholderColorFocused: colors.licorice300,
    boxShadow: 'none',
  },
}

