import React from 'react';
import {createEventMap, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import {
  CursorListState,
  CursorListEvents,
  BaseCursorModelConfig,
  useCursorListModel,
  CursorListModelConfig,
  cursorListEventMap,
  CursorListModel,
} from './useCursorListModel';

export type SelectionListState<T = unknown> = CursorListState<T> & {
  selectedIds: 'all' | string[];
  unselectedIds: string[];
};

export type SelectionListEvents<T = unknown> = CursorListEvents<T> & {
  /** Select a specific item by its identifier. */
  select(data: {id: string}): void;
  /** Select all items. This will set `selectedIds` to `'all'` and remove all `unselectedIds`.
   * This is especially useful for virtual lists where not all items are loaded in memory.
   */
  selectAll(): void;
  unselectAll(): void;
};

export interface SelectionListModel<T = unknown> extends CursorListModel<T> {
  state: SelectionListState<T>;
  events: SelectionListEvents<T>;
  selection: SelectionManager;
}

export const selectionListEventMap = createEventMap<SelectionListEvents>()({
  guards: {
    ...cursorListEventMap.guards,
    /** Should a cursor position be set? Use only in advance use-cases */
    shouldSelect: 'select',
  },
  callbacks: {
    ...cursorListEventMap.callbacks,
    /**
     * Called when a cursor position has been changed. Useful to set state or perform side effects.
     * This is called during state change batching, so calling state setters will not invoke extra
     * renders.
     */
    onSelect: 'select',
  },
});

/**
 * A SelectionManager is used
 */
export interface SelectionManager {
  select(
    id: string,
    prevState: Pick<SelectionListState, 'selectedIds' | 'unselectedIds'>
  ): Pick<SelectionListState, 'selectedIds' | 'unselectedIds'>;
}

export const isSelected = (
  id: string,
  {selectedIds, unselectedIds}: Pick<SelectionListState, 'selectedIds' | 'unselectedIds'>
) => {
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

export type BaseSelectionListModelConfig<T> = BaseCursorModelConfig<T> & {
  initialSelectedIds?: string[];
  initialUnselectedIds?: string[];
  selection?: SelectionManager;
};

export type SelectionListModelConfig<T> = BaseSelectionListModelConfig<T> &
  Partial<
    ToModelConfig<SelectionListState<T>, SelectionListEvents<T>, typeof selectionListEventMap>
  >;

export const useSelectionListModel = <T extends unknown>(
  config: SelectionListModelConfig<T> = {}
): SelectionListModel<T> => {
  const cursor = useCursorListModel(config as CursorListModelConfig<T>);
  const [selectedIds, setSelectedIds] = React.useState<'all' | string[]>(
    config.initialSelectedIds || []
  );
  const [unselectedIds, setUnselectedIds] = React.useState(config.initialUnselectedIds || []);

  const selection = config.selection || singleSelectionManager;

  const state = {...cursor.state, selectedIds, unselectedIds};

  const events = useEventMap(selectionListEventMap, state, config, {
    ...cursor.events,
    select(data) {
      const {selectedIds, unselectedIds} = selection.select(data.id, state);
      setSelectedIds(selectedIds);
      setUnselectedIds(unselectedIds);
    },
  } as SelectionListEvents<T>);

  return {...cursor, state, events, selection};
};
