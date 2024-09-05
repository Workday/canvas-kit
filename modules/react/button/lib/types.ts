import {CSSObject} from '@emotion/styled';

/**
 * The object used for passing in colors to the ButtonContainer
 */
export interface ButtonStateColors {
  background?: string;
  border?: string;
  icon?: string;
  iconFill?: boolean;
  label?: string;
  opacity?: string;
}
export interface ButtonColors {
  default?: ButtonStateColors;
  hover?: ButtonStateColors;
  active?: ButtonStateColors;
  focus?: ButtonStateColors & {
    /**
     * @deprecated `focusRing` within focus, is deprecated and will not work with our current method of styling. This will be removed in a later version. If you want to customize the focus ring, use `boxShadowInner` and `boxShadowOuter` to update the inner and outer colors of the focus ring. Use with caution.
     */
    focusRing?: CSSObject;
    /**
     * Updates the color of the inner `box-shadow` within a focus ring.
     */
    boxShadowInner?: string;
    /**
     * Updates the color of the outer `box-shadow` within a focus ring.
     */
    boxShadowOuter?: string;
  };
  disabled?: ButtonStateColors;
}

/**
 * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
 * If no size is provided, it will default to `medium`.
 *
 * @default 'medium'
 */
export type ButtonSizes = 'extraSmall' | 'small' | 'medium' | 'large';
export type IconPositions = 'start' | 'end' | 'only';
