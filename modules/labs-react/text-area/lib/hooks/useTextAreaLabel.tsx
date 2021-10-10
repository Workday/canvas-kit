import {createHook} from '@workday/canvas-kit-react/common';
import {FormFieldModel, useFormFieldLabel} from '@workday/canvas-kit-labs-react/form-field';

/**
 * Adds the necessary props to a `Label` component. Used by the TextArea.Label subcomponent.
 */
export const useTextAreaLabel = createHook((model: FormFieldModel, ref, elemProps) => {
  const sharedProps = useFormFieldLabel(model, elemProps, ref);
  return {
    ...sharedProps,
  };
});
