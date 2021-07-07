import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, SelectOption} from '@workday/canvas-kit-react/select';

export const Grow = () => {
  const [value, setValue] = React.useState('home');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField grow={true} label="Delivery Address">
      <Select onChange={handleChange} value={value}>
        <SelectOption label="Home - 2950 S Delaware St #200, San Mateo, CA 94403" value="home" />
        <SelectOption
          label="Parent's House - 6110 Stoneridge Mall Rd, Pleasanton, CA 94588"
          value="parents-house"
        />
        <SelectOption label="Office - 160 Spear St #1700, San Francisco, CA 94105" value="office" />
      </Select>
    </FormField>
  );
};
