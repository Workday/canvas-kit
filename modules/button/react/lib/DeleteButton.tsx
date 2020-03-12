import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {ButtonColors, ButtonSize} from './types';
import {ButtonContainer, ButtonLabel} from './parts';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';

export interface DeleteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
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
}

const getDeleteButtonColors = (): ButtonColors => ({
  default: {
    background: colors.cinnamon500,
    label: colors.frenchVanilla100,
  },
  hover: {
    background: colors.cinnamon600,
  },
  active: {
    background: '#80160E',
  },
  focus: {
    background: colors.cinnamon500,
  },
  disabled: {
    background: colors.cinnamon200,
  },
});

const DeleteButton = ({size = 'medium', buttonRef, children, ...elemProps}: DeleteButtonProps) => (
  <ButtonContainer colors={getDeleteButtonColors()} size={size} ref={buttonRef} {...elemProps}>
    <ButtonLabel>{children}</ButtonLabel>
  </ButtonContainer>
);

DeleteButton.Size = ButtonSize;

export default DeleteButton;
