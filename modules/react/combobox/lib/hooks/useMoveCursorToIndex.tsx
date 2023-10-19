import React from 'react';
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from './useComboboxModel';

/**
 * If there is nothing selected, move cursor to the first item, otherwise, move the cursor to the selected item
 */
export const useMoveCursorToIndex = createElemPropsHook(useComboboxModel)(model => {
  const visible = model.state.visibility !== 'hidden';
  React.useLayoutEffect(() => {
    const cursorItemId = model.state.items.find(item => item.id === model.state.cursorId)?.id;
    // If there is no selected item and items exists we want to set the cursor to the first item in the array
    if (model.state.selectedIds.length === 0 && model.state.items.length > 0 && !cursorItemId) {
      model.events.goTo({id: model.state.items[0].id});
    } else if (model.state.selectedIds.length > 0 && !cursorItemId) {
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

  React.useEffect(() => {
    // when closed, the cursor should reset to the selected item if something is selected
    if (!visible && model.state.selectedIds.length !== 0) {
      model.events.goTo({id: model.state.selectedIds[0]});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, model.events]);
  return {};
});
