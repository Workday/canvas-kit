import React from 'react';
import {FormField} from '@workday/canvas-kit-labs-react/form-field';
import {VStack} from '@workday/canvas-kit-labs-react/layout';
import Input from '@material-ui/core/Input';

export const Integrating = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <VStack spacing="xxxs" alignItems="flex-start">
      <FormField>
        <FormField.Label>Full Name</FormField.Label>
        <FormField.Input
          placeholder="Material UI Text Input"
          as={Input}
          onChange={handleChange}
          value={value}
        />
      </FormField>
    </VStack>
  );
};
