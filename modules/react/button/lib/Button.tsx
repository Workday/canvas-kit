import * as React from 'react';

import {colors} from '@workday/canvas-kit-react/tokens';
import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
} from '@workday/canvas-kit-react/common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonColors} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelData, ButtonLabelIcon} from './parts';

export interface ButtonProps extends Themeable, GrowthBehavior {
  /**
   * The variant of the Button.
   * @default 'secondary'
   */
  variant?: 'primary' | 'secondary';
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
  children?: React.ReactNode;
}

export const Button = createComponent('button')({
  displayName: 'Button',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      variant = 'secondary',
      size = 'medium',
      dataLabel,
      icon,
      children,
      ...elemProps
    }: ButtonProps,
    ref,
    Element
  ) => (
    <ButtonContainer
      ref={ref}
      as={Element}
      colors={getButtonColors(variant, theme)}
      size={size}
      {...elemProps}
    >
      {icon && size !== 'small' && <ButtonLabelIcon size={size} icon={icon} />}
      <ButtonLabel>{children}</ButtonLabel>
      {dataLabel && size !== 'small' && <ButtonLabelData>{dataLabel}</ButtonLabelData>}
    </ButtonContainer>
  ),
});

export const getButtonColors = (
  variant: 'primary' | 'secondary',
  {
    canvas: {
      palette: {primary: themePrimary},
    },
  }: EmotionCanvasTheme
): ButtonColors => {
  switch (variant) {
    case 'primary':
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
          background: themePrimary.light,
        },
      };
    case 'secondary':
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
  }
};
