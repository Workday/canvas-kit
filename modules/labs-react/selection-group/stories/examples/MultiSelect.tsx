import React from 'react';

import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const MultiSelect = () => {
  const [selected, setSelected] = React.useState<string[]>(['monday']);

  const handleSelect = (data: {id: string}) => {
    setSelected(previous =>
      previous.includes(data.id) ? previous.filter(id => id !== data.id) : previous.concat(data.id)
    );
  };

  return (
    <>
      <FormField as="fieldset">
        <FormField.Label as="legend">Available Days (Select all that apply)</FormField.Label>
        <FormField.Input
          as={SelectionGroup}
          mode="multiple"
          selectedIds={selected}
          onSelect={handleSelect}
        >
          <SelectionGroup.List aria-label="Available days (select all that apply)">
            <SelectionGroup.Item data-id="monday">Monday</SelectionGroup.Item>
            <SelectionGroup.Item data-id="tuesday">Tuesday</SelectionGroup.Item>
            <SelectionGroup.Item data-id="wednesday">Wednesday</SelectionGroup.Item>
            <SelectionGroup.Item data-id="thursday">Thursday</SelectionGroup.Item>
            <SelectionGroup.Item data-id="friday">Friday</SelectionGroup.Item>
          </SelectionGroup.List>
        </FormField.Input>
      </FormField>
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: {selected.join(', ') || 'None'}
      </BodyText>
    </>
  );
};
