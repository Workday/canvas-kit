import React from 'react';
import {createEventMap, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import {
  CursorState,
  CursorEvents,
  BaseCursorModelConfig,
  useCursorModel,
  CursorModelConfig,
  cursorEventMap,
  CursorModel,
} from './useCursorModel';

export type SelectionState<T = unknown> = CursorState<T> & {
  selectedIds: 'all' | string[];
  unselectedIds: string[];
};

export type SelectionEvents<T = unknown> = CursorEvents<T> & {
  /** Select a specific item by its identifier. */
  select(data: {id: string}): void;
  /** Select all items. This will set `selectedIds` to `'all'` and remove all `unselectedIds`.
   * This is especially useful for virtual lists where not all items are loaded in memory.
   */
  selectAll(): void;
  unselectAll(): void;
};

export interface SelectionModel<T = unknown> extends CursorModel<T> {
  state: SelectionState<T>;
  events: SelectionEvents<T>;
  selection: SelectionManager;
}

export const selectionEventMap = createEventMap<SelectionEvents>()({
  guards: {
    ...cursorEventMap.guards,
    /** Should a cursor position be set? Use only in advance use-cases */
    shouldSelect: 'select',
  },
  callbacks: {
    ...cursorEventMap.callbacks,
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
    prevState: Pick<SelectionState, 'selectedIds' | 'unselectedIds'>
  ): Pick<SelectionState, 'selectedIds' | 'unselectedIds'>;
}

export const isSelected = (
  id: string,
  {selectedIds, unselectedIds}: Pick<SelectionState, 'selectedIds' | 'unselectedIds'>
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

export type BaseSelectionModelConfig<T> = BaseCursorModelConfig<T> & {
  initialSelectedIds?: string[];
  initialUnselectedIds?: string[];
  selection?: SelectionManager;
};

export type SelectionModelConfig<T> = BaseSelectionModelConfig<T> &
  Partial<ToModelConfig<SelectionState<T>, SelectionEvents<T>, typeof selectionEventMap>>;

export const useSelectionModel = <T extends unknown>(
  config: SelectionModelConfig<T> = {}
): SelectionModel<T> => {
  const cursor = useCursorModel(config as CursorModelConfig<T>);
  const [selectedIds, setSelectedIds] = React.useState<'all' | string[]>(
    config.initialSelectedIds || []
  );
  const [unselectedIds, setUnselectedIds] = React.useState(config.initialUnselectedIds || []);

  const selection = config.selection || singleSelectionManager;

  const state = {...cursor.state, selectedIds, unselectedIds};

  const events = useEventMap(selectionEventMap, state, config, {
    ...cursor.events,
    select(data) {
      const {selectedIds, unselectedIds} = selection.select(data.id, state);
      setSelectedIds(selectedIds);
      setUnselectedIds(unselectedIds);
      events.goTo({id: data.id});
    },
  } as SelectionEvents<T>);

  return {...cursor, state, events, selection};
};
