import React from 'react';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';

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
      <TextInput orientation="vertical">
        <TextInput.Label>Email</TextInput.Label>
        <TextInput.Field onChange={handleChange} value={value} ref={ref} />
      </TextInput>
      <SecondaryButton onClick={handleClick}>Focus Text Input</SecondaryButton>
    </Flex>
  );
};
