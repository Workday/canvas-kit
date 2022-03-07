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
  labelData?: string;
}
export interface ButtonColors {
  default: ButtonStateColors;
  hover: ButtonStateColors;
  active: ButtonStateColors;
  focus: ButtonStateColors & {
    focusRing?: CSSObject;
  };
  disabled: ButtonStateColors;
}

/**
 * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
 * If no size is provided, it will default to `medium`.
 *
 * @default 'medium'
 */
export type ButtonSizes = 'extraSmall' | 'small' | 'medium' | 'large';
// TODO: Remove TertiaryButtonSizes in favor of button sizes when we add Tertiary large
export type TertiaryButtonSizes = 'extraSmall' | 'small' | 'medium';
export type IconPositions = 'start' | 'end';
