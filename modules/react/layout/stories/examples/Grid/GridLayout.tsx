import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const baseStyles = createStyles({
  alignContent: 'center',
  padding: system.padding.sm,
  justifyContent: 'center',
  backgroundColor: system.color.surface.alt.default,
  color: system.color.fg.default,
  borderRadius: system.shape.md,
});

const Cell = (props: {children: React.ReactNode}) => {
  return <Grid cs={baseStyles}>{props.children}</Grid>;
};

const cellItemStyles = createStyles({
  alignContent: 'center',
  gridAutoColumns: 'max-content',
  height: '100%',
  gridAutoFlow: 'column',
  padding: system.padding.sm,
  justifyContent: 'center',
  backgroundColor: system.color.surface.alt.default,
  color: system.color.fg.default,
  borderRadius: system.shape.md,
});

const CellItem = (props: {children: React.ReactNode}) => {
  return <Grid cs={cellItemStyles}>{props.children}</Grid>;
};

export const GridLayout = () => {
  return (
    <Box cs={{padding: system.padding.sm}}>
      <Grid
        cs={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridGap: system.gap.sm,
          border: `${px2rem(5)} solid ${base.magenta600}`,
          padding: system.padding.sm,
        }}
      >
        <Grid.Item cs={{gridRowStart: '2'}}>
          <Grid
            cs={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gridGap: system.gap.sm,
            }}
          >
            <Cell>1</Cell>
            <Cell>2</Cell>
          </Grid>
        </Grid.Item>
        <Grid.Item cs={{gridRowStart: '1'}}>
          <Grid
            cs={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              gridGap: system.gap.sm,
            }}
          >
            <CellItem>3</CellItem>
            <CellItem>4</CellItem>
            <CellItem>5</CellItem>
            <CellItem>6</CellItem>
            <CellItem>7</CellItem>
          </Grid>
        </Grid.Item>
      </Grid>
    </Box>
  );
};
