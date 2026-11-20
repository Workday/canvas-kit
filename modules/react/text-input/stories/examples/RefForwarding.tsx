import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stackStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: system.gap.lg,
});

export const RefForwarding = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <div className={stackStyles}>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} onChange={handleChange} ref={ref} value={value} />
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Text Input</PrimaryButton>
    </div>
  );
};
