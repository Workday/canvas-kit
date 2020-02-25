import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {focusRing, GrowthBehavior} from '@workday/canvas-kit-react-common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonVariant, ButtonSize, ButtonColors, DropdownButtonVariant} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelData, ButtonLabelIcon} from './parts';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, GrowthBehavior {
  /**
   * The variant of the Button.
   * @default ButtonVariant.Secondary
   */
  variant: ButtonVariant;
  /**
   * The size of the Button.
   * @default ButtonSize.Medium
   */
  size: ButtonSize;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The data label of the Button.
   */
  dataLabel?: String;
  /**
   * The icon of the Button.
   */
  icon?: CanvasSystemIcon;
}

const Button = (props: ButtonProps) => {
  const {variant, size, buttonRef, dataLabel, icon, children, ...elemProps} = props;

  return (
    // eslint-disable-next-line no-use-before-define
    <ButtonContainer colors={getButtonColors(variant)} size={size} ref={buttonRef} {...elemProps}>
      {icon && <ButtonLabelIcon size={size} icon={icon} />}
      <ButtonLabel>{children}</ButtonLabel>
      {dataLabel && <ButtonLabelData>{dataLabel}</ButtonLabelData>}
    </ButtonContainer>
  );
};

Button.Variant = ButtonVariant;
Button.Size = ButtonSize;

Button.defaultProps = {
  variant: ButtonVariant.Secondary,
  size: ButtonSize.Medium,
};

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
    case ButtonVariant.OutlinePrimary:
      return {
        default: {
          border: colors.blueberry400,
          icon: colors.blueberry400,
          label: colors.blueberry400,
        },
        hover: {
          background: colors.blueberry400,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        active: {
          background: colors.blueberry500,
          border: colors.blueberry500,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        focus: {
          background: colors.blueberry400,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        disabled: {
          background: colors.frenchVanilla100,
          border: colors.soap500,
          icon: colors.soap600,
          label: colors.licorice100,
        },
      };
    case ButtonVariant.OutlineSecondary:
      return {
        default: {
          border: colors.soap500,
          icon: colors.licorice200,
          label: colors.blackPepper400,
        },
        hover: {
          background: colors.licorice500,
          border: colors.licorice500,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        active: {
          background: colors.licorice600,
          border: colors.licorice600,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        focus: {
          background: colors.licorice500,
          border: colors.licorice500,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        disabled: {
          background: colors.frenchVanilla100,
          border: colors.soap500,
          icon: colors.soap600,
          label: colors.licorice100,
        },
      };
    case ButtonVariant.OutlineInverse:
      return {
        default: {
          border: colors.frenchVanilla100,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        hover: {
          background: colors.frenchVanilla100,
          icon: colors.licorice500,
          label: colors.blackPepper400,
          labelData: colors.licorice300,
        },
        active: {
          background: colors.soap300,
          border: colors.soap300,
          icon: colors.licorice500,
          label: colors.blackPepper400,
          labelData: colors.licorice300,
        },
        focus: {
          background: colors.frenchVanilla100,
          icon: colors.licorice500,
          label: colors.blackPepper400,
          labelData: colors.licorice300,
          focusRing: focusRing(2, 2, true, false, 'currentColor', colors.frenchVanilla100),
        },
        disabled: {
          background: 'transparent',
          border: 'rgba(255, 255, 255, 0.75)',
          icon: 'rgba(255, 255, 255, 0.75)',
          label: 'rgba(255, 255, 255, 0.75)',
          labelData: 'rgba(255, 255, 255, 0.75)',
        },
      };
  }
};
