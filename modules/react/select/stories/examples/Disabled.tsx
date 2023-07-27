import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SelectBase} from '@workday/canvas-kit-react/select';

export const Disabled = () => {
  const [value, setValue] = React.useState('small');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField label="Pizza Size">
      <SelectBase>
        <SelectBase.Input onChange={handleChange} value={value} />
        <SelectBase.Popup>
          <SelectBase.Card maxHeight="200px">
            <SelectBase.List>
              <SelectBase.Item>Small</SelectBase.Item>
              <SelectBase.Item>Medium</SelectBase.Item>
              <SelectBase.Item>Large</SelectBase.Item>
            </SelectBase.List>
          </SelectBase.Card>
        </SelectBase.Popup>
      </SelectBase>
      {/* Selected: {model.state.selectedIds[0]} */}
    </FormField>
  );
};
