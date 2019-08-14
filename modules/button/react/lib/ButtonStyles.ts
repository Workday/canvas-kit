import canvas from '@workday/canvas-kit-react-core';
import {focusRing, GenericStyle} from '@workday/canvas-kit-react-common';
import {CSSObject} from 'create-emotion';
import {
  ButtonTypes,
  ButtonSizes,
  IconPositions,
  AllButtonTypes,
  TextButtonTypes,
  BetaButtonTypes,
  IconButtonTypes,
} from './types';
import {ButtonColors} from './ButtonColors';

export const CANVAS_BUTTON_HEIGHT_LARGE: number = 40;
export const CANVAS_BUTTON_HEIGHT_MEDIUM: number = 24;
export const CANVAS_BUTTON_HEIGHT_SMALL: number = 18;

export interface ButtonGenericStyle extends GenericStyle {
  variants?: {
    types: {[key in AllButtonTypes | IconPositions]?: CSSObject};
    sizes: {[key in ButtonSizes]?: CSSObject};
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
      [TextButtonTypes.Default]: {
        padding: '0',
      },
      [TextButtonTypes.AllCaps]: {
        ...canvas.type.variant.caps,
        fontSize: '14px',
        letterSpacing: '.5px',
        padding: '0',
      },
      [ButtonTypes.Primary]: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
      [ButtonTypes.Secondary]: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
      [ButtonTypes.Delete]: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        padding: '0',
      },
    },
    sizes: {
      [ButtonSizes.Large]: {
        fontSize: '16px',
        padding: '0 12px',
      },
      [ButtonSizes.Medium]: {
        fontSize: '14px',
        padding: '0 8px',
      },
      [ButtonSizes.Small]: {
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
      [ButtonSizes.Large]: {
        paddingRight: '12px',
      },
      [ButtonSizes.Medium]: {
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
      [IconPositions.Left]: {
        padding: '0 8px 0 0',
      },
      [IconPositions.Right]: {
        padding: '0 0 0 8px',
      },
    },
    sizes: {
      [ButtonSizes.Large]: {
        paddingLeft: '8px',
      },
      [ButtonSizes.Medium]: {
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
      [ButtonTypes.Primary]: {
        ...getButtonStateStyle(ButtonTypes.Primary),
      },
      [ButtonTypes.Secondary]: {
        ...getButtonStateStyle(ButtonTypes.Secondary),
      },
      [ButtonTypes.Delete]: {
        ...getButtonStateStyle(ButtonTypes.Delete),
      },
    },
    sizes: {
      [ButtonSizes.Large]: {
        height: `${CANVAS_BUTTON_HEIGHT_LARGE}px`,
        padding: `0 ${canvas.spacing.l}`,
        minWidth: '112px',
        maxWidth: '288px',
        fontSize: '14px',
        fontWeight: 500,
      },
      [ButtonSizes.Medium]: {
        height: `${CANVAS_BUTTON_HEIGHT_MEDIUM}px`,
        padding: `0 ${canvas.spacing.m}`,
        minWidth: '80px',
        maxWidth: '200px',
        fontSize: '13px',
        fontWeight: 500,
      },
      [ButtonSizes.Small]: {
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
      [BetaButtonTypes.Primary]: {
        ...getButtonStateStyle(BetaButtonTypes.Primary),
      },
      [BetaButtonTypes.Secondary]: {
        ...getButtonStateStyle(BetaButtonTypes.Secondary),
      },
      [BetaButtonTypes.Delete]: {
        ...getButtonStateStyle(BetaButtonTypes.Delete),
      },
      [BetaButtonTypes.Highlight]: {
        ...getButtonStateStyle(BetaButtonTypes.Highlight),
      },
      [BetaButtonTypes.OutlinePrimary]: {
        ...getButtonStateStyle(BetaButtonTypes.OutlinePrimary),
      },
      [BetaButtonTypes.OutlineSecondary]: {
        ...getButtonStateStyle(BetaButtonTypes.OutlineSecondary),
      },
      [BetaButtonTypes.OutlineInverse]: {
        ...getButtonStateStyle(BetaButtonTypes.OutlineInverse),
      },
    },
    sizes: {
      [ButtonSizes.Large]: {
        minWidth: '112px',
        height: '48px',
        padding: '0 18px',
      },
      [ButtonSizes.Medium]: {
        minWidth: '96px',
        height: canvas.spacing.xl,
        padding: '0 14px',
      },
      [ButtonSizes.Small]: {
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
      [BetaButtonTypes.Primary]: betaButtonStyles.variants!.types[BetaButtonTypes.Primary],
      [BetaButtonTypes.Secondary]: betaButtonStyles.variants!.types[BetaButtonTypes.Secondary],
    },
    sizes: {
      [ButtonSizes.Large]: betaButtonStyles.variants!.sizes.large,
      [ButtonSizes.Medium]: betaButtonStyles.variants!.sizes.medium,
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
      [TextButtonTypes.Default]: {
        ...getButtonStateStyle(TextButtonTypes.Default),
      },
      [TextButtonTypes.Inverse]: {
        ...getButtonStateStyle(TextButtonTypes.Inverse),
      },
      [TextButtonTypes.AllCaps]: {
        ...getButtonStateStyle(TextButtonTypes.Default),
        height: canvas.spacing.l,
      },
      [TextButtonTypes.InverseAllCaps]: {
        ...getButtonStateStyle(TextButtonTypes.Inverse),
        height: canvas.spacing.l,
      },
    },
    sizes: {
      [ButtonSizes.Large]: {
        height: canvas.spacing.xl,
        padding: '0 8px',
      },
      [ButtonSizes.Small]: {
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
      [ButtonSizes.Small]: {
        width: canvas.spacing.l,
        height: canvas.spacing.l,
        'span svg': {
          width: '20px',
          height: '20px',
        },
      },
      [ButtonSizes.Medium]: {
        width: canvas.spacing.xl,
        height: canvas.spacing.xl,
      },
    },
    types: {
      [IconButtonTypes.Square]: {
        borderRadius: '4px',
        width: canvas.spacing.l,
        height: canvas.spacing.l,
        ...getButtonStateStyle(IconButtonTypes.Square),
      },
      [IconButtonTypes.SquareFilled]: {
        borderRadius: '4px',
        width: canvas.spacing.l,
        height: canvas.spacing.l,
        ...getButtonStateStyle(IconButtonTypes.SquareFilled),
      },
      [IconButtonTypes.Plain]: {
        ...getButtonStateStyle(IconButtonTypes.Plain),
      },
      [IconButtonTypes.Circle]: {
        ...getButtonStateStyle(IconButtonTypes.Circle),
      },
      [IconButtonTypes.CircleFilled]: {
        ...getButtonStateStyle(IconButtonTypes.CircleFilled),
      },
      [IconButtonTypes.Inverse]: {
        ...getButtonStateStyle(IconButtonTypes.Inverse),
      },
      [IconButtonTypes.InverseFilled]: {
        ...getButtonStateStyle(IconButtonTypes.InverseFilled),
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
    case ButtonTypes.Primary:
    case ButtonTypes.Secondary:
    case IconButtonTypes.Square:
    case IconButtonTypes.SquareFilled:
    case TextButtonTypes.Default:
    case TextButtonTypes.AllCaps:
      return focusRing(2, 0);
    case BetaButtonTypes.OutlineInverse:
      return focusRing(2, 2, true, false, buttonColors.focusRingInner, buttonColors.focusRingOuter);
    case IconButtonTypes.Plain:
      return focusRing(2);
    case IconButtonTypes.Inverse:
    case IconButtonTypes.InverseFilled:
    case TextButtonTypes.Inverse:
    case TextButtonTypes.InverseAllCaps:
      return focusRing(2, 0, true, false, buttonColors.focusRingInner, buttonColors.focusRingOuter);
    default:
      return focusRing(2, 2);
  }
}
