/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Table} from '..';

describe('Table', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
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
    expect(ssrRender).not.toThrow();
  });
});
