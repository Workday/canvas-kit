import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Select} from '@workday/canvas-kit-react/select';

const items = [
  {
    id: 'first',
    text: 'First Item',
  },
  {
    id: 'second',
    text: 'Second Item',
  },
  {
    id: 'third',
    text: 'Third Item',
  },
  {
    id: 'fourth',
    text: 'Fourth Item',
  },
];

export const GroupedItems = () => {
  const [selected, setSelected] = React.useState('');

  return (
    <>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={items} getId={item => item.id} getTextValue={item => item.text}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  <Menu.Group title="First Group">
                    <Select.Item data-id="first">First Item</Select.Item>
                    <Select.Item data-id="second">Second Item</Select.Item>
                  </Menu.Group>
                  <Menu.Group title="Second Group">
                    <Select.Item data-id="third">
                      Third Item (with a really, really, really long label)
                    </Select.Item>
                    <Select.Item aria-disabled data-id="fourth">
                      Fourth Item
                    </Select.Item>
                  </Menu.Group>
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
    </>
  );
};
