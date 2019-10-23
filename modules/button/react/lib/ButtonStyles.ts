import canvas, {borderRadius} from '@workday/canvas-kit-react-core';
import {focusRing, GenericStyle} from '@workday/canvas-kit-react-common';
import {CSSObject} from '@emotion/core';
import {
  DeprecatedButtonVariant,
  ButtonSize,
  IconPosition,
  AllButtonVariants,
  TextButtonVariant,
  ButtonVariant,
  IconButtonVariant,
} from './types';
import {ButtonColors} from './ButtonColors';

export const CANVAS_BUTTON_HEIGHT_LARGE: number = 40;
export const CANVAS_BUTTON_HEIGHT_MEDIUM: number = 24;
export const CANVAS_BUTTON_HEIGHT_SMALL: number = 18;

export interface ButtonGenericStyle extends GenericStyle {
  variants?: {
    types: {[key in AllButtonVariants | IconPosition]?: CSSObject};
    sizes: {[key in ButtonSize]?: CSSObject};
  };
}

export const labelBaseStyles: ButtonGenericStyle = {
  classname: 'button-label',
  styles: {
    position: 'relative', // Fixes an IE issue with text within button moving on click
    ':hover:active': {
      backgroundColor: 'transparent',
    },
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontWeight: 700,
    fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  variants: {
    types: {
      [TextButtonVariant.Default]: {
        padding: '0',
      },
      [TextButtonVariant.AllCaps]: {
        ...canvas.type.variant.caps,
        fontSize: '14px',
        letterSpacing: '.5px',
        padding: '0',
      },
      [DeprecatedButtonVariant.Primary]: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
      [DeprecatedButtonVariant.Secondary]: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
      [DeprecatedButtonVariant.Delete]: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
    },
    sizes: {
      [ButtonSize.Large]: {
        fontSize: '16px',
        padding: '0 12px',
      },
      [ButtonSize.Medium]: {
        fontSize: '14px',
        padding: '0 8px',
      },
      [ButtonSize.Small]: {
        fontSize: '14px',
        padding: '0',
      },
    },
  },
};

export const labelDataBaseStyles: ButtonGenericStyle = {
  classname: 'button-label-data',
  styles: {
    ...labelBaseStyles.styles,
    fontWeight: 400,
    fontSize: '16px',
  },
  variants: {
    types: {},
    sizes: {
      [ButtonSize.Large]: {
        paddingRight: '12px',
      },
      [ButtonSize.Medium]: {
        paddingRight: '8px',
        fontSize: '14px',
      },
    },
  },
};

export const labelIconBaseStyles: ButtonGenericStyle = {
  classname: 'button-label-icon',
  styles: {
    display: 'flex',
  },
  variants: {
    types: {
      [IconPosition.Left]: {
        padding: '0 8px 0 0',
      },
      [IconPosition.Right]: {
        padding: '0 0 0 8px',
      },
    },
    sizes: {
      [ButtonSize.Large]: {
        paddingLeft: '8px',
      },
      [ButtonSize.Medium]: {
        paddingLeft: '4px',
      },
    },
  },
};

export const deprecatedButtonStyles: ButtonGenericStyle = {
  classname: 'canvas-deprecated-button',
  styles: {
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
    transition: 'all 120ms linear',
    '&:hover:active': {transitionDuration: '40ms'}, // Makes the "down" state of the button happens faster than the hover state, so it animates in correctly.
    '&:disabled, &:disabled:active': {cursor: 'default', boxShadow: 'none'},
  },
  variants: {
    types: {
      [DeprecatedButtonVariant.Primary]: {
        ...getButtonStateStyle(DeprecatedButtonVariant.Primary),
      },
      [DeprecatedButtonVariant.Secondary]: {
        ...getButtonStateStyle(DeprecatedButtonVariant.Secondary),
      },
      [DeprecatedButtonVariant.Delete]: {
        ...getButtonStateStyle(DeprecatedButtonVariant.Delete),
      },
    },
    sizes: {
      [ButtonSize.Large]: {
        height: `${CANVAS_BUTTON_HEIGHT_LARGE}px`,
        padding: `0 ${canvas.spacing.l}`,
        minWidth: '112px',
        maxWidth: '288px',
        fontSize: '14px',
        fontWeight: 500,
      },
      [ButtonSize.Medium]: {
        height: `${CANVAS_BUTTON_HEIGHT_MEDIUM}px`,
        padding: `0 ${canvas.spacing.m}`,
        minWidth: '80px',
        maxWidth: '200px',
        fontSize: '13px',
        fontWeight: 500,
      },
      [ButtonSize.Small]: {
        height: `${CANVAS_BUTTON_HEIGHT_SMALL}px`,
        padding: `0 ${canvas.spacing.xxs}`,
        minWidth: '56px',
        maxWidth: '120px',
        fontSize: '10px',
        fontWeight: 500,
      },
    },
  },
};

export const canvasButtonStyles: ButtonGenericStyle = {
  classname: 'canvas-button',
  styles: {
    ...deprecatedButtonStyles.styles,
    verticalAlign: 'middle',
    border: '2px solid transparent',
    fontSize: '14px',
  },
  variants: {
    types: {
      [ButtonVariant.Primary]: {
        ...getButtonStateStyle(ButtonVariant.Primary),
      },
      [ButtonVariant.Secondary]: {
        ...getButtonStateStyle(ButtonVariant.Secondary),
      },
      [ButtonVariant.Delete]: {
        ...getButtonStateStyle(ButtonVariant.Delete),
      },
      [ButtonVariant.Highlight]: {
        ...getButtonStateStyle(ButtonVariant.Highlight),
      },
      [ButtonVariant.OutlinePrimary]: {
        ...getButtonStateStyle(ButtonVariant.OutlinePrimary),
      },
      [ButtonVariant.OutlineSecondary]: {
        ...getButtonStateStyle(ButtonVariant.OutlineSecondary),
      },
      [ButtonVariant.OutlineInverse]: {
        ...getButtonStateStyle(ButtonVariant.OutlineInverse),
      },
    },
    sizes: {
      [ButtonSize.Large]: {
        minWidth: '112px',
        height: '48px',
        padding: '0 20px',
      },
      [ButtonSize.Medium]: {
        minWidth: '96px',
        height: canvas.spacing.xl,
        padding: '0 16px',
      },
      [ButtonSize.Small]: {
        minWidth: '80px',
        height: canvas.spacing.l,
        padding: '0 16px',
      },
    },
  },
};

export const dropdownButtonStyles: ButtonGenericStyle = {
  classname: 'dropdown-button',
  styles: {
    ...canvasButtonStyles.styles,
  },
  variants: {
    types: {
      [ButtonVariant.Primary]: canvasButtonStyles.variants!.types[ButtonVariant.Primary],
      [ButtonVariant.Secondary]: canvasButtonStyles.variants!.types[ButtonVariant.Secondary],
    },
    sizes: {
      [ButtonSize.Large]: canvasButtonStyles.variants!.sizes.large,
      [ButtonSize.Medium]: canvasButtonStyles.variants!.sizes.medium,
    },
  },
};

export const textButtonStyles: ButtonGenericStyle = {
  classname: 'text-button',
  styles: {
    ...deprecatedButtonStyles.styles,
    borderRadius: borderRadius.m,
    border: '0',
    margin: '0 8px',
    minWidth: 'auto',
    '&:hover:not([disabled])': {textDecoration: 'underline'},
  },
  variants: {
    types: {
      [TextButtonVariant.Default]: {
        ...getButtonStateStyle(TextButtonVariant.Default),
      },
      [TextButtonVariant.Inverse]: {
        ...getButtonStateStyle(TextButtonVariant.Inverse),
      },
      [TextButtonVariant.AllCaps]: {
        ...getButtonStateStyle(TextButtonVariant.Default),
        height: canvas.spacing.l,
      },
      [TextButtonVariant.InverseAllCaps]: {
        ...getButtonStateStyle(TextButtonVariant.Inverse),
        height: canvas.spacing.l,
      },
    },
    sizes: {
      [ButtonSize.Large]: {
        height: canvas.spacing.xl,
        padding: '0 8px',
      },
      [ButtonSize.Small]: {
        height: canvas.spacing.l,
        padding: '0 8px',
      },
    },
  },
};

export const iconButtonStyles: ButtonGenericStyle = {
  classname: 'icon-button',
  styles: {
    // TODO: Support data-whatinput='input' css
    ...deprecatedButtonStyles.styles,
    borderWidth: '0',
    borderRadius: borderRadius.circle,
    ['& .wd-icon']: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
  variants: {
    sizes: {
      [ButtonSize.Small]: {
        width: canvas.spacing.l,
        height: canvas.spacing.l,
        'span svg': {
          width: '20px',
          height: '20px',
        },
      },
      [ButtonSize.Medium]: {
        width: canvas.spacing.xl,
        height: canvas.spacing.xl,
      },
    },
    types: {
      [IconButtonVariant.Square]: {
        borderRadius: borderRadius.m,
        width: canvas.spacing.l,
        height: canvas.spacing.l,
        ...getButtonStateStyle(IconButtonVariant.Square),
      },
      [IconButtonVariant.SquareFilled]: {
        borderRadius: borderRadius.m,
        width: canvas.spacing.l,
        height: canvas.spacing.l,
        ...getButtonStateStyle(IconButtonVariant.SquareFilled),
      },
      [IconButtonVariant.Plain]: {
        ...getButtonStateStyle(IconButtonVariant.Plain),
      },
      [IconButtonVariant.Circle]: {
        ...getButtonStateStyle(IconButtonVariant.Circle),
      },
      [IconButtonVariant.CircleFilled]: {
        ...getButtonStateStyle(IconButtonVariant.CircleFilled),
      },
      [IconButtonVariant.Inverse]: {
        ...getButtonStateStyle(IconButtonVariant.Inverse),
      },
      [IconButtonVariant.InverseFilled]: {
        ...getButtonStateStyle(IconButtonVariant.InverseFilled),
      },
    },
  },
};

function getButtonStateStyle(variant: AllButtonVariants): CSSObject {
  const buttonColors = ButtonColors[variant];

  if (buttonColors == null) {
    return {};
  }

  return {
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
      ['.' + labelDataBaseStyles.classname]: {
        color: buttonColors.labelData,
      },
    }),
    ':focus': {
      backgroundColor: buttonColors.focusBackground,
      borderColor: buttonColors.focusBorder,
      color: buttonColors.focusText,
      ...(buttonColors.labelDataFocus && {
        ['.' + labelDataBaseStyles.classname]: {color: buttonColors.labelDataFocus},
      }),
      ...(buttonColors.labelIconFocus && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconFocus},
      }),
    },
    ':hover:focus': {
      backgroundColor: buttonColors.hoverBackground,
    },
    ':active, :focus:active, :hover:active': {
      backgroundColor: buttonColors.activeBackground,
      borderColor: buttonColors.activeBorder,
      color: buttonColors.activeText,
      ...(buttonColors.labelDataActive && {
        ['.' + labelDataBaseStyles.classname]: {color: buttonColors.labelDataActive},
      }),
      ...(buttonColors.labelIconActive && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconActive},
      }),
    },
    ':hover': {
      backgroundColor: buttonColors.hoverBackground,
      borderColor: buttonColors.hoverBorder,
      color: buttonColors.hoverText,
      ...(buttonColors.labelDataHover && {
        ['.' + labelDataBaseStyles.classname]: {
          transition: 'color 120ms ease-in',
          color: buttonColors.labelDataHover,
        },
      }),
      ...(buttonColors.labelIconHover && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconHover},
      }),
    },
    ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
      backgroundColor: buttonColors.disabledBackground,
      borderColor: buttonColors.disabledBorder,
      color: buttonColors.disabledText,
      ...(buttonColors.labelIconDisabled && {
        'span .wd-icon-fill, span .wd-icon-accent': {fill: buttonColors.labelIconDisabled},
      }),
      ...(buttonColors.labelDataDisabled && {
        ['.' + labelDataBaseStyles.classname]: {color: buttonColors.labelDataDisabled},
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
  };
}

function getButtonFocusRing(variant: AllButtonVariants): CSSObject {
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
