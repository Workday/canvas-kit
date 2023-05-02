import React from 'react';

import {chevronDownSmallIcon, searchIcon} from '@workday/canvas-system-icons-web';
import {Combobox} from '@workday/canvas-kit-react/combobox';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {InputGroup} from '@workday/canvas-kit-react/text-input';

export const Select = () => {
  const items = React.useState(['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime']);

  return (
    <FormField orientation="horizontal">
      <FormField.Label>Fruit</FormField.Label>
      <Combobox
        items={items}
        getId={item => item}
        getTextValue={item => item}
        onChange={event => console.log('input', event.currentTarget.value)}
      >
        <InputGroup>
          <InputGroup.InnerStart>
            <TertiaryButton
              role="presentation"
              icon={searchIcon}
              size="small"
              tabIndex={-1}
              onMouseDown={event => {
                event.preventDefault(); // prevent a focus change
              }}
            />
          </InputGroup.InnerStart>
          <InputGroup.Input as={FormField.Input.as(Combobox.Input)} />
          <InputGroup.InnerEnd>
            <TertiaryButton
              role="presentation"
              icon={chevronDownSmallIcon}
              size="small"
              tabIndex={-1}
              onMouseDown={event => {
                event.preventDefault(); // prevent a focus change
              }}
            />
          </InputGroup.InnerEnd>
        </InputGroup>
        <Combobox.Menu.Popper>
          <Combobox.Menu.Card>
            <Combobox.Menu.List maxHeight={200}>
              {item => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}
            </Combobox.Menu.List>
          </Combobox.Menu.Card>
        </Combobox.Menu.Popper>
      </Combobox>
    </FormField>
  );
};
