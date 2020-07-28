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

const broswerDefaultFontSize = 16;
/**
 * Converts px values into base 16 rems
 */
const rem = (pxValue: number) => {
  return `${pxValue / broswerDefaultFontSize}rem`;
};

/**
 * The following rem values are based on an `html` element font size of 62.5%.
 * This takes the browser default (16px) and converts it into base 10 at the default size.
 * For example, 1.6rem == 16px.
 */

const hierarchy: CanvasTypeHierarchy = {
  brand: {
    fontFamily,
    fontSize: rem(48),
    lineHeight: rem(56),
    fontWeight: 700,
    color: typeColors.heading,
  },
  h1: {
    fontFamily,
    fontSize: rem(40),
    lineHeight: rem(48),
    fontWeight: 700,
    color: typeColors.heading,
  },
  h2: {
    fontFamily,
    fontSize: rem(32),
    lineHeight: rem(40),
    fontWeight: 700,
    color: typeColors.heading,
  },
  h3: {
    fontFamily,
    fontSize: rem(24),
    lineHeight: rem(32),
    fontWeight: 700,
    color: typeColors.heading,
  },
  h4: {
    fontFamily,
    fontSize: rem(20),
    lineHeight: rem(28),
    letterSpacing: rem(0.16),
    fontWeight: 700,
    color: typeColors.heading,
  },
  h5: {
    fontFamily,
    fontSize: rem(18),
    lineHeight: rem(28),
    letterSpacing: rem(0.16),
    fontWeight: 700,
    color: typeColors.heading,
  },
  body: {
    fontFamily,
    fontSize: rem(16),
    lineHeight: rem(24),
    letterSpacing: rem(0.16),
    fontWeight: 400,
    color: typeColors.body,
  },
  body2: {
    fontFamily,
    fontSize: rem(14),
    lineHeight: rem(20),
    letterSpacing: rem(0.24),
    fontWeight: 400,
    color: typeColors.body,
  },
  small: {
    fontFamily,
    fontSize: rem(12),
    lineHeight: rem(16),
    letterSpacing: rem(0.32),
    fontWeight: 400,
    color: typeColors.body,
  },
  small2: {
    fontFamily,
    fontSize: rem(10),
    lineHeight: rem(16),
    letterSpacing: rem(0.4),
    fontWeight: 400,
    color: typeColors.body,
  },
};

export default {
  ...hierarchy,
  variant: beta_Type.variant,
};
