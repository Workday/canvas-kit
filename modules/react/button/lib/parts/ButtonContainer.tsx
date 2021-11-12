import * as React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import {CSSObject} from '@emotion/core';
import {borderRadius, space, spaceNumbers, type} from '@workday/canvas-kit-react/tokens';
import {
  GrowthBehavior,
  mouseFocusBehavior,
  focusRing,
  styled,
  EmotionCanvasTheme,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {ButtonColors, ButtonSizes} from '../types';
import {buttonLabelDataClassName} from './ButtonLabelData';

export interface ButtonContainerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    GrowthBehavior {
  colors?: ButtonColors;
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * The ref to the button that the styled component renders.
   */
  ref?: React.Ref<HTMLButtonElement>;
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

function getIconColorSelectors(
  {
    canvas: {
      palette: {primary: themePrimary},
    },
  }: EmotionCanvasTheme,
  color: string,
  fill?: boolean
): CSSObject {
  return {
    '&:focus span, &:hover span, & span': {
      '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
        fill: color,
      },
      '.wd-icon-background': {
        fill: fill ? color : undefined,
      },
      '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
        fill: fill
          ? color === themePrimary.contrast
            ? themePrimary.main
            : themePrimary.contrast
          : color,
      },
    },
  };
}

export const ButtonContainer = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonContainerProps & StyledType>(
  {
    ...type.levels.subtext.large,
    fontWeight: type.properties.fontWeights.bold,
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
    border: '1px solid transparent',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',

    transition:
      'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',

    // Makes the "down" state of the button happens faster than the hover state, so it animates in correctly.
    '&:hover:active': {transitionDuration: '40ms'},

    '&:disabled, &:disabled:active': {cursor: 'default', boxShadow: 'none'},

    '& > *:first-of-type': {
      marginLeft: 0,
    },

    '& > *:last-of-type': {
      marginRight: 0,
    },
  },
  ({size}) => {
    switch (size) {
      case 'large':
        return {
          ...type.levels.body.small,
          fontWeight: type.properties.fontWeights.bold,
          minWidth: '112px',
          height: '48px',
          padding: `0 ${space.l}`,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxs / 2}px`,
          },
        };
      case 'medium':
      default:
        return {
          minWidth: '96px',
          height: space.xl,
          padding: `0 ${space.m}`,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxs / 2}px`,
          },
        };
      case 'small':
        return {
          minWidth: '80px',
          height: space.l,
          padding: `0 ${space.s}`,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxxs / 2}px`,
          },
        };
      case 'extraSmall':
        return {
          ...type.levels.subtext.medium,
          fontWeight: type.properties.fontWeights.bold,
          height: space.m,
          padding: `0 ${space.xs}`,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxxs / 2}px`,
          },
        };
    }
  },
  ({grow}) => grow && {width: '100%', maxWidth: '100%'},
  ({colors, fillIcon, theme}) => {
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
        ...getIconColorSelectors(theme, colors.default.icon, fillIcon),
      }),
      ...(colors.default.labelData && {
        ['.' + buttonLabelDataClassName]: {
          color: colors.default.labelData,
        },
      }),
    };

    const hoverStyles = {
      '&:hover': {
        backgroundColor: colors.hover.background,
        borderColor: colors.hover.border,
        color: colors.hover.label,
        ...(colors.hover.labelData && {
          ['.' + buttonLabelDataClassName]: {
            transition: 'color 120ms ease-in',
            color: colors.hover.labelData,
          },
        }),
        ...(colors.hover.icon && getIconColorSelectors(theme, colors.hover.icon, fillIcon)),
      },
    };

    const activeStyles = {
      '&:active, &:focus:active, &:hover:active': {
        backgroundColor: colors.active.background,
        borderColor: colors.active.border,
        color: colors.active.label,
        ...(colors.active.labelData && {
          ['.' + buttonLabelDataClassName]: {
            color: colors.active.labelData,
          },
        }),
        ...(colors.active.icon && getIconColorSelectors(theme, colors.active.icon, fillIcon)),
      },
    };

    return {
      ...baseStyles,
      '&:focus': {
        backgroundColor: colors.focus.background,
        borderColor: colors.focus.border,
        color: colors.focus.label,
        ...(colors.focus.focusRing || focusRing({separation: 2}, theme)),
        ...(colors.focus.labelData && {
          ['.' + buttonLabelDataClassName]: {
            color: colors.focus.labelData,
          },
        }),
        ...(colors.focus.icon && getIconColorSelectors(theme, colors.focus.icon, fillIcon)),
      },

      ...activeStyles,
      ...hoverStyles,
      '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
        backgroundColor: colors.disabled.background,
        borderColor: colors.disabled.border,
        color: colors.disabled.label,
        ...(colors.disabled.icon && getIconColorSelectors(theme, colors.disabled.icon, fillIcon)),
        ...(colors.disabled.labelData && {
          ['.' + buttonLabelDataClassName]: {
            color: colors.disabled.labelData,
          },
        }),
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
