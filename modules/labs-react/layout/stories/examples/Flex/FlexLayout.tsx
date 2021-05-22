import * as React from 'react';
import {Flex} from '@workday/canvas-kit-labs-react/layout';

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Flex
      flex={1}
      flexBasis="auto"
      padding="xs"
      marginX="xxxs"
      justifyContent="center"
      backgroundColor="blueberry400"
      color="frenchVanilla100"
      borderRadius="m"
    >
      {props.children}
    </Flex>
  );
};

export const FlexLayout = () => (
  <Flex flexDirection="column" padding="xxxs">
    <Flex marginY="xxxs">
      <Cell>1</Cell>
      <Cell>2</Cell>
      <Cell>3</Cell>
    </Flex>
    <Flex marginY="xxxs">
      <Cell>4</Cell>
      <Cell>5</Cell>
    </Flex>
    <Flex marginY="xxxs">
      <Cell>6</Cell>
      <Cell>7</Cell>
      <Cell>8</Cell>
    </Flex>
    <Flex marginY="xxxs">
      <Cell>9</Cell>
    </Flex>
  </Flex>
);
