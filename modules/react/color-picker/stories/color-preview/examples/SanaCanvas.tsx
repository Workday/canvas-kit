import {ColorPreview} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const SanaCanvas = () => {
  return (
    <FormField data-theme="sana-canvas">
      <FormField.Label>Current Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorPreview} value="#00ffcc" />
      </FormField.Field>
    </FormField>
  );
};
