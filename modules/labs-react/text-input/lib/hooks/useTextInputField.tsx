import {createHook} from '@workday/canvas-kit-react/common';
import {FormFieldModel, useFormFieldInput} from '@workday/canvas-kit-labs-react/form-field';

/**
 * Adds the necessary props to a `Field` component. Used by the TextInput.Field subcomponent.
 */
export const useTextInputField = createHook((model: FormFieldModel, ref, elemProps) => {
  const sharedProps = useFormFieldInput(model, elemProps, ref);
  return {
    type: 'text',
    ...sharedProps,
  };
});
