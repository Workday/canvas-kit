import {
  Globals,
  FontSizeProperty,
  FontWeightProperty,
  TextAlignProperty,
  TextDecorationProperty,
  TextTransformProperty,
  TextShadowProperty,
  ColorProperty,
  LineHeightProperty,
  LetterSpacingProperty,
  WhiteSpaceProperty,
  WordBreakProperty,
} from 'csstype';
import React from 'react';
import {CanvasTypeVariants, colors} from '@workday/canvas-kit-react/tokens';
import {FontFamiliesKeys, FontSizesKeys, FontWeightsKeys} from './fontStyles';

export interface FontStyles {
  fontFamily?: string | FontFamiliesKeys | Globals;
  fontSize?: FontSizeProperty<FontSizesKeys | Globals>;
  fontWeight?: FontWeightProperty | FontWeightsKeys;
}

export interface TextStyles {
  textAlign?: TextAlignProperty;
  textDecoration?: TextDecorationProperty<string>;
  textTransform?: TextTransformProperty;
  textShadow?: TextShadowProperty;
}

export interface LineStyles {
  lineHeight?: LineHeightProperty<string>;
  letterSpacing?: LetterSpacingProperty<string>;
  whiteSpace?: WhiteSpaceProperty;
  wordBreak?: WordBreakProperty;
}

export interface ColorStyle {
  color?: ColorProperty & keyof typeof colors;
}

export type TextProps = FontStyles &
  TextStyles &
  LineStyles &
  ColorStyle & {
    children: React.ReactElement | string;
    isTruncated?: boolean;
    variant?: keyof CanvasTypeVariants;
  };

export interface TypeProps extends Pick<TextProps, 'children' | 'variant'> {
  size: 'large' | 'medium' | 'small';
}
