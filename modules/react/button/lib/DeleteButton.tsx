import * as React from 'react';
import {ButtonColors} from './types';
import {ButtonContainer, ButtonLabel} from './parts';
import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
} from '@workday/canvas-kit-react/common';

export interface DeleteButtonProps extends Themeable, GrowthBehavior {
  /**
   * The size of the Button.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

const getDeleteButtonColors = ({
  canvas: {
    palette: {error: themeError},
  },
}: EmotionCanvasTheme): ButtonColors => ({
  default: {
    background: themeError.main,
    label: themeError.contrast,
  },
  hover: {
    background: themeError.dark,
  },
  active: {
    background: themeError.darkest,
  },
  focus: {
    background: themeError.main,
  },
  disabled: {
    background: themeError.light,
  },
});

export const DeleteButton = createComponent('button')({
  displayName: 'DeleteButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      size = 'medium',
      children,
      ...elemProps
    }: DeleteButtonProps,
    ref,
    Element
  ) => (
    <ButtonContainer
      ref={ref}
      as={Element}
      colors={getDeleteButtonColors(theme)}
      size={size}
      {...elemProps}
    >
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonContainer>
  ),
});
