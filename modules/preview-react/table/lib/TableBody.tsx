import React from 'react';
import {Grid, GridProps} from '@workday/canvas-kit-react/layout';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';

const StyledBody = styled(Grid.as('tbody'))<StyledType>({
  'tr:last-of-type td': {
    borderBottom: 'none',
  },
  'tr:last-of-type th': {
    borderBottom: 'none',
  },
  'td:last-of-type': {
    borderRight: 'none',
  },
});

export const TableBody = createComponent('tbody')({
  displayName: 'Table.Body',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <StyledBody as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledBody>
    );
  },
});
