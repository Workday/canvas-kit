import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField orientation="vertical" error="error">
        <FormField.Label>Password</FormField.Label>
        <FormField.Container>
          <FormField.Input as={TextInput} type="password" value={value} onChange={handleChange} />
          <FormField.Hint>Must Contain a number and a capital letter</FormField.Hint>
        </FormField.Container>
      </FormField>
    </Flex>
  );
};
