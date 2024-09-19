import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {customOptions, customRenderOption, customRenderSelected} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const DefaultWithCustomOptionsLeft = () => {
  return (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="select-default-custom"
    >
      {controlComponent(
        <Select
          name="icon"
          options={customOptions}
          renderOption={customRenderOption}
          renderSelected={customRenderSelected}
        />
      )}
    </FormField>
  );
};
