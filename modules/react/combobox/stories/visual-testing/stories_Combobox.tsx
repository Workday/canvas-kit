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
            props: {visibility: 'hidden'},
          },
          {
            label: 'Opened',
            props: {visibility: 'visible'},
          },
        ]}
      >
        {({visibility, ...props}) => {
          return (
            <Combobox initialVisibility={visibility} {...props}>
              <Combobox.Target>Toggle</Combobox.Target>
              <Combobox.Menu.Popper>
                <Combobox.Menu.Card>
                  <Combobox.Menu.List maxHeight={200}>
                    <Combobox.Menu.Item>Option 1</Combobox.Menu.Item>
                    <Combobox.Menu.Item>Option 2</Combobox.Menu.Item>
                    <Combobox.Menu.Item>Option 3</Combobox.Menu.Item>
                  </Combobox.Menu.List>
                </Combobox.Menu.Card>
              </Combobox.Menu.Popper>
            </Combobox>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
