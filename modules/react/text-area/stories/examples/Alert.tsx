import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Alert = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="alert">
      <FormField.Label>Please enter your review.</FormField.Label>
      <FormField.Input as={TextArea} onChange={handleChange} value={value} />
      <FormField.Hint>Please enter your review.</FormField.Hint>
    </FormField>
  );
};
