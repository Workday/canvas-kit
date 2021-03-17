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
  dataViz1: CSSProperties;
  dataViz2: CSSProperties;
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
  dataViz1: {
    fontSize: '56px',
    lineHeight: '68px',
    fontWeight: 300,
    color: typeColors.heading,
  },
  dataViz2: {
    fontSize: '34px',
    lineHeight: '40px',
    fontWeight: 300,
    color: typeColors.heading,
  },
  h1: {
    fontSize: '28px',
    lineHeight: '36px',
    fontWeight: 500,
    color: typeColors.heading,
  },
  h2: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 700,
    color: typeColors.heading,
  },
  h3: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 700,
    color: typeColors.heading,
  },
  h4: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 700,
    color: typeColors.heading,
  },
  h5: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    color: typeColors.heading,
  },
  body: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    color: typeColors.body,
  },
  body2: {
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: 400,
    color: typeColors.body,
  },
  small: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
    color: typeColors.body,
  },
};

// Add fontFamily to each level of hierarchy
Object.keys(hierarchy).forEach(key => {
  hierarchy[key] = {
    ...hierarchy[key],
    fontFamily,
  };
});

const variants: CanvasTypeVariant = {
  label: {
    fontWeight: 500,
  },
  button: {
    fontWeight: 500,
  },
  caps: {
    fontWeight: 700,
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

const type: CanvasType = {
  ...hierarchy,
  variant: {
    ...variants,
  },
};

export default type;
