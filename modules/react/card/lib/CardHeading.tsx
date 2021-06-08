import * as React from 'react';
import styled from '@emotion/styled';
import {type, space} from '@workday/canvas-kit-react/tokens';
import {StyledType, createComponent} from '@workday/canvas-kit-react/common';

export interface CardHeadingProps {
  /**
   * The id of the Card heading. Tie this to an `aria-labelledby` for accessibility.
   */
  id?: string;

  children?: React.ReactNode;
}

const Heading = styled('h3')<StyledType>(type.levels.body.large, {
  marginBottom: space.m,
  marginTop: 0,
});

export const CardHeading = createComponent('h3')({
  displayName: 'Card.Heading',
  Component: ({children, ...elemProps}: CardHeadingProps, ref, Element) => {
    return (
      <Heading ref={ref} as={Element} {...elemProps}>
        {children}
      </Heading>
    );
  },
});
