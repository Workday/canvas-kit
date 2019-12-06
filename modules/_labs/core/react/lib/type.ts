import {typeColors} from '@workday/canvas-colors-web';
import {CSSProperties, type, CanvasTypeVariant, fontFamily} from '@workday/canvas-kit-react-core';

export interface CanvasTypeHierarchy {
  title1: CSSProperties;
  title2: CSSProperties;
  title3: CSSProperties;
  title4: CSSProperties;
  title5: CSSProperties;
  title6: CSSProperties;
  body1: CSSProperties;
  body2: CSSProperties;
  body3: CSSProperties;
  small1: CSSProperties;
  small2: CSSProperties;
  small3: CSSProperties;
  [key: string]: CSSProperties;
}

const headingLineHeight = 1.25;
const headingFontWeight = 700;
const bodyLineHeight = 1.5;
const bodyFontWeight = 400;

const hierarchy: CanvasTypeHierarchy = {
  title1: {
    fontSize: 56,
    lineHeight: headingLineHeight,
    fontWeight: headingFontWeight,
    color: typeColors.heading,
  },
  title2: {
    fontSize: 48,
    lineHeight: headingLineHeight,
    fontWeight: headingFontWeight,
    color: typeColors.heading,
  },
  title3: {
    fontSize: 40,
    lineHeight: headingLineHeight,
    fontWeight: headingFontWeight,
    color: typeColors.heading,
  },
  title4: {
    fontSize: 32,
    lineHeight: headingLineHeight,
    fontWeight: headingFontWeight,
    color: typeColors.heading,
  },
  title5: {
    fontSize: 24,
    lineHeight: headingLineHeight,
    fontWeight: headingFontWeight,
    color: typeColors.heading,
  },
  title6: {
    fontSize: 20,
    lineHeight: headingLineHeight,
    fontWeight: headingFontWeight,
    color: typeColors.heading,
  },
  body1: {
    fontSize: 20,
    lineHeight: bodyLineHeight,
    fontWeight: bodyFontWeight,
    color: typeColors.body,
  },
  body2: {
    fontSize: 16,
    lineHeight: bodyLineHeight,
    fontWeight: bodyFontWeight,
    color: typeColors.body,
  },
  body3: {
    fontSize: 14,
    lineHeight: bodyLineHeight,
    fontWeight: bodyFontWeight,
    color: typeColors.body,
  },
  small1: {
    fontSize: 13,
    lineHeight: bodyLineHeight,
    fontWeight: bodyFontWeight,
    color: typeColors.body,
  },
  small2: {
    fontSize: 12,
    lineHeight: bodyLineHeight,
    fontWeight: bodyFontWeight,
    color: typeColors.body,
  },
  small3: {
    fontSize: 10,
    lineHeight: bodyLineHeight,
    fontWeight: bodyFontWeight,
    color: typeColors.body,
  },
};

// Add fontFamily to each level of hierarchy
Object.keys(hierarchy).forEach(key => {
  hierarchy[key] = {...hierarchy[key], fontFamily};
});

const updatedVariants: Pick<CanvasTypeVariant, 'button' | 'caps'> = {
  button: {
    fontWeight: 600,
  },
  caps: {
    fontWeight: 500,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
};

export default {
  ...hierarchy,
  variant: {
    ...type.variant,
    ...updatedVariants,
  },
};
