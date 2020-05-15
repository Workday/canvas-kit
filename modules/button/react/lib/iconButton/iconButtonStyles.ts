import {IconButtonColors} from './iconButtonColors';
import {IconButtonVariant, IconButtonSize} from './iconButtonTypes';
import {CSSObject} from '@emotion/core';
import {mouseFocusBehavior, GenericStyle, focusRing} from '@workday/canvas-kit-react-common';

import canvas, {borderRadius, colors} from '@workday/canvas-kit-react-core';

export interface IconButtonGenericStyle extends GenericStyle {
  variants?: {
    types: {[key in IconButtonVariant]?: CSSObject};
    sizes: {[key in IconButtonSize]?: CSSObject};
  };
}

export function getButtonFocusRing(variant: IconButtonVariant): CSSObject {
  const buttonColors = IconButtonColors[variant];

  if (buttonColors == null) {
    return {};
  }

  switch (variant) {
    case IconButtonVariant.Plain:
      return focusRing(2);
    case IconButtonVariant.Inverse:
    case IconButtonVariant.InverseFilled:
      return focusRing(2, 2, true, false, buttonColors.focusRingInner, buttonColors.focusRingOuter);
    default:
      return focusRing(2, 2);
  }
}

function getFillSelector(fillColor: string): CSSObject {
  return {
    '&:focus span .wd-icon-fill, &:hover span .wd-icon-fill, span .wd-icon-fill': {
      fill: fillColor,
    },
  };
}

function getBackgroundSelector(fillColor: string): CSSObject {
  return {
    '&:hover span .wd-icon-background, span .wd-icon-background': {
      fill: fillColor,
    },
  };
}

function getAccentSelector(fillColor: string): CSSObject {
  return {
    '&:focus span .wd-icon-accent, &:hover span .wd-icon-accent, span .wd-icon-accent': {
      fill: fillColor,
    },
  };
}

export function getIconButtonStyle(
  baseButton: IconButtonGenericStyle,
  variant?: IconButtonVariant
) {
  const {types} = baseButton.variants!;

  switch (variant) {
    case IconButtonVariant.Square:
      return types[IconButtonVariant.Square];
    case IconButtonVariant.SquareFilled:
      return types[IconButtonVariant.SquareFilled];
    case IconButtonVariant.Plain:
    default:
      return types[IconButtonVariant.Plain];
    case IconButtonVariant.Circle:
      return types[IconButtonVariant.Circle];
    case IconButtonVariant.CircleFilled:
      return types[IconButtonVariant.CircleFilled];
    case IconButtonVariant.Inverse:
      return types[IconButtonVariant.Inverse];
    case IconButtonVariant.InverseFilled:
      return types[IconButtonVariant.InverseFilled];
  }
}

export function getIconButtonToggledOnStyle(
  variant: IconButtonVariant,
  toggled: boolean | undefined
) {
  if (!toggled) {
    return {};
  }

  // Toggled On Styles
  switch (variant) {
    case IconButtonVariant.CircleFilled:
    case IconButtonVariant.SquareFilled:
    case IconButtonVariant.Circle:
    case IconButtonVariant.Square:
    default: {
      return {
        backgroundColor: colors.blueberry400,
        ...getFillSelector(colors.frenchVanilla100),
        ...getAccentSelector(colors.blueberry400),
        ...getBackgroundSelector(colors.frenchVanilla100),
        '&:focus&:hover, &:focus, &:active, &:active:hover': {
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.blueberry400),
          ...getBackgroundSelector(colors.frenchVanilla100),
          backgroundColor: colors.blueberry500,
        },
        '&:not([disabled])': {
          '&:focus, &:focus:active': {
            backgroundColor: colors.blueberry500,
            ...(toggled ? focusRing(2, 2) : {}),
          },
        },
        '&:hover, &:active': {
          ...getFillSelector(colors.frenchVanilla100),
          ...getAccentSelector(colors.blueberry400),
          ...getBackgroundSelector(colors.frenchVanilla100),
          backgroundColor: colors.blueberry500,
        },
        '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
          backgroundColor: colors.blueberry100,
          ...getFillSelector(colors.blueberry300),
          ...getAccentSelector(colors.frenchVanilla100),
          ...getBackgroundSelector(colors.blueberry300),
        },
        ...mouseFocusBehavior({
          '&:focus:active': {
            ...getFillSelector(colors.frenchVanilla100),
            ...getAccentSelector(colors.blueberry400),
            ...getBackgroundSelector(colors.frenchVanilla100),
            backgroundColor: `${colors.blueberry500} !important`,
          },
        }),
      };
    }

    case IconButtonVariant.Plain:
      return {
        backgroundColor: 'transparent',
        ...getFillSelector(colors.blueberry400),
        ...getAccentSelector(colors.frenchVanilla100),
        ...getBackgroundSelector(colors.blueberry400),
        '&:focus:hover, &:focus, &:active, &:active:hover': {
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.frenchVanilla100),
          ...getBackgroundSelector(colors.blueberry400),
        },
        '&:not([disabled]):focus': {
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.frenchVanilla100),
          ...getBackgroundSelector(colors.blueberry400),
          ...(toggled ? focusRing(2, 0) : {}),
        },
        '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
          ...getFillSelector(colors.blueberry200),
          ...getAccentSelector(colors.frenchVanilla100),
          ...getBackgroundSelector(colors.blueberry200),
        },
      };

    case IconButtonVariant.Inverse:
    case IconButtonVariant.InverseFilled:
      return {
        ...getFillSelector(colors.blueberry400),
        ...getAccentSelector(colors.frenchVanilla100),
        ...getBackgroundSelector(colors.blueberry400),
        backgroundColor: colors.frenchVanilla100,
        '&:focus': {
          backgroundColor: colors.frenchVanilla100,
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.frenchVanilla100),
          ...getBackgroundSelector(colors.blueberry400),
        },
        '&:focus&:hover, &:active, &:active:hover': {
          backgroundColor: colors.frenchVanilla100,
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.frenchVanilla100),
          ...getBackgroundSelector(colors.blueberry400),
        },
        '&:focus:active': {
          backgroundColor: colors.frenchVanilla100,
        },

        '&:hover': {
          backgroundColor: colors.frenchVanilla100,
        },
        '&:not([disabled])': {
          '&:focus': {
            backgroundColor: colors.frenchVanilla100,
            ...(toggled
              ? focusRing(2, 2, true, false, 'currentColor', colors.frenchVanilla100)
              : {}),
          },
          '&:focus:active': {
            backgroundColor: colors.frenchVanilla100,
          },
        },
        '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
          backgroundColor: 'rgba(255,255,255,0.75)',
          ...getFillSelector(colors.blueberry400),
          ...getAccentSelector(colors.frenchVanilla100),
          ...getBackgroundSelector(colors.blueberry400),
        },
        ...mouseFocusBehavior({
          '&:focus:active': {
            backgroundColor: `${colors.frenchVanilla100} !important`,
          },
        }),
      };
  }
}

