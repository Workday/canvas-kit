import React from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';

export const ReadOnly = () => {
  return (
    <TextInput orientation="vertical">
      <TextInput.Label>Unwavering Opinion</TextInput.Label>
      <TextInput.Field
        value={'CKR is great'}
        readOnly={true}
        borderColor="transparent"
        background="transparent"
        cursor="default"
      />
    </TextInput>
  );
};
