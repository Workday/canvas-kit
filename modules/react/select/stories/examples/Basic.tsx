import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, SelectOption} from '@workday/canvas-kit-react/select';

export const Basic = () => {
  const [value, setValue] = React.useState('medium');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField label="Pizza Size">
      <Select onChange={handleChange} value={value}>
        <SelectOption label="Small" value="small" />
        <SelectOption label="Medium" value="medium" />
        <SelectOption label="Large" value="large" />
      </Select>
    </FormField>
  );
};
