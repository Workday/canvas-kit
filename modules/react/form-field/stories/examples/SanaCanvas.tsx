import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const SanaCanvas = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField data-theme="sana-canvas">
      <FormField.Label>First Name</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} value={value} onChange={handleChange} />
      </FormField.Field>
    </FormField>
  );
};
