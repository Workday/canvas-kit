import canvasColors, {typeColors, statusColors} from '@workday/canvas-colors-web';
import {CSSObject} from '@emotion/core';

export const fontFamily = '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif';
export const monoFontFamily = '"Roboto Mono", "Courier New", Courier, monospace';

export interface CanvasTypeHierarchy {
  dataViz1: CSSObject;
  dataViz2: CSSObject;
  h1: CSSObject;
  h2: CSSObject;
  h3: CSSObject;
  h4: CSSObject;
  h5: CSSObject;
  body: CSSObject;
  body2: CSSObject;
  small: CSSObject;
  [key: string]: CSSObject;
}

export interface CanvasTypeVariant {
  label: CSSObject;
  button: CSSObject;
  caps: CSSObject;
  hint: CSSObject;
  error: CSSObject;
  inverse: CSSObject;
  mono: CSSObject;
  link: CSSObject;
  [key: string]: CSSObject;
}

export interface CanvasType extends CanvasTypeHierarchy {
  variant: CanvasTypeVariant;
  [key: string]: CanvasTypeHierarchy | CSSObject;
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
  hierarchy[key] = {...hierarchy[key], fontFamily};
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
    textDecoration: 'none',
    color: typeColors.link,
    cursor: 'pointer',
    '&:hover, &:active': {
      textDecoration: 'underline',
      color: typeColors.link,
    },
    '&:focus': {
      background: canvasColors.blueberry100,
      textDecoration: 'underline',
      outline: `2px solid ${canvasColors.blueberry100}`,
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
