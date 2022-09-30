import React from 'react';

import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/common';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

import {Testing} from '@workday/canvas-kit-react/testing';

export default withSnapshotsEnabled({
  title: 'Testing/React/Containers/Testing',
  component: Testing,
});

export const TestingStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        columnProps={[{label: 'Default', props: {}}]}
        rowProps={[
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
        {({open, ...props}) => {
          return (
            <Testing initialOpen={open} {...props}>
              <Testing.Target>Toggle</Testing.Target>
              <Testing.Content>Content</Testing.Content>
            </Testing>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
