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
  variant?: 'outline' | 'inverse' | undefined;
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
      {icon && iconPosition === 'left' && (
        <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
      )}
      <ButtonLabel>{children}</ButtonLabel>
      {dataLabel && size !== 'small' && <ButtonLabelData>{dataLabel}</ButtonLabelData>}
      {icon && iconPosition === 'right' && (
        <ButtonLabelIcon size={size} iconPosition={iconPosition} icon={icon} />
      )}
    </ButtonContainer>
  ),
});

export const getSecondaryButtonColors = (
  variant: 'outline' | 'inverse' | undefined,
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
          background: colors.soap200,
          icon: colors.licorice200,
          label: colors.blackPepper400,
          labelData: colors.blackPepper400,
        },
        hover: {
          background: colors.soap400,
          icon: colors.licorice500,
        },
        active: {
          background: colors.soap500,
          icon: colors.licorice500,
        },
        focus: {
          background: colors.soap200,
          icon: colors.licorice500,
        },
        disabled: {
          background: colors.soap100,
          icon: colors.soap600,
          label: colors.licorice100,
          labelData: colors.licorice100,
        },
      };
    case 'outline':
      return {
        default: {
          background: 'transparent',
          border: colors.soap500,
          icon: colors.licorice200,
          label: colors.blackPepper400,
        },
        hover: {
          background: colors.licorice500,
          border: colors.licorice500,
          icon: themePrimary.contrast,
          label: themePrimary.contrast,
        },
        active: {
          background: colors.licorice600,
          border: colors.licorice600,
          icon: themePrimary.contrast,
          label: themePrimary.contrast,
        },
        focus: {
          background: colors.licorice500,
          border: colors.licorice500,
          icon: themePrimary.contrast,
          label: themePrimary.contrast,
        },
        disabled: {
          background: 'transparent',
          border: colors.soap500,
          icon: colors.soap600,
          label: colors.licorice100,
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
          border: 'rgba(255, 255, 255, 0.75)',
          icon: 'rgba(255, 255, 255, 0.75)',
          label: 'rgba(255, 255, 255, 0.75)',
          labelData: 'rgba(255, 255, 255, 0.75)',
        },
      };
  }
};
