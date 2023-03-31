import React from 'react';

import {Table} from '@workday/canvas-kit-preview-react/table';
import {Heading} from '@workday/canvas-kit-react/text';

export const BasicWithHeading = () => {
  return (
    <>
      <Heading size="small">Table Heading</Heading>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header backgroundColor="soap100">Table Header</Table.Header>
            <Table.Header backgroundColor="soap100">Table Header</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Table Data Cell</Table.Cell>
            <Table.Cell>Table Data Cell</Table.Cell>
          </Table.Row>
          <Table.Divider />
          <Table.Row>
            <Table.Cell>Table Data Cell</Table.Cell>
            <Table.Cell>Table Data Cell</Table.Cell>
          </Table.Row>
          <Table.Divider />
          <Table.Row>
            <Table.Cell>Table Data Cell</Table.Cell>
            <Table.Cell>Table Data Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Divider />
        <Table.Footer>
          <Table.Row>
            <Table.Cell>Table Data Cell</Table.Cell>
            <Table.Cell>Table Data Cell</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
};
