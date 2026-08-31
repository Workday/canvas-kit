import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Caution = () => {
  const [value, setValue] = React.useState('hi');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField error="caution">
        <FormField.Label>Create Password</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} type="password" value={value} onChange={handleChange} />
          <FormField.Hint>
            Alert: Password strength is weak, using more characters is recommended.
          </FormField.Hint>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
