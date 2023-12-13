import React from 'react';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

export const RefForwarding = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    changeFocus(ref.current);
  };

  return (
    <Flex gap="xxxs" alignItems="flex-start" flexDirection="column">
      <FormField orientation="vertical">
        <FormField.Label>Email</FormField.Label>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} ref={ref} />
      </FormField>
      <SecondaryButton onClick={handleClick}>Focus Text Input</SecondaryButton>
    </Flex>
  );
};
