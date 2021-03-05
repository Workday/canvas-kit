import React from 'react';

import {useMountLayout} from '@workday/canvas-kit-react-common';

import {ListModel} from './useListModel';

/**
 * Handle list registration. Returns an identifier used to identify this item in the list
 * @param model A ListModel
 * @param localRef A RefObject that will be used to register an item
 * @param id Desired identifier for the List Model. If not provided, it will fall back to the index
 * @param index (Optional) Specify the position of the item if the order is expected to change
 */
export const useRegisterItem = (
  {state, events}: ListModel,
  localRef: React.RefObject<any>,
  id = '',
  index?: number
): string => {
  const [localId, setLocalId] = React.useState(id);

  useMountLayout(() => {
    const defaultId = state.indexRef.current;
    const itemId = id || String(defaultId);
    events.registerItem({item: {id: itemId, ref: localRef, index}});
    setLocalId(itemId);

    return () => {
      events.unregisterItem({id: itemId});
    };
  });

  return localId;
};
