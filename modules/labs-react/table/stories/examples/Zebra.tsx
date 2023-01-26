import React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {Table} from '@workday/canvas-kit-labs-react/table';

const rows = [
  [1, 'Aidan Brown', 'Product Manager', 'San Francisco, CA'],
  [2, 'Betty Chen', 'Product Designer', 'San Francisco, CA'],
  [3, 'Helen Gonzalez', 'Application Developer', 'Portland, OR'],
  [4, 'Timothy May', 'VP, Product Development', 'San Francisco, CA'],
  [5, 'John Hours', 'Product Manager', 'New York, New York'],
];

export const Zebra = () => {
  return (
    <Table>
      <Table.Body>
        {rows.map((row, i) => (
          <Table.Body.Tr backgroundColor={i % 2 ? 'transparent' : colors.blueberry100} key={i}>
            {row.map((cell, j) => (
              <Table.Body.Tr.Td key={j}>{cell}</Table.Body.Tr.Td>
            ))}
          </Table.Body.Tr>
        ))}
      </Table.Body>
    </Table>
  );
};
