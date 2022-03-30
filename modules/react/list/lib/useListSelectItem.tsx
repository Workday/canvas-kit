import React from 'react';

import {createHook} from '@workday/canvas-kit-react/common';

import {SelectionListModel} from './useSelectionListModel';

export const useListSelectItem = createHook(
  (
    {state, events}: SelectionListModel,
    _?: React.Ref<HTMLElement>,
    elemProps: {'data-id'?: string} = {}
  ) => {
    const name = elemProps['data-id'] || '';
    const onClick = (event: React.MouseEvent<HTMLElement>) => {
      if (
        state.nonInteractiveIds.includes(name) ||
        event.currentTarget.hasAttribute('aria-disabled')
      ) {
        return;
      }
      events.select({id: name});
    };

    return {onClick};
  }
);
