
import React from 'react';

import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

import {Combobox} from '@workday/canvas-kit-react/combobox';

export default withSnapshotsEnabled({
  title: 'Testing/Inputs/Combobox',
  component: Combobox,
});

export const ComboboxStates = () => {
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
            <Combobox  initialOpen={open} {...props}>
              <Combobox.Target>Toggle</Combobox.Target>
              <Combobox.Content>Content</Combobox.Content>
            </Combobox>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
