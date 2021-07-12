import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Placeholder = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField label="Leave a Review">
      <TextArea onChange={handleChange} placeholder="Let us know how we did!" value={value} />
    </FormField>
  );
};
