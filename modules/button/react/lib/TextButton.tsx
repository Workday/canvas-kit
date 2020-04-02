import * as React from 'react';
import {Themeable, CanvasTheme, useTheme, type} from '@workday/canvas-kit-labs-react-core';
import {themedFocusRing} from '@workday/canvas-kit-react-common';
import {colors, spacing, borderRadius} from '@workday/canvas-kit-react-core';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {TextButtonVariant, ButtonIconPosition, ButtonColors} from './types';
import {ButtonContainer, ButtonLabelIcon, ButtonLabel} from './parts';

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Themeable {
  /**
   * The variant of the TextButton.
   * @default TextButtonVariant.Default
   */
  variant?: TextButtonVariant;
  /**
   * The size of the TextButton.
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The position of the TextButton icon. Accepts `Left` or `Right`.
   * @default ButtonIconPosition.Left
   */
  iconPosition?: ButtonIconPosition;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The icon of the TextButton.
   */
  icon?: CanvasSystemIcon;
  /**
   * The capitialization of the text in the button.
   */
  allCaps?: boolean;
}

const getTextButtonColors = (variant: TextButtonVariant, theme: CanvasTheme): ButtonColors => {
  switch (variant) {
    case TextButtonVariant.Default:
    default:
      return {
        default: {
          icon: theme.palette.primary.main,
          label: theme.palette.primary.main,
        },
        hover: {
          icon: theme.palette.primary.dark,
          label: theme.palette.primary.dark,
        },
        active: {
          icon: theme.palette.primary.dark,
          label: theme.palette.primary.dark,
        },
        focus: {
          icon: theme.palette.primary.dark,
          label: theme.palette.primary.dark,
          focusRing: themedFocusRing(theme),
        },
        disabled: {
          icon: theme.palette.primary.light,
          label: theme.palette.primary.light,
        },
      };
    case TextButtonVariant.Inverse:
      return {
        default: {
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        hover: {},
        active: {},
        focus: {
          focusRing: themedFocusRing(theme, {outerColor: 'currentColor'}),
        },
        disabled: {
          icon: 'rgba(255, 255, 255, 0.5)',
          label: 'rgba(255, 255, 255, 0.5)',
        },
      };
  }
};

const containerStyles = {
  borderRadius: borderRadius.m,
  border: '0',
  padding: `0 ${spacing.xxs}`,
  minWidth: 'auto',
  '&:hover:not([disabled])': {textDecoration: 'underline'},
};

const TextButton = ({
  theme = useTheme(),
  variant = TextButtonVariant.Default,
  size = 'medium',
  iconPosition = ButtonIconPosition.Left,
  buttonRef,
  children,
  icon,
  allCaps,
  ...elemProps
}: TextButtonProps) => {
  // Note: We don't use ButtonLabel because the label styles differ from other button types
  const allContainerStyles = allCaps
    ? {
        ...containerStyles,
        ...type.variant.caps,
        ...type.variant.button,
        fontSize: size === 'medium' ? type.body.fontSize : undefined,
        letterSpacing: '.5px',
      }
    : {
        ...containerStyles,
        fontSize: size === 'medium' ? type.body.fontSize : undefined,
      };

  return (
    <ButtonContainer
      colors={getTextButtonColors(variant, theme)}
      ref={buttonRef}
      size={size}
      extraStyles={allContainerStyles}
      {...elemProps}
    >
      {icon && iconPosition === ButtonIconPosition.Left && (
        <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
      )}
      <ButtonLabel>{children}</ButtonLabel>
      {icon && iconPosition === ButtonIconPosition.Right && (
        <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
      )}
    </ButtonContainer>
  );
};

TextButton.IconPosition = ButtonIconPosition;
TextButton.Variant = TextButtonVariant;
TextButton.Size = {
  Small: 'small',
  Medium: 'medium',
} as const;

export default TextButton;
