import {createModelHook} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from '@workday/canvas-kit-react/combobox';

/**
 * `SelectModel` extends the {@link ComboboxModel}. Selecting items from
 * the menu will dispatch an
 * [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) event on the
 * input which should work with form libraries, automation, and autofill.
 *
 * ```tsx
 * const model = useSelectModel()
 *
 * <SelectBase model={model}>{Select child components}</SelectBase>
 * ```
 */
export const useSelectModel = createModelHook({
  defaultConfig: {
    ...useComboboxModel.defaultConfig,
  },
  requiredConfig: {
    ...useComboboxModel.requiredConfig,
  },
  contextOverride: useComboboxModel.Context,
})(config => {
  const model = useComboboxModel(config);
  return model;
});
