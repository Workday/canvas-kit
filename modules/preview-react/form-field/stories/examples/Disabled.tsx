import React from 'react';
import {
  useFormFieldHint,
  useFormFieldInput,
  useFormFieldLabel,
  useFormFieldModel,
  useFormFieldOrientation,
  FormField,
} from '@workday/canvas-kit-preview-react/form-field';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Disabled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const layoutProps = useFormFieldOrientation('vertical');

  return (
    <Flex {...layoutProps}>
      <FormField orientation="vertical">
        <FormField.Label>Email</FormField.Label>
        <FormField.Input as={TextInput} value={value} disabled onChange={handleChange} />
      </FormField>
    </Flex>
  );
};
