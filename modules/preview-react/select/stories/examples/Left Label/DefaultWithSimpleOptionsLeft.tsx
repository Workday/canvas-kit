import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {simpleOptions} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const DefaultWithSimpleOptionsLeft = () => {
  return (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-default-simple"
    >
      {controlComponent(<Select name="state" options={simpleOptions} />)}
    </FormField>
  );
};
