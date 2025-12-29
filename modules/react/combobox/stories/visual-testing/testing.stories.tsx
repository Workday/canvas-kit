import React from 'react';

import {Combobox, useComboboxModel} from '@workday/canvas-kit-react/combobox';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';

export default {
  title: 'Testing/Combobox',
  component: Combobox,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const ComboboxStates = {
  render: () => {
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

            const model = useComboboxModel({
              initialVisibility: visibility,
            });

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
  },
};
