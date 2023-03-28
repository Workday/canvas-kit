import React from 'react';
import {GridProps, Grid} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

/**
 * `Table.Row` renders a [tr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr) element.
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
