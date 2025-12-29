import React from 'react';

import {Select} from '@workday/canvas-kit-preview-react/select';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {controlComponent} from '../../../../../../utils/storybook';
import {hintText, options} from '../storiesData';

export const ErrorLeft = () => {
  return (
    <FormField orientation="horizontalStart" id="select-error" error="error">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="contact" options={options} />)}
        <FormField.Hint>{hintText}</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
