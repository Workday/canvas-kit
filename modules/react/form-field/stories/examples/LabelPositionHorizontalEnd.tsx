import React from 'react';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
  flexDirection: 'column',
});

export const LabelPositionHorizontalEnd = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={formStyles}>
      <FormField orientation="horizontalEnd">
        <FormField.Label>Email</FormField.Label>
        <FormField.Input as={TextInput} value={value} onChange={handleChange} />
      </FormField>
      <FormField orientation="horizontalEnd">
        <FormField.Label>Password</FormField.Label>
        <FormField.Input as={TextInput} type="password" />
      </FormField>
    </form>
  );
};
