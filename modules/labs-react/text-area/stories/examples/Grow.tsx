import React from 'react';
import {TextArea} from '@workday/canvas-kit-labs-react/text-area';
import {VStack} from '@workday/canvas-kit-labs-react/layout';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <VStack spacing="xxxs">
      <TextArea>
        <TextArea.Label>Leave a review</TextArea.Label>
        <TextArea.Field onChange={handleChange} value={value} />
      </TextArea>
    </VStack>
  );
};
