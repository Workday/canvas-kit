import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';

const items = ['Cheese', 'Olives', 'Onions', 'Pepperoni', 'Peppers'];

export const Basic = () => {
  return (
    <>
      <MultiSelect items={items} initialSelectedIds={['Olives', 'Onions', 'Pepperoni']}>
        <FormField orientation="horizontalStart">
          <FormField.Label>Toppings</FormField.Label>
          <FormField.Input
            as={MultiSelect.Input}
            placeholder="Select Multiple"
            removeLabel="Remove"
          />
          <MultiSelect.Popper>
            <MultiSelect.Card>
              <MultiSelect.List>
                {item => (
                  <MultiSelect.Item data-id={item}>
                    <MultiSelect.Item.Text>{item}</MultiSelect.Item.Text>
                  </MultiSelect.Item>
                )}
              </MultiSelect.List>
            </MultiSelect.Card>
          </MultiSelect.Popper>
        </FormField>
      </MultiSelect>
    </>
  );
};
