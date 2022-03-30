import React from 'react';

import {BaseListModel} from './useBaseListModel';

export function useListRenderItems<T>(
  model: BaseListModel<T>,
  children: ((item: T) => React.ReactNode) | React.ReactNode
) {
  const items =
    typeof children === 'function'
      ? model.state.isVirtualized
        ? model.state.UNSTABLE_virtual.virtualItems.map(virtualItem => {
            const item = model.state.items[virtualItem.index];
            const child = children(item.value);
            console.log('child', child);
            return React.cloneElement(child, {
              ref: virtualItem.measureRef,
              key: item.id,
              item: item,
              'aria-setsize': virtualItem.size,
              'aria-posinset': item.index + 1,
            });
          })
        : model.state.items.map(item =>
            React.cloneElement(children(item.value), {key: item.id, item: item.value})
          )
      : null;

  return items || children;
}
