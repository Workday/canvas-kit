import {Select} from '@workday/canvas-kit-preview-react/select';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {controlComponent} from '../../../../../../utils/storybook';
import {manyOptions} from '../storiesData';

export const Scrollable = () => {
  return (
    <FormField id="select-default">
      <FormField.Label>Label</FormField.Label>
      {controlComponent(<FormField.Input as={Select} name="contact" options={manyOptions} />)}
    </FormField>
  );
};
