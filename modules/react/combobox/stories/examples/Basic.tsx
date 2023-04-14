import React from 'react';

import {Combobox} from '@workday/canvas-kit-react/combobox';

export const Basic = () => {
  const [value, setValue] = React.useState('');
  return (
    <Combobox
      value={value}
      onChange={event => {
        setValue(event.target.value);
      }}
    >
      <Combobox.Input />
      <Combobox.Menu.Popper>
        <Combobox.Menu.Card>
          <Combobox.Menu.List>
            <Combobox.Menu.Item>First Option</Combobox.Menu.Item>
            <Combobox.Menu.Item>Second Option</Combobox.Menu.Item>
            <Combobox.Menu.Item>Third Option</Combobox.Menu.Item>
            <Combobox.Menu.Item>Fourth Option</Combobox.Menu.Item>
          </Combobox.Menu.List>
        </Combobox.Menu.Card>
      </Combobox.Menu.Popper>
    </Combobox>
  );
};
