import * as React from 'react';
import styled from '@emotion/styled';
import {HighlightButtonSize} from './types';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface HighlightButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the HighlightButton.
   * @default HighlightButtonSize.Medium
   */
  size: HighlightButtonSize;
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

HighlightButton.Size = HighlightButtonSize;

HighlightButton.defaultProps = {
  size: HighlightButtonSize.Medium,
};

export default HighlightButton;
