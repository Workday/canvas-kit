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
} from '../selection';

export type OverflowState<T = unknown> = SelectionState<T> & {
  containerWidth: number;
  overflowTargetWidth: number;
  itemWidthCache: Record<string, number>;
  hiddenKeys: string[];
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
  initialHiddenKeys?: string[];
  containerWidth?: number;
};

export type OverflowModelConfig<T> = BaseOverflowModelConfig<T> &
  Partial<ToModelConfig<OverflowState<T>, OverflowEvents<T>, typeof selectionEventMap>>;

export function getHiddenKeys(
  containerWidth: number,
  overflowTargetWidth: number,
  itemWidthCache: Record<string, number>,
  selectedKeys: string[] | 'all'
): string[] {
  /** Allows us to prioritize showing the selected item */
  let selectedKey: undefined | string;
  /** Tally of combined item widths. We'll add items that fit until the container is full */
  let itemWidth = 0;
  /** Tally keys that won't fit inside the container. These will be used by components to hide
   * elements that won't fit in the container */
  const hiddenKeys: string[] = [];

  if (selectedKeys !== 'all' && selectedKeys.length) {
    selectedKey = selectedKeys[0];
  }

  if (
    Object.keys(itemWidthCache).reduce((sum, key) => sum + itemWidthCache[key], 0) <= containerWidth
  ) {
    // All items fit, return empty array
    return [];
  } else if (selectedKey) {
    if (itemWidthCache[selectedKey] + overflowTargetWidth > containerWidth) {
      // If the selected item doesn't fit, only show overflow (all keys hidden)
      return Object.keys(itemWidthCache);
    } else {
      // at least the selected item and overflow target fit. Update our itemWidth with the sum
      itemWidth += itemWidthCache[selectedKey] + overflowTargetWidth;
    }
  }

  for (const key in itemWidthCache) {
    if (key !== selectedKey) {
      itemWidth += itemWidthCache[key];
      if (itemWidth > containerWidth) {
        hiddenKeys.push(key);
      }
    }
  }

  return hiddenKeys;
}

export const useOverflowModel = <T extends unknown>(
  config: OverflowModelConfig<T> = {}
): OverflowModel<T> => {
  const [hiddenKeys, setHiddenKeys] = React.useState(config.initialHiddenKeys || []);
  const [itemWidthCache, setItemWidthCache] = React.useState<Record<string, number>>({});
  const [containerWidth, setContainerWidth] = React.useState(0);
  const containerWidthRef = React.useRef(0);
  const itemWidthCacheRef = React.useRef(itemWidthCache);
  const [overflowTargetWidth, setOverflowTargetWidth] = React.useState(0);
  const overflowTargetWidthRef = React.useRef(0);

  // Cursors skip over disabled keys, but know nothing of hidden keys. We'll go ahead and disable
  // hidden keys as well
  const nonInteractiveKeys = (config.nonInteractiveKeys || []).concat(hiddenKeys);

  const model = useSelectionModel({...(config as SelectionModelConfig<T>), nonInteractiveKeys});

  const state = {
    ...model.state,
    hiddenKeys,
    itemWidthCache,
    containerWidth,
    overflowTargetWidth,
  };

  const events = useEventMap(overflowEventMap, state, config, {
    ...model.events,
    select(data) {
      const {selectedKeys} = model.selection.select(data.id, state as SelectionState<T>);
      const keys = getHiddenKeys(
        containerWidthRef.current,
        overflowTargetWidthRef.current,
        itemWidthCacheRef.current,
        selectedKeys
      );
      model.events.select(data);

      setHiddenKeys(keys);
    },
    setContainerWidth({width}) {
      console.log('setContainerWidth', width);
      containerWidthRef.current = width || 0;
      setContainerWidth(width || 0);

      const keys = getHiddenKeys(
        containerWidthRef.current,
        overflowTargetWidthRef.current,
        itemWidthCacheRef.current,
        state.selectedKeys
      );

      setHiddenKeys(keys);
    },
    setOverflowTargetWidth({width}) {
      overflowTargetWidthRef.current = width;
      setOverflowTargetWidth(width);
    },
    addItemWidth({id, width}) {
      itemWidthCacheRef.current = {...itemWidthCacheRef.current, [id]: width};

      setItemWidthCache(itemWidthCacheRef.current);
    },
    removeItemWidth({id}) {
      const newCache = {...itemWidthCacheRef.current};
      delete newCache[id];
      itemWidthCacheRef.current = newCache;
      setItemWidthCache(itemWidthCacheRef.current);
    },
    addHiddenKey({id}) {
      setHiddenKeys(keys => keys.concat(id));
    },
    removeHiddenKey({id}) {
      setHiddenKeys(keys => keys.filter(key => key !== id));
    },
  } as OverflowEvents<T>);

  return {state, events, selection: model.selection, getId: model.getId};
};
