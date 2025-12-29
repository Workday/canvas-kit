import React from 'react';

import {Select} from '@workday/canvas-kit-preview-react/select';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {controlComponent} from '../../../../../../utils/storybook';
import {options} from '../storiesData';

export const DisabledLeft = () => {
  return (
    <FormField orientation="horizontalStart" id="select-disabled">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(
          <FormField.Input as={Select} name="contact" options={options} disabled={true} />
        )}
      </FormField.Field>
    </FormField>
  );
};
