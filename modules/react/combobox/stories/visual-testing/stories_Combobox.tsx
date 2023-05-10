import React from 'react';

import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

import {Combobox, useComboboxModel} from '@workday/canvas-kit-react/combobox';

export default withSnapshotsEnabled({
  title: 'Testing/Combobox',
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
          // Do this work to make the test look correct
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const model = useComboboxModel({
            initialVisibility: visibility,
          });
          // eslint-disable-next-line react-hooks/rules-of-hooks
          React.useLayoutEffect(() => {
            if (visibility === 'visible') {
              model.events.setWidth(model.state.inputRef.current.clientWidth);
            }
          }, [visibility, model.events, model.state.inputRef]);
          return (
            <Combobox model={model} {...props}>
              <Combobox.Input />
              <Combobox.Menu.Popper>
                <Combobox.Menu.Card>
                  <Combobox.Menu.List maxHeight={200}>
                    <Combobox.Menu.Item className="focus">Option 1</Combobox.Menu.Item>
                    <Combobox.Menu.Item>Option 2</Combobox.Menu.Item>
                    <Combobox.Menu.Item>Option 3</Combobox.Menu.Item>
                  </Combobox.Menu.List>
                </Combobox.Menu.Card>
              </Combobox.Menu.Popper>
            </Combobox>
          );
        }}
      </ComponentStatesTable>
      <div style={{height: 110}} /* Leave room for the menu */ />
    </StaticStates>
  );
};
