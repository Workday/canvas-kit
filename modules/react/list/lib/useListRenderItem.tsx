import React from 'react';

import {BaseListModel} from './useBaseListModel';

export function useListRenderItems<T>(
  model: BaseListModel<T>,
  children: ((item: T) => React.ReactNode) | React.ReactNode
) {
  const items =
    typeof children === 'function'
      ? model.state.items.map(item => React.cloneElement(children(item.value), {key: item.id}))
      : null;

  return items || children;
}
