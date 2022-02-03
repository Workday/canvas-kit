import React from 'react';

import {createEventMap, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import {
  SelectionState,
  SelectionEvents,
  BaseSelectionModelConfig,
  useSelectionModel,
  SelectionModelConfig,
  selectionEventMap,
  SelectionModel,
} from './useSelectionModel';

export type OverflowState<T = unknown> = SelectionState<T> & {
  containerWidth: number;
  overflowTargetWidth: number;
  itemWidthCache: Record<string, number>;
  hiddenIds: string[];
};

export type OverflowEvents<T = unknown> = SelectionEvents<T> & {
  setContainerWidth(data: {width?: number}): void;
  setOverflowTargetWidth(data: {width: number}): void;
  addItemWidth(data: {id: string; width: number}): void;
  removeItemWidth(data: {id: string}): void;
  addHiddenKey(data: {id: string}): void;
  removeHiddenKey(data: {id: string}): void;
};

export interface OverflowModel<T = unknown> extends SelectionModel<T> {
  state: OverflowState<T>;
  events: OverflowEvents<T>;
}

export const overflowEventMap = createEventMap<OverflowEvents>()({
  guards: {
    ...selectionEventMap.guards,
    shouldSetContainerWidth: 'setContainerWidth',
    shouldSetOverflowTargetWidth: 'setOverflowTargetWidth',
    shouldAddItemWidth: 'addItemWidth',
    shouldRemoveItemWidth: 'removeItemWidth',
    shouldAddHiddenKey: 'addHiddenKey',
    shouldRemoveHiddenKey: 'removeHiddenKey',
  },
  callbacks: {
    ...selectionEventMap.callbacks,
    onSetContainerWidth: 'setContainerWidth',
    onSetOverflowTargetWidth: 'setOverflowTargetWidth',
    onAddItemWidth: 'addItemWidth',
    onRemoveItemWidth: 'removeItemWidth',
    onAddHiddenKey: 'addHiddenKey',
    onRemoveHiddenKey: 'removeHiddenKey',
  },
});

export type BaseOverflowModelConfig<T> = BaseSelectionModelConfig<T> & {
  initialHiddenIds?: string[];
  containerWidth?: number;
};

export type OverflowModelConfig<T> = BaseOverflowModelConfig<T> &
  Partial<ToModelConfig<OverflowState<T>, OverflowEvents<T>, typeof selectionEventMap>>;

export function getHiddenIds(
  containerWidth: number,
  overflowTargetWidth: number,
  itemWidthCache: Record<string, number>,
  selectedIds: string[] | 'all'
): string[] {
  /** Allows us to prioritize showing the selected item */
  let selectedKey: undefined | string;
  /** Tally of combined item widths. We'll add items that fit until the container is full */
  let itemWidth = 0;
  /** Tally ids that won't fit inside the container. These will be used by components to hide
   * elements that won't fit in the container */
  const hiddenIds: string[] = [];

  if (selectedIds !== 'all' && selectedIds.length) {
    selectedKey = selectedIds[0];
  }

  if (
    Object.keys(itemWidthCache).reduce((sum, key) => sum + itemWidthCache[key], 0) <= containerWidth
  ) {
    // All items fit, return empty array
    return [];
  } else if (selectedKey) {
    if (itemWidthCache[selectedKey] + overflowTargetWidth > containerWidth) {
      // If the selected item doesn't fit, only show overflow (all items hidden)
      return Object.keys(itemWidthCache);
    } else {
      // at least the selected item and overflow target fit. Update our itemWidth with the sum
      itemWidth += itemWidthCache[selectedKey] + overflowTargetWidth;
    }
  } else {
    itemWidth += overflowTargetWidth;
  }

  for (const key in itemWidthCache) {
    if (key !== selectedKey) {
      itemWidth += itemWidthCache[key];
      if (itemWidth > containerWidth) {
        hiddenIds.push(key);
      }
    }
  }

  return hiddenIds;
}

export const useOverflowModel = <T extends unknown>(
  config: OverflowModelConfig<T> = {}
): OverflowModel<T> => {
  const [hiddenIds, setHiddenIds] = React.useState(config.initialHiddenIds || []);
  const [itemWidthCache, setItemWidthCache] = React.useState<Record<string, number>>({});
  const [containerWidth, setContainerWidth] = React.useState(0);
  const containerWidthRef = React.useRef(0);
  const itemWidthCacheRef = React.useRef(itemWidthCache);
  const [overflowTargetWidth, setOverflowTargetWidth] = React.useState(0);
  const overflowTargetWidthRef = React.useRef(0);

  // Cursors skip over disabled ids, but know nothing of hidden ids. We'll go ahead and disable
  // hidden ids as well
  const nonInteractiveIds = (config.nonInteractiveIds || []).concat(hiddenIds);

  const model = useSelectionModel({...(config as SelectionModelConfig<T>), nonInteractiveIds});

  const state = {
    ...model.state,
    hiddenIds,
    itemWidthCache,
    containerWidth,
    overflowTargetWidth,
  };

  const events = useEventMap(overflowEventMap, state, config, {
    ...model.events,
    select(data) {
      const {selectedIds} = model.selection.select(data.id, state as SelectionState<T>);
      const ids = getHiddenIds(
        containerWidthRef.current,
        overflowTargetWidthRef.current,
        itemWidthCacheRef.current,
        selectedIds
      );
      model.events.select(data);

      setHiddenIds(ids);
    },
    setContainerWidth({width}) {
      containerWidthRef.current = width || 0;
      setContainerWidth(width || 0);

      const ids = getHiddenIds(
        containerWidthRef.current,
        overflowTargetWidthRef.current,
        itemWidthCacheRef.current,
        state.selectedIds
      );

      setHiddenIds(ids);
    },
    setOverflowTargetWidth({width}) {
      overflowTargetWidthRef.current = width;
      setOverflowTargetWidth(width);
    },
    addItemWidth({id, width}) {
      itemWidthCacheRef.current = {...itemWidthCacheRef.current, [id]: width};

      setItemWidthCache(itemWidthCacheRef.current);

      const ids = getHiddenIds(
        containerWidthRef.current,
        overflowTargetWidthRef.current,
        itemWidthCacheRef.current,
        state.selectedIds
      );

      setHiddenIds(ids);
    },
    removeItemWidth({id}) {
      const newCache = {...itemWidthCacheRef.current};
      delete newCache[id];
      itemWidthCacheRef.current = newCache;
      setItemWidthCache(itemWidthCacheRef.current);

      const ids = getHiddenIds(
        containerWidthRef.current,
        overflowTargetWidthRef.current,
        itemWidthCacheRef.current,
        state.selectedIds !== 'all'
          ? state.selectedIds.filter(sId => id !== sId)
          : state.selectedIds
      );

      setHiddenIds(ids);
    },
    addHiddenKey({id}) {
      setHiddenIds(ids => ids.concat(id));
    },
    removeHiddenKey({id}) {
      setHiddenIds(ids => ids.filter(key => key !== id));
    },
  } as OverflowEvents<T>);

  return {...model, state, events};
};
