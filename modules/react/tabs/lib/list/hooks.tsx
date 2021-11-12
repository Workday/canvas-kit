import React from 'react';

import {useMountLayout, createHook} from '@workday/canvas-kit-react/common';

import {ListModel} from './useListModel';

/**
 * Registers an item with a list. It will return elemProps with a `name` which can be used by other
 * hooks to identify the item in the list.
 */
export const useRegisterItem = createHook(
  (
    {state, events, getId}: ListModel,
    _?: React.Ref<HTMLElement>,
    elemProps: {name?: string; index?: number; disabled?: boolean} = {}
  ) => {
    const [localId, setLocalId] = React.useState(elemProps.name || '');
    const firstRender = React.useRef(true);

    React.useLayoutEffect(() => {
      console.log('calc', elemProps.index);
      if (elemProps.index !== undefined && !firstRender.current) {
        events.updateItemPosition({id: localId, index: elemProps.index});
      }
      // we only care about the index changing
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elemProps.index]);

    useMountLayout(() => {
      const defaultId = state.indexRef.current;
      const itemId = elemProps.name || String(defaultId);
      // bail early if item already exists. This happens if items were already provided.
      if (state.items.find(item => getId(item) === elemProps.name)) {
        return;
      }
      console.log('calc', 'register item');
      events.registerItem({
        item: {id: itemId, disabled: elemProps.disabled, data: {}},
        index: elemProps.index,
      });
      setLocalId(itemId);
      firstRender.current = false;

      return () => {
        events.unregisterItem({id: itemId});
      };
    });

    return {
      'data-name': localId,
      name: localId,
      disabled: elemProps.disabled || state.nonInteractiveKeys.includes(localId) ? true : undefined,
    };
  }
);
