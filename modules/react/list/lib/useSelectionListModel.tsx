import React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';
import {useCursorListModel2} from './useCursorListModel';

export type SelectedIds = 'all' | string[];

export type Selection = {
  selectedIds: SelectedIds;
  unselectedIds: string[];
};

/**
 * A SelectionManager is used
 */
export interface SelectionManager {
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

export const useSelectionListModel2 = createModelHook({
  defaultConfig: {
    ...useCursorListModel2.defaultConfig,
    initialSelectedIds: [] as SelectedIds,
    initialUnselectedIds: [] as string[],
    selection: singleSelectionManager,
  },
  requiredConfig: useCursorListModel2.requiredConfig,
})(config => {
  const cursor = useCursorListModel2(config);
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
  };

  return {...cursor, state, events, selection};
});
