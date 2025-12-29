import {Select} from '@workday/canvas-kit-preview-react/select';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {controlComponent} from '../../../../../../utils/storybook';
import {simpleOptions} from '../storiesData';

export const DefaultWithSimpleOptions = () => {
  return (
    <FormField id="select-default-simple">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="state" options={simpleOptions} />)}
      </FormField.Field>
    </FormField>
  );
};
