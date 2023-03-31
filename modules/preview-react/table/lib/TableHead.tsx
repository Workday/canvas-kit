import React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {GridProps, Grid} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

/**
 * `Table.Head` renders a [thead](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead) element.
 *
 * @example
 * ```tsx
import {Table} from '@workday/canvas-kit-preview-react/table';

export default function App() {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Cell>Table Cell</Table.Cell>
        </Table.Row>
      </Table.Head>
    </Table>
  );
}
```
 */
export const TableHead = createComponent('thead')({
  displayName: 'Table.Head',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Grid
        as={Element}
        ref={ref}
        backgroundColor="soap100"
        borderBottom={`1px solid ${colors.soap400}`}
        minHeight="48px"
        {...elemProps}
      >
        {children}
      </Grid>
    );
  },
});
