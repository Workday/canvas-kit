import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const DefaultLeft = () => {
  return (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-default">
      {controlComponent(<Select name="contact" options={options} />)}
    </FormField>
  );
};
