import React from 'react';
import {Table} from '@workday/canvas-kit-labs-react/table';

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
      <Table.Head>
        <Table.Head.Tr>
          {columns.map((col, i) => (
            <Table.Head.Tr.Th key={i}>{col}</Table.Head.Tr.Th>
          ))}
        </Table.Head.Tr>
      </Table.Head>
      <Table.Body>
        {rows.map((row, i) => (
          <Table.Body.Tr key={i}>
            {row.map((cell, j) => (
              <Table.Body.Tr.Td key={j}>{cell}</Table.Body.Tr.Td>
            ))}
          </Table.Body.Tr>
        ))}
      </Table.Body>
    </Table>
  );
};
