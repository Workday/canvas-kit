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
        paddingY="xxs"
        paddingX="l"
        justifyContent="left"
        alignItems="center"
        minHeight="56px"
        textAlign="left"
        {...elemProps}
      >
        {children}
      </Grid>
    );
  },
});
