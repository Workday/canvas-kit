import React from 'react';

import {Table} from '@workday/canvas-kit-preview-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const BasicWithHeading = () => {
  const headingID = useUniqueId();
  
  return (
    <>
      <Heading as="h3" id={headingID} size="small" marginBottom="s">
        Pizza Toppings
      </Heading>
      <Table aria-labelledby={headingID}>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col" backgroundColor="soap100">Toppings</Table.Header>
            <Table.Header scope="col" backgroundColor="soap100">Amount</Table.Header>
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
