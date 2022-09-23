import * as React from 'react';
import {ButtonColors} from './types';
import {BaseButton, BaseButtonProps, getMinWidthStyles, getPaddingStyles} from './BaseButton';
import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
} from '@workday/canvas-kit-react/common';

export interface DeleteButtonProps extends Themeable, GrowthBehavior, BaseButtonProps {
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
    opacity: '1', // allows for overriding the default opacity of 0.4
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
    <BaseButton
      padding={getPaddingStyles(children, size, undefined, undefined)}
      minWidth={getMinWidthStyles(children, size)}
      ref={ref}
      as={Element}
      colors={getDeleteButtonColors(theme)}
      size={size}
      {...elemProps}
    >
      <BaseButton.Label>{children}</BaseButton.Label>
    </BaseButton>
  ),
});
