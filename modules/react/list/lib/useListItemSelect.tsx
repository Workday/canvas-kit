import React from 'react';

import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useListModel2} from './useListModel';

export const useListItemSelect = createElemPropsHook(useListModel2)(
  ({state, events}, _?: React.Ref<HTMLElement>, elemProps: {'data-id'?: string} = {}) => {
    const name = elemProps['data-id'] || '';
    const onClick = (event: React.MouseEvent<HTMLElement>) => {
      if (
        state.nonInteractiveIds.includes(name) ||
        event.currentTarget.hasAttribute('aria-disabled')
      ) {
        return;
      }
      console.log('select', name);
      events.select({id: name});
    };

    return {onClick};
  }
);
