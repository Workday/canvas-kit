import React from 'react';
import {Select, SelectOption} from '@workday/canvas-kit-react/select';

export const Standalone = () => {
  const [value, setValue] = React.useState('medium');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <Select onChange={handleChange} value={value}>
      <SelectOption label="Small" value="small" />
      <SelectOption label="Medium" value="medium" />
      <SelectOption label="Large" value="large" />
    </Select>
  );
};
