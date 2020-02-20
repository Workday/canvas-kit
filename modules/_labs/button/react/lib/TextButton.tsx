import * as React from 'react';
import {type} from '@workday/canvas-kit-labs-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, spacing, borderRadius} from '@workday/canvas-kit-react-core';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {TextButtonVariant, ButtonSize, ButtonIconPosition, ButtonColorCollection} from './types';
import {ButtonContainer, ButtonLabelIcon, ButtonLabel} from './parts';

export interface TextButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the TextButton.
   * @default TextButtonVariant.Default
   */
  variant: TextButtonVariant;
  /**
   * The size of the TextButton.
   * @default ButtonSize.Medium
   */
  size: ButtonSize.Small | ButtonSize.Medium;
  /**
   * The position of the TextButton icon. Accepts `Left` or `Right`.
   * @default IconPosition.Left
   */
  iconPosition: ButtonIconPosition;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The icon of the TextButton.
   */
  icon?: CanvasSystemIcon;
}

const textButtonColors: ButtonColorCollection = {
  [TextButtonVariant.Default]: {
    default: {
      icon: colors.blueberry400,
      label: colors.blueberry400,
    },
    hover: {
      icon: colors.blueberry500,
      label: colors.blueberry500,
    },
    active: {
      icon: colors.blueberry500,
      label: colors.blueberry500,
    },
    focus: {
      icon: colors.blueberry500,
      label: colors.blueberry500,
      focusRing: focusRing(2, 0),
    },
    disabled: {
      icon: 'rgba(8, 117, 225, 0.5)',
      label: 'rgba(8, 117, 225, 0.5)',
    },
  },
  [TextButtonVariant.Inverse]: {
    default: {
      icon: colors.frenchVanilla100,
      label: colors.frenchVanilla100,
    },
    hover: {},
    active: {},
    focus: {
      focusRing: focusRing(2, 0, true, false, undefined, 'currentColor'),
    },
    disabled: {
      icon: 'rgba(255, 255, 255, 0.5)',
      label: 'rgba(255, 255, 255, 0.5)',
    },
  },
};
textButtonColors[TextButtonVariant.AllCaps] = textButtonColors[TextButtonVariant.Default];
textButtonColors[TextButtonVariant.InverseAllCaps] = textButtonColors[TextButtonVariant.Inverse];

const containerStyles = {
  borderRadius: borderRadius.m,
  border: '0',
  padding: `0 ${spacing.xxs}`,
  minWidth: 'auto',
  '&:hover:not([disabled])': {textDecoration: 'underline'},
};

const TextButton = (props: TextButtonProps) => {
  const {
    variant = TextButtonVariant.Default,
    size = ButtonSize.Medium,
    iconPosition = ButtonIconPosition.Left,
    buttonRef,
    children,
    icon,
    ...elemProps
  } = props;

  // Note: We don't use ButtonLabel because they label styles differ from other button types
  const allContainerStyles =
    variant === TextButtonVariant.AllCaps || variant === TextButtonVariant.InverseAllCaps
      ? {
          ...containerStyles,
          ...type.variant.caps,
          ...type.variant.button,
          fontSize: size === ButtonSize.Medium ? type.body.fontSize : undefined,
          letterSpacing: '.5px',
        }
      : {
          ...containerStyles,
          fontSize: size === ButtonSize.Medium ? type.body.fontSize : undefined,
        };

  return (
    <ButtonContainer
      colors={textButtonColors[variant]}
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
  Small: ButtonSize.Small,
  Medium: ButtonSize.Medium,
};

export default TextButton;
