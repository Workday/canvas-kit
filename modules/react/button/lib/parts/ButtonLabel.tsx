import {createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {createStyles, handleCsProp} from '@workday/canvas-kit-styling';

export interface ButtonLabelProps extends BoxProps {}

const buttonLabelStyles = createStyles({
  position: 'relative', // Fixes an IE issue with text within button moving on click
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const ButtonLabel = createComponent('span')({
  displayName: 'ButtonLabel',
  Component: ({children, ...elemProps}: ButtonLabelProps, ref, Element) => {
    return (
      <Box as={Element} ref={ref} {...handleCsProp(elemProps, buttonLabelStyles)}>
        {children}
      </Box>
    );
  },
});
