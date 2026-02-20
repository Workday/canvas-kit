import React from 'react';

import {Flex} from '@workday/canvas-kit-react/layout';
// unreleased path
import {Table} from '@workday/canvas-kit-react/table';
import {StaticStates} from '@workday/canvas-kit-react/testing';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Containers/Table',
  component: Table,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const Standard = () => (
  <Table>
    <Table.Caption>Table Caption</Table.Caption>
    <Table.Head>
      <Table.Row>
        <Table.Header>Table Header</Table.Header>
        <Table.Header>Table Header</Table.Header>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Header>Table Header</Table.Header>
        <Table.Header>Table Header</Table.Header>
      </Table.Row>
      <Table.Row>
        <Table.Header>Table Header</Table.Header>
        <Table.Cell>Table Data Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Header>Table Header</Table.Header>
        <Table.Cell>Table Data Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.Header>Table Header</Table.Header>
        <Table.Cell>Table Data Cell</Table.Cell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

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

const tableHeaderStencil = createStencil({
  base: {
    backgroundColor: system.color.bg.alt.softer,
    borderRight: `${px2rem(1)} solid ${system.color.border.divider}`,
  },
  modifiers: {
    variant: {
      sticky: {
        position: 'sticky',
        left: 0,
        zIndex: 2,
      },
    },
  },
});

const FixedColumn = () => (
  <>
    <Heading size="small">Table Heading</Heading>
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header {...tableHeaderStencil({variant: 'sticky'})}>Header</Table.Header>
          {Array.from({length: 7}).map((_, i) => (
            <Table.Header key={i} {...tableHeaderStencil()}>
              Header
            </Table.Header>
          ))}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {exampleData.map(item => (
          <>
            <Table.Row>
              <Table.Header {...tableHeaderStencil({variant: 'sticky'})}>
                {item.header}
              </Table.Header>
              {Array.from({length: 7}).map((_, i) => (
                <Table.Cell key={i} {...tableHeaderStencil()}>
                  {item.cell}
                </Table.Cell>
              ))}
            </Table.Row>
          </>
        ))}
      </Table.Body>
    </Table>
  </>
);

export const TableStates = {
  render: () => {
    return (
      <StaticStates>
        <Flex gap="xs" flexDirection="column">
          <div>
            <h3>Standard</h3>
            <Standard />
          </div>
          <div>
            <h3>Fixed Column with Heading</h3>
            <FixedColumn />
          </div>
        </Flex>
      </StaticStates>
    );
  },
};
