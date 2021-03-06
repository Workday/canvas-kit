import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField
      error={FormField.ErrorType.Error}
      hintId="hint-error"
      hintText="Please enter your review."
      label="Leave a Review"
    >
      <TextArea onChange={handleChange} value={value} />
    </FormField>
  );
};
