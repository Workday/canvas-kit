import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Switch} from '@workday/canvas-kit-react/switch';

export const LabelPosition = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField label="Dark Mode" labelPosition={FormField.LabelPosition.Left}>
      <Switch checked={checked} onChange={handleChange} />
    </FormField>
  );
};
