import React from 'react';

import {Table} from '@workday/canvas-kit-preview-react/table';
import {Box} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {space, borderRadius, colors} from '@workday/canvas-kit-react/tokens';
import styled from '@emotion/styled';

const Container = styled(Box)({
  border: `1px solid ${colors.soap500}`,
  borderRadius: borderRadius.l,
  paddingTop: space.xxxs,
  paddingRight: space.xs,
  paddingLeft: space.xs,
  paddingBottom: space.xs,
});

export const TableWithContainer = () => {
  return (
    <>
      <Heading size="small" marginBottom="s">
        Pizza Toppings
      </Heading>
      <Container>
        <Table border="none">
          <Table.Head>
            <Table.Row>
              <Table.Header borderColor="soap500">Toppings</Table.Header>
              <Table.Header borderColor="soap500">Amount</Table.Header>
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
      </Container>
    </>
  );
};
