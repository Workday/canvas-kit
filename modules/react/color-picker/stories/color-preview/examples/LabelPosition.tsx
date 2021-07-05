import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorPreview} from '@workday/canvas-kit-react/color-picker';

export const LabelPosition = () => {
  return (
    <FormField label="Background Color" labelPosition={FormField.LabelPosition.Left}>
      <ColorPreview value="#00ffcc" />
    </FormField>
  );
};
