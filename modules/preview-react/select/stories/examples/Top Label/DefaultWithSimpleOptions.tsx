import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {simpleOptions} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

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
