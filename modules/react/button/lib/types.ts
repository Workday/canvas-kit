import {CSSObject} from '@emotion/core';

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
