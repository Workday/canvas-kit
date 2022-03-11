import React from 'react';

import {useMountLayout, createHook} from '@workday/canvas-kit-react/common';

import {BaseListModel} from './useBaseListModel';

/**
 * Registers an item with a list. It will return elemProps with a `name` which can be used by other
 * hooks to identify the item in the list.
 */
export const useListRegisterItem = createHook(
  (
    {state, events, getId}: BaseListModel<any>,
    _?: React.Ref<HTMLElement>,
    elemProps: {name?: string; children?: React.ReactNode; index?: number; disabled?: boolean} = {}
  ) => {
    const [localId, setLocalId] = React.useState(elemProps.name || '');
    const firstRender = React.useRef(true);

    useMountLayout(() => {
      const defaultId = state.indexRef.current;
      console.log('name', elemProps.name);
      const itemId = elemProps.name || String(defaultId);

      // TODO: Better lookup that using `items.find`. We need a more generic collection to handle seeing if an item already exists
      // bail early if item already exists. This happens if items were already provided.
      if (state.items.find(item => getId(item) === elemProps.name)) {
        console.log('found', elemProps.name);
        return;
      }
      events.registerItem({
        item: {
          id: itemId,
          textValue: typeof elemProps.children === 'string' ? elemProps.children : '',
        },
      });
      setLocalId(itemId);
      firstRender.current = false;

      return () => {
        console.log('unregister', elemProps.name);
        events.unregisterItem({id: itemId});
      };
    });

    return {
      'data-id': localId,
      name: localId,
      disabled: elemProps.disabled || state.nonInteractiveIds.includes(localId) ? true : undefined,
    };
  }
);
