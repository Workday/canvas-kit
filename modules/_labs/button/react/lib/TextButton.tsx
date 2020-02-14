import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {
  TextButtonVariant,
  ButtonSize,
  ButtonIconPosition,
  IconButtonVariant,
  ButtonColorCollection,
} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelIcon} from './parts';

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

export const textButtonColors: ButtonColorCollection = {
  [TextButtonVariant.Default]: {
    default: {
      background: 'transparent',
      border: 'transparent',
      icon: colors.blueberry400,
      label: colors.blueberry400,
    },
    hover: {
      border: 'transparent',
      icon: colors.blueberry500,
      label: colors.blueberry500,
    },
    active: {
      background: 'transparent',
      border: 'transparent',
      icon: colors.blueberry500,
      label: colors.blueberry500,
    },
    focus: {
      background: 'transparent',
      icon: colors.blueberry400,
      label: colors.blueberry400,
    },
    disabled: {
      background: 'transparent',
      border: 'transparent',
      icon: 'rgba(8, 117, 225, 0.5)',
      label: 'rgba(8, 117, 225, 0.5)',
    },
  },
  [TextButtonVariant.Inverse]: {
    default: {
      background: 'transparent',
      border: 'transparent',
      icon: colors.frenchVanilla100,
      label: colors.frenchVanilla100,
    },
    hover: {
      border: 'transparent',
      icon: 'currentColor',
    },
    active: {
      background: 'transparent',
      border: 'transparent',
      icon: colors.frenchVanilla100,
      label: colors.frenchVanilla100,
    },
    focus: {
      background: 'transparent',
      icon: colors.frenchVanilla100,
      label: colors.frenchVanilla100,
      // TODO: focusRingInner: 'transparent',
      // TODO: focusRingOuter: colors.frenchVanilla100,
    },
    disabled: {
      background: 'transparent',
      border: 'transparent',
      icon: 'rgba(255, 255, 255, 0.5)',
      label: 'rgba(255, 255, 255, 0.5)',
    },
  },
};
textButtonColors[TextButtonVariant.AllCaps] = textButtonColors[TextButtonVariant.Default];
textButtonColors[TextButtonVariant.InverseAllCaps] = textButtonColors[TextButtonVariant.Inverse];

/* TODO: Figure out how to add extra styles:
  {
    fontSize: '13px',
    borderRadius: borderRadius.m,
    border: '0',
    padding: `0 ${canvas.spacing.xxs}px`,
    margin: `0 ${canvas.spacing.xxs}px`,
    minWidth: 'auto',
    '&:hover:not([disabled])': {textDecoration: 'underline'},
  },
  */

const TextButton = (props: TextButtonProps) => {
  const {buttonRef, children, iconPosition, size, variant, icon, ...elemProps} = props;

  return (
    <ButtonContainer colors={textButtonColors[variant]} ref={buttonRef} size={size} {...elemProps}>
      {icon && iconPosition === ButtonIconPosition.Left && (
        <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
      )}
      <ButtonLabel size={size} variant={variant}>
        {children}
      </ButtonLabel>
      {icon && iconPosition === ButtonIconPosition.Right && (
        <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
      )}
    </ButtonContainer>
  );
};

TextButton.IconPosition = ButtonIconPosition;
TextButton.Variant = IconButtonVariant;
TextButton.Size = {
  Small: ButtonSize.Small,
  Large: ButtonSize.Medium,
};

TextButton.defaultProps = {
  iconPosition: ButtonIconPosition.Left,
  variant: TextButtonVariant.Default,
  size: ButtonSize.Medium,
};

export default TextButton;
