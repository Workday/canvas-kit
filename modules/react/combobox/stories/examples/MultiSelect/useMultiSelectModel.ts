import React from 'react';

import {createModelHook} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from '@workday/canvas-kit-react/combobox';

/**
 * `SelectModel` extends the {@link ComboboxModel}. Selecting items from
 * the menu will dispatch an
 * [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) event on the
 * input which should work with form libraries, automation and autofill.
 *
 * ```tsx
 * const model = useMultiSelectModel({items: ['Mobile', 'Phone', 'E-Mail']})
 *
 * <Select model={model}>
 *   ...
 * </Select>
 * ```
 */
export const useMultiSelectModel = createModelHook({
  defaultConfig: {
    ...useComboboxModel.defaultConfig,
    mode: 'multiple',
    shouldVirtualize: false,
  },
  requiredConfig: {
    ...useComboboxModel.requiredConfig,
  },
  contextOverride: useComboboxModel.Context,
})(config => {
  return useComboboxModel(config);
});
