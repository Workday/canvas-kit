import {styled, createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

export interface ButtonLabelProps extends BoxProps {}

const StyledButtonLabel = styled(Box.as('span'))<StyledType>({
  position: 'relative', // Fixes an IE issue with text within button moving on click
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const ButtonLabel = createComponent('span')({
  displayName: 'ButtonLabel',
  Component: ({children, ...elemProps}: ButtonLabelProps, ref, Element) => {
    return (
      <StyledButtonLabel as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledButtonLabel>
    );
  },
});
