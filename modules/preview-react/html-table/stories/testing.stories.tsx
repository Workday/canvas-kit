import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/testing';

// unreleased path
import {HtmlTable} from '@workday/canvas-kit-preview-react/html-table';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';

export default {
  title: 'Testing/Preview/HtmlTable',
  component: HtmlTable,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const Standard = () => (
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

const HtmlTableHeaderStencil = createStencil({
  base: {
    backgroundColor: system.color.bg.alt.softer,
    borderRight: `${px2rem(1)} solid ${system.color.border.divider}`,
  },
  modifiers: {
    variant: {
      sticky: {
        position: 'sticky',
        left: system.space.zero,
        zIndex: 2,
      },
    },
  },
});

const FixedColumn = () => (
  <>
    <Heading size="small">HtmlTable Heading</Heading>
    <HtmlTable>
      <HtmlTable.Head>
        <HtmlTable.Row>
          <HtmlTable.Header {...HtmlTableHeaderStencil({variant: 'sticky'})}>
            Header
          </HtmlTable.Header>
          {Array.from({length: 7}).map((_, i) => (
            <HtmlTable.Header key={i} {...HtmlTableHeaderStencil()}>
              Header
            </HtmlTable.Header>
          ))}
        </HtmlTable.Row>
      </HtmlTable.Head>
      <HtmlTable.Body>
        {exampleData.map(item => (
          <>
            <HtmlTable.Row>
              <HtmlTable.Header {...HtmlTableHeaderStencil({variant: 'sticky'})}>
                {item.header}
              </HtmlTable.Header>
              {Array.from({length: 7}).map((_, i) => (
                <HtmlTable.Cell key={i} {...HtmlTableHeaderStencil()}>
                  {item.cell}
                </HtmlTable.Cell>
              ))}
            </HtmlTable.Row>
          </>
        ))}
      </HtmlTable.Body>
    </HtmlTable>
  </>
);

export const HtmlTableStates = {
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
