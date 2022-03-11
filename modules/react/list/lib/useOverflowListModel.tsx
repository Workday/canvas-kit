import React from 'react';

import {createEventMap, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import {
  SelectionListState,
  SelectionListEvents,
  BaseSelectionListModelConfig,
  useSelectionListModel,
  SelectionListModelConfig,
  selectionListEventMap,
  SelectionListModel,
} from './useSelectionListModel';

export type OverflowListState<T = unknown> = SelectionListState<T> & {
  containerWidth: number;
  overflowTargetWidth: number;
  itemWidthCache: Record<string, number>;
  hiddenIds: string[];
};

export type OverflowListEvents<T = unknown> = SelectionListEvents<T> & {
  setContainerWidth(data: {width?: number}): void;
  setOverflowTargetWidth(data: {width: number}): void;
  addItemWidth(data: {id: string; width: number}): void;
  removeItemWidth(data: {id: string}): void;
  addHiddenKey(data: {id: string}): void;
  removeHiddenKey(data: {id: string}): void;
};

export interface OverflowListModel<T = unknown> extends SelectionListModel<T> {
  state: OverflowListState<T>;
  events: OverflowListEvents<T>;
}

export const overflowListEventMap = createEventMap<OverflowListEvents>()({
  guards: {
    ...selectionListEventMap.guards,
    shouldSetContainerWidth: 'setContainerWidth',
    shouldSetOverflowTargetWidth: 'setOverflowTargetWidth',
    shouldAddItemWidth: 'addItemWidth',
    shouldRemoveItemWidth: 'removeItemWidth',
    shouldAddHiddenKey: 'addHiddenKey',
    shouldRemoveHiddenKey: 'removeHiddenKey',
  },
  callbacks: {
    ...selectionListEventMap.callbacks,
    onSetContainerWidth: 'setContainerWidth',
    onSetOverflowTargetWidth: 'setOverflowTargetWidth',
    onAddItemWidth: 'addItemWidth',
    onRemoveItemWidth: 'removeItemWidth',
    onAddHiddenKey: 'addHiddenKey',
    onRemoveHiddenKey: 'removeHiddenKey',
  },
});

export type BaseOverflowListModelConfig<T> = BaseSelectionListModelConfig<T> & {
  initialHiddenIds?: string[];
  containerWidth?: number;
};

export type OverflowListModelConfig<T> = BaseOverflowListModelConfig<T> &
  Partial<ToModelConfig<OverflowListState<T>, OverflowListEvents<T>, typeof selectionListEventMap>>;

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

export const useOverflowListModel = <T extends unknown>(
  config: OverflowListModelConfig<T> = {}
): OverflowListModel<T> => {
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

  const model = useSelectionListModel({
    ...(config as SelectionListModelConfig<T>),
    nonInteractiveIds,
  });

  const state = {
    ...model.state,
    hiddenIds,
    itemWidthCache,
    containerWidth,
    overflowTargetWidth,
  };

  const events = useEventMap(overflowListEventMap, state, config, {
    ...model.events,
    select(data) {
      const {selectedIds} = model.selection.select(data.id, state as SelectionListState<T>);
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
  } as OverflowListEvents<T>);

  return {...model, state, events};
};
