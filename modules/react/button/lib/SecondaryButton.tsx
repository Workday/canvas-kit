import * as React from 'react';

import {colors} from '@workday/canvas-kit-react/tokens';
import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
  focusRing,
} from '@workday/canvas-kit-react/common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonColors} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelData, ButtonLabelIcon} from './parts';

export interface SecondaryButtonProps extends Themeable, GrowthBehavior {
  /**
   * The variant of the SecondaryButton.
   * @default undefined
   */
  variant?: 'inverse' | undefined;
  /**
   * The size of the Button.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
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
   * The position of the TertiaryButton icon.
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

export const SecondaryButton = createComponent('button')({
  displayName: 'SecondaryButton',
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
      children,
      ...elemProps
    }: SecondaryButtonProps,
    ref,
    Element
  ) => (
    <ButtonContainer
      ref={ref}
      as={Element}
      colors={getSecondaryButtonColors(variant, theme)}
      size={size}
      {...elemProps}
    >
      {icon && size !== 'small' && iconPosition === 'left' && (
        <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
      )}
      <ButtonLabel>{children}</ButtonLabel>
      {dataLabel && size !== 'small' && <ButtonLabelData>{dataLabel}</ButtonLabelData>}
      {icon && size !== 'small' && iconPosition === 'right' && (
        <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
      )}
    </ButtonContainer>
  ),
});

export const getSecondaryButtonColors = (
  variant: 'inverse' | undefined,
  theme: EmotionCanvasTheme
): ButtonColors => {
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
          background: 'transparent',
          border: colors.blackPepper400,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
        hover: {
          background: colors.blackPepper400,
          border: colors.blackPepper400,
          icon: themePrimary.contrast,
          label: themePrimary.contrast,
          labelData: themePrimary.contrast,
        },
        active: {
          background: colors.blackPepper500,
          border: colors.blackPepper500,
          icon: themePrimary.contrast,
          label: themePrimary.contrast,
          labelData: themePrimary.contrast,
        },
        focus: {
          border: colors.blackPepper400,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
        disabled: {
          background: 'transparent',
          border: 'rgba(30, 30, 30, 0.4)', // Black Pepper 400 @ 40%
          icon: 'rgba(30, 30, 30, 0.4)', // Black Pepper 400 @ 40%
          label: 'rgba(30, 30, 30, 0.4)', // Black Pepper 400 @ 40%
          labelData: 'rgba(30, 30, 30, 0.4)', // Black Pepper 400 @ 40%
        },
      };
    case 'inverse':
      return {
        default: {
          background: 'transparent',
          border: colors.frenchVanilla100,
          icon: colors.frenchVanilla100,
          label: colors.frenchVanilla100,
        },
        hover: {
          background: colors.soap300,
          border: colors.soap300,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
        active: {
          background: colors.soap400,
          border: colors.soap400,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
        focus: {
          background: colors.frenchVanilla100,
          icon: colors.blackPepper400,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
          focusRing: focusRing(
            {
              separation: 2,
              innerColor: 'currentColor',
              outerColor: colors.frenchVanilla100,
            },
            theme
          ),
        },
        disabled: {
          background: 'transparent',
          border: 'rgba(255, 255, 255, 0.4)', // French Vanilla 400 @ 40%
          icon: 'rgba(255, 255, 255, 0.4)', // French Vanilla 400 @ 40%
          label: 'rgba(255, 255, 255, 0.4)', // French Vanilla 400 @ 40%
          labelData: 'rgba(255, 255, 255, 0.4)', // French Vanilla 400 @ 40%
        },
      };
  }
};
