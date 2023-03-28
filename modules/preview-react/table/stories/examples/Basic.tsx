import React from 'react';

import {Table} from '@workday/canvas-kit-preview-react/table';

export const Basic = () => {
  return (
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
  );
};
