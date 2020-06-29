import {typeColors} from '@workday/canvas-colors-web';
import {CSSProperties, fontFamily} from '@workday/canvas-kit-react-core';
import {default as beta_Type} from './type';

export interface CanvasTypeHierarchy {
  brand: CSSProperties;
  h1: CSSProperties;
  h2: CSSProperties;
  h3: CSSProperties;
  h4: CSSProperties;
  h5: CSSProperties;
  body: CSSProperties;
  body2: CSSProperties;
  small: CSSProperties;
  small2: CSSProperties;
  [key: string]: CSSProperties;
}

/**
 * The following rem values are based on an `html` element font size of 62.5%.
 * This takes the browser default (16px) and converts it into base 10 at the default size.
 * For example, 1.6rem == 16px.
 */

const hierarchy: CanvasTypeHierarchy = {
  brand: {
    fontFamily,
    fontSize: '4.8rem',
    lineHeight: '5.6rem',
    fontWeight: 700,
    color: typeColors.heading,
  },
  h1: {
    fontFamily,
    fontSize: '4.0rem',
    lineHeight: '4.8rem',
    fontWeight: 700,
    color: typeColors.heading,
  },
  h2: {
    fontFamily,
    fontSize: '3.2rem',
    lineHeight: '4.0rem',
    fontWeight: 700,
    color: typeColors.heading,
  },
  h3: {
    fontFamily,
    fontSize: '2.4rem',
    lineHeight: '3.2rem',
    fontWeight: 700,
    color: typeColors.heading,
  },
  h4: {
    fontFamily,
    fontSize: '2.0rem',
    lineHeight: '2.8rem',
    letterSpacing: '0.016rem',
    fontWeight: 700,
    color: typeColors.heading,
  },
  h5: {
    fontFamily,
    fontSize: '1.8rem',
    lineHeight: '2.8rem',
    letterSpacing: '0.016rem',
    fontWeight: 700,
    color: typeColors.heading,
  },
  body: {
    fontFamily,
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    letterSpacing: '0.016rem',
    fontWeight: 400,
    color: typeColors.body,
  },
  body2: {
    fontFamily,
    fontSize: '1.4rem',
    lineHeight: '2.0rem',
    letterSpacing: '0.024rem',
    fontWeight: 400,
    color: typeColors.body,
  },
  small: {
    fontFamily,
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.032rem',
    fontWeight: 400,
    color: typeColors.body,
  },
  small2: {
    fontFamily,
    fontSize: '1rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.04rem',
    fontWeight: 400,
    color: typeColors.body,
  },
};

export default {
  ...hierarchy,
  variant: beta_Type.variant,
};
