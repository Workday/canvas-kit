import {createHook} from '@workday/canvas-kit-react/common';
import {FormFieldModel} from './useFormFieldModel';

/**
 * Adds the necessary props to a `Label` component.
 * Used by the FormField.Label subcomponent and other input type componenets
 */
export const useFormFieldLabel = createHook(({state}: FormFieldModel) => {
  return {
    htmlFor: state.inputId,
  };
});
