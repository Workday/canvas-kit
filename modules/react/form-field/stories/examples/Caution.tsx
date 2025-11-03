import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Caution = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex>
      <FormField error="caution">
        <FormField.Label>First Name</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} value={value} onChange={handleChange} />
          <FormField.Hint>Cannot contain numbers</FormField.Hint>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
