import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {focusRing, GrowthBehavior} from '@workday/canvas-kit-react-common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {OutlineButtonVariant, ButtonColors, ButtonSize} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelData, ButtonLabelIcon} from './parts';

export interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    GrowthBehavior {
  /**
   * The variant of the Button.
   * @default OutlineButtonVariant.Secondary
   */
  variant?: OutlineButtonVariant;
  /**
   * The size of the Button.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The data label of the Button.
   * Note: not displayed at `small` size
   */
  dataLabel?: String;
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
}

const OutlineButton = ({
  variant = OutlineButtonVariant.Secondary,
  size = 'medium',
  buttonRef,
  dataLabel,
  icon,
  children,
  ...elemProps
}: OutlineButtonProps) => (
  <ButtonContainer
    colors={getOutlineButtonColors(variant)}
    size={size}
    ref={buttonRef}
    {...elemProps}
  >
    {icon && size !== 'small' && <ButtonLabelIcon size={size} icon={icon} />}
    <ButtonLabel>{children}</ButtonLabel>
    {dataLabel && size !== 'small' && <ButtonLabelData>{dataLabel}</ButtonLabelData>}
  </ButtonContainer>
);

OutlineButton.Variant = OutlineButtonVariant;
OutlineButton.Size = ButtonSize;

export default OutlineButton;

export const getOutlineButtonColors = (variant: OutlineButtonVariant): ButtonColors => {
  switch (variant) {
    case OutlineButtonVariant.Primary:
      return {
        default: {
          border: colors.blueberry400,
          icon: colors.blueberry400,
          label: colors.blueberry400,
        },
        hover: {
          background: colors.blueberry400,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        active: {
          background: colors.blueberry500,
          border: colors.blueberry500,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        focus: {
          background: colors.blueberry400,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        disabled: {
          background: colors.frenchVanilla100,
          border: colors.soap500,
          icon: colors.soap600,
          label: colors.licorice100,
        },
      };
    case OutlineButtonVariant.Secondary:
    default:
      return {
        default: {
          border: colors.soap500,
          icon: colors.licorice200,
          label: colors.blackPepper400,
        },
        hover: {
          background: colors.licorice500,
          border: colors.licorice500,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        active: {
          background: colors.licorice600,
          border: colors.licorice600,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        focus: {
          background: colors.licorice500,
          border: colors.licorice500,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        disabled: {
          background: colors.frenchVanilla100,
          border: colors.soap500,
          icon: colors.soap600,
          label: colors.licorice100,
        },
      };
    case OutlineButtonVariant.Inverse:
      return {
        default: {
          border: colors.frenchVanilla100,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        hover: {
          background: colors.frenchVanilla100,
          icon: colors.licorice500,
          label: colors.blackPepper400,
          labelData: colors.licorice300,
        },
        active: {
          background: colors.soap300,
          border: colors.soap300,
          icon: colors.licorice500,
          label: colors.blackPepper400,
          labelData: colors.licorice300,
        },
        focus: {
          background: colors.frenchVanilla100,
          icon: colors.licorice500,
          label: colors.blackPepper400,
          labelData: colors.licorice300,
          focusRing: focusRing(2, 2, true, false, 'currentColor', colors.frenchVanilla100),
        },
        disabled: {
          background: 'transparent',
          border: 'rgba(255, 255, 255, 0.75)',
          icon: 'rgba(255, 255, 255, 0.75)',
          label: 'rgba(255, 255, 255, 0.75)',
          labelData: 'rgba(255, 255, 255, 0.75)',
        },
      };
  }
};
