import React from 'react';
import {Grid, GridProps} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

export interface TableCellProps extends GridProps {
  headers?: string;
}

/**
 * `Table.Cell` renders a [td](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td) element.
 *
 * @example
 * ```tsx
import {Table} from '@workday/canvas-kit-preview-react/table';

export default function App() {
  return (
    <Table>
      <Table.Body>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Cell>Table Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
```
 */
export const TableCell = createComponent('td')({
  displayName: 'Table.Cell',
  Component: ({children, ...elemProps}: TableCellProps, ref, Element) => {
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
