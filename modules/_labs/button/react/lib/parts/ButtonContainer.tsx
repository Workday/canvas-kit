import * as React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import {styled} from '@workday/canvas-kit-labs-react-core';
import canvas, {borderRadius} from '@workday/canvas-kit-react-core';
import {GrowthBehavior, focusRing, mouseFocusBehavior} from '@workday/canvas-kit-react-common';
import {ButtonSize, ButtonColors} from '../types';
import {buttonLabelDataClassName} from './ButtonLabelData';

export interface ButtonContainerProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    GrowthBehavior {
  colors?: ButtonColors;
  /**
   * The size of the Button.
   * @default ButtonSize.Medium
   */
  size: ButtonSize;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

export const ButtonContainer = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonContainerProps>(
  {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.circle,
    boxShadow: 'none',
    position: 'relative',
    cursor: 'pointer',
    outline: 'none',
    verticalAlign: 'middle',
    border: '2px solid transparent',
    fontSize: '14px',
    transition:
      'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
    '&:hover:active': {transitionDuration: '40ms'}, // Makes the "down" state of the button happens faster than the hover state, so it animates in correctly.
    '&:disabled, &:disabled:active': {cursor: 'default', boxShadow: 'none'},
  },
  ({size}) => {
    switch (size) {
      case ButtonSize.Large:
        return {
          minWidth: '112px',
          height: '48px',
          padding: '0 20px',
        };
      case ButtonSize.Medium:
      default:
        return {
          minWidth: '96px',
          height: canvas.spacing.xl,
          padding: '0 16px',
        };
      case ButtonSize.Small:
        return {
          minWidth: '80px',
          height: canvas.spacing.l,
          padding: '0 16px',
        };
    }
  },
  ({grow}) => grow && {width: '100%', maxWidth: '100%'},
  ({colors}) => {
    if (!colors) {
      return;
    }
    const baseStyles = {
      backgroundColor: colors.default.background,
      borderColor: colors.default.border,
      color: colors.default.label,
      ...(colors.default.icon && {
        'span .wd-icon-fill, span .wd-icon-accent': {
          transition: 'fill 120ms ease-in',
          fill: colors.default.icon,
        },
      }),
      ...(colors.default.labelData && {
        ['.' + buttonLabelDataClassName]: {
          color: colors.default.labelData,
        },
      }),
    };

    const hoverStyles = {
      ':hover': {
        backgroundColor: colors.hover.background,
        borderColor: colors.hover.border,
        color: colors.hover.label,
        ...(colors.hover.labelData && {
          ['.' + buttonLabelDataClassName]: {
            transition: 'color 120ms ease-in',
            color: colors.hover.labelData,
          },
        }),
        ...(colors.hover.icon && {
          'span .wd-icon-fill, span .wd-icon-accent': {
            fill: colors.hover.icon,
          },
        }),
      },
    };

    const activeStyles = {
      ':active, :focus:active, :hover:active': {
        backgroundColor: colors.active.background,
        borderColor: colors.active.border,
        color: colors.active.label,
        ...(colors.active.labelData && {
          ['.' + buttonLabelDataClassName]: {
            color: colors.active.labelData,
          },
        }),
        ...(colors.active.icon && {
          'span .wd-icon-fill, span .wd-icon-accent': {
            fill: colors.active.icon,
          },
        }),
      },
    };

    return {
      ...baseStyles,
      ':focus': {
        backgroundColor: colors.focus.background,
        borderColor: colors.focus.border,
        color: colors.focus.label,
        ...(colors.focus.labelData && {
          ['.' + buttonLabelDataClassName]: {
            color: colors.focus.labelData,
          },
        }),
        ...(colors.focus.icon && {
          'span .wd-icon-fill, span .wd-icon-accent': {
            fill: colors.focus.icon,
          },
        }),
      },

      ...activeStyles,
      ...hoverStyles,
      ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
        backgroundColor: colors.disabled.background,
        borderColor: colors.disabled.border,
        color: colors.disabled.label,
        ...(colors.disabled.icon && {
          'span .wd-icon-fill, span .wd-icon-accent': {
            fill: colors.disabled.icon,
          },
        }),
        ...(colors.disabled.labelData && {
          ['.' + buttonLabelDataClassName]: {
            color: colors.disabled.labelData,
          },
        }),
      },
      '&:not([disabled])': {
        '&:focus': {
          borderColor: colors.focus.border,
          // TODO ...getButtonFocusRing(colors),
          ...focusRing(2, 0),
        },
        '&:active': {
          borderColor: colors.active.border,
          // TODO ...getButtonFocusRing(colors),
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
