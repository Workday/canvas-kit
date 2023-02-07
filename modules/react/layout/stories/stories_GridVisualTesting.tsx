import React from 'react';

import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Grid} from '../index';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';

export default withSnapshotsEnabled({
  title: 'Testing/Containers/Layout/Grid',
  component: Grid,
});

export const GridStates = () => {
  return (
    <>
      <h2>Grid States</h2>
      <StaticStates>
        <ComponentStatesTable
          columnProps={[{label: 'Default', props: {}}]}
          rowProps={[
            {
              label: 'Row',
              props: {
                gridAutoFlow: 'column',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
                padding: '16px',
                gridGap: 's',
              },
            },
            {
              label: 'Column',
              props: {
                gridAutoFlow: 'row',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
                padding: '16px',
                gridGap: 's',
              },
            },
            {
              label: 'Template Column',
              props: {
                flexDirection: 'row',
                gridTemplateColumns: 'repeat(2, 1fr)',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
                padding: '16px',
                gridGap: 's',
              },
            },
          ]}
        >
          {props => {
            return (
              <Grid {...props}>
                <Grid
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  paddingY="xxs"
                  paddingX="s"
                >
                  1
                </Grid>
                <Grid
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  paddingY="xxs"
                  paddingX="s"
                >
                  2
                </Grid>
                <Grid
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  paddingY="xxs"
                  paddingX="s"
                >
                  3
                </Grid>
                <Grid
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  paddingY="xxs"
                  paddingX="s"
                >
                  4
                </Grid>
              </Grid>
            );
          }}
        </ComponentStatesTable>
      </StaticStates>
    </>
  );
};

export const GridUILayout = () => {
  return (
    <>
      <h2>Grid UI Layout</h2>
      <StaticStates>
        <ComponentStatesTable
          columnProps={[{label: 'Default', props: {}}]}
          rowProps={[
            {
              label: 'UI - Grid Area',
              props: {
                gridTemplateAreas:
                  "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
                gridTemplateColumns: '1fr 3fr',
                gridTemplateRows: 'auto 300px auto',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
                padding: '16px',
                gridGap: 's',
              },
            },
          ]}
        >
          {props => {
            return (
              <Grid {...props}>
                <Grid
                  gridArea="Header"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  paddingY="xxs"
                  paddingX="s"
                >
                  Header
                </Grid>
                <Grid
                  gridArea="SideBar"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  paddingY="xxs"
                  paddingX="s"
                >
                  SideBar
                </Grid>
                <Grid
                  gridArea="BodyContent"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  paddingY="xxs"
                  paddingX="s"
                >
                  BodyContent
                </Grid>
                <Grid
                  gridArea="Footer"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  paddingY="xxs"
                  paddingX="s"
                >
                  Footer
                </Grid>
              </Grid>
            );
          }}
        </ComponentStatesTable>
      </StaticStates>
    </>
  );
};
