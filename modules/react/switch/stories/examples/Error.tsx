import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Switch} from '@workday/canvas-kit-react/switch';

export const Error = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField
      error={FormField.ErrorType.Error}
      hintId="hint-alert"
      hintText="We were unable to activate Dark Mode."
      label="Dark Mode"
    >
      <Switch checked={checked} onChange={handleChange} />
    </FormField>
  );
};
