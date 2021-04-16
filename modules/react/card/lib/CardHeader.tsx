import * as React from 'react';
import styled from '@emotion/styled';
import {type, space} from '@workday/canvas-kit-react/tokens';
import {StyledType, createComponent} from '@workday/canvas-kit-react/common';

export interface CardHeaderProps {
  /**
   * The id of the Card heading. Tie this to an `aria-labelledby` for accessibility.
   */
  id?: string;

  children?: React.ReactNode;
}

const Header = styled('h3')<StyledType>(type.h3, {
  marginBottom: space.m,
  marginTop: 0,
});

export const CardHeader = createComponent('h3')({
  displayName: 'Card.Header',
  Component: ({children, ...elemProps}: CardHeaderProps, ref, Element) => {
    return (
      <Header ref={ref} as={Element} {...elemProps}>
        {children}
      </Header>
    );
  },
});
