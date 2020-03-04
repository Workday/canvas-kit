import * as React from 'react';
import canvas, {borderRadius} from '@workday/canvas-kit-react-core';
import {focusRing, mouseFocusBehavior, GrowthBehavior} from '@workday/canvas-kit-react-common';
import {DeprecatedButtonVariant} from './types';
import styled from '@emotion/styled';

export interface DeprecatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    GrowthBehavior {
  /**
   * The variant of the Button.
   * @default DeprecatedButtonVariant.Secondary
   */
  variant?: DeprecatedButtonVariant;
  /**
   * The size of the Button.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

const Container = styled('button')<DeprecatedButtonProps>(
  {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    borderRadius: borderRadius.circle,
    border: '1px solid transparent',
    boxShadow: 'none',
    position: 'relative',
    cursor: 'pointer',
    outline: 'none',
    transition:
      'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
    '&:hover:active': {transitionDuration: '40ms'}, // Makes the "down" state of the button happens faster than the hover state, so it animates in correctly.
    '&:disabled, &:disabled:active': {cursor: 'default', boxShadow: 'none'},
  },
  ({size}) => {
    switch (size) {
      case 'large':
        return {
          height: '40px',
          padding: `0 ${canvas.spacing.l}`,
          minWidth: '112px',
          maxWidth: '288px',
          fontSize: '14px',
          fontWeight: 500,
        };
      case 'medium':
      default:
        return {
          height: '24px',
          padding: `0 ${canvas.spacing.m}`,
          minWidth: '80px',
          maxWidth: '200px',
          fontSize: '13px',
          fontWeight: 500,
        };
      case 'small':
        return {
          height: '18px',
          padding: `0 ${canvas.spacing.xxs}`,
          minWidth: '56px',
          maxWidth: '120px',
          fontSize: '10px',
          fontWeight: 500,
        };
    }
  },
  ({variant}) => {
    let buttonColors;
    switch (variant) {
      case DeprecatedButtonVariant.Primary:
        buttonColors = canvas.buttonColors.primary;
        break;
      case DeprecatedButtonVariant.Secondary:
      default:
        buttonColors = canvas.buttonColors.secondary;
        break;
      case DeprecatedButtonVariant.Delete:
        buttonColors = {
          ...canvas.buttonColors.delete,
          focusBorder: canvas.colors.cinnamon500,
          activeBorder: canvas.colors.cinnamon500,
        };
        break;
    }

    if (!buttonColors) {
      return {};
    }

    const baseStyles = {
      backgroundColor: buttonColors.background,
      borderColor: buttonColors.border,
      color: buttonColors.text,
    };

    const hoverStyles = {
      ':hover': {
        backgroundColor: buttonColors.hoverBackground,
        borderColor: buttonColors.hoverBorder,
        color: buttonColors.hoverText,
      },
    };

    const activeStyles = {
      ':active, :focus:active, :hover:active': {
        backgroundColor: buttonColors.activeBackground,
        borderColor: buttonColors.activeBorder,
        color: buttonColors.activeText,
      },
    };

    return {
      ...baseStyles,
      ':focus': {
        backgroundColor: buttonColors.focusBackground,
        borderColor: buttonColors.focusBorder,
        color: buttonColors.focusText,
      },

      ...activeStyles,
      ...hoverStyles,
      ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
        backgroundColor: buttonColors.disabledBackground,
        borderColor: buttonColors.disabledBorder,
        color: buttonColors.disabledText,
      },
      '&:not([disabled])': {
        '&:focus': {
          borderColor: buttonColors.focusBorder,
          ...focusRing(2, 0),
        },
        '&:active': {
          borderColor: buttonColors.activeBorder,
          ...focusRing(2, 0),
        },
      },
      ...mouseFocusBehavior({
        '&:focus': {
          ...baseStyles,
          outline: 'none',
          boxShadow: 'none',
          animation: 'none',
          ...hoverStyles,
          ...activeStyles,
        },
      }),
    };
  }
);

const DeprecatedButton = ({
  variant = DeprecatedButtonVariant.Secondary,
  size = 'medium',
  buttonRef,
  children,
  ...elemProps
}: DeprecatedButtonProps) => {
  React.useEffect(() => {
    console.warn('This component is now deprecated, consider using the new Button component');
  }, []);

  return (
    <Container variant={variant} size={size} ref={buttonRef} {...elemProps}>
      {children}
    </Container>
  );
};

DeprecatedButton.Variant = DeprecatedButtonVariant;
DeprecatedButton.Size = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
} as const;

export default DeprecatedButton;
