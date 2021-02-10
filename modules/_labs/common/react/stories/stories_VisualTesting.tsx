import React from 'react';

import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';

import {Common, useCommonModel} from '@workday/canvas-kit-labs-react-common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Common',
  component: Common,
});

export const CommonStates = () => {
  const model = useCommonModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Closed',
            props: {open: false},
          },
          {
            label: 'Opened',
            props: {open: true},
          },
        ]}
      >
        {props => {
          const state = {open: props.open};

          return (
            <Common model={{...model, state}}>
              <Common.Target>Toggle</Common.Target>
              <Common.Content>Content</Common.Content>
            </Common>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
