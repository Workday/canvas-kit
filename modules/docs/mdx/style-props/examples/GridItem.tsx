import {Grid} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  padding: 'xs',
};

export const GridItem = () => (
  <Grid
    gridGap="xs"
    gridTemplateColumns="1fr 3fr"
    gridTemplateRows="2.5rem minmax(10rem, auto) 2.5rem"
  >
    <Grid.Item gridColumn="1 / 3" gridRow="1" backgroundColor="cinnamon300" {...baseStyles} />
    <Grid.Item gridColumn="1" gridRow="2 / 4" backgroundColor="sourLemon300" {...baseStyles} />
    <Grid.Item gridColumn="2" gridRow="2" backgroundColor="blueberry300" {...baseStyles} />
    <Grid.Item gridColumn="2" gridRow="3" backgroundColor="cinnamon300" {...baseStyles} />
  </Grid>
);
