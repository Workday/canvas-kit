import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const Default = () => {
  return (
    <FormField label="Label" inputId="select-default">
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  );
};
