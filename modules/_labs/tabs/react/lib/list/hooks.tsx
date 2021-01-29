import React from 'react';

import {useMountLayout} from '@workday/canvas-kit-react-common';

import {ListModel} from './useListModel';

/**
 * Handle list registration. Returns an identifier used to identify this item in the list
 * @param model A ListModel
 * @param localRef A RefObject that will be used to register an item
 * @param id Desired identifier for the List Model. If not provided, it will fall back to the index
 * in the list
 */
export const useRegisterItem = (
  {state, events}: ListModel,
  localRef: React.RefObject<any>,
  id = ''
): string => {
  const [localId, setLocalId] = React.useState(id);

  useMountLayout(() => {
    const index = state.indexRef.current;
    const itemId = id || String(index);
    events.registerItem({item: {id: itemId, ref: localRef}});
    setLocalId(itemId);

    return () => {
      events.unregisterItem({id: itemId});
    };
  });

  return localId;
};
