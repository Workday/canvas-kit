import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, SelectOption} from '@workday/canvas-kit-react/select';

export const RefForwarding = () => {
  const [value, setValue] = React.useState('medium');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <FormField label="Pizza Size">
        <Select onChange={handleChange} ref={ref} value={value}>
          <SelectOption label="Small" value="small" />
          <SelectOption label="Medium" value="medium" />
          <SelectOption label="Large" value="large" />
        </Select>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Select</PrimaryButton>
    </>
  );
};
