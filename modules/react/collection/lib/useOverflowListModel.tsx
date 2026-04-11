import React from 'react';

import {createModelHook} from '@workday/canvas-kit-react/common';
import {useSelectionListModel} from './useSelectionListModel';
import {Item} from './useBaseListModel';

export function getHiddenIds(
  containerSize: number,
  containerGap: number,
  overflowTargetSize: number,
  itemSizeCache: Record<string, number>,
  selectedIds: string[] | 'all',
  items: Item<any>[]
): string[] {
  /** Allows us to prioritize showing the selected item */
  let selectedKey: undefined | string;
  /** Tally of combined item widths. We'll add items that fit until the container is full */
  let itemSize = 0;
  /** Tally ids that won't fit inside the container. These will be used by components to hide
   * elements that won't fit in the container */
  const hiddenIds: string[] = [];
  /** Track if gap should be calculated since gap doesn't apply to the width of the first item, only
   * consecutive items */
  let shouldAddGap = false;

  if (selectedIds !== 'all' && selectedIds.length) {
    if (items.length) {
      // If selectedIds[0] is not in items, use the first id from items
      selectedKey = items.find(item => item.id === selectedIds[0]) ? selectedIds[0] : items[0].id;
    }
  }

  if (
    Object.keys(itemSizeCache).reduce(
      (sum, key, index) => sum + itemSizeCache[key] + (index > 0 ? containerGap : 0),
      0
    ) <= containerSize
  ) {
    // All items fit, return empty array
    return [];
  } else if (selectedKey) {
    if (itemSizeCache[selectedKey] + overflowTargetSize > containerSize) {
      // If the selected item doesn't fit, only show overflow (all items hidden)
      return Object.keys(itemSizeCache);
    } else {
      // at least the selected item and overflow target fit. Update our itemWidth with the sum
      itemSize += itemSizeCache[selectedKey] + overflowTargetSize;
      shouldAddGap = true;
    }
  } else {
    itemSize += overflowTargetSize;
  }

  for (const key in itemSizeCache) {
    if (key !== selectedKey) {
      itemSize += itemSizeCache[key] + (shouldAddGap ? containerGap : 0);
      shouldAddGap = true;
      if (itemSize > containerSize) {
        hiddenIds.push(key);
      }
    }
  }

  return hiddenIds;
}

