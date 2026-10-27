import React from 'react';

import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const SingleSelect = () => {
  const [selected, setSelected] = React.useState('email');

  return (
    <>
      <FormField as="fieldset">
        <FormField.Label as="legend">Preferred Contact Method (Select one)</FormField.Label>
        <FormField.Input
          as={SelectionGroup}
          mode="single"
          selectedIds={[selected]}
          onSelect={data => setSelected(data.id)}
        >
          <SelectionGroup.List aria-label="Preferred contact method (select one)">
            <SelectionGroup.Item data-id="email">Email</SelectionGroup.Item>
            <SelectionGroup.Item data-id="phone">Phone</SelectionGroup.Item>
            <SelectionGroup.Item data-id="text">Text Message</SelectionGroup.Item>
          </SelectionGroup.List>
        </FormField.Input>
      </FormField>
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: {selected}
      </BodyText>
    </>
  );
};
