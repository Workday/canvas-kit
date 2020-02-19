import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {ButtonSize, ButtonColors} from './types';
import {ButtonContainer, ButtonLabel} from './parts';

export interface DeleteButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the Button.
   * @default ButtonSize.Medium
   */
  size: ButtonSize;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

const deleteButtonColors: ButtonColors = {
  default: {
    background: colors.cinnamon500,
    border: colors.cinnamon500,
    label: colors.frenchVanilla100,
  },
  hover: {
    background: colors.cinnamon600,
    border: colors.cinnamon600,
    label: colors.frenchVanilla100,
  },
  active: {
    background: '#80160E',
    border: 'transparent',
    label: colors.frenchVanilla100,
  },
  focus: {
    background: colors.cinnamon500,
    label: colors.frenchVanilla100,
  },
  disabled: {
    background: colors.cinnamon200,
    border: 'transparent',
    label: colors.frenchVanilla100,
  },
};

const DeleteButton = (props: DeleteButtonProps) => {
  const {size, buttonRef, children, ...elemProps} = props;
  return (
    <ButtonContainer colors={deleteButtonColors} size={size} buttonRef={buttonRef} {...elemProps}>
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonContainer>
  );
};

DeleteButton.Size = ButtonSize;

DeleteButton.defaultProps = {
  size: ButtonSize.Medium,
};

export default DeleteButton;
