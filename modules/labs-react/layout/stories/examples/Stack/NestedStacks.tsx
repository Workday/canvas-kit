import * as React from 'react';
import {Stack, Flex} from '@workday/canvas-kit-labs-react/layout';

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Flex
      flex={1}
      padding="xs"
      justifyContent="center"
      backgroundColor="blueberry400"
      color="frenchVanilla100"
      borderRadius="m"
    >
      {props.children}
    </Flex>
  );
};

export const NestedStacks = () => {
  return (
    <Stack spacing="xs" border="solid 1px" flexDirection="column" padding="xs">
      <Stack spacing="xs" flexDirection="row">
        <Cell>1</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
      </Stack>
      <Stack spacing="xs" flexDirection="row">
        <Cell>4</Cell>
        <Cell>5</Cell>
      </Stack>
      <Stack spacing="xs" flexDirection="row">
        <Cell>6</Cell>
        <Cell>7</Cell>
        <Cell>8</Cell>
      </Stack>
      <Cell>9</Cell>
    </Stack>
  );
};
