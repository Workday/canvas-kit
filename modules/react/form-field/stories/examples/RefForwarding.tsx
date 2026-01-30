import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.space.x1,
  alignItems: 'flex-start',
  flexDirection: 'column',
});

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
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} onChange={handleChange} value={value} ref={ref} />
        </FormField.Field>
      </FormField>
      <SecondaryButton onClick={handleClick}>Focus Text Input</SecondaryButton>
    </Flex>
  );
};
