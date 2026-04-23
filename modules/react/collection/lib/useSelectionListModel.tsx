import React from 'react';

import {createModelHook} from '@workday/canvas-kit-react/common';

import {useCursorListModel} from './useCursorListModel';

export type SelectedIds = 'all' | string[];

export type Selection = {
  selectedIds: SelectedIds;
  unselectedIds: string[];
};

/**
 * The list and grid models accept a `selection` config. If one is not provided,
 * `singleSelectManager` is used. You can provide a custom select manager to suite your needs. A
 * selection manager is an object with a single `select` method that takes an id and previously
 * selected ids and returns a new set of selected ids.
 *
 * The collection system provides two selection managers: `singleSelectManager` and
 * `multiSelectionManager`.
 */
export interface SelectionManager {
  /**
   * Sets a new `Selection` state based on the current ID passed and the previous state. Each
   * selection manager can implement this differently. For example, a single select manager may
   * unselect all other items and select only the passed in id. A multiselect manager may toggle the
   * passed id.
   */
  select(id: string, prevState: Selection): Selection;
}

export const isSelected = (id: string, {selectedIds, unselectedIds}: Selection) => {
  if (selectedIds === 'all') {
    return !unselectedIds.includes(id);
  }
  return selectedIds.includes(id);
};

export const singleSelectionManager: SelectionManager = {
  select(id: string) {
    return {selectedIds: [id], unselectedIds: []};
  },
};

export const multiSelectionManager: SelectionManager = {
  select(id: string, {selectedIds, unselectedIds}) {
    if (selectedIds === 'all') {
      // If we have all selected, start adding/removing from `unselectedIds`
      const existingKey = unselectedIds.includes(id);
      return {
        selectedIds: 'all',
        unselectedIds: existingKey
          ? unselectedIds.filter(key => key !== id)
          : unselectedIds.concat(id),
      };
    } else {
      const existingKey = selectedIds.includes(id);
      return {
        selectedIds: existingKey ? selectedIds.filter(key => key !== id) : selectedIds.concat(id),
        unselectedIds: [],
      };
    }
  },
};

export const useSelectionListModel = createModelHook({
  defaultConfig: {
    ...useCursorListModel.defaultConfig,
    initialSelectedIds: [] as SelectedIds,
    initialUnselectedIds: [] as string[],
    selection: singleSelectionManager,
  },
  requiredConfig: useCursorListModel.requiredConfig,
  contextOverride: useCursorListModel.Context,
})(config => {
  const cursor = useCursorListModel(config);
  const [selectedIds, setSelectedIds] = React.useState(config.initialSelectedIds);
  const [unselectedIds, setUnselectedIds] = React.useState(config.initialUnselectedIds);

  const selection = config.selection;

  const state = {...cursor.state, selectedIds, unselectedIds};

  const events = {
    ...cursor.events,
    /** Select a specific item by its identifier. */
    select(data: {id: string}) {
      const {selectedIds, unselectedIds} = selection.select(data.id, state);
      setSelectedIds(selectedIds);
      setUnselectedIds(unselectedIds);
    },
    /**
     * Select all items. This will set `selectedIds` to `'all'` and remove all `unselectedIds`.
     * This is especially useful for virtual lists where not all items are loaded in memory.
     */
    selectAll() {
      setSelectedIds('all');
    },
    /**
     * Unselect all items.
     */
    unselectAll() {
      setSelectedIds([]);
    },
    /**
     * Should be used with care and can be used to keep a model in sync with external controlled
     * inputs.
     */
    setSelectedIds(ids: 'all' | string[]) {
      setSelectedIds(ids);
    },
    /**
     * The `remove` event can be called by Behavior Hooks based on user interaction. The `onRemove`
     * can be added to the model config to signal the user wishes to remove the item in the list.
     * The `remove` event requires the dynamic API where `items` are passed to the model. It is up
     * to you to remove the item from the list. Focus redirection should be automatically managed,
     * if necessary.
     */
    remove(data: {id: string; nextId?: string; event?: Event | React.SyntheticEvent}) {
      // nothing to do here. It is a signal event
    },
  };

  return {...cursor, state, events, selection};
});
