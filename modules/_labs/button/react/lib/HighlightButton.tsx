import * as React from 'react';
import styled from '@emotion/styled';
import {ButtonSize} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface HighlightButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the HighlightButton.
   * @default ButtonSize.Medium
   */
  size: ButtonSize.Medium | ButtonSize.Large;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The data label of the HighlightButton.
   */
  dataLabel?: String;
  /**
   * The icon of the HighlightButton.
   */
  icon?: CanvasSystemIcon;
}

const Container = styled('button')<HighlightButtonProps>({});

const HighlightButton = (props: HighlightButtonProps) => {
  const {size, buttonRef, dataLabel, icon, children, ...elemProps} = props;
  return (
    <Container size={size} buttonRef={buttonRef} dataLabel={dataLabel} icon={icon} {...elemProps}>
      {children}
    </Container>
  );
};

HighlightButton.Size = {
  Medium: ButtonSize.Medium,
  Large: ButtonSize.Large,
};

HighlightButton.defaultProps = {
  size: ButtonSize.Medium,
};

export default HighlightButton;
