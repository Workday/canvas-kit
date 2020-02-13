import * as React from 'react';
import styled from '@emotion/styled';
import {ButtonSize} from './types';

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

const Container = styled('button')<DeleteButtonProps>({});

const DeleteButton = (props: DeleteButtonProps) => {
  const {size, buttonRef, children, ...elemProps} = props;
  return (
    <Container size={size} buttonRef={buttonRef} {...elemProps}>
      {children}
    </Container>
  );
};

DeleteButton.Size = ButtonSize;

DeleteButton.defaultProps = {
  size: ButtonSize.Medium,
};

export default DeleteButton;
