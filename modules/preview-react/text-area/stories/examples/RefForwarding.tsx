import React from 'react';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {VStack} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {TextArea} from '@workday/canvas-kit-preview-react/text-area';

export const RefForwarding = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    changeFocus(ref.current);
  };

  return (
    <VStack spacing="xxxs" alignItems="flex-start">
      <TextArea orientation="vertical">
        <TextArea.Label>Leave a review</TextArea.Label>
        <TextArea.Field onChange={handleChange} value={value} ref={ref} />
      </TextArea>
      <SecondaryButton onClick={handleClick}>Focus Text Area</SecondaryButton>
    </VStack>
  );
};
