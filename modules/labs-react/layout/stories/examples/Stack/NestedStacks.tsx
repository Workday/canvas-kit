import * as React from 'react';
import {Stack, Flex} from '@workday/canvas-kit-labs-react/layout';

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Flex
      backgroundColor="blueberry400"
      borderRadius="m"
      color="frenchVanilla100"
      flex={1}
      flexBasis="auto"
      justifyContent="center"
      padding="xs"
    >
      {props.children}
    </Flex>
  );
};

export const NestedStacks = () => {
  return (
    <Stack spacing="xs" border="solid 2px" flexDirection="column">
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
