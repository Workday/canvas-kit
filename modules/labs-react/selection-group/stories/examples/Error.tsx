import React from 'react';

import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Error = () => {
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <FormField error="error" as="fieldset">
      <FormField.Label as="legend">Select Your Pizza Crust (Select one)</FormField.Label>
      <FormField.Input
        as={SelectionGroup}
        mode="single"
        selectedIds={selected}
        onSelect={data => setSelected([data.id])}
      >
        <SelectionGroup.List aria-label="Pizza crust options (select one)">
          <SelectionGroup.Item data-id="deep-dish">Deep Dish</SelectionGroup.Item>
          <SelectionGroup.Item data-id="thin">Thin</SelectionGroup.Item>
          <SelectionGroup.Item data-id="gluten-free">Gluten Free</SelectionGroup.Item>
        </SelectionGroup.List>
      </FormField.Input>
      <FormField.Hint>Please select a crust to continue</FormField.Hint>
    </FormField>
  );
};