export const useOverflowListModel = createModelHook({
  defaultConfig: {
    ...useSelectionListModel.defaultConfig,
    initialHiddenIds: [] as string[],
    containerWidth: 0,
    /**
     * Determines if overflow should actually occur. For example, touch devices are better at
     * side-scrolling than mouse devices. In these cases, it makes sense to disable overflowing.
     * @default true
     */ shouldCalculateOverflow: true,
  },
  requiredConfig: useSelectionListModel.requiredConfig,
  contextOverride: useSelectionListModel.Context,
})(config => {
  const shouldCalculateOverflow =
    config.shouldCalculateOverflow === undefined ? true : config.shouldCalculateOverflow;
  const [hiddenIds, setHiddenIds] = React.useState(config.initialHiddenIds);
  const [itemSizeCache, setItemSizeCache] = React.useState<Record<string, number>>({});
  const [containerSize, setContainerSize] = React.useState(0);
  const [containerGap, setContainerGap] = React.useState(0);
  const containerSizeRef = React.useRef(0);
  const itemSizeCacheRef = React.useRef(itemSizeCache);
  const [overflowTargetWidth, setOverflowTargetWidth] = React.useState(0);
  const overflowTargetSizeRef = React.useRef(0);

  const internalHiddenIds = shouldCalculateOverflow ? hiddenIds : [];

  // Cursors skip over disabled ids, but know nothing of hidden ids. We'll go ahead and disable
  // hidden ids as well
  const nonInteractiveIds = (config.nonInteractiveIds || []).concat(internalHiddenIds);

  const model = useSelectionListModel({
    ...config,
    nonInteractiveIds,
  });

  const state = {
    ...model.state,
    hiddenIds: internalHiddenIds,
    itemSizeCache,
    /**
     * @deprecated Use `itemSizeCache` instead
     */
    itemWidthCache: itemSizeCache,
    containerSize,
    /**
     * @deprecated Use `containerSize` instead
     */
    containerWidth: containerSize,
    containerGap,
    overflowTargetWidth,
  };

  const events = {
    ...model.events,
    select(data: Parameters<typeof model.events.select>[0]) {
      const {selectedIds} = model.selection.select(data.id, state);
      const ids = getHiddenIds(
        containerSizeRef.current,
        containerGap,
        overflowTargetSizeRef.current,
        itemSizeCacheRef.current,
        selectedIds,
        config.items
      );
      model.events.select(data);

      setHiddenIds(ids);
    },
    setContainerSize(data: {width?: number; height?: number}) {
      containerSizeRef.current =
        model.state.orientation === 'horizontal' ? data.width || 0 : data.height || 0;
      setContainerSize(containerSizeRef.current);
      const ids = getHiddenIds(
        containerSizeRef.current,
        containerGap,
        overflowTargetSizeRef.current,
        itemSizeCacheRef.current,
        state.selectedIds,
        config.items
      );
      setHiddenIds(ids);
    },
    /**
     * @deprecated Use `setContainerSize` instead and pass both `width` and `height`
     */
    setContainerWidth(data: {width?: number}) {
      events.setContainerSize({width: data.width, height: 0});
    },
    setContainerGap(data: {size: number}) {
      setContainerGap(data.size);

      const ids = getHiddenIds(
        containerSizeRef.current,
        data.size,
        overflowTargetSizeRef.current,
        itemSizeCacheRef.current,
        state.selectedIds,
        config.items
      );

      setHiddenIds(ids);
    },
    setOverflowTargetSize(data: {width: number; height: number}) {
      overflowTargetSizeRef.current =
        model.state.orientation === 'horizontal' ? data.width || 0 : data.height || 0;
      setOverflowTargetWidth(overflowTargetSizeRef.current);
      const ids = getHiddenIds(
        containerSizeRef.current,
        containerGap,
        overflowTargetSizeRef.current,
        itemSizeCacheRef.current,
        state.selectedIds,
        config.items
      );
      setHiddenIds(ids);
    },

    /**
     *
     * @deprecated `setOverflowTargetWidth` is deprecated. Please use `setOverflowTargetSize` and pass in the `width` and set `height` to `0`.
     */
    setOverflowTargetWidth(data: {width: number}) {
      overflowTargetSizeRef.current = data.width;
      events.setOverflowTargetSize({width: overflowTargetSizeRef.current, height: 0});
    },

    /**
     *
     * @deprecated `addItemWidth` is deprecated. Please use `addItemSize` and set the `width`
     */
    addItemWidth(data: {id: string; width: number}) {
      events.addItemSize({id: data.id, width: data.width, height: 0});
    },
    addItemSize(data: {id: string; width: number; height: number}) {
      itemSizeCacheRef.current = {
        ...itemSizeCacheRef.current,
        [data.id]: model.state.orientation === 'horizontal' ? data.width : data.height,
      };

      setItemSizeCache(itemSizeCacheRef.current);

      const ids = getHiddenIds(
        containerSizeRef.current,
        containerGap,
        overflowTargetSizeRef.current,
        itemSizeCacheRef.current,
        state.selectedIds,
        config.items
      );

      setHiddenIds(ids);
    },
    removeItemSize(data: {id: string}) {
      const newCache = {...itemSizeCacheRef.current};
      delete newCache[data.id];
      itemSizeCacheRef.current = newCache;
      setItemSizeCache(itemSizeCacheRef.current);

      const ids = getHiddenIds(
        containerSizeRef.current,
        containerGap,
        overflowTargetSizeRef.current,
        itemSizeCacheRef.current,
        state.selectedIds !== 'all'
          ? state.selectedIds.filter(sId => data.id !== sId)
          : state.selectedIds,
        config.items
      );

      setHiddenIds(ids);
    },
    /**
     *
     * @deprecated `removeItemWidth` is deprecated. Please use `removeItemSize`.
     */
    removeItemWidth(data: {id: string}) {
      events.removeItemSize({id: data.id});
    },
    addHiddenKey(data: {id: string}) {
      setHiddenIds(ids => ids.concat(data.id));
    },
    removeHiddenKey(data: {id: string}) {
      setHiddenIds(ids => ids.filter(key => key !== data.id));
    },
  };

  return {...model, state, events};
});
