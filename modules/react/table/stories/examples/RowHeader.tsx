import React from 'react';
import {Table, TableRow} from '@workday/canvas-kit-react/table';

export const RowHeader = () => {
  return (
    <Table>
      <thead>
        <TableRow header={true}>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Location</th>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <td>1</td>
          <td>Aidan Brown</td>
          <td>Product Manager</td>
          <td>San Francisco, CA</td>
        </TableRow>
      </tbody>
    </Table>
  );
};
