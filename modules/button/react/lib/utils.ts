import {CSSObject} from '@emotion/core';
import {focusRing, mouseFocusBehavior} from '@workday/canvas-kit-react-common';
import {
  ButtonSize,
  DeprecatedButtonVariant,
  AllButtonVariants,
  TextButtonVariant,
  ButtonVariant,
  IconButtonVariant,
} from './types';
import * as ButtonStyles from './ButtonStyles';
import {ButtonColors} from './ButtonColors';

export function getButtonSize(baseButton: ButtonStyles.ButtonGenericStyle, size?: ButtonSize) {
  const {sizes} = baseButton.variants!;

  switch (size) {
    case ButtonSize.Large:
      return sizes.large;
    case ButtonSize.Medium:
    default:
      return sizes.medium;
    case ButtonSize.Small:
      return sizes.small;
  }
}

export function getButtonStyle(
  baseButton: ButtonStyles.ButtonGenericStyle,
  variant?: AllButtonVariants
) {
  const {types} = baseButton.variants!;

  switch (variant) {
    case DeprecatedButtonVariant.Primary:
      return types[DeprecatedButtonVariant.Primary];
    case DeprecatedButtonVariant.Secondary:
      return types[DeprecatedButtonVariant.Secondary];
    case DeprecatedButtonVariant.Delete:
      return types[DeprecatedButtonVariant.Delete];
    case ButtonVariant.Highlight:
      return types[ButtonVariant.Highlight];
    case ButtonVariant.OutlinePrimary:
      return types[ButtonVariant.OutlinePrimary];
    case ButtonVariant.OutlineSecondary:
      return types[ButtonVariant.OutlineSecondary];
    case ButtonVariant.OutlineInverse:
      return types[ButtonVariant.OutlineInverse];
    case ButtonVariant.Primary:
      return types[ButtonVariant.Primary];
    case ButtonVariant.Secondary:
    default:
      return types[ButtonVariant.Secondary];
    case ButtonVariant.Delete:
      return types[ButtonVariant.Delete];
    case TextButtonVariant.Default:
      return types[TextButtonVariant.Default];
    case TextButtonVariant.Inverse:
      return types[TextButtonVariant.Inverse];
    case TextButtonVariant.AllCaps:
      return types[TextButtonVariant.AllCaps];
    case TextButtonVariant.InverseAllCaps:
      return types[TextButtonVariant.InverseAllCaps];
    case IconButtonVariant.Square:
      return types[IconButtonVariant.Square];
    case IconButtonVariant.SquareFilled:
      return types[IconButtonVariant.SquareFilled];
    case IconButtonVariant.Plain:
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

export function getBaseButton(buttonType: DeprecatedButtonVariant | ButtonVariant) {
  switch (buttonType) {
    case DeprecatedButtonVariant.Primary:
    case DeprecatedButtonVariant.Secondary:
    case DeprecatedButtonVariant.Delete:
      return ButtonStyles.deprecatedButtonStyles;
    case ButtonVariant.Primary:
    case ButtonVariant.Secondary:
    case ButtonVariant.Delete:
    case ButtonVariant.Highlight:
    case ButtonVariant.OutlinePrimary:
    case ButtonVariant.OutlineSecondary:
    case ButtonVariant.OutlineInverse:
    default:
      return ButtonStyles.canvasButtonStyles;
  }
}

export function getButtonFocusRing(variant: AllButtonVariants): CSSObject {
  const buttonColors = ButtonColors[variant];

  if (buttonColors == null) {
    return {};
  }

  switch (variant) {
    case DeprecatedButtonVariant.Primary:
    case DeprecatedButtonVariant.Secondary:
    case TextButtonVariant.Default:
    case TextButtonVariant.AllCaps:
      return focusRing(2, 0);
    case ButtonVariant.OutlineInverse:
      return focusRing(2, 2, true, false, buttonColors.focusRingInner, buttonColors.focusRingOuter);
    case IconButtonVariant.Plain:
      return focusRing(2);
    case IconButtonVariant.Inverse:
    case IconButtonVariant.InverseFilled:
    case TextButtonVariant.Inverse:
    case TextButtonVariant.InverseAllCaps:
      return focusRing(2, 0, true, false, buttonColors.focusRingInner, buttonColors.focusRingOuter);
    default:
      return focusRing(2, 2);
  }
}

export function getButtonStateStyle(variant: AllButtonVariants): CSSObject {
  const buttonColors = ButtonColors[variant];

  if (buttonColors == null) {
    return {};
  }

  const baseStyles = {
    backgroundColor: buttonColors.background,
    borderColor: buttonColors.border,
    color: buttonColors.text,
    ...(buttonColors.labelIcon && {
      'span .wd-icon-fill, span .wd-icon-accent': {
        transition: 'fill 120ms ease-in',
        fill: buttonColors.labelIcon,
      },
    }),
    ...(buttonColors.labelData && {
      ['.' + ButtonStyles.labelDataBaseStyles.classname]: {
        color: buttonColors.labelData,
      },
    }),
  };

  const hoverStyles = {
    ':hover': {
      backgroundColor: buttonColors.hoverBackground,
      borderColor: buttonColors.hoverBorder,
      color: buttonColors.hoverText,
      ...(buttonColors.labelDataHover && {
        ['.' + ButtonStyles.labelDataBaseStyles.classname]: {
          transition: 'color 120ms ease-in',
          color: buttonColors.labelDataHover,
        },
      }),
      ...(buttonColors.labelIconHover && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconHover},
      }),
    },
  };

  const activeStyles = {
    ':active, :focus:active, :hover:active': {
      backgroundColor: buttonColors.activeBackground,
      borderColor: buttonColors.activeBorder,
      color: buttonColors.activeText,
      ...(buttonColors.labelDataActive && {
        ['.' + ButtonStyles.labelDataBaseStyles.classname]: {color: buttonColors.labelDataActive},
      }),
      ...(buttonColors.labelIconActive && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconActive},
      }),
    },
  };

  return {
    ...baseStyles,
    ':focus': {
      backgroundColor: buttonColors.focusBackground,
      borderColor: buttonColors.focusBorder,
      color: buttonColors.focusText,
      ...(buttonColors.labelDataFocus && {
        ['.' + ButtonStyles.labelDataBaseStyles.classname]: {color: buttonColors.labelDataFocus},
      }),
      ...(buttonColors.labelIconFocus && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconFocus},
      }),
    },
    ':hover:focus': {
      backgroundColor: buttonColors.hoverBackground,
    },
    ...activeStyles,
    ...hoverStyles,
    ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
      backgroundColor: buttonColors.disabledBackground,
      borderColor: buttonColors.disabledBorder,
      color: buttonColors.disabledText,
      ...(buttonColors.labelIconDisabled && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconDisabled},
      }),
      ...(buttonColors.labelDataDisabled && {
        ['.' + ButtonStyles.labelDataBaseStyles.classname]: {color: buttonColors.labelDataDisabled},
      }),
    },
    '&:not([disabled])': {
      '&:focus': {
        borderColor: buttonColors.focusBorder,
        ...getButtonFocusRing(variant),
      },
      '&:active': {
        borderColor: buttonColors.activeBorder,
        ...getButtonFocusRing(variant),
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
