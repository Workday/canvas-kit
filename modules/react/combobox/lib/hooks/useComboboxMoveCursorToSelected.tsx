import React from 'react';

import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useComboboxModel} from './useComboboxModel';

/**
 * If there is nothing selected, move cursor to the first item, otherwise, move the cursor to the selected item
 */
export const useComboboxMoveCursorToSelected = createElemPropsHook(useComboboxModel)(model => {
  React.useLayoutEffect(() => {
    const cursorItemId = model.state.items.find(item => item.id === model.state.cursorId)?.id;
    // If there is no selected item and items exists we want to set the cursor to the first item in the array
    if (!model.state.selectedIds.length && model.state.items.length && !cursorItemId) {
      model.events.goTo({id: model.state.items[0].id});
    } else if (model.state.selectedIds.length && !cursorItemId) {
      // If the user wants an item selected by default by passing `initialSelectedId` we select that item
      model.events.goTo({id: model.state.selectedIds[0]});
    }
  }, [
    model.state.selectedIds,
    model.events,
    model.state.items,
    model.state.cursorId,
    model.state.visibility,
  ]);

  return {};
});
