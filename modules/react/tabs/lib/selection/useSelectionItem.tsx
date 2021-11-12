import React from 'react';

import {createHook} from '@workday/canvas-kit-react/common';

import {SelectionModel} from './useSelectionModel';

export const useSelectionItem = createHook(
  (
    {state, events}: SelectionModel,
    _?: React.Ref<HTMLElement>,
    elemProps: {name?: string} = {}
  ) => {
    const name = elemProps.name || '';
    const onClick = (event: React.MouseEvent<HTMLElement>) => {
      if (
        state.nonInteractiveKeys.includes(name) ||
        event.currentTarget.hasAttribute('aria-disabled')
      ) {
        return;
      }
      events.select({id: name});
    };

    return {onClick};
  }
);
