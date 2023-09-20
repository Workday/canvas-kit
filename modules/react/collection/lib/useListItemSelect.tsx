import React from 'react';

import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useListModel} from './useListModel';

/**
 * This elemProps hook adds selection support to a `*.Item` subcomponent of a collection. It adds a
 * click handler that toggles selection status according to the [Selection
 * Manager](#selection-manager) used.
 *
 * ```ts
 * const useMyItem = composeHooks(
 *   useListItemSelect, // adds selection support to an item
 *   useListItemRegister
 * );
 * ```
 */
export const useListItemSelect = createElemPropsHook(useListModel)(
  ({state, events}, _, elemProps: {'data-id'?: string} = {}) => {
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
