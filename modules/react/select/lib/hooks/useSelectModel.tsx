import {createModelHook, ErrorType} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from '@workday/canvas-kit-react/combobox';
import {
  createNavigationManager,
  wrappingNavigationManager,
} from '@workday/canvas-kit-react/collection';

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
  const model: ReturnType<typeof useComboboxModel> = useComboboxModel({
    ...config,
    navigation: createNavigationManager({
      ...wrappingNavigationManager,
      // Override getPrevious to return current index when the menu is hidden and ArrowUp is typed.
      // This prevents the navigation manager from going to previous before the menu is open.
      getPrevious: index => {
        if (model.state.visibility === 'hidden') {
          return index;
        } else {
          return wrappingNavigationManager.getPrevious(index, model);
        }
      },
      // Override getNext to return current index when the menu is hidden and ArrowDown is typed.
      // This prevents the navigation manager from going to next item before the menu is open.
      getNext: index => {
        if (model.state.visibility === 'hidden') {
          return index;
        } else {
          return wrappingNavigationManager.getNext(index, model);
        }
      },
    }),
  });
  return {
    ...model,
  };
});
