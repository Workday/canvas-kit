import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {manyOptions} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

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
