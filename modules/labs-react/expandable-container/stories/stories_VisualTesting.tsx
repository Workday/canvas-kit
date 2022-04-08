import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {
  ExpandableContainer,
  useExpandableContainerModel,
} from '@workday/canvas-kit-labs-react/expandable-container';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Expandable Container',
  component: ExpandableContainer,
});

export const ExpandableContainerStates = () => {
  const model = useExpandableContainerModel();

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
            <ExpandableContainer model={{...model, state}}>
              <ExpandableContainer.Target>Toggle</ExpandableContainer.Target>
              <ExpandableContainer.Content>Content</ExpandableContainer.Content>
            </ExpandableContainer>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
