import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/testing';

import {withSnapshotsEnabled} from '../../../../utils/storybook';

// unreleased path
import {Table} from '@workday/canvas-kit-preview-react/table';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';

export default {
  title: 'Testing/Preview/Table',
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

const FixedColumn = () => (
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
