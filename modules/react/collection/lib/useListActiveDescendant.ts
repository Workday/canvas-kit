import React from 'react';
import {useIsRTL, createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useCursorListModel} from './useCursorListModel';
import {keyboardEventToCursorEvents} from './keyUtils';

/**
 * This elemProps hook is used for cursor navigation by using [Active
 * Descendant](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant).
 * `aria-activedescendant` tells assistive technology which element has "focus" within the component
 * while this single element maintains focus.
 *
 * ```ts
 * const useMyItem = composeHooks(
 *   useListActiveDescendant, // adds `aria-activedescendant` support
 *   useListItemRegister
 * );
```
 */
export const useListActiveDescendant = createElemPropsHook(useCursorListModel)(model => {
  const isRTL = useIsRTL();

  return {
    onKeyDown(event: React.KeyboardEvent) {
      const handled = keyboardEventToCursorEvents(event, model, isRTL);
      if (handled) {
        event.preventDefault();
      }
    },
  };
});
