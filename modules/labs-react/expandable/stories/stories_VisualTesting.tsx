import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Container/Expandable',
  component: Expandable,
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
            <Expandable model={{...model, state}}>
              <Expandable.Target headingLevel="h1">
                <Expandable.Title>Hello</Expandable.Title>
              </Expandable.Target>
              <Expandable.Content>Content</Expandable.Content>
            </Expandable>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
