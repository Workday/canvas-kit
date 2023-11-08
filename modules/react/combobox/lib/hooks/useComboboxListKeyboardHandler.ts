import React from 'react';
import {createElemPropsHook, useIsRTL} from '@workday/canvas-kit-react/common';
import {keyboardEventToCursorEvents} from '@workday/canvas-kit-react/collection';

import {useComboboxModel} from './useComboboxModel';

/**
 * `useComboboxListKeyboardHandler` handle calling keyboard events like ArrowUp and ArrowDown only when the menu is visible.
 */
export const useComboboxListKeyboardHandler = createElemPropsHook(useComboboxModel)(model => {
  const isRTL = useIsRTL();

  return {
    onKeyDown(event: React.KeyboardEvent) {
      if (model.state.visibility === 'visible') {
        const handled = keyboardEventToCursorEvents(event, model, isRTL);
        if (handled) {
          event.preventDefault();
        }
      }
    },
  };
});
