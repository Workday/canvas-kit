import React from 'react';

import {useMountLayout} from '@workday/canvas-kit-react/common';

import {ListModel} from './useListModel';

/**
 * Handle list registration. Returns an identifier used to identify this item in the list
 * @param model A ListModel
 * @param localRef A RefObject that will be used to register an item
 * @param id Desired identifier for the List Model. If not provided, it will fall back to the index
 * in the list
 * @param index (Optional) Specify the position of the item if the order is expected to change
 */
export const useRegisterItem = (
  {state, events}: ListModel,
  localRef: React.RefObject<any>,
  id = '',
  index?: number
): string => {
  const [localId, setLocalId] = React.useState(id);
  const firstRender = React.useRef(true);

  React.useLayoutEffect(() => {
    if (index !== undefined && !firstRender.current) {
      events.updateItemPosition({id: localId, index});
    }
    // we only care about the index changing
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useMountLayout(() => {
    const defaultId = state.indexRef.current;
    const itemId = id || String(defaultId);
    events.registerItem({item: {id: itemId, ref: localRef}, index});
    setLocalId(itemId);
    firstRender.current = false;

    return () => {
      events.unregisterItem({id: itemId});
    };
  });

  return localId;
};
