import * as React from 'react';
import {Grid} from '@workday/canvas-kit-react/layout';

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
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
      alignContent="center"
      gridAutoColumns="max-content"
      gridGap="0 16px"
      height="100%"
      gridAutoFlow="column"
      padding="xs"
      justifyContent="center"
      backgroundColor="sourLemon600"
      color="frenchVanilla100"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

export const GridLayout = () => {
  return (
    <Grid gridAutoFlow="row" padding="xs" gridGap="10px 0">
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gridGap="10px"
        padding="xxs"
        border="5px solid #c860d1"
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
};
