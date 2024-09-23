import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const Grow = () => {
  return (
    <FormField label="Label" inputId="select-grow" grow={true}>
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  );
};
