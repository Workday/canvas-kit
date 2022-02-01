import * as React from 'react';
import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-react/tokens';
import {StyledType, createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-labs-react/common';

export interface CardHeadingProps extends BoxProps {
  /**
   * The id of the Card heading. Tie this to an `aria-labelledby` for accessibility.
   */
  id?: string;

  children?: React.ReactNode;
}

const Heading = styled(Box.as('h3'))<StyledType>(type.levels.body.large, {
  fontWeight: type.properties.fontWeights.bold,
});

export const CardHeading = createComponent('h3')({
  displayName: 'Card.Heading',
  Component: ({children, ...elemProps}: CardHeadingProps, ref, Element) => {
    return (
      <Heading ref={ref} marginBottom="m" marginTop={0} as={Element} {...elemProps}>
        {children}
      </Heading>
    );
  },
});
