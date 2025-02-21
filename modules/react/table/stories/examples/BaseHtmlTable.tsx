import React from 'react';

import {BaseTable} from '@workday/canvas-kit-react/table';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.bg.alt.softer,
});

export const BaseHtmlTable = () => {
  return (
    <BaseTable>
      <BaseTable.Caption>Coffee Drinks and Sizes</BaseTable.Caption>
      <BaseTable.Head>
        <BaseTable.Row>
          <BaseTable.Header scope="col" cs={tableHeaderStyles}>
            Drink
          </BaseTable.Header>
          <BaseTable.Header scope="col" cs={tableHeaderStyles}>
            Size
          </BaseTable.Header>
        </BaseTable.Row>
      </BaseTable.Head>
      <BaseTable.Body>
        <BaseTable.Row>
          <BaseTable.Cell>Espresso</BaseTable.Cell>
          <BaseTable.Cell>1 oz</BaseTable.Cell>
        </BaseTable.Row>
        <BaseTable.Row>
          <BaseTable.Cell>Macchiato</BaseTable.Cell>
          <BaseTable.Cell>2 oz Espresso</BaseTable.Cell>
        </BaseTable.Row>
        <BaseTable.Row>
          <BaseTable.Cell>Cortado</BaseTable.Cell>
          <BaseTable.Cell>2 oz Espresso, 1 oz Foamed Milk</BaseTable.Cell>
        </BaseTable.Row>
        <BaseTable.Row></BaseTable.Row>
        <BaseTable.Row>
          <BaseTable.Cell>Cappuccino</BaseTable.Cell>
          <BaseTable.Cell>2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk</BaseTable.Cell>
        </BaseTable.Row>
      </BaseTable.Body>
    </BaseTable>
  );
};
