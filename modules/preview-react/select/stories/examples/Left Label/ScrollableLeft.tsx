import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {manyOptions} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const ScrollableLeft = () => {
  return (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="select-default">
      {controlComponent(<Select name="contact" options={manyOptions} />)}
    </FormField>
  );
};
