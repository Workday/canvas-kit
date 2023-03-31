import React from 'react';

import {Table} from '@workday/canvas-kit-preview-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';

export const FixedColumn = () => {
  const exampleData = [
    {
      header: 'Example Header',
      cell: 'Example Cell',
      hasDivider: true,
    },
    {
      header: 'Example Header',
      cell: 'Example Cell',
      hasDivider: true,
    },
    {
      header: 'Example Header',
      cell: 'Example Cell',
      hasDivider: true,
    },
    {
      header: 'Example Header',
      cell: 'Example Cell',
      hasDivider: false,
    },
  ];
  return (
    <>
      <Heading size="small">Table Heading</Heading>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header
              position="sticky"
              left="0"
              backgroundColor="soap100"
              borderRight={`1px solid ${colors.soap400}`}
            >
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
            <Table.Header borderRight={`1px solid ${colors.soap400}`} backgroundColor="soap100">
              Header
            </Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {exampleData.map(item => (
            <>
              <Table.Row>
                <Table.Header
                  position="sticky"
                  left="0"
                  backgroundColor="soap100"
                  borderRight={`1px solid ${colors.soap400}`}
                >
                  {item.header}
                </Table.Header>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
                <Table.Cell borderRight={`1px solid ${colors.soap400}`}>{item.cell}</Table.Cell>
              </Table.Row>
              {item.hasDivider ? <Table.Divider /> : null}
            </>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
