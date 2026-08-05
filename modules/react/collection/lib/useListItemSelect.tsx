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
export const useListItemSelect = createElemPropsHook(useListModel)((
  {state, events},
  _,
  elemProps: {'data-id'?: string} = {}
) => {
  const name = elemProps['data-id'] || '';
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    const isDisabled = event.currentTarget.getAttribute('aria-disabled') === 'true';
    // #region agent log
    fetch('http://127.0.0.1:7685/ingest/d4b27670-faf7-4b29-bdd1-5bd77f857154', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'X-Debug-Session-Id': 'dea6ae'},
      body: JSON.stringify({
        sessionId: 'dea6ae',
        location: 'useListItemSelect.tsx:onClick',
        message: 'Menu item click',
        data: {id: name, isDisabled, nonInteractive: state.nonInteractiveIds.includes(name)},
        timestamp: Date.now(),
        hypothesisId: 'B2',
      }),
    }).catch(() => undefined);
    // #endregion
    if (isDisabled || state.nonInteractiveIds.includes(name)) {
      return null;
    }
    events.select({id: name});
  };

  return {onClick};
});
