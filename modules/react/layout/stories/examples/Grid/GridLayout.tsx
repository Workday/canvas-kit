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
      height="100%"
      gridAutoFlow="column"
      padding="xs"
      justifyContent="center"
      backgroundColor="peach300"
      color="blackPepper500"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

export const GridLayout = () => {
  return (
    <Grid padding="xs">
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        padding="xxs"
        border="5px solid #c860d1"
        gridGap="xs"
      >
        <Grid.Item gridRowStart="2">
          <Grid gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gridGap="xxs">
            <Cell>1</Cell>
            <Cell>2</Cell>
          </Grid>
        </Grid.Item>
        <Grid.Item gridRowStart="1">
          <Grid gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))" gridGap="xxs">
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
