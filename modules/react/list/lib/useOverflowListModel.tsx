import React from 'react';

import {createModelHook} from '@workday/canvas-kit-react/common';
import {useSelectionListModel2} from './useSelectionListModel';

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

export const useOverflowListModel2 = createModelHook({
  defaultConfig: {
    ...useSelectionListModel2.defaultConfig,
    initialHiddenIds: [] as string[],
    containerWidth: 0,
  },
  requiredConfig: useSelectionListModel2.requiredConfig,
})(config => {
  const [hiddenIds, setHiddenIds] = React.useState(config.initialHiddenIds);
  const [itemWidthCache, setItemWidthCache] = React.useState<Record<string, number>>({});
  const [containerWidth, setContainerWidth] = React.useState(0);
  const containerWidthRef = React.useRef(0);
  const itemWidthCacheRef = React.useRef(itemWidthCache);
  const [overflowTargetWidth, setOverflowTargetWidth] = React.useState(0);
  const overflowTargetWidthRef = React.useRef(0);

  // Cursors skip over disabled ids, but know nothing of hidden ids. We'll go ahead and disable
  // hidden ids as well
  const nonInteractiveIds = (config.nonInteractiveIds || []).concat(hiddenIds);

  const model = useSelectionListModel2({
    ...config,
    nonInteractiveIds,
  });

  console.log('overflowModel', model.state.id, model.state);

  const state = {
    ...model.state,
    hiddenIds,
    itemWidthCache,
    containerWidth,
    overflowTargetWidth,
  };

  const events = {
    ...model.events,
    select(data: Parameters<typeof model.events.select>[0]) {
      const {selectedIds} = model.selection.select(data.id, state);
      const ids = getHiddenIds(
        containerWidthRef.current,
        overflowTargetWidthRef.current,
        itemWidthCacheRef.current,
        selectedIds
      );
      model.events.select(data);

      setHiddenIds(ids);
    },
    setContainerWidth(data: {width?: number}) {
      containerWidthRef.current = data.width || 0;
      setContainerWidth(data.width || 0);

      const ids = getHiddenIds(
        containerWidthRef.current,
        overflowTargetWidthRef.current,
        itemWidthCacheRef.current,
        state.selectedIds
      );

      setHiddenIds(ids);
    },
    setOverflowTargetWidth(data: {width: number}) {
      overflowTargetWidthRef.current = data.width;
      setOverflowTargetWidth(data.width);
    },
    addItemWidth(data: {id: string; width: number}) {
      itemWidthCacheRef.current = {
        ...itemWidthCacheRef.current,
        [data.id]: data.width,
      };

      setItemWidthCache(itemWidthCacheRef.current);

      const ids = getHiddenIds(
        containerWidthRef.current,
        overflowTargetWidthRef.current,
        itemWidthCacheRef.current,
        state.selectedIds
      );

      setHiddenIds(ids);
    },
    removeItemWidth(data: {id: string}) {
      const newCache = {...itemWidthCacheRef.current};
      delete newCache[data.id];
      itemWidthCacheRef.current = newCache;
      setItemWidthCache(itemWidthCacheRef.current);

      const ids = getHiddenIds(
        containerWidthRef.current,
        overflowTargetWidthRef.current,
        itemWidthCacheRef.current,
        state.selectedIds !== 'all'
          ? state.selectedIds.filter(sId => data.id !== sId)
          : state.selectedIds
      );

      setHiddenIds(ids);
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
