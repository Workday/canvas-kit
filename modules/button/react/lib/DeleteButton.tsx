import * as React from 'react';
import {ButtonColors, ButtonSize, ButtonOrAnchorComponent} from './types';
import {ButtonContainer, ButtonLabel} from './parts';
import {GrowthBehavior, useTheme, Themeable, CanvasTheme} from '@workday/canvas-kit-react-common';

export interface DeleteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Themeable,
    GrowthBehavior {
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
   * The alternative container type for the button. Uses Emotion's special `as` prop.
   * Will render an `a` tag instead of a `button` when defined.
   */
  as?: 'a';
}

const getDeleteButtonColors = (theme: CanvasTheme): ButtonColors => ({
  default: {
    background: theme.canvas.palette.error.main,
    label: theme.canvas.palette.error.contrast,
  },
  hover: {
    background: theme.canvas.palette.error.dark,
  },
  active: {
    background: theme.canvas.palette.error.darkest,
  },
  focus: {
    background: theme.canvas.palette.error.main,
  },
  disabled: {
    background: theme.canvas.palette.error.light,
  },
});

const DeleteButton: ButtonOrAnchorComponent<DeleteButtonProps> = ({
  theme = useTheme(),
  size = 'medium',
  buttonRef,
  children,
  ...elemProps
}: DeleteButtonProps) => (
  <ButtonContainer colors={getDeleteButtonColors(theme)} size={size} ref={buttonRef} {...elemProps}>
    <ButtonLabel>{children}</ButtonLabel>
  </ButtonContainer>
);

DeleteButton.Size = ButtonSize;

export default DeleteButton;
