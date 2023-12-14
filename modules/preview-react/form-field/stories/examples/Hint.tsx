import React from 'react';
import {useFormFieldOrientation, FormField} from '@workday/canvas-kit-preview-react/form-field';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Hint = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const layoutProps = useFormFieldOrientation('vertical');

  return (
    <Flex {...layoutProps}>
      <FormField orientation="horizontal">
        <FormField.Label>First Name</FormField.Label>
        <FormField.Container>
          <FormField.Input as={TextInput} value={value} onChange={handleChange} />
          <FormField.Hint>Cannot contain numbers</FormField.Hint>
        </FormField.Container>
      </FormField>
    </Flex>
  );
};
