import get from 'lodash/get';
import {default as colors, typeColors, statusColors} from '@workday/canvas-colors-web';
import {borderRadius} from './radius';
import {CSSProperties} from './types';

const inheritFont: boolean =
  typeof window !== 'undefined' && get(window, 'window.workday.canvas.inheritFontFamily');
const inheritMonoFont: boolean | string =
  typeof window !== 'undefined' && get(window, 'window.workday.canvas.inheritMonoFontFamily');

export const fontFamily = inheritFont
  ? 'inherit'
  : '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif';
export const monoFontFamily =
  inheritMonoFont === true
    ? 'inherit'
    : inheritMonoFont || '"Roboto Mono", "Courier New", Courier, monospace';

export interface CanvasTypeHierarchy {
  brand1: CSSProperties;
  brand2: CSSProperties;
  h1: CSSProperties;
  h2: CSSProperties;
  h3: CSSProperties;
  h4: CSSProperties;
  h5: CSSProperties;
  body: CSSProperties;
  body2: CSSProperties;
  small: CSSProperties;
  [key: string]: CSSProperties;
}

export interface CanvasTypeVariant {
  label: CSSProperties;
  button: CSSProperties;
  caps: CSSProperties;
  hint: CSSProperties;
  error: CSSProperties;
  inverse: CSSProperties;
  mono: CSSProperties;
  link: CSSProperties;
  [key: string]: CSSProperties;
}

export interface CanvasType extends CanvasTypeHierarchy {
  variant: CanvasTypeVariant;
  [key: string]: CanvasTypeHierarchy | CSSProperties;
}

const hierarchy: CanvasTypeHierarchy = {
  brand1: {
    fontFamily,
    fontSize: 56,
    lineHeight: 1.3,
    fontWeight: 700,
    color: typeColors.heading,
  },
  brand2: {
    fontFamily,
    fontSize: 48,
    lineHeight: 1.3,
    fontWeight: 700,
    color: typeColors.heading,
  },
  h1: {
    fontFamily,
    fontSize: 40,
    lineHeight: 1.3,
    fontWeight: 500,
    color: typeColors.heading,
  },
  h2: {
    fontFamily,
    fontSize: 32,
    lineHeight: 1.3,
    fontWeight: 700,
    color: typeColors.heading,
  },
  h3: {
    fontFamily,
    fontSize: 24,
    lineHeight: 1.3,
    fontWeight: 700,
    color: typeColors.heading,
  },
  h4: {
    fontFamily,
    fontSize: 20,
    lineHeight: 1.3,
    fontWeight: 700,
    color: typeColors.heading,
  },
  h5: {
    fontFamily,
    fontSize: 20,
    lineHeight: 1.3,
    fontWeight: 400,
    color: typeColors.heading,
  },
  body: {
    fontFamily,
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 400,
    color: typeColors.body,
  },
  body2: {
    fontFamily,
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: 400,
    color: typeColors.body,
  },
  small: {
    fontFamily,
    fontSize: 13,
    lineHeight: 1.5,
    fontWeight: 400,
    color: typeColors.body,
  },
};

const variants: CanvasTypeVariant = {
  label: {
    fontWeight: 500,
  },
  button: {
    fontWeight: 500,
  },
  caps: {
    fontWeight: 500,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  hint: {
    color: typeColors.hint,
  },
  error: {
    color: statusColors.error,
  },
  inverse: {
    color: typeColors.inverse,
  },
  mono: {
    fontFamily: monoFontFamily,
  },
  link: {
    textDecoration: 'underline',
    color: colors.blueberry400,
    cursor: 'pointer',
    borderRadius: borderRadius.s,
    display: 'inline-block',
    padding: '0 2px',
    margin: '0 -2px',
    transition: 'color 0.15s,background-color 0.15s',
    '&:hover': {
      color: colors.blueberry500,
      background: colors.soap200,
    },
    '&:focus': {
      boxShadow: `0 0 0 2px ${colors.blueberry400}`,
      outline: 'none',
    },
    '&:active': {
      color: colors.blueberry600,
      background: colors.soap300,
    },
  },
};

export const type: CanvasType = {
  ...hierarchy,
  variant: {
    ...variants,
  },
};
