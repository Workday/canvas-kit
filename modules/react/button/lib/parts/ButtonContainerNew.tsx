import * as React from 'react';
import {borderRadius, space, spaceNumbers, type} from '@workday/canvas-kit-react/tokens';
import {
  GrowthBehavior,
  mouseFocusBehavior,
  focusRing,
  styled,
  EmotionCanvasTheme,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {ButtonColors, ButtonSizes, TertiaryButtonSizes} from '../types';
import {buttonLabelDataClassName} from './ButtonLabelData';
import {ButtonProps} from '../Button';
import {CSSObject} from '@emotion/styled';

export interface ButtonContainerNewProps extends ButtonProps, GrowthBehavior {
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
}

function getIconColorSelectorsNew(
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

export const ButtonContainerNew = styled('button')<StyledType & ButtonContainerNewProps>(
  {
    ...type.levels.subtext.large,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    boxShadow: 'none',
    outline: 'none',
    fontWeight: type.properties.fontWeights.bold,
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    borderRadius: borderRadius.circle,
    position: 'relative',
    verticalAlign: 'middle',
    overflow: 'hidden',
    border: '1px solid transparent',
    background: 'transparent',
    transition:
      'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
    '&:disabled, &:disabled:active': {
      cursor: 'default',
      boxShadow: 'none',
      opacity: 0.4,
    },

    '&:hover:active': {transitionDuration: '40ms'},

    '& > *:first-of-type': {
      marginLeft: '0',
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
          height: '48px',
          '& > * ': {
            margin: `0 ${spaceNumbers.xxs / 2}px`,
          },
        };
      case 'medium':
      default:
        return {
          height: space.xl,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxs / 2}px`,
          },
        };
      case 'small':
        return {
          height: space.l,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxxs / 2}px`,
          },
        };
      case 'extraSmall':
        return {
          ...type.levels.subtext.medium,
          fontWeight: type.properties.fontWeights.bold,
          height: space.m,
          '& > * ': {
            margin: `0 ${spaceNumbers.xxxs / 2}px`,
          },
        };
    }
  },
  ({grow}) => grow && {width: '100%', maxWidth: '100%'},
  ({colors, theme}) => {
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
        ...getIconColorSelectorsNew(theme, colors.default.icon, false),
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
        ...(colors.hover.icon && getIconColorSelectorsNew(theme, colors.hover.icon, false)),
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
        ...(colors.active.icon && getIconColorSelectorsNew(theme, colors.active.icon, false)),
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
        ...(colors.focus.icon && getIconColorSelectorsNew(theme, colors.focus.icon, false)),
      },

      ...activeStyles,
      ...hoverStyles,
      '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
        backgroundColor: colors.disabled.background,
        borderColor: colors.disabled.border,
        color: colors.disabled.label,
        ...(colors.disabled.icon && getIconColorSelectorsNew(theme, colors.disabled.icon, false)),
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
  }
);

export const getMinWidthStyles = (children: React.ReactNode, size: ButtonSizes) => {
  switch (size) {
    case 'large':
      return children ? '112px' : '48px';
    case 'medium':
      return children ? '96px' : space.xl;
    case 'small':
      return children ? space.xxxl : space.l;
    case 'extraSmall':
      return children ? 'auto' : space.m;
    default:
      return children ? '96px' : space.xl;
  }
};

export const getPaddingStyles = (children: React.ReactNode, size: ButtonSizes) => {
  console.warn('in here', size, children);
  switch (size) {
    case 'large':
      return children ? `0 ${space.l}` : 0;

    case 'medium':
      return children ? `0 ${space.m}` : 0;
    case 'small':
      return children ? `0 ${space.s}` : 0;
    case 'extraSmall':
      return children ? `0 ${space.xs}` : 0;
    default:
      return children ? `0 ${space.m}` : 0;
  }
};
