import React from 'react';
import {useFormFieldOrientation, FormField} from '@workday/canvas-kit-preview-react/form-field';
import {ErrorType, useModelContext} from '@workday/canvas-kit-react/common';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Select} from '@workday/canvas-kit-react/select';
import {TextArea} from '@workday/canvas-kit-react/text-area';
import {Switch} from '@workday/canvas-kit-react/switch';

export const Alert = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const layoutProps = useFormFieldOrientation('vertical');

  return (
    <Flex {...layoutProps}>
      <FormField orientation="vertical" error="alert">
        <FormField.Label>First Name</FormField.Label>
        <FormField.Container>
          <FormField.Input as={TextInput} value={value} onChange={handleChange} />
          <FormField.Hint>Cannot contain numbers </FormField.Hint>
        </FormField.Container>
      </FormField>
    </Flex>
  );
};
