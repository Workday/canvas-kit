import React from 'react';
import {Select, SelectOption} from '@workday/canvas-kit-react/select';

export const AlertStandalone = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <Select error={Select.ErrorType.Alert} onChange={handleChange} value={value}>
      <SelectOption disabled label="Please select a pizza size" value="" />
      <SelectOption label="Small" value="small" />
      <SelectOption label="Medium" value="medium" />
      <SelectOption label="Large" value="large" />
    </Select>
  );
};
