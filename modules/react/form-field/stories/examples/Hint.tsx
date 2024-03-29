import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const Hint = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField
      hintId={useUniqueId()}
      hintText="This address will be shown as a shipping address option for future orders."
      label="Address Name"
    >
      <TextInput onChange={handleChange} value={value} />
    </FormField>
  );
};
