import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useFormFieldModel} from './useFormFieldModel';

/**
 * Adds the necessary props to a `Hint` component.
 * Used by the FormField.Hint subcomponent and other input type components
 */
export const useFormFieldHint = createElemPropsHook(useFormFieldModel)(({state}) => {
  return {
    id: `hint-${state.id}`,
  };
});
