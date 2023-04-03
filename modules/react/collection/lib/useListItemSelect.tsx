import React from 'react';

import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useListModel} from './useListModel';

export const useListItemSelect = createElemPropsHook(useListModel)(
  ({state, events}, _?: React.Ref<HTMLElement>, elemProps: {'data-id'?: string} = {}) => {
    const name = elemProps['data-id'] || '';
    const onClick = (event: React.MouseEvent<HTMLElement>) => {
      if (
        !state.nonInteractiveIds.includes(name) &&
        event.currentTarget.getAttribute('aria-disabled') !== 'true'
      ) {
        events.select({id: name});
      }
    };

    return {onClick};
  }
);
