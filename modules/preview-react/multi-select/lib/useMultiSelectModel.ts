import React from 'react';

import {createModelHook} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from '@workday/canvas-kit-react/combobox';
import {useListModel, Item} from '@workday/canvas-kit-react/collection';

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
    mode: 'multiple' as const,
    shouldVirtualize: false,
  },
  requiredConfig: {
    ...useComboboxModel.requiredConfig,
  },
  contextOverride: useComboboxModel.Context,
})(config => {
  const cachedSelectedRef = React.useRef<Item<any>[]>([]);
  const model = useComboboxModel(
    useComboboxModel.mergeConfig(config, {
      onHide() {
        setSelectedItems(cachedSelected);
      },
    })
  );
  const [selectedItems, setSelectedItems] = React.useState<Item<any>[]>(() => {
    return (config.initialSelectedIds === 'all' ? [] : config.initialSelectedIds)
      .map(id => model.navigation.getItem(id, model))
      .filter(item => item) as Item<any>[];
  });

  const cachedSelected: Item<any>[] = React.useMemo(
    () =>
      (model.state.selectedIds === 'all' ? [] : model.state.selectedIds)
        // try to find the item in the navigation. If it isn't there, maybe it is filtered out currently and we can find it from previous cached
        .map(
          id =>
            model.navigation.getItem(id, model) || cachedSelectedRef.current.find(i => i.id === id)
        )
        .filter(item => item) as Item<any>[],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [model.state.selectedIds]
  );
  cachedSelectedRef.current = cachedSelected;

  const selected = useListModel({
    orientation: 'horizontal',
    onSelect({id}) {
      model.events.select({id});
    },
    shouldVirtualize: false,
    items: model.state.visibility === 'hidden' ? cachedSelected : selectedItems,
  });

  const state = {
    ...model.state,
  };

  const events = {
    ...model.events,
  };

  return {selected, ...model, state, events};
});
