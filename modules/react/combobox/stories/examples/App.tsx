import React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {accessibilityIcon, accountsIcon} from '@workday/canvas-system-icons-web';

import {system} from '@workday/canvas-tokens-web';

import {MultiSelect} from '@workday/canvas-kit-preview-react/mutliselect';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';

const mainContentStyles = createStyles({
  padding: system.space.x4,
});

// const items = ['Cheese', 'Olives', 'Onions', 'Pepperoni', 'Peppers'];
const items = [
  {id: '1', text: 'Cheese'},
  {id: '2', text: 'Olives'},
  {id: '3', text: 'Onions'},
  {id: '4', text: 'Pepperoni'},
  {id: '5', text: 'Peppers'},
];

export const App = () => {
  const [color, setColor] = React.useState('red');

  const [value, setValue] = React.useState('1');
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
            <input value={color} onChange={event => setColor(event.currentTarget.value)} />
            <MultiSelect items={items}>
              <FormField orientation="horizontal">
                <FormField.Label>Toppings</FormField.Label>
                <FormField.Input
                  as={MultiSelect.Input}
                  placeholder="Select Multiple"
                  data-testid="foo"
                  name="toppings"
                  onChange={e => {
                    setValue(e.currentTarget.value);
                  }}
                  value={value}
                />
                <MultiSelect.Popper>
                  <MultiSelect.Card>
                    <MultiSelect.List>
                      {item => (
                        <MultiSelect.Item data-id={item.id}>
                          <MultiSelect.Item.Icon icon={accessibilityIcon} />
                          <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                          <MultiSelect.Item.Icon icon={accountsIcon} />
                        </MultiSelect.Item>
                      )}
                    </MultiSelect.List>
                  </MultiSelect.Card>
                </MultiSelect.Popper>
              </FormField>
            </MultiSelect>
            <SecondaryButton
              onClick={e => {
                setValue('1, 2, 3');
              }}
            >
              Set to "Cheese, Olives, Onions" via React `value`
            </SecondaryButton>
            <SecondaryButton
              onClick={e => {
                const input = document.querySelector('[name=toppings]') as HTMLInputElement;
                input.value = '1, 2';
              }}
            >
              Set to "Cheese, Olives" via DOM `value`
            </SecondaryButton>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </main>
        </form>
        <div>Selected: {value}</div>
      </>
    </CanvasProvider>
  );
};
