import * as React from 'react';
import {BoxProps, Box} from '@workday/canvas-kit-react/layout';
import {colors} from '@workday/canvas-kit-react/tokens';
import {createComponent} from '@workday/canvas-kit-react/common';

/**
 * `Table.Divider` renders an `hr` for dividing rows.
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
        <Table.Divider />
      </Table.Body>
    </Table>
  );
}
```
 */
export const TableDivider = createComponent('hr')({
  displayName: 'Table.Divider',
  Component({...elemProps}: BoxProps, ref, Element) {
    return (
      <Box
        as={Element}
        ref={ref}
        display="block"
        marginY={0}
        marginX="m"
        height={1}
        border={0}
        borderTop={`1px solid ${colors.soap400}`}
        {...elemProps}
      />
    );
  },
});
