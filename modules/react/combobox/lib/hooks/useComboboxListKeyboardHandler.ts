import React from 'react';
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {keyboardEventToCursorEvents} from '@workday/canvas-kit-react/collection';

import {useComboboxModel} from './useComboboxModel';

/**
 * `useComboboxListKeyboardHandler` handle calling keyboard events like ArrowUp and ArrowDown only when the menu is visible.
 */
export const useComboboxListKeyboardHandler = createElemPropsHook(useComboboxModel)(model => {
  return {
    onKeyDown(event: React.KeyboardEvent) {
      if (model.state.visibility === 'visible') {
        const handled = keyboardEventToCursorEvents(event, model);
        if (handled) {
          event.preventDefault();
        }
      }
    },
  };
});
