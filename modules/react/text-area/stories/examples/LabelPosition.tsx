import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const LabelPosition = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField orientation="horizontal">
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Input as={TextArea} onChange={handleChange} value={value} />
    </FormField>
  );
};
