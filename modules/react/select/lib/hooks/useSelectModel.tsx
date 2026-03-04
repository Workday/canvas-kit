import {useComboboxModel} from '@workday/canvas-kit-react/combobox';
import {createModelHook} from '@workday/canvas-kit-react/common';

/**
 * `SelectModel` extends the {@link ComboboxModel}. Selecting items from
 * the menu will dispatch an
 * [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) event on the
 * input which should work with form libraries, automation and autofill.
 *
 * ```tsx
 * const model = useSelectModel({items: ['Mobile', 'Phone', 'E-Mail']})
 *
 * <Select model={model}>
 *   ...
 * </Select>
 * ```
 */
export const useSelectModel = createModelHook({
  defaultConfig: {
    ...useComboboxModel.defaultConfig,
    shouldVirtualize: false,
  },
  requiredConfig: {
    ...useComboboxModel.requiredConfig,
  },
  contextOverride: useComboboxModel.Context,
})(config => {
  return useComboboxModel(config);
});
