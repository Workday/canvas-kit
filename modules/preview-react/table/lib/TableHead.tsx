import React from 'react';
import {GridProps, Grid} from '@workday/canvas-kit-react/layout';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';

const StyledHead = styled(Grid.as('thead'))<StyledType>({
  'th:last-of-type': {
    borderRight: 'none',
  },
});

export const TableHead = createComponent('thead')({
  displayName: 'Table.Head',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <StyledHead as={Element} ref={ref} backgroundColor="soap100" minHeight="48px" {...elemProps}>
        {children}
      </StyledHead>
    );
  },
});
