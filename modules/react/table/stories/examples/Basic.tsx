import React from 'react';

import {Table} from '@workday/canvas-kit-react/table';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.surface.alt.default,
});

export const Basic = () => {
  return (
    <Table>
      <Table.Caption>Coffee Drinks and Sizes</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Header scope="col" cs={tableHeaderStyles}>
            Drink
          </Table.Header>
          <Table.Header scope="col" cs={tableHeaderStyles}>
            Size
          </Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Espresso</Table.Cell>
          <Table.Cell>1 oz</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Macchiato</Table.Cell>
          <Table.Cell>2 oz Espresso</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cortado</Table.Cell>
          <Table.Cell>2 oz Espresso, 1 oz Foamed Milk</Table.Cell>
        </Table.Row>
        <Table.Row></Table.Row>
        <Table.Row>
          <Table.Cell>Cappuccino</Table.Cell>
          <Table.Cell>2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
