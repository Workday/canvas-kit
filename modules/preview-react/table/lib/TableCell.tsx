import React from 'react';
import {Grid, GridProps} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

export const TableCell = createComponent('td')({
  displayName: 'Table.Cell',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Grid
        as={Element}
        ref={ref}
        alignItems="center"
        backgroundColor="frenchVanilla100"
        justifyContent="left"
        minHeight="48px"
        paddingY="xxs"
        paddingX="s"
        textAlign="left"
        wordBreak="break-word"
        {...elemProps}
      >
        {children}
      </Grid>
    );
  },
});
