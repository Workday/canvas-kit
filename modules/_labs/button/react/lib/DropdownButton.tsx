import * as React from 'react';
import styled from '@emotion/styled';
import {DropdownButtonVariant, ButtonSize} from './types';

export interface DropdownButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the Button.
   * @default DropdownButtonVariant.Secondary
   */
  variant: DropdownButtonVariant;
  /**
   * The size of the Button.
   * @default ButtonSize.Medium
   */
  size: ButtonSize.Medium | ButtonSize.Large;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

const Container = styled('button')<DropdownButtonProps>({});

const DropdownButton = (props: DropdownButtonProps) => {
  const {variant, size, buttonRef, children, ...elemProps} = props;
  return (
    <Container variant={variant} size={size} buttonRef={buttonRef} {...elemProps}>
      {children}
    </Container>
  );
};

DropdownButton.Variant = DropdownButtonVariant;
DropdownButton.Size = {
  Medium: ButtonSize.Medium,
  Large: ButtonSize.Large,
};

DropdownButton.defaultProps = {
  variant: DropdownButtonVariant.Secondary,
  size: ButtonSize.Medium,
};

export default DropdownButton;
