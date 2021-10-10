import {createHook} from '@workday/canvas-kit-react/common';
import {FormFieldModel, useFormFieldHint} from '@workday/canvas-kit-labs-react/form-field';

/**
 * Adds the necessary props to a `Hint` component. Used by the TextArea.Hint subcomponent.
 */
export const useTextAreaHint = createHook((model: FormFieldModel, ref, elemProps) => {
  const sharedProps = useFormFieldHint(model, elemProps, ref);
  return {
    ...sharedProps,
  };
});
