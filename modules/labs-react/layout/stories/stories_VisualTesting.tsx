import React from 'react';

import {StaticStates} from '@workday/canvas-kit-labs-react/tokens';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';

import {Flex} from '@workday/canvas-kit-labs-react/layout';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Layout/Flex',
  component: Flex,
});

export const LayoutStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Default',
            props: {},
          },
        ]}
      >
        {props => {
          return <Flex>hello, flex!</Flex>;
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
