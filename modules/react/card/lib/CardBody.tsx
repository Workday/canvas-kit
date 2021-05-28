import * as React from 'react';
import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-react/tokens';
import {StyledType, createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps} from '@workday/canvas-kit-labs-react/common';

const Body = styled('div')<BoxProps & StyledType>(type.body);

export const CardBody = createComponent('div')({
  displayName: 'Card.Body',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Body ref={ref} as={Element} {...elemProps}>
        {children}
      </Body>
    );
  },
});
