import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/testing';

import {withSnapshotsEnabled} from '../../../../utils/storybook';

// unreleased path
import {Table} from '@workday/canvas-kit-react/table';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';

export default {
  title: 'Testing/Containers/Table',
  component: Table,
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
        left: system.space.zero,
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
          {[Array.from({length: 8})].map((_, i) => (
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
              {[Array.from({length: 8})].map((_, i) => (
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

export const TableStates = withSnapshotsEnabled(() => {
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
});
