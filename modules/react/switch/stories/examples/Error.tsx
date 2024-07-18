import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Switch} from '@workday/canvas-kit-react/switch';

export const Error = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField error="error">
      <FormField.Label>Dark Mode</FormField.Label>
      <FormField.Input as={Switch} checked={checked} onChange={handleChange} />
      <FormField.Hint>We were unable to activate Dark Mode.</FormField.Hint>
    </FormField>
  );
};
