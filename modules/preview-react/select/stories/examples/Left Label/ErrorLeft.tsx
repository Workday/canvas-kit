import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {hintId, hintText, options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const ErrorLeft = () => {
  return (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  );
};
