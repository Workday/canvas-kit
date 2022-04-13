import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {ExpandableContainer} from '@workday/canvas-kit-labs-react/expandable-container';
import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Expandable Container',
  component: ExpandableContainer,
});

export const ExpandableContainerStates = () => {
  const model = useDisclosureModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Closed',
            props: {visibility: 'hidden', id: '1'},
          },
          {
            label: 'Opened',
            props: {visibility: 'visible', id: '1'},
          },
        ]}
      >
        {props => {
          const state = {visibility: props.visibility, id: props.id};

          return (
            <ExpandableContainer model={{...model, state}}>
              <ExpandableContainer.Header>
                <ExpandableContainer.Button>Hello</ExpandableContainer.Button>
              </ExpandableContainer.Header>
              <ExpandableContainer.Content>Content</ExpandableContainer.Content>
            </ExpandableContainer>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
