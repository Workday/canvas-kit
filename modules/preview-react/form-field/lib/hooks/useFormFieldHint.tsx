import {createHook} from '@workday/canvas-kit-react/common';
import {FormFieldModel} from './useFormFieldModel';

/**
 * Adds the necessary props to a `Hint` component.
 * Used by the FormField.Hint subcomponent and other input type components
 */
export const useFormFieldHint = createHook(({state}: FormFieldModel) => {
  return {
    id: `hint-${state.id}`,
  };
});
