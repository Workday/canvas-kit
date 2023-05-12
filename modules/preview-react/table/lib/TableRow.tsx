import React from 'react';
import {GridProps, Grid} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

export const TableRow = createComponent('tr')({
  displayName: 'Table.Row',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    const validChildren = (children: React.ReactNode) => {
      return React.Children.toArray(children).filter(child =>
        React.isValidElement(child)
      ) as React.ReactElement[];
    };
    const childrenArray = validChildren(children).length;
    return (
      <Grid
        as={Element}
        ref={ref}
        gridAutoFlow="column"
        gridTemplateColumns={`repeat(${childrenArray}, minmax(10rem, 1fr))`}
        {...elemProps}
      >
        {children}
      </Grid>
    );
  },
});
