import * as React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import {CSSObject} from '@emotion/core';
import {styled, type} from '@workday/canvas-kit-labs-react-core';
import canvas, {borderRadius, spacing, spacingNumbers} from '@workday/canvas-kit-react-core';
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
  /**
   * Whether the icon should received filled (colored background layer) or regular styles.
   * Corresponds to `toggled` in IconButton
   */
  fillIcon?: boolean;
  /**
   * Any extra styles necessary for a given parent component.
   * This avoids using the inline `style` attribute when the shape needs to be customized (e.g. for IconButton)
   */
  extraStyles?: CSSObject;
}

function getIconColorSelectors(color: string, fill?: boolean): CSSObject {
  return {
    '&:focus span, &:hover span, & span': {
      '.wd-icon-fill': {
        fill: color,
      },
      '.wd-icon-background': {
        fill: fill ? color : undefined,
      },
      '.wd-icon-accent, .wd-icon-accent2': {
        fill: fill
          ? color === canvas.colors.frenchVanilla100
            ? canvas.colors.blueberry400
            : canvas.colors.frenchVanilla100
          : color,
      },
    },
  };
}

export const ButtonContainer = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonContainerProps>(
  {
    ...type.body2,
    ...type.variant.button,
    lineHeight: 'normal',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    borderRadius: borderRadius.circle,
    boxShadow: 'none',
    position: 'relative',
    cursor: 'pointer',
    outline: 'none',
    verticalAlign: 'middle',
    border: '2px solid transparent',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    transition:
      'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
    '&:hover:active': {transitionDuration: '40ms'}, // Makes the "down" state of the button happens faster than the hover state, so it animates in correctly.
    '&:disabled, &:disabled:active': {cursor: 'default', boxShadow: 'none'},
    '& > *:first-child': {
      paddingLeft: 0,
    },
    '& > *:last-child': {
      paddingRight: 0,
    },
  },
  ({size}) => {
    switch (size) {
      case ButtonSize.Large:
        return {
          fontSize: type.body.fontSize,
          minWidth: '112px',
          height: '48px',
          padding: `0 ${spacing.l}`,
          '& > * ': {
            padding: `0 ${spacingNumbers.xs / 2}px`,
          },
        };
      case ButtonSize.Medium:
      default:
        return {
          minWidth: '96px',
          height: spacing.xl,
          padding: `0 ${spacing.m}`,
          '& > * ': {
            padding: `0 ${spacingNumbers.xxs / 2}px`,
          },
        };
      case ButtonSize.Small:
        return {
          minWidth: '80px',
          height: spacing.l,
          padding: `0 ${spacing.s}`,
          '& > * ': {
            padding: `0 ${spacingNumbers.xxxs / 2}px`,
          },
        };
    }
  },
  ({grow}) => grow && {width: '100%', maxWidth: '100%'},
  ({colors, fillIcon}) => {
    if (!colors) {
      return;
    }
    const baseStyles = {
      backgroundColor: colors.default.background,
      borderColor: colors.default.border,
      color: colors.default.label,
      ...(colors.default.icon && {
        '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2, .wd-icon-background': {
          transition: 'fill 120ms ease-in',
        },
        ...getIconColorSelectors(colors.default.icon, fillIcon),
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
        ...(colors.hover.icon && getIconColorSelectors(colors.hover.icon, fillIcon)),
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
        ...(colors.active.icon && getIconColorSelectors(colors.active.icon, fillIcon)),
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
        ...(colors.focus.icon && getIconColorSelectors(colors.focus.icon, fillIcon)),
      },

      ...activeStyles,
      ...hoverStyles,
      ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
        backgroundColor: colors.disabled.background,
        borderColor: colors.disabled.border,
        color: colors.disabled.label,
        ...(colors.disabled.icon && getIconColorSelectors(colors.disabled.icon, fillIcon)),
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
  },
  ({extraStyles}) => extraStyles
);
