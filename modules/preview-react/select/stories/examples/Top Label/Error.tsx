import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {hintText, options} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const Error = () => {
  return (
    <FormField id="select-error" error="error">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(<FormField.Input as={Select} name="contact" options={options} />)}
        <FormField.Hint>{hintText}</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