export function getIconButtonStateStyle(variant: IconButtonVariant): CSSObject {
  const buttonColors = IconButtonColors[variant];

  if (buttonColors == null) {
    return {};
  }

  const baseStyles = {
    borderColor: buttonColors.border,
    backgroundColor: buttonColors.background,
    ...(buttonColors.labelIcon && {
      'span .wd-icon-fill, span .wd-icon-accent': {
        transition: 'fill 120ms ease-in',
        fill: buttonColors.labelIcon,
      },
    }),
  };

  const hoverStyles = {
    ':hover': {
      backgroundColor: buttonColors.hoverBackground,
      ...(buttonColors.labelIconHover && {
        'span .wd-icon-fill, span .wd-icon-accent': {
          fill: buttonColors.labelIconHover,
        },
      }),
    },
  };

  const activeStyles = {
    ':active, :focus:active, :hover:active': {
      backgroundColor: buttonColors.activeBackground,
      ...(buttonColors.labelIconHover && {
        'span .wd-icon-fill, span .wd-icon-accent': {
          fill: buttonColors.labelIconActive,
        },
      }),
    },
  };

  return {
    ...baseStyles,
    ':focus': {
      backgroundColor: buttonColors.focusBackground,
      ...(buttonColors.labelIconFocus && {
        'span .wd-icon-fill, span .wd-icon-accent': {
          fill: buttonColors.labelIconFocus,
        },
      }),
    },
    ...hoverStyles,
    ...activeStyles,
    ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
      pointerEvents: 'none',
      backgroundColor: buttonColors.disabledBackground,
      borderColor: buttonColors.disabledBorder,
      color: buttonColors.disabledText,
      ...(buttonColors.labelIconDisabled && {
        'span .wd-icon-fill, span .wd-icon-accent': {
          fill: buttonColors.labelIconDisabled,
        },
      }),
    },
    '&:not([disabled])': {
      '&:focus': {
        background: buttonColors.focusBackground,
        borderColor: buttonColors.focusBorder,
        ...getButtonFocusRing(variant),
      },
      '&:active': {
        borderColor: buttonColors.activeBorder,
        ...getButtonFocusRing(variant),
      },

      '&:hover:focus': {
        backgroundColor: buttonColors.focusHover,
        'span .wd-icon-fill, span .wd-icon-accent': {
          fill: buttonColors.labelIconFocusHover,
        },
      },
      '&:focus:active': {
        backgroundColor: buttonColors.activeBackground,
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

export const iconButtonStyles: IconButtonGenericStyle = {
  classname: 'icon-button',
  styles: {
    // TODO: Support data-whatinput='input' css
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
    borderWidth: '0',
    ['& .wd-icon']: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
  variants: {
    sizes: {
      [IconButtonSize.Small]: {
        minWidth: canvas.spacing.l, // min-width is set so buttons don't collapse in IE11
        width: 'auto',
        height: canvas.spacing.l,
        'span svg': {
          width: '20px',
          height: '20px',
        },
      },
      [IconButtonSize.Medium]: {
        minWidth: canvas.spacing.xl,
        width: canvas.spacing.xl,
        height: canvas.spacing.xl,
      },
    },
    types: {
      [IconButtonVariant.Square]: {
        borderRadius: borderRadius.m,
        minWidth: canvas.spacing.l,
        width: canvas.spacing.l,
        height: canvas.spacing.l,
        ...getIconButtonStateStyle(IconButtonVariant.Square),
      },
      [IconButtonVariant.SquareFilled]: {
        borderRadius: borderRadius.m,
        minWidth: canvas.spacing.l,
        width: canvas.spacing.l,
        height: canvas.spacing.l,
        ...getIconButtonStateStyle(IconButtonVariant.SquareFilled),
      },
      [IconButtonVariant.Plain]: {
        ...getIconButtonStateStyle(IconButtonVariant.Plain),
      },
      [IconButtonVariant.Circle]: {
        ...getIconButtonStateStyle(IconButtonVariant.Circle),
      },
      [IconButtonVariant.CircleFilled]: {
        ...getIconButtonStateStyle(IconButtonVariant.CircleFilled),
      },
      [IconButtonVariant.Inverse]: {
        ...getIconButtonStateStyle(IconButtonVariant.Inverse),
      },
      [IconButtonVariant.InverseFilled]: {
        ...getIconButtonStateStyle(IconButtonVariant.InverseFilled),
      },
    },
  },
};
