import React from 'react';

import {Generic} from '@workday/canvas-kit-react/common';

import {useBaseListModel2} from './useBaseListModel';

export function useListRenderItems<T>(
  model: ReturnType<typeof useBaseListModel2>,
  children: ((item: Generic) => React.ReactNode) | React.ReactNode
) {
  console.log('useListRenderItem', model.state);
  const items =
    typeof children === 'function'
      ? model.state.isVirtualized
        ? model.state.UNSTABLE_virtual.virtualItems.map(virtual => {
            const item = model.state.items[virtual.index];
            const child = children(item.value);
            return React.cloneElement(child, {
              // We call this `virtual` instead of `virtualItem` to avoid a React render warning
              // about capital letters in attributes. React thinks this will be applied to the DOM
              // element even though we remove it later...
              virtual,
              key: item.id,
              item: item,
            });
          })
        : model.state.items.map(item =>
            React.cloneElement(children(item.value), {key: item.id, item: item.value})
          )
      : null;

  return items || children;
}
