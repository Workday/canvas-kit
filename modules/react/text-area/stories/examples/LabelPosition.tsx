import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const LabelPosition = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
        <FormField.Hint>Message must be under 200 characters</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
