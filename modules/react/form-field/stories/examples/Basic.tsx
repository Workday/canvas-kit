import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormFieldLabelPosition} from '../../lib/types';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField label="Email" labelPosition={FormFieldLabelPosition.Left} hintText="foo bar">
      <TextInput onChange={handleChange} value={value} />
    </FormField>
  );
};
