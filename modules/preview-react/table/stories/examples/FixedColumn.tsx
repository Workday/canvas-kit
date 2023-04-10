import React from 'react';

import {Table, TableContainer} from '@workday/canvas-kit-preview-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';

export const FixedColumn = () => {
  const exampleData = [
    {
      header: 'Example Header',
      cell: 'Example Cell',
    },
    {
      header: 'Example Header',
      cell: 'Example Cell',
    },
    {
      header: 'Example Header',
      cell: 'Example Cell',
    },
    {
      header: 'Example Header',
      cell: 'Example Cell',
    },
  ];
  return (
    <>
      <Heading size="small">Table Heading</Heading>
      <TableContainer>
        <Table border="none">
          <Table.Head>
            <Table.Row>
              <Table.Header
                position="sticky"
                left="0"
                backgroundColor="soap300"
                borderRight={`2px solid ${colors.soap400}`}
              >
                Header
              </Table.Header>
              <Table.Header>Header</Table.Header>
              <Table.Header>Header</Table.Header>
              <Table.Header>Header</Table.Header>
              <Table.Header>Header</Table.Header>
              <Table.Header>Header</Table.Header>
              <Table.Header>Header</Table.Header>
              <Table.Header>Header</Table.Header>
              <Table.Header>Header</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {exampleData.map(item => (
              <>
                <Table.Row>
                  <Table.Header
                    position="sticky"
                    left="0"
                    backgroundColor="soap300"
                    borderRight={`2px solid ${colors.soap400}`}
                  >
                    {item.header}
                  </Table.Header>
                  <Table.Cell>{item.cell}</Table.Cell>
                  <Table.Cell>{item.cell}</Table.Cell>
                  <Table.Cell>{item.cell}</Table.Cell>
                  <Table.Cell>{item.cell}</Table.Cell>
                  <Table.Cell>{item.cell}</Table.Cell>
                  <Table.Cell>{item.cell}</Table.Cell>
                  <Table.Cell>{item.cell}</Table.Cell>
                  <Table.Cell>{item.cell}</Table.Cell>
                </Table.Row>
              </>
            ))}
          </Table.Body>
        </Table>
      </TableContainer>
    </>
  );
};
