import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';

const items = [
  {id: '1', text: 'Cheese'},
  {id: '2', text: 'Olives'},
  {id: '3', text: 'Onions'},
  {id: '4', text: 'Pepperoni'},
  {id: '5', text: 'Peppers'},
];

export const Controlled = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [value, setValue] = React.useState('1');
  const [label, setLabel] = React.useState('Cheese');

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setValue(value);
    setLabel(
      value
        .split(', ')
        .map(item => items.find(i => i.id === item)?.text || 'Not Found')
        .join(', ')
    );
  }

  return (
    <>
      <form
        onSubmit={e => {
          console.log('form submitted');
          e.preventDefault();
        }}
        ref={formRef}
      >
        <Flex gap="s" flexDirection="column">
          <MultiSelect items={items}>
            <FormField orientation="horizontalStart">
              <FormField.Label>Toppings</FormField.Label>
              <FormField.Input
                as={MultiSelect.Input}
                placeholder="Select Multiple"
                removeLabel="Remove"
                name="toppings"
                onChange={handleOnChange}
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
          <Flex gap="s">
            <SecondaryButton
              onClick={e => {
                setValue('1, 2, 3');
              }}
            >
              Set to "Cheese, Olives, Onions" via React `value`
            </SecondaryButton>
            <SecondaryButton
              onClick={e => {
                const input = formRef.current.querySelector('[name=toppings]') as HTMLInputElement;
                input.value = '1, 2';
              }}
            >
              Set to "Cheese, Olives" via DOM `value`
            </SecondaryButton>
          </Flex>
          <div>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </div>
          <div>Selected ID: {value}</div>
          <div>Selected Label: {label}</div>
        </Flex>
      </form>
    </>
  );
};
