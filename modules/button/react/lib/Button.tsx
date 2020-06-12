import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
} from '@workday/canvas-kit-react-common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {
  ButtonVariant,
  ButtonColors,
  DropdownButtonVariant,
  ButtonSize,
  ButtonOrAnchorComponent,
} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelData, ButtonLabelIcon} from './parts';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Themeable,
    GrowthBehavior {
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
  /**
   * The alternative container type for the button. Uses Emotion's special `as` prop.
   * Will render an `a` tag instead of a `button` when defined.
   */
  as?: 'a';
}

const Button: ButtonOrAnchorComponent<ButtonProps, typeof ButtonVariant> = ({
  theme = useTheme(),
  variant = ButtonVariant.Secondary,
  size = 'medium',
  buttonRef,
  dataLabel,
  icon,
  children,
  ...elemProps
}: ButtonProps) => (
  <ButtonContainer
    colors={getButtonColors(variant, theme)}
    size={size}
    ref={buttonRef}
    {...elemProps}
  >
    {icon && size !== 'small' && <ButtonLabelIcon size={size} icon={icon} />}
    <ButtonLabel>{children}</ButtonLabel>
    {dataLabel && size !== 'small' && <ButtonLabelData>{dataLabel}</ButtonLabelData>}
  </ButtonContainer>
);

Button.Variant = ButtonVariant;
Button.Size = ButtonSize;

export default Button;

export const getButtonColors = (
  variant: ButtonVariant | DropdownButtonVariant,
  {
    canvas: {
      palette: {primary: themePrimary},
    },
  }: EmotionCanvasTheme
): ButtonColors => {
  switch (variant) {
    case ButtonVariant.Primary:
    case DropdownButtonVariant.Primary:
      return {
        default: {
          background: themePrimary.main,
          icon: themePrimary.contrast,
          label: themePrimary.contrast,
        },
        hover: {
          background: themePrimary.dark,
        },
        active: {
          background: themePrimary.darkest,
        },
        focus: {
          background: themePrimary.main,
        },
        disabled: {
          background: themePrimary.light,
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
