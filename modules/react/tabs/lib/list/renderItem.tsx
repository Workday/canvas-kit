import React from 'react';

import {ListModel} from './useListModel';

export function useRenderItems<T>(
  model: ListModel<T>,
  children: ((item: T) => React.ReactNode) | React.ReactNode
) {
  const items = React.useMemo(() => {
    return typeof children === 'function'
      ? model.state.items.map(item => React.cloneElement(children(item), {key: model.getId(item)}))
      : null;
    // If we added `children` as a dependency, this memo would be useless. If the user wants the
    // item to rerender, the item and items array needs to be updated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model.state.items]);

  return items || children;
}
