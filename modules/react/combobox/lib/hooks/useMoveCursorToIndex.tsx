import React from 'react';
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from './useComboboxModel';

export const useMoveCursorToIndex = createElemPropsHook(useComboboxModel)(model => {
  React.useLayoutEffect(() => {
    // If there is no selected item and items exists we want to set the cursor to the first item in the array
    if (model.state.selectedIds.length === 0 && model.state.items.length > 0) {
      model.events.goTo({id: model.state.items[0].id});
    } else if (model.state.selectedIds.length > 0) {
      // If the user wants an item selected by default by passing `initialSelectedId` we select that item
      const selectedItem = model.state.items.findIndex(
        (item: {id: string}) => item.id === model.state.selectedIds[0]
      );
      model.events.goTo({id: model.state.items[selectedItem].id});
      model.events.select({id: model.state.items[selectedItem].id});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {};
});
