import canvas from '@workday/canvas-kit-react-core';
import {IconButtonVariant} from './iconButtonTypes';

export interface CanvasButtonColors
  extends Partial<typeof canvas.buttonColors.secondary>,
    Partial<typeof canvas.buttonColors.primary>,
    Partial<typeof canvas.buttonColors.delete> {}

export interface GenericButtonColors extends CanvasButtonColors {
  focusRingInner?: string;
  focusRingOuter?: string;
  labelIcon?: string;
  labelIconActive?: string;
  labelIconDisabled?: string;
  labelIconFocus?: string;
  labelIconHover?: string;
  labelIconFocusHover?: string;
  focusHover?: string;
}

export type ButtonColorCollection = {
  [key in IconButtonVariant]: GenericButtonColors | null;
};

export const IconButtonColors: ButtonColorCollection = {
  [IconButtonVariant.Square]: {
    background: 'transparent',
    activeBackground: canvas.colors.soap500,
    disabledBackground: 'transparent',
    focusBackground: canvas.colors.soap300,
    hoverBackground: canvas.colors.soap300,
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.licorice500,
    labelIconActive: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice500,
    labelIconFocusHover: canvas.colors.licorice500,
    labelIconDisabled: canvas.colors.soap600,
  },
  [IconButtonVariant.SquareFilled]: {
    background: canvas.colors.soap200,
    border: canvas.colors.soap500,
    activeBackground: canvas.colors.soap500,
    disabledBackground: canvas.colors.soap100,
    focusBackground: canvas.colors.soap400,
    hoverBackground: canvas.colors.soap400,
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.licorice500,
    labelIconActive: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice500,
    labelIconDisabled: canvas.colors.soap600,
  },
  [IconButtonVariant.Plain]: {
    background: 'transparent',
    activeBackground: 'transparent',
    activeBorder: 'transparent',
    disabledBackground: 'transparent',
    focusBackground: 'transparent',
    hoverBackground: 'transparent',
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.licorice500,
    labelIconActive: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice500,
    labelIconDisabled: canvas.colors.soap600,
  },
  [IconButtonVariant.Circle]: {
    background: 'transparent',
    activeBackground: canvas.colors.soap500,
    disabledBackground: 'transparent',
    focusBackground: canvas.colors.soap300,
    hoverBackground: canvas.colors.soap300,
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.licorice500,
    labelIconActive: canvas.colors.licorice500,
    labelIconFocusHover: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice500,
    labelIconDisabled: canvas.colors.soap600,
  },
  [IconButtonVariant.CircleFilled]: {
    background: canvas.colors.soap200,
    activeBackground: canvas.colors.soap500,
    disabledBackground: canvas.colors.soap100,
    hoverBackground: canvas.colors.soap400,
    focusBackground: canvas.colors.soap400,
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice500,
    labelIconActive: canvas.colors.licorice500,
    labelIconDisabled: canvas.colors.soap600,
  },
  [IconButtonVariant.Inverse]: {
    background: 'transparent',
    activeBackground: 'rgba(0, 0, 0, 0.3)',
    focusBackground: 'rgba(0, 0, 0, 0.2)',
    disabledBackground: 'transparent',
    hoverBackground: 'rgba(0, 0, 0, 0.2)',
    labelIcon: canvas.colors.frenchVanilla100,
    labelIconHover: canvas.colors.frenchVanilla100,
    labelIconActive: canvas.colors.frenchVanilla100,
    labelIconFocus: canvas.colors.frenchVanilla100,
    labelIconDisabled: 'rgba(255, 255, 255, 0.75)',
    focusRingInner: 'currentColor',
    focusBorder: 'transparent',
    focusRingOuter: canvas.colors.frenchVanilla100,
    focusHover: 'rgba(0, 0, 0, 0.3)',
  },
  [IconButtonVariant.InverseFilled]: {
    background: 'rgba(0, 0, 0, 0.2)',
    activeBackground: 'rgba(0, 0, 0, 0.4)',
    focusBackground: 'rgba(0, 0, 0, 0.2)',
    disabledBackground: 'rgba(0, 0, 0, 0.2)',
    hoverBackground: 'rgba(0, 0, 0, 0.3)',
    labelIcon: canvas.colors.frenchVanilla100,
    labelIconHover: canvas.colors.frenchVanilla100,
    labelIconActive: canvas.colors.frenchVanilla100,
    labelIconFocus: canvas.colors.frenchVanilla100,
    labelIconDisabled: 'rgba(255, 255, 255, 0.75)',
    focusRingInner: 'currentColor',
    focusBorder: 'transparent',
    focusRingOuter: canvas.colors.frenchVanilla100,
    focusHover: 'rgba(0, 0, 0, 0.3)',
  },
};

export default IconButtonColors;
