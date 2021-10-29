import React from 'react';
import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';

import {
  SelectionState,
  SelectionEvents,
  BaseSelectionModelConfig,
  useSelectionModel,
  SelectionModelConfig,
  selectionEventMap,
} from '../selection';

export type OverflowState<T> = SelectionState<T> & {
  containerWidth: number;
  overflowTargetWidth: number;
  itemWidthCache: Record<string, number>;
  hiddenKeys: string[];
};

export type OverflowEvents<T> = SelectionEvents<T> & {
  setContainerWidth(data: {width: number}): void;
  setOverflowTargetWidth(data: {width: number}): void;
  addItemWidth(data: {id: string; width: number}): void;
  removeItemWidth(data: {id: string}): void;
  addHiddenKey(data: {id: string}): void;
  removeHiddenKey(data: {id: string}): void;
};

export interface OverflowModel<T> extends Model<OverflowState<T>, OverflowEvents<T>> {}

export const overflowEventMap = createEventMap<OverflowEvents<unknown>>()({
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

  if (
    selectedKeys !== 'all' &&
    selectedKeys.length &&
    itemWidthCache[selectedKeys[0]] < containerWidth
  ) {
    selectedKey = selectedKeys[0];
    itemWidth += itemWidthCache[selectedKeys[0]];
  }

  /** Track when we're "done" which happens when we've found all the keys that can fit in the
   * container. Without this tracking, the loop will "pack" */
  let done = false;

  for (const key in itemWidthCache) {
    if (!done && itemWidthCache[key] + itemWidth + overflowTargetWidth < containerWidth) {
      if (key !== selectedKey) {
        itemWidth += itemWidthCache[key];
      }
    } else if (key !== selectedKey) {
      done = true;
      hiddenKeys.push(key);
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

  const selection = useSelectionModel(config as SelectionModelConfig<T>);

  const state = {
    ...selection.state,
    hiddenKeys,
    itemWidthCache,
    containerWidth,
    overflowTargetWidth,
  };

  // console.log(
  //   'widths',
  //   state.itemWidthCache,
  //   state.containerWidth,
  //   state.overflowTargetWidth,
  //   Object.keys(state.itemWidthCache).filter(key => !hiddenKeys.includes(key)),

  //   Object.values(state.itemWidthCache).reduce(
  //     (acc, width) => acc + width,
  //     state.overflowTargetWidth
  //   )
  // );

  const events = useEventMap(overflowEventMap, state, config, {
    ...selection.events,
    select(data) {
      const {selectedKeys} = selection.selection.select(data.id, state as SelectionState<T>);
      const keys = getHiddenKeys(
        containerWidthRef.current,
        overflowTargetWidthRef.current,
        itemWidthCacheRef.current,
        selectedKeys
      );
      selection.events.select(data);

      setHiddenKeys(keys);
    },
    setContainerWidth({width}) {
      containerWidthRef.current = width;
      setContainerWidth(width);

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

  return {state, events};
};
