import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {MultiSelect, useMultiSelectModel} from '@workday/canvas-kit-preview-react/multi-select';

const items = ['Cheese', 'Olives', 'Onions', 'Pepperoni', 'Peppers'];

export const Error = () => {
  const model = useMultiSelectModel({
    items,
    initialSelectedIds: [],
  });
  return (
    <>
      <MultiSelect model={model}>
        <FormField
          orientation="horizontalStart"
          error={
            model.state.selectedIds.length < 1
              ? 'error'
              : model.state.selectedIds.length > 3
              ? 'caution'
              : undefined
          }
        >
          <FormField.Label>Toppings</FormField.Label>
          <FormField.Field>
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

            <FormField.Hint>
              {model.state.selectedIds.length < 1
                ? 'Select at least one topping.'
                : model.state.selectedIds.length > 3
                ? 'More than 3 toppings cost extra.'
                : undefined}
            </FormField.Hint>
          </FormField.Field>
        </FormField>
      </MultiSelect>
    </>
  );
};
