import {typeColors} from '@workday/canvas-colors-web';
import {type, CanvasTypeVariant, fontFamily} from '@workday/canvas-kit-react-core';
import {CSSObject} from '@emotion/core';

export interface CanvasTypeHierarchy {
  brand1: CSSObject;
  brand2: CSSObject;
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

const hierarchy: CanvasTypeHierarchy = {
  brand1: {
    fontSize: 56,
    lineHeight: 1.3,
    fontWeight: 700,
    color: typeColors.heading,
  },
  brand2: {
    fontSize: 48,
    lineHeight: 1.3,
    fontWeight: 700,
    color: typeColors.heading,
  },
  h1: {
    fontSize: 40,
    lineHeight: 1.3,
    fontWeight: 500,
    color: typeColors.heading,
  },
  h2: {
    fontSize: 32,
    lineHeight: 1.3,
    fontWeight: 700,
    color: typeColors.heading,
  },
  h3: {
    fontSize: 24,
    lineHeight: 1.3,
    fontWeight: 700,
    color: typeColors.heading,
  },
  h4: {
    fontSize: 20,
    lineHeight: 1.3,
    fontWeight: 700,
    color: typeColors.heading,
  },
  h5: {
    fontSize: 20,
    lineHeight: 1.3,
    fontWeight: 400,
    color: typeColors.heading,
  },
  body: {
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 400,
    color: typeColors.body,
  },
  body2: {
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: 400,
    color: typeColors.body,
  },
  small: {
    fontSize: 13,
    lineHeight: 1.5,
    fontWeight: 400,
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
