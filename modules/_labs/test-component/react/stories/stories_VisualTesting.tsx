import React from 'react';

import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';

import {TestComponent, useTestComponentModel} from '@workday/canvas-kit-labs-react-test-component';

export default withSnapshotsEnabled({
  title: 'Testing|React/Labs/Test Component',
  component: TestComponent,
});

export const TestComponentStates = () => {
  const model = useTestComponentModel();

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
            <TestComponent model={{...model, state}}>
              <TestComponent.Target>Toggle</TestComponent.Target>
              <TestComponent.Content>Content</TestComponent.Content>
            </TestComponent>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
