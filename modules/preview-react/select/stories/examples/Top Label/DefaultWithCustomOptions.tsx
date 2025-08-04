import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {customOptions, customRenderOption, customRenderSelected} from '../storiesData';
import {controlComponent} from '../../../../../../utils/storybook';

export const DefaultWithCustomOptions = () => {
  return (
    <FormField id="select-default-custom">
      <FormField.Label>Label</FormField.Label>
      <FormField.Field>
        {controlComponent(
          <FormField.Input
            as={Select}
            name="icon"
            options={customOptions}
            renderOption={customRenderOption}
            renderSelected={customRenderSelected}
          />
        )}
      </FormField.Field>
    </FormField>
  );
};
