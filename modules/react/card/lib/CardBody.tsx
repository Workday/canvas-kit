import * as React from 'react';
import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-react/tokens';
import {StyledType, createComponent} from '@workday/canvas-kit-react/common';

export interface CardBodyProps {
  children?: React.ReactNode;
}

const Body = styled('div')<StyledType>(type.body);

export const CardBody = createComponent('div')({
  displayName: 'Card.Body',
  Component: ({children, ...elemProps}: CardBodyProps, ref, Element) => {
    return (
      <Body ref={ref} as={Element} {...elemProps}>
        {children}
      </Body>
    );
  },
});
