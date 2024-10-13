import React from 'react';
import {
  createElemPropsHook,
  useLocalRef,
  dispatchInputEvent,
} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from './useComboboxModel';

/**
 * An arbitrary combobox can have any value. The list of options are suggestions to aid the user in
 * entering values. A Typeahead or Autocomplete are examples are arbitrary value comboboxes.
 */
export const useComboboxInputArbitrary = createElemPropsHook(useComboboxModel)((model, ref) => {
  const {elementRef, localRef} = useLocalRef(ref as React.Ref<HTMLInputElement>);

  // sync model selection state with inputs
  React.useLayoutEffect(() => {
    if (localRef.current) {
      const formValue = (model.state.selectedIds === 'all' ? [] : model.state.selectedIds).join(
        ', '
      );

      if (formValue !== localRef.current.value) {
        dispatchInputEvent(localRef.current, formValue);
      }
    }
  }, [model.state.selectedIds, localRef]);

  return {
    ref: elementRef,
  };
});
