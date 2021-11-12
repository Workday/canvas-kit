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
} from '../cursor/useCursorModel';

export type Orientation = 'horizontal' | 'vertical';

export type SelectionState<T = unknown> = CursorState<T> & {
  selectedKeys: 'all' | string[];
  unselectedKeys: string[];
};

export type SelectionEvents<T = unknown> = CursorEvents<T> & {
  /** Select a specific item by its identifier. */
  select(data: {id: string}): void;
  /** Select all items. This will set `selectedKeys` to `'all'` and remove all `unselectedKeys`.
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
    prevState: Pick<SelectionState, 'selectedKeys' | 'unselectedKeys'>
  ): Pick<SelectionState, 'selectedKeys' | 'unselectedKeys'>;
}

export const isSelected = (
  id: string,
  {selectedKeys, unselectedKeys}: Pick<SelectionState, 'selectedKeys' | 'unselectedKeys'>
) => {
  if (selectedKeys === 'all') {
    return !unselectedKeys.includes(id);
  }
  return selectedKeys.includes(id);
};

export const singleSelectionManager: SelectionManager = {
  select(id: string) {
    return {selectedKeys: [id], unselectedKeys: []};
  },
};

export const multiSelectionManager: SelectionManager = {
  select(id: string, {selectedKeys, unselectedKeys}) {
    if (selectedKeys === 'all') {
      // If we have all selected, start adding/removing from `unselectedKeys`
      const existingKey = unselectedKeys.includes(id);
      return {
        selectedKeys: 'all',
        unselectedKeys: existingKey
          ? unselectedKeys.filter(key => key !== id)
          : unselectedKeys.concat(id),
      };
    } else {
      const existingKey = selectedKeys.includes(id);
      return {
        selectedKeys: existingKey
          ? selectedKeys.filter(key => key !== id)
          : selectedKeys.concat(id),
        unselectedKeys: [],
      };
    }
  },
};

export type BaseSelectionModelConfig<T> = BaseCursorModelConfig<T> & {
  initialSelectedKeys?: string[];
  initialUnselectedKeys?: string[];
  selection?: SelectionManager;
};

export type SelectionModelConfig<T> = BaseSelectionModelConfig<T> &
  Partial<ToModelConfig<SelectionState<T>, SelectionEvents<T>, typeof selectionEventMap>>;

export const useSelectionModel = <T extends unknown>(
  config: SelectionModelConfig<T> = {}
): SelectionModel<T> => {
  const cursor = useCursorModel(config as CursorModelConfig<T>);
  const [selectedKeys, setSelectedKeys] = React.useState<'all' | string[]>(
    config.initialSelectedKeys || []
  );
  const [unselectedKeys, setUnselectedKeys] = React.useState(config.initialUnselectedKeys || []);

  const selection = config.selection || singleSelectionManager;

  const state = {...cursor.state, selectedKeys, unselectedKeys};

  const events = useEventMap(selectionEventMap, state, config, {
    ...cursor.events,
    select(data) {
      const {selectedKeys, unselectedKeys} = selection.select(data.id, state);
      setSelectedKeys(selectedKeys);
      setUnselectedKeys(unselectedKeys);
      events.goTo({id: data.id});
    },
  } as SelectionEvents<T>);

  return {state, events, selection, getId: cursor.getId};
};
