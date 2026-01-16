import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField error="error">
        <FormField.Label>Password</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} type="password" value={value} onChange={handleChange} />
          <FormField.Hint>Error: Must Contain a number and a capital letter</FormField.Hint>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
