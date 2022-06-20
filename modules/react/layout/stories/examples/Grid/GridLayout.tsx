import * as React from 'react';
import {Grid} from '@workday/canvas-kit-react/layout';

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      padding="xs"
      marginX="xxxs"
      justifyContent="center"
      backgroundColor="blueberry400"
      color="frenchVanilla100"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

export const GridLayout = () => (
  <Grid gridAutoFlow="row" padding="xs" gridGap="10px 0">
    <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="0 5px">
      <Cell>1</Cell>
      <Cell>2</Cell>
      <Cell>3</Cell>
    </Grid>
    <Grid gridTemplateColumns="repeat(2, 1fr)" gridGap="0 5px">
      <Cell>4</Cell>
      <Cell>5</Cell>
    </Grid>
    <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="0 5px">
      <Cell>6</Cell>
      <Cell>7</Cell>
      <Cell>8</Cell>
    </Grid>
    <Grid>
      <Cell>9</Cell>
    </Grid>
  </Grid>
);
