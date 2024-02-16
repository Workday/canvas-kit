import React from 'react';
import {Table, TableRow} from '@workday/canvas-kit-react/table';

const columns = ['ID', 'Name', 'Position', 'Location'];

const rows = [
  [1, 'Aidan Brown', 'Product Manager', 'San Francisco, CA'],
  [2, 'Betty Chen', 'Product Designer', 'San Francisco, CA'],
  [3, 'Helen Gonzalez', 'Application Developer', 'Portland, OR'],
  [4, 'Timothy May', 'VP, Product Development', 'San Francisco, CA'],
  [5, 'John Hours', 'Product Manager', 'New York, New York'],
];

export const Basic = () => {
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
          <TableRow key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
