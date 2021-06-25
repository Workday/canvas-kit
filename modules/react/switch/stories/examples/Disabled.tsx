import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Switch} from '@workday/canvas-kit-react/switch';

export const Disabled = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField label="Dark Mode">
      <Switch checked={checked} disabled onChange={handleChange} />
    </FormField>
  );
};
