import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="error">
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
        <FormField.Hint>Please enter your review.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
