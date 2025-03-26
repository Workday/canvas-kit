import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {manyOptions} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const Scrollable = () => {
  return (
    <FormField id="select-default">
      <FormField.Label>Label</FormField.Label>
      {controlComponent(<FormField.Input as={Select} name="contact" options={manyOptions} />)}
    </FormField>
  );
};
