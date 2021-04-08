import * as React from 'react';

import {colors} from '@workday/canvas-kit-react/core';
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

export interface PrimaryButtonProps extends Themeable, GrowthBehavior {
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

export const PrimaryButton = createComponent('button')({
  displayName: 'PrimaryButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      size = 'medium',
      dataLabel,
      icon,
      children,
      ...elemProps
    }: PrimaryButtonProps,
    ref,
    Element
  ) => (
    <ButtonContainer
      ref={ref}
      as={Element}
      colors={getPrimaryButtonColors(theme)}
      size={size}
      {...elemProps}
    >
      {icon && size !== 'small' && <ButtonLabelIcon size={size} icon={icon} />}
      <ButtonLabel>{children}</ButtonLabel>
      {dataLabel && size !== 'small' && <ButtonLabelData>{dataLabel}</ButtonLabelData>}
    </ButtonContainer>
  ),
});

export const getPrimaryButtonColors = ({
  canvas: {
    palette: {primary: themePrimary},
  },
}: EmotionCanvasTheme): ButtonColors => ({
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
});
