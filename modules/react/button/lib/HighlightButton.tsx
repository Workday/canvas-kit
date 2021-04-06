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
import {ButtonContainer, ButtonLabel, ButtonLabelIcon} from './parts';

export interface HighlightButtonProps extends Themeable, GrowthBehavior {
  /**
   * The size of the HighlightButton.
   * @default 'medium'
   */
  size?: 'medium' | 'large';
  /**
   * The icon of the HighlightButton.
   */
  icon?: CanvasSystemIcon;
  children?: React.ReactNode;
}

const getHighlightButtonColors = ({
  canvas: {
    palette: {primary: themePrimary},
  },
}: EmotionCanvasTheme): ButtonColors => ({
  default: {
    background: colors.soap200,
    border: colors.soap200,
    icon: themePrimary.dark,
    label: themePrimary.dark,
  },
  hover: {
    background: colors.soap400,
    border: 'transparent',
    icon: themePrimary.dark,
    label: themePrimary.dark,
  },
  active: {
    background: colors.soap500,
    border: 'transparent',
    icon: themePrimary.dark,
    label: themePrimary.dark,
  },
  focus: {
    background: colors.soap200,
    border: 'transparent',
    icon: themePrimary.dark,
    label: themePrimary.dark,
  },
  disabled: {
    background: colors.soap100,
    border: 'transparent',
    icon: colors.soap600,
    label: colors.licorice100,
  },
});

export const HighlightButton = createComponent('button')({
  displayName: 'HighlightButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      size = 'medium',
      icon,
      children,
      ...elemProps
    }: HighlightButtonProps,
    ref,
    Element
  ) => (
    <ButtonContainer
      ref={ref}
      as={Element}
      colors={getHighlightButtonColors(theme)}
      size={size}
      {...elemProps}
    >
      {icon && <ButtonLabelIcon size={size} icon={icon} />}
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonContainer>
  ),
});
