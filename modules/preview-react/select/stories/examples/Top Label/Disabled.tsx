import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const Disabled = () => {
  return (
    <FormField id="select-disabled">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(
          <FormField.Input as={Select} name="contact" options={options} disabled={true} />
        )}
      </FormField.Field>
    </FormField>
  );
};
