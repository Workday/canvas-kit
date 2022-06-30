import * as React from 'react';
import {Grid} from '@workday/canvas-kit-react/layout';

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      padding="xs"
      justifyContent="center"
      backgroundColor="soap500"
      color="blackPepper500"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

const CellItem = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      padding="xs"
      justifyContent="center"
      backgroundColor="blueberry500"
      color="frenchVanilla100"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

export const GridLayout = () => (
  <Grid gridAutoFlow="row" padding="xs" gridGap="10px 0">
    <Grid
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      gridGap="10px"
      padding="xs"
      border="5px solid #8ea618"
    >
      <Cell>1</Cell>
      <Cell>2</Cell>
      <Grid.Item gridRowStart="1">
        <CellItem>Child</CellItem>
      </Grid.Item>
      <Cell>3</Cell>
      <Cell>4</Cell>
      <Cell>5</Cell>
    </Grid>
    <Grid
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      gridGap="10px"
      padding="xxs"
      border="5px solid #ff671b"
    >
      <Grid.Item gridRowStart="2">
        <Grid gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gridGap="10px">
          <Cell>1</Cell>
          <Cell>2</Cell>
        </Grid>
      </Grid.Item>
      <Grid.Item gridRowStart="1">
        <Grid gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))" gridGap="10px">
          <CellItem>3</CellItem>
          <CellItem>4</CellItem>
          <CellItem>5</CellItem>
          <CellItem>6</CellItem>
          <CellItem>7</CellItem>
        </Grid>
      </Grid.Item>
    </Grid>
  </Grid>
);
