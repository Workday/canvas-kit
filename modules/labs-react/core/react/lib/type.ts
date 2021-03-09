import {typeColors} from '@workday/canvas-colors-web';
import {CSSProperties, type, CanvasTypeVariant, fontFamily} from '@workday/canvas-kit-react/core';

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
  hierarchy[key] = {
    ...hierarchy[key],
    fontFamily,
  };
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
