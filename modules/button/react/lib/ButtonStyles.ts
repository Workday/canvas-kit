import canvas from '@workday/canvas-kit-react-core';
import {focusRing, GenericStyle} from '@workday/canvas-kit-react-common';
import {CSSObject} from 'create-emotion';
import {
  ButtonType,
  ButtonSize,
  IconPosition,
  AllButtonTypes,
  TextButtonType,
  BetaButtonType,
  IconButtonType,
} from './types';
import {ButtonColors} from './ButtonColors';

export const CANVAS_BUTTON_HEIGHT_LARGE: number = 40;
export const CANVAS_BUTTON_HEIGHT_MEDIUM: number = 24;
export const CANVAS_BUTTON_HEIGHT_SMALL: number = 18;

export interface ButtonGenericStyle extends GenericStyle {
  variants?: {
    types: {[key in AllButtonTypes | IconPosition]?: CSSObject};
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
      [TextButtonType.Default]: {
        padding: '0',
      },
      [TextButtonType.AllCaps]: {
        ...canvas.type.variant.caps,
        fontSize: '14px',
        letterSpacing: '.5px',
        padding: '0',
      },
      [ButtonType.Primary]: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
      [ButtonType.Secondary]: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
      [ButtonType.Delete]: {
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

// TODO (beta button): remove
export const canvasButtonStyles: ButtonGenericStyle = {
  classname: 'canvas-button',
  styles: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    borderRadius: '999px',
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
      [ButtonType.Primary]: {
        ...getButtonStateStyle(ButtonType.Primary),
      },
      [ButtonType.Secondary]: {
        ...getButtonStateStyle(ButtonType.Secondary),
      },
      [ButtonType.Delete]: {
        ...getButtonStateStyle(ButtonType.Delete),
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

export const betaButtonStyles: ButtonGenericStyle = {
  // TODO (beta button): rename classname from beta-button to something
  classname: 'beta-button',
  styles: {
    ...canvasButtonStyles.styles,
    verticalAlign: 'middle',
    border: '2px solid transparent',
  },
  variants: {
    types: {
      [BetaButtonType.Primary]: {
        ...getButtonStateStyle(BetaButtonType.Primary),
      },
      [BetaButtonType.Secondary]: {
        ...getButtonStateStyle(BetaButtonType.Secondary),
      },
      [BetaButtonType.Delete]: {
        ...getButtonStateStyle(BetaButtonType.Delete),
      },
      [BetaButtonType.Highlight]: {
        ...getButtonStateStyle(BetaButtonType.Highlight),
      },
      [BetaButtonType.OutlinePrimary]: {
        ...getButtonStateStyle(BetaButtonType.OutlinePrimary),
      },
      [BetaButtonType.OutlineSecondary]: {
        ...getButtonStateStyle(BetaButtonType.OutlineSecondary),
      },
      [BetaButtonType.OutlineInverse]: {
        ...getButtonStateStyle(BetaButtonType.OutlineInverse),
      },
    },
    sizes: {
      [ButtonSize.Large]: {
        minWidth: '112px',
        height: '48px',
        padding: '0 18px',
      },
      [ButtonSize.Medium]: {
        minWidth: '96px',
        height: canvas.spacing.xl,
        padding: '0 14px',
      },
      [ButtonSize.Small]: {
        minWidth: '80px',
        height: canvas.spacing.l,
        padding: '0 14px',
      },
    },
  },
};

export const dropdownButtonStyles: ButtonGenericStyle = {
  classname: 'dropdown-button',
  styles: {
    ...betaButtonStyles.styles,
  },
  variants: {
    types: {
      [BetaButtonType.Primary]: betaButtonStyles.variants!.types[BetaButtonType.Primary],
      [BetaButtonType.Secondary]: betaButtonStyles.variants!.types[BetaButtonType.Secondary],
    },
    sizes: {
      [ButtonSize.Large]: betaButtonStyles.variants!.sizes.large,
      [ButtonSize.Medium]: betaButtonStyles.variants!.sizes.medium,
    },
  },
};

export const textButtonStyles: ButtonGenericStyle = {
  classname: 'text-button',
  styles: {
    ...canvasButtonStyles.styles,
    borderRadius: '3px;',
    border: '0',
    margin: '0 8px',
    minWidth: 'auto',
    '&:hover:not([disabled])': {textDecoration: 'underline'},
  },
  variants: {
    types: {
      [TextButtonType.Default]: {
        ...getButtonStateStyle(TextButtonType.Default),
      },
      [TextButtonType.Inverse]: {
        ...getButtonStateStyle(TextButtonType.Inverse),
      },
      [TextButtonType.AllCaps]: {
        ...getButtonStateStyle(TextButtonType.Default),
        height: canvas.spacing.l,
      },
      [TextButtonType.InverseAllCaps]: {
        ...getButtonStateStyle(TextButtonType.Inverse),
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
    ...canvasButtonStyles.styles,
    borderWidth: '0',
    borderRadius: '50%',
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
      [IconButtonType.Square]: {
        borderRadius: '4px',
        width: canvas.spacing.l,
        height: canvas.spacing.l,
        ...getButtonStateStyle(IconButtonType.Square),
      },
      [IconButtonType.SquareFilled]: {
        borderRadius: '4px',
        width: canvas.spacing.l,
        height: canvas.spacing.l,
        ...getButtonStateStyle(IconButtonType.SquareFilled),
      },
      [IconButtonType.Plain]: {
        ...getButtonStateStyle(IconButtonType.Plain),
      },
      [IconButtonType.Circle]: {
        ...getButtonStateStyle(IconButtonType.Circle),
      },
      [IconButtonType.CircleFilled]: {
        ...getButtonStateStyle(IconButtonType.CircleFilled),
      },
      [IconButtonType.Inverse]: {
        ...getButtonStateStyle(IconButtonType.Inverse),
      },
      [IconButtonType.InverseFilled]: {
        ...getButtonStateStyle(IconButtonType.InverseFilled),
      },
    },
  },
};

function getButtonStateStyle(buttonType: AllButtonTypes): CSSObject {
  const buttonColors = ButtonColors[buttonType];

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
      '&:focus, &:active': {
        borderColor: buttonColors.focusBorder,
        ...getButtonFocusRing(buttonType),
      },
    },
  };
}

function getButtonFocusRing(buttonType: AllButtonTypes): CSSObject {
  const buttonColors = ButtonColors[buttonType];

  if (buttonColors == null) {
    return {};
  }

  switch (buttonType) {
    case ButtonType.Primary:
    case ButtonType.Secondary:
    case IconButtonType.Square:
    case IconButtonType.SquareFilled:
    case TextButtonType.Default:
    case TextButtonType.AllCaps:
      return focusRing(2, 0);
    case BetaButtonType.OutlineInverse:
      return focusRing(2, 2, true, false, buttonColors.focusRingInner, buttonColors.focusRingOuter);
    case IconButtonType.Plain:
      return focusRing(2);
    case IconButtonType.Inverse:
    case IconButtonType.InverseFilled:
    case TextButtonType.Inverse:
    case TextButtonType.InverseAllCaps:
      return focusRing(2, 0, true, false, buttonColors.focusRingInner, buttonColors.focusRingOuter);
    default:
      return focusRing(2, 2);
  }
}
