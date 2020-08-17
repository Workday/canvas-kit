import styled from '@emotion/styled';
import {typeColors} from '@workday/canvas-colors-web';
import {CSSProperties, fontFamily} from '@workday/canvas-kit-react-core';
import {default as beta_Type} from './type';

export interface CanvasTypeHierarchy {
  level10: CSSProperties;
  level9: CSSProperties;
  level8: CSSProperties;
  level7: CSSProperties;
  level6: CSSProperties;
  level5: CSSProperties;
  level4: CSSProperties;
  level3: CSSProperties;
  level2: CSSProperties;
  level1: CSSProperties;
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
  level10: {
    fontFamily,
    fontSize: rem(48),
    lineHeight: rem(56),
    fontWeight: 700,
    color: typeColors.heading,
  },
  level9: {
    fontFamily,
    fontSize: rem(40),
    lineHeight: rem(48),
    fontWeight: 700,
    color: typeColors.heading,
  },
  level8: {
    fontFamily,
    fontSize: rem(32),
    lineHeight: rem(40),
    fontWeight: 700,
    color: typeColors.heading,
  },
  level7: {
    fontFamily,
    fontSize: rem(24),
    lineHeight: rem(32),
    fontWeight: 700,
    color: typeColors.heading,
  },
  level6: {
    fontFamily,
    fontSize: rem(20),
    lineHeight: rem(28),
    letterSpacing: rem(0.16),
    fontWeight: 700,
    color: typeColors.heading,
  },
  level5: {
    fontFamily,
    fontSize: rem(18),
    lineHeight: rem(28),
    letterSpacing: rem(0.16),
    fontWeight: 700,
    color: typeColors.heading,
  },
  level4: {
    fontFamily,
    fontSize: rem(16),
    lineHeight: rem(24),
    letterSpacing: rem(0.16),
    fontWeight: 400,
    color: typeColors.body,
  },
  level3: {
    fontFamily,
    fontSize: rem(14),
    lineHeight: rem(20),
    letterSpacing: rem(0.24),
    fontWeight: 400,
    color: typeColors.body,
  },
  level2: {
    fontFamily,
    fontSize: rem(12),
    lineHeight: rem(16),
    letterSpacing: rem(0.32),
    fontWeight: 400,
    color: typeColors.body,
  },
  level1: {
    fontFamily,
    fontSize: rem(10),
    lineHeight: rem(16),
    letterSpacing: rem(0.4),
    fontWeight: 400,
    color: typeColors.body,
  },
};

type Variant = keyof typeof beta_Type.variant;
type TextProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  variant?: Variant | Variant[];
  as?: React.ElementType | keyof JSX.IntrinsicElements; // Baked into emotion v11 (https://github.com/emotion-js/emotion/pull/1874)
};
export const Text = styled('span')<TextProps>(
  ({level}) => hierarchy[`level${level}`],
  ({variant}) => {
    if (!variant) {
      return;
    }
    if (typeof variant === 'string') {
      return beta_Type.variant[variant as Variant];
    }
    let css = {};
    (variant as Variant[]).forEach((singleVariant: Variant) => {
      css = {...css, ...beta_Type.variant[singleVariant]};
    });
    return css;
  }
);

export default {
  ...hierarchy,
  variant: beta_Type.variant,
};
