import * as React from 'react';
import {ButtonColors, ButtonSize, ButtonOrAnchorComponent} from './types';
import {ButtonContainer, ButtonLabel} from './parts';
import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
} from '@workday/canvas-kit-react-common';

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
// @ts-ignore ButtonOrAnchorComponent requires a Variant, but will complain Variable 'Variant' implicitly has an 'any' type. ts(7005)
DeleteButton.Variant = undefined;

export default DeleteButton;
