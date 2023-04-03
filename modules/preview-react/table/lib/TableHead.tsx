import React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {GridProps, Grid} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

export const TableHead = createComponent('thead')({
  displayName: 'Table.Head',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Grid
        as={Element}
        ref={ref}
        backgroundColor="soap100"
        borderBottom={`1px solid ${colors.soap500}`}
        minHeight="48px"
        {...elemProps}
      >
        {children}
      </Grid>
    );
  },
});
