import React from 'react';

import {Generic} from '@workday/canvas-kit-react/common';

import {useBaseListModel} from './useBaseListModel';

/**
 * This hook is meant to be used inside the render function of `List` style components. It is used
 * by `ListBox`. This hook gives list-based components their static and dynamic APIs to handle list
 * items. This hook should only be used if you want to implement your own List. For example,
 * `Tabs.List` uses this hook, but `Menu.List` uses `ListBox` which uses this hook.
 *
 * ```tsx
 * const MyList = createContainer('ul')({
 *   modelHook: useListModel,
 * })((elemProps, Element, model) => {
 *   return <Element {...elemProps}>{useListRenderItems(model, elemProps.children)}</Element>;
 * });
```
 */
export function useListRenderItems<T>(
  model: ReturnType<typeof useBaseListModel>,
  children: ((item: Generic, index: number) => React.ReactNode) | React.ReactNode
): React.ReactNode {
  const items =
    typeof children === 'function'
      ? model.state.isVirtualized
        ? model.state.UNSTABLE_virtual.virtualItems.map(virtual => {
            const item = model.state.items[virtual.index];
            const child = children(item.value, virtual.index);
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                // We call this `virtual` instead of `virtualItem` to avoid a React render warning
                // about capital letters in attributes. React thinks this will be applied to the DOM
                // element even though we remove it later...
                virtual,
                key: item.id,
                item,
              });
            }
            return child;
          })
        : model.state.items.map(item => {
            const child = children(item.value, item.index);
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                key: item.id,
                item: item.value,
              });
            }
            return child;
          })
      : children;

  return items;
}
