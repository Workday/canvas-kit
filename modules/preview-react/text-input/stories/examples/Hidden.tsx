import React from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';

export const Hidden = () => {
  return (
    <>
      <h2>Inspect Element to see the markup</h2>
      <TextInput.Field value={'Secret'} type="hidden" />
    </>
  );
};
