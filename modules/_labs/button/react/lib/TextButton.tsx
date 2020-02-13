import * as React from 'react';
import styled from '@emotion/styled';
import {TextButtonVariant, TextButtonSize} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface TextButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the TextButton.
   * @default TextButtonVariant.Default
   */
  variant: TextButtonVariant;
  /**
   * The size of the TextButton.
   * @default TextButtonSize.Medium
   */
  size: TextButtonSize;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The icon of the TextButton.
   */
  icon?: CanvasSystemIcon;
}

const Container = styled('button')<TextButtonProps>({});

const TextButton = (props: TextButtonProps) => {
  const {size, buttonRef, icon, children, ...elemProps} = props;
  return (
    <Container size={size} buttonRef={buttonRef} icon={icon} {...elemProps}>
      {children}
    </Container>
  );
};

TextButton.Size = TextButtonSize;

TextButton.defaultProps = {
  size: TextButtonSize.Small,
};

export default TextButton;
