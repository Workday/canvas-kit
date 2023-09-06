import React from 'react';
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from './useComboboxModel';

export const useScrollToIndexOnClick = createElemPropsHook(useComboboxModel)(model => {
  return {
    onClick: (event: React.MouseEvent) => {
      if (model.state.selectedIds.length > 0) {
        const foundIndex = model.state.items.findIndex(
          (item: {id: string}) => item.id === model.state.selectedIds[0]
        );
        model.events.goTo({id: model.state.items[foundIndex].id});
        model.state.UNSTABLE_virtual.scrollToIndex(foundIndex);
      }
    },
  };
});
