import React from 'react';
import {Grid, Flex} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {Table} from '@workday/canvas-kit-labs-react/table';

const columns = ['ID', 'Name', 'Position', 'Location'];

const rows = [
  [1, 'Aidan Brown', 'Product Manager', 'San Francisco, CA'],
  [2, 'Betty Chen', 'Product Designer', 'San Francisco, CA'],
  [3, 'Helen Gonzalez', 'Application Developer', 'Portland, OR'],
  [4, 'Timothy May', 'VP, Product Development', 'San Francisco, CA'],
  [5, 'John Hours', 'Product Manager', 'New York, New York'],
];

export const GridSizing = () => {
  return (
    <Grid
      as={Table}
      gridTemplateColumns={`repeat(${columns.length}, minmax(100px, 1fr))`}
      overflow="auto"
    >
      <Table.Head display="contents">
        <Table.Head.Tr display="contents">
          {columns.map((col, i) => (
            <Table.Head.Tr.Th key={i}>
              <Flex as="span" alignItems="center" height="100%">
                {col}
              </Flex>
            </Table.Head.Tr.Th>
          ))}
        </Table.Head.Tr>
      </Table.Head>
      <Table.Body display="contents">
        {rows.map((row, i) => (
          <Table.Body.Tr key={i} display="contents">
            {row.map((cell, j) => (
              <OverflowTooltip>
                <Table.Body.Tr.Td
                  key={j}
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {cell}
                </Table.Body.Tr.Td>
              </OverflowTooltip>
            ))}
          </Table.Body.Tr>
        ))}
      </Table.Body>
    </Grid>
  );
};
