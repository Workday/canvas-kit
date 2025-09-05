import React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {system} from '@workday/canvas-tokens-web';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';

const mainContentStyles = createStyles({
  padding: system.space.x4,
});

const items = [
  {id: '1', text: 'Cheese'},
  {id: '2', text: 'Olives'},
  {id: '3', text: 'Onions'},
  {id: '4', text: 'Pepperoni'},
  {id: '5', text: 'Peppers'},
];

export const Complex = () => {
  const [value, setValue] = React.useState('');
  const [label, setLabel] = React.useState('');
  return (
    <CanvasProvider>
      <>
        <form
          onSubmit={e => {
            console.log('form submitted');
            e.preventDefault();
          }}
        >
          <main className={mainContentStyles}>
            <MultiSelect items={items} getId={i => i.id} getTextValue={i => i.text}>
              <FormField orientation="horizontalStart">
                <FormField.Label>Toppings</FormField.Label>
                <FormField.Input
                  as={MultiSelect.Input}
                  placeholder="Select Multiple"
                  removeLabel="Remove"
                  name="toppings"
                  onChange={e => {
                    const value = e.currentTarget.value;
                    setValue(value);
                    setLabel(
                      value
                        .split(', ')
                        .map(item => items.find(i => i.id === item)?.text || 'Not Found')
                        .join(', ')
                    );
                  }}
                  value={value}
                />
                <MultiSelect.Popper>
                  <MultiSelect.Card>
                    <MultiSelect.List>
                      {item => (
                        <MultiSelect.Item data-id={item.id}>
                          <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                        </MultiSelect.Item>
                      )}
                    </MultiSelect.List>
                  </MultiSelect.Card>
                </MultiSelect.Popper>
              </FormField>
            </MultiSelect>
          </main>
        </form>
        <div>Selected IDs: {value}</div>
        <div>Selected Labels: {label}</div>
      </>
    </CanvasProvider>
  );
};
