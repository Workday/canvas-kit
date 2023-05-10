import React, {CSSProperties} from 'react';

import {
  useMountLayout,
  createElemPropsHook,
  useLocalRef,
  useForkRef,
  slugify,
} from '@workday/canvas-kit-react/common';

import {Item} from './useBaseListModel';
import {VirtualItem} from './react-virtual';
import {useListModel} from './useListModel';

/**
 * This elemProps hook is the base of all item component hooks. It registers an item with a
 * collection and sets the `data-id` that is used by other hooks. It should always be the last
 * defined hook when using `composeHooks` (`composeHooks` executes hooks right to left and merges
 * props left to right). It is used by `ListBox.Item` and all `*.Item` subcomponents.
 *
 * ```ts
 * const useMyItem = composeHooks(
 *   useListItemSelect, // additional hooks go here
 *   useListItemRegister // always last
 * );
 * ```
 */
export const useListItemRegister = createElemPropsHook(useListModel)(
  (
    {state, events},
    ref,
    elemProps: {
      'data-id'?: string;
      'data-text'?: string;
      children?: React.ReactNode;
      index?: number;
      disabled?: boolean;
      item?: Item<any>;
      virtual?: VirtualItem;
    } = {}
  ) => {
    const [localId, setLocalId] = React.useState(elemProps['data-id'] || elemProps.item?.id || '');
    const {localRef, elementRef} = useLocalRef(
      useForkRef(ref as React.Ref<HTMLElement>, elemProps.virtual?.measureRef)
    );

    // if the list is virtual, force the correct styling. Without this, weird things happen...
    const style: CSSProperties = elemProps.virtual
      ? {
          position: 'absolute',
          top: 0,
          left: 0,
          transform: `translateY(${elemProps.virtual.start}px)`,
        }
      : {};

    useMountLayout(() => {
      if (elemProps.virtual?.index === 0 && localRef.current?.clientHeight) {
        // TODO: This update doesn't seem to be working correctly
        // events.updateItemHeight?.(localRef.current!.clientHeight);
      }
      // if an item is already provided, there's nothing left to do
      if (elemProps.item) {
        return;
      }
      const defaultId = state.indexRef.current;
      const itemId = localId || String(defaultId);

      // TODO: Better lookup that using `items.find`. We need a more generic collection to handle seeing if an item already exists
      // bail early if item already exists. This happens if items were already provided.
      if (state.items.find(item => item.id === itemId)) {
        return;
      }
      events.registerItem({
        item: {
          id: itemId,
        },
        textValue: elemProps['data-text']
          ? elemProps['data-text']
          : typeof elemProps.children === 'string'
          ? elemProps.children
          : '',
      });
      setLocalId(itemId);

      return () => {
        events.unregisterItem({id: itemId});
      };
    });

    return {
      ref: elementRef,
      'data-id': localId,
      disabled: elemProps.disabled || state.nonInteractiveIds.includes(localId) ? true : undefined,
      item: null, // remove `item` from prop list
      virtual: null, // remove `virtual` from prop list
      'aria-setsize': elemProps.virtual?.size,
      'aria-posinset': elemProps.virtual ? elemProps.item!.index + 1 : undefined,
      style,
      id: slugify(`${state.id}-${localId}`),
    };
  }
);
