import React from 'react';
import {Grid, GridProps} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

export const TableFooter = createComponent('tfoot')({
  displayName: 'Table.Footer',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Grid as={Element} ref={ref} {...elemProps}>
        {children}
      </Grid>
    );
  },
});
