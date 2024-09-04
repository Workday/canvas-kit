import React from 'react';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

export const LabelPositionHorizontal = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <FormField orientation="horizontalStart">
        <FormField.Label>Email</FormField.Label>
        <FormField.Input as={TextInput} value={value} onChange={handleChange} />
      </FormField>
      <FormField orientation="horizontalStart">
        <FormField.Label>Password</FormField.Label>
        <FormField.Input as={TextInput} type="password" />
      </FormField>
    </form>
  );
};
