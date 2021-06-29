import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Required = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField label="Terms" required={true}>
      <Checkbox checked={checked} label="I agree to the terms" onChange={handleChange} />
    </FormField>
  );
};
