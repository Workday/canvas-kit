import React from 'react';
import {Table, TableRow} from '@workday/canvas-kit-react/table';

const columns = ['ID', 'Name', 'Position', 'Location'];

const rows = [
  {
    data: [1, 'Aidan Brown', 'Product Manager', 'San Francisco, CA'],
    state: undefined,
  },
  {
    data: [2, 'Betty Chen', 'Product Designer', 'San Francisco, CA'],
    state: TableRow.State.Selected,
  },
  {
    data: [3, 'Helen Gonzalez', 'Application Developer', 'Portland, OR'],
    state: TableRow.State.Alert,
  },
  {
    data: [4, 'Timothy May', 'VP, Product Development', 'San Francisco, CA'],
    state: TableRow.State.InputAlert,
  },
  {
    data: [5, 'John Hours', 'Product Manager', 'New York, New York'],
    state: TableRow.State.Error,
  },
  {
    data: [6, 'Leslie Lang', 'Software Architect', 'New York, New York'],
    state: TableRow.State.InputError,
  },
];

export const RowStates = () => {
  return (
    <Table>
      <thead>
        <TableRow header={true}>
          {columns.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <TableRow key={i} state={row.state}>
            {row.data.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
