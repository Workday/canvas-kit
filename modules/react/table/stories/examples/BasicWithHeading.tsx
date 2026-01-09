import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainerStyles: createStyles({
    marginBottom: system.space.x4,
  }),
  tableHeaderStyles: createStyles({
    backgroundColor: system.color.surface.alt.default,
  }),
};

export const BasicWithHeading = () => {
  const headingID = useUniqueId();

  return (
    <>
      <Heading as="h3" id={headingID} size="small" cs={styleOverrides.parentContainerStyles}>
        Pizza Toppings
      </Heading>
      <Table aria-labelledby={headingID}>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col" cs={styleOverrides.tableHeaderStyles}>
              Toppings
            </Table.Header>
            <Table.Header scope="col" cs={styleOverrides.tableHeaderStyles}>
              Amount
            </Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Pepperoni</Table.Cell>
            <Table.Cell>2.5 oz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mozzarella</Table.Cell>
            <Table.Cell>5 oz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Basil</Table.Cell>
            <Table.Cell>10 Leaves</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};
