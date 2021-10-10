import {createHook} from '@workday/canvas-kit-react/common';
import {FormFieldModel} from './useFormFieldModel';

/**
 * Adds the necessary props to a `Hint` component.
 * Used by the FormField.Hint subcomponent and other input type componenets
 */
export const useFormFieldHint = createHook(({state}: FormFieldModel) => {
  return {
    id: state.hintId,
  };
});
