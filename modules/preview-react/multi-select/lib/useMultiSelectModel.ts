import React from 'react';

import {createModelHook} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from '@workday/canvas-kit-react/combobox';
import {useListModel, Item} from '@workday/canvas-kit-react/collection';

/**
 * `MultiSelectModel` extends the {@link ComboboxModel}. Selecting items from
 * the menu will dispatch an
 * [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) event on the
 * input which should work with form libraries, automation and autofill.
 *
 * ```tsx
 * const model = useMultiSelectModel({items: ['Mobile', 'Phone', 'E-Mail']})
 *
 * <MultiSelect model={model}>
 *   ...
 * </MultiSelect>
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
        model.events.goTo({id: ''});
      },
      onFilterChange() {
        model.events.goTo({id: ''});
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
    [model.state.selectedIds, model.state.items]
  );
  cachedSelectedRef.current = cachedSelected;

  // The `listbox` of pills under the MultiSelect combobox input.
  const selected = useListModel({
    orientation: 'horizontal',
    onRemove({id}) {
      model.events.select({id});
      setSelectedItems(cachedSelected.filter(item => item.id !== id));
    },
    shouldVirtualize: false,
    items: model.state.visibility === 'hidden' ? cachedSelected : selectedItems,
  });

  return {
    selected: {
      ...selected,
      state: {
        ...selected.state,
        cursorId: React.useMemo(
          () =>
            selected.state.items.find(item => item.id === selected.state.cursorId)
              ? selected.state.cursorId
              : selected.state.items[0]?.id || '',
          [selected.state.items, selected.state.cursorId]
        ),
      },
    },
    ...model,
  };
});
