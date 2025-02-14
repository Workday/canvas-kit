/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {HtmlTable} from '..';

describe('HtmlTable', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <HtmlTable>
          <HtmlTable.Caption>HtmlTable Caption</HtmlTable.Caption>
          <HtmlTable.Head>
            <HtmlTable.Row>
              <HtmlTable.Header>HtmlTable Header</HtmlTable.Header>
              <HtmlTable.Header>HtmlTable Header</HtmlTable.Header>
            </HtmlTable.Row>
          </HtmlTable.Head>
          <HtmlTable.Body>
            <HtmlTable.Row>
              <HtmlTable.Header>HtmlTable Header</HtmlTable.Header>
              <HtmlTable.Header>HtmlTable Header</HtmlTable.Header>
            </HtmlTable.Row>
            <HtmlTable.Row>
              <HtmlTable.Header>HtmlTable Header</HtmlTable.Header>
              <HtmlTable.Cell>HtmlTable Data Cell</HtmlTable.Cell>
            </HtmlTable.Row>
            <HtmlTable.Row>
              <HtmlTable.Header>HtmlTable Header</HtmlTable.Header>
              <HtmlTable.Cell>HtmlTable Data Cell</HtmlTable.Cell>
            </HtmlTable.Row>
          </HtmlTable.Body>
          <HtmlTable.Footer>
            <HtmlTable.Row>
              <HtmlTable.Header>HtmlTable Header</HtmlTable.Header>
              <HtmlTable.Cell>HtmlTable Data Cell</HtmlTable.Cell>
            </HtmlTable.Row>
          </HtmlTable.Footer>
        </HtmlTable>
      );
    expect(ssrRender).not.toThrow();
  });
});
