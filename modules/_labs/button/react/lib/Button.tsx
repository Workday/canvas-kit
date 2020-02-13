import * as React from 'react';
import styled from '@emotion/styled';
import {ButtonVariant, ButtonSize} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the Button.
   * @default ButtonVariant.Secondary
   */
  variant: ButtonVariant;
  /**
   * The size of the Button.
   * @default ButtonSize.Medium
   */
  size: ButtonSize;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The data label of the Button.
   */
  dataLabel?: String;
  /**
   * The icon of the Button.
   */
  icon?: CanvasSystemIcon;
}

const Container = styled('button')<ButtonProps>({});

const Button = (props: ButtonProps) => {
  const {variant, size, buttonRef, dataLabel, icon, children, ...elemProps} = props;
  return (
    <Container
      variant={variant}
      size={size}
      buttonRef={buttonRef}
      dataLabel={dataLabel}
      icon={icon}
      {...elemProps}
    >
      {children}
    </Container>
  );
};

Button.Variant = ButtonVariant;
Button.Size = ButtonSize;

Button.defaultProps = {
  variant: ButtonVariant.Secondary,
  size: ButtonSize.Medium,
};

export default Button;
