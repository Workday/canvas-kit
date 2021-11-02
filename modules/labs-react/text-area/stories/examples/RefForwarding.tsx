import React from 'react';
import {TextArea} from '@workday/canvas-kit-labs-react/text-area';
import {VStack} from '@workday/canvas-kit-labs-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export const RefForwarding = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <VStack spacing="xxxs" alignItems="flex-start">
      <TextArea>
        <TextArea.Label>Leave a review</TextArea.Label>
        <TextArea.Field onChange={handleChange} value={value} ref={ref} />
      </TextArea>
      <SecondaryButton onClick={handleClick}>Focus Text Area</SecondaryButton>
    </VStack>
  );
};
