import React from 'react';

import {StaticStates} from '@workday/canvas-kit-labs-react/tokens';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';

import {Box} from '@workday/canvas-kit-labs-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Common',
  component: Box,
});

export const BoxStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {() => {
          return <Box>Hello, Box!</Box>;
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
