import React from 'react';
import {TextArea} from '@workday/canvas-kit-labs-react/text-area';
import {VStack} from '@workday/canvas-kit-labs-react/layout';
import {styled} from '@workday/canvas-kit-react/common';

const StyledField = styled(TextArea.Field)({
  resize: 'vertical',
});

export const ResizeConstraints = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <VStack spacing="xxxs" alignItems="flex-start">
      <TextArea>
        <TextArea.Label>Leave a review</TextArea.Label>
        <StyledField onChange={handleChange} value={value} />
      </TextArea>
    </VStack>
  );
};
