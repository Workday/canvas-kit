import React, {CSSProperties} from 'react';

import {
  useMountLayout,
  createHook2,
  useLocalRef,
  useForkRef,
} from '@workday/canvas-kit-react/common';

import {Item} from './useBaseListModel';
import {VirtualItem} from './react-virtual';
import {useListModel2} from './useListModel';

/**
 * Registers an item with a list. It will return elemProps with a `name` which can be used by other
 * hooks to identify the item in the list.
 */
export const useListRegisterItem = createHook2(useListModel2)(
  (
    {state, events, getId},
    ref?: React.Ref<HTMLElement>,
    elemProps: {
      name?: string;
      children?: React.ReactNode;
      index?: number;
      disabled?: boolean;
      item?: Item<any>;
      virtual?: VirtualItem;
    } = {}
  ) => {
    const [localId, setLocalId] = React.useState(elemProps.name || elemProps.item?.id || '');
    const {localRef, elementRef} = useLocalRef(useForkRef(ref, elemProps.virtual?.measureRef));

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
      const itemId = elemProps.name || String(defaultId);

      // TODO: Better lookup that using `items.find`. We need a more generic collection to handle seeing if an item already exists
      // bail early if item already exists. This happens if items were already provided.
      if (state.items.find(item => getId(item) === itemId)) {
        console.log('found', itemId);
        return;
      }
      events.registerItem({
        item: {
          id: itemId,
        },
        textValue: typeof elemProps.children === 'string' ? elemProps.children : '',
      });
      setLocalId(itemId);

      return () => {
        console.log('unregister', itemId);
        events.unregisterItem({id: itemId});
      };
    });

    return {
      ref: elementRef,
      'data-id': localId,
      disabled: elemProps.disabled || state.nonInteractiveIds.includes(localId) ? true : undefined,
      name: null, // remove name from prop list
      item: null, // remove `item` from prop list
      virtual: null, // remove `virtual` from prop list
      'aria-setsize': elemProps.virtual?.size,
      'aria-posinset': elemProps.virtual ? elemProps.item!.index + 1 : undefined,
      style,
    };
  }
);
