import React from 'react';

import {HtmlTable} from '@workday/canvas-kit-preview-react/html-table';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.bg.alt.softer,
});

export const Basic = () => {
  return (
    <HtmlTable>
      <HtmlTable.Caption>Coffee Drinks and Sizes</HtmlTable.Caption>
      <HtmlTable.Head>
        <HtmlTable.Row>
          <HtmlTable.Header scope="col" cs={tableHeaderStyles}>
            Drink
          </HtmlTable.Header>
          <HtmlTable.Header scope="col" cs={tableHeaderStyles}>
            Size
          </HtmlTable.Header>
        </HtmlTable.Row>
      </HtmlTable.Head>
      <HtmlTable.Body>
        <HtmlTable.Row>
          <HtmlTable.Cell>Espresso</HtmlTable.Cell>
          <HtmlTable.Cell>1 oz</HtmlTable.Cell>
        </HtmlTable.Row>
        <HtmlTable.Row>
          <HtmlTable.Cell>Macchiato</HtmlTable.Cell>
          <HtmlTable.Cell>2 oz Espresso</HtmlTable.Cell>
        </HtmlTable.Row>
        <HtmlTable.Row>
          <HtmlTable.Cell>Cortado</HtmlTable.Cell>
          <HtmlTable.Cell>2 oz Espresso, 1 oz Foamed Milk</HtmlTable.Cell>
        </HtmlTable.Row>
        <HtmlTable.Row></HtmlTable.Row>
        <HtmlTable.Row>
          <HtmlTable.Cell>Cappuccino</HtmlTable.Cell>
          <HtmlTable.Cell>2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk</HtmlTable.Cell>
        </HtmlTable.Row>
      </HtmlTable.Body>
    </HtmlTable>
  );
};
