import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonVariant, ButtonColors, DropdownButtonVariant, ButtonSize} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelData, ButtonLabelIcon} from './parts';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, GrowthBehavior {
  /**
   * The variant of the Button.
   * @default ButtonVariant.Secondary
   */
  variant?: ButtonVariant;
  /**
   * The size of the Button.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The data label of the Button.
   * Note: not displayed at `small` size
   */
  dataLabel?: String;
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
}

const Button = ({
  variant = ButtonVariant.Secondary,
  size = 'medium',
  buttonRef,
  dataLabel,
  icon,
  children,
  ...elemProps
}: ButtonProps) => (
  <ButtonContainer colors={getButtonColors(variant)} size={size} ref={buttonRef} {...elemProps}>
    {icon && size !== 'small' && <ButtonLabelIcon size={size} icon={icon} />}
    <ButtonLabel>{children}</ButtonLabel>
    {dataLabel && size !== 'small' && <ButtonLabelData>{dataLabel}</ButtonLabelData>}
  </ButtonContainer>
);

Button.Variant = ButtonVariant;
Button.Size = ButtonSize;

export default Button;

export const getButtonColors = (variant: ButtonVariant | DropdownButtonVariant): ButtonColors => {
  switch (variant) {
    case ButtonVariant.Primary:
    case DropdownButtonVariant.Primary:
      return {
        default: {
          background: colors.blueberry400,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        hover: {
          background: colors.blueberry500,
        },
        active: {
          background: colors.blueberry600,
        },
        focus: {
          background: colors.blueberry400,
        },
        disabled: {
          background: colors.blueberry200,
        },
      };
    case ButtonVariant.Secondary:
    case DropdownButtonVariant.Secondary:
    default:
      return {
        default: {
          background: colors.soap200,
          icon: colors.licorice200,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
        hover: {
          background: colors.soap400,
          icon: colors.licorice500,
        },
        active: {
          background: colors.soap500,
          icon: colors.licorice500,
        },
        focus: {
          background: colors.soap200,
          icon: colors.licorice500,
        },
        disabled: {
          background: colors.soap100,
          icon: colors.soap600,
          label: colors.licorice100,
          labelData: colors.licorice100,
        },
      };
  }
};
