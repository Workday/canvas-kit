import React from 'react';
import {TextArea} from '@workday/canvas-kit-labs-react/text-area';
import {HStack} from '@workday/canvas-kit-labs-react/layout';

export const LabelPositionHorizontal = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <HStack spacing="l" alignItems="center">
      <TextArea>
        <TextArea.Label>Leave a review</TextArea.Label>
        <TextArea.Field onChange={handleChange} value={value} />
      </TextArea>
    </HStack>
  );
};
