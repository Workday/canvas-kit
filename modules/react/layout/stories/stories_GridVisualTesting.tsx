import React from 'react';

import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Grid} from '../index';
import {ContentDirection, StaticStates} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Containers/Layout/Grid',
  component: Grid,
});

export const GridLTRStates = () => {
  return (
    <>
      <h2>Grid LTR States</h2>
      <StaticStates theme={{canvas: {direction: ContentDirection.LTR}}}>
        <ComponentStatesTable
          columnProps={[{label: 'Default', props: {}}]}
          rowProps={[
            {
              label: 'Row',
              props: {gridAutoFlow: 'row', border: 'solid 2px', borderColor: 'blackPepper500'},
            },
            {
              label: 'Row Reverse',
              props: {
                flexDirection: 'row-reverse',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
            {
              label: 'Column',
              props: {flexDirection: 'column', border: 'solid 2px', borderColor: 'blackPepper500'},
            },
            {
              label: 'Column Reverse',
              props: {
                flexDirection: 'column-reverse',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
          ]}
        >
          {props => {
            return (
              <Grid {...props}>
                <Grid
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  margin="xxs"
                  paddingY="xxs"
                  paddingX="s"
                >
                  1
                </Grid>
                <Grid
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  margin="xxs"
                  paddingY="xxs"
                  paddingX="s"
                >
                  2
                </Grid>
                <Grid
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  margin="xxs"
                  paddingY="xxs"
                  paddingX="s"
                >
                  3
                </Grid>
              </Grid>
            );
          }}
        </ComponentStatesTable>
      </StaticStates>
    </>
  );
};

export const FlexRTLStates = () => {
  return (
    <>
      <h2>Flex RTL States</h2>
      <StaticStates theme={{canvas: {direction: ContentDirection.RTL}}}>
        <ComponentStatesTable
          columnProps={[{label: 'Default', props: {}}]}
          rowProps={[
            {
              label: 'Row',
              props: {flexDirection: 'row', border: 'solid 2px', borderColor: 'blackPepper500'},
            },
            {
              label: 'Row-Reverse',
              props: {
                flexDirection: 'row-reverse',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
            {
              label: 'Column',
              props: {flexDirection: 'column', border: 'solid 2px', borderColor: 'blackPepper500'},
            },
            {
              label: 'Column-Reverse',
              props: {
                flexDirection: 'column-reverse',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
          ]}
        >
          {props => {
            return (
              <Grid {...props}>
                <Grid
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  margin="xxs"
                  paddingY="xxs"
                  paddingX="s"
                >
                  1
                </Grid>
                <Grid
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  margin="xxs"
                  paddingY="xxs"
                  paddingX="s"
                >
                  2
                </Grid>
                <Grid
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  margin="xxs"
                  paddingY="xxs"
                  paddingX="s"
                >
                  3
                </Grid>
              </Grid>
            );
          }}
        </ComponentStatesTable>
      </StaticStates>
    </>
  );
};
