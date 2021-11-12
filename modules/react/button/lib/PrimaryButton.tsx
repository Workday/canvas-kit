import * as React from 'react';

import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
  focusRing,
} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon} from '@workday/design-assets-types';

import {ButtonContainer, ButtonLabel, ButtonLabelData, ButtonLabelIcon} from './parts';
import {ButtonSizes, IconPositions} from './types';

export interface PrimaryButtonProps extends Themeable, GrowthBehavior {
  /**
   * The variant of the PrimaryButton.
   * @default undefined
   */
  variant?: 'inverse';
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
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
  /**
   * Button icon positions can either be `left` or `right`.
   * If no value is provided, it defaults to `left`.
   * @default 'left'
   */
  iconPosition?: IconPositions;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   * @default false
   */
  shouldMirrorIcon?: boolean;
  children?: React.ReactNode;
}

// Button sizes where data labels are enabled
const dataLabelSizes = ['medium', 'large'];

export const PrimaryButton = createComponent('button')({
  displayName: 'PrimaryButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      size = 'medium',
      iconPosition = 'left',
      variant,
      dataLabel,
      icon,
      shouldMirrorIcon = false,
      children,
      ...elemProps
    }: PrimaryButtonProps,
    ref,
    Element
  ) => (
    <ButtonContainer
      ref={ref}
      as={Element}
      colors={getPrimaryButtonColors(variant, theme)}
      size={size}
      {...elemProps}
    >
      {icon && iconPosition === 'left' && (
        <ButtonLabelIcon
          size={size}
          iconPosition={iconPosition}
          icon={icon}
          shouldMirrorIcon={shouldMirrorIcon}
        />
      )}
      <ButtonLabel>{children}</ButtonLabel>
      {dataLabel && dataLabelSizes.includes(size) && <ButtonLabelData>{dataLabel}</ButtonLabelData>}
      {icon && iconPosition === 'right' && (
        <ButtonLabelIcon
          size={size}
          iconPosition={iconPosition}
          icon={icon}
          shouldMirrorIcon={shouldMirrorIcon}
        />
      )}
    </ButtonContainer>
  ),
});

export const getPrimaryButtonColors = (
  variant: 'inverse' | undefined,
  theme: EmotionCanvasTheme
) => {
  const {
    canvas: {
      palette: {primary: themePrimary},
    },
  } = theme;

  switch (variant) {
    case undefined:
    default:
      return {
        default: {
          background: themePrimary.main,
          icon: themePrimary.contrast,
          label: themePrimary.contrast,
        },
        hover: {
          background: themePrimary.dark,
        },
        active: {
          background: themePrimary.darkest,
        },
        focus: {
          background: themePrimary.main,
        },
        disabled: {
          background: themePrimary.main,
        },
      };

    case 'inverse':
      return {
        default: {
          background: colors.frenchVanilla100,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
        hover: {
          background: colors.soap300,
          icon: colors.blackPepper500,
          label: colors.blackPepper500,
          labelData: colors.blackPepper500,
        },
        active: {
          background: colors.soap300,
          icon: colors.blackPepper500,
          label: colors.blackPepper500,
          labelData: colors.blackPepper500,
        },
        focus: {
          background: colors.frenchVanilla100,
          border: colors.blackPepper400,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
          focusRing: focusRing(
            {
              separation: 1,
              innerColor: colors.blackPepper500,
              outerColor: colors.frenchVanilla100,
            },
            theme
          ),
        },
        // Identical to inverse 'default' styles. ButtonContainer will set opacity to 40%
        disabled: {
          background: colors.frenchVanilla100,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
      };
  }
};
