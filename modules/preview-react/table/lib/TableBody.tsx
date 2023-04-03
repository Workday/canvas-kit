import React from 'react';
import {Grid, GridProps} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

export const TableBody = createComponent('tbody')({
  displayName: 'Table.Body',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Grid as={Element} ref={ref} {...elemProps}>
        {children}
      </Grid>
    );
  },
});
