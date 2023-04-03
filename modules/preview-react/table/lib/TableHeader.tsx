import React from 'react';
import {TableCellProps} from './TableCell';
import {Grid} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

export interface TableHeaderProps extends TableCellProps {
  abbr?: string;
  scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
}

export const TableHeader = createComponent('th')({
  displayName: 'Table.Header',
  Component: ({children, ...elemProps}: TableHeaderProps, ref, Element) => {
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
