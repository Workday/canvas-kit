import React from 'react';

import {Select} from '@workday/canvas-kit-preview-react/select';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {controlComponent} from '../../../../../../utils/storybook';
import {manyOptions} from '../storiesData';

export const ScrollableLeft = () => {
  return (
    <FormField orientation="horizontalStart" id="select-default">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="contact" options={manyOptions} />)}
      </FormField.Field>
    </FormField>
  );
};
