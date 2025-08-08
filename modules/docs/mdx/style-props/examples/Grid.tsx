import {Grid} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  padding: 'xs',
};

export const GridExample = () => (
  <Grid
    gridGap="xs"
    gridTemplateAreas="'head head' 'nav main' 'nav foot'"
    gridTemplateColumns="1fr 3fr"
    gridTemplateRows="2.5rem minmax(10rem, auto) 2.5rem"
  >
    <Grid.Item gridArea="head" backgroundColor="cinnamon300" {...baseStyles} />
    <Grid.Item gridArea="nav" backgroundColor="sourLemon300" {...baseStyles} />
    <Grid.Item gridArea="main" backgroundColor="blueberry300" {...baseStyles} />
    <Grid.Item gridArea="foot" backgroundColor="cinnamon300" {...baseStyles} />
  </Grid>
);
