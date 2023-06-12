import React from 'react';

import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {orientationKeyMap} from './keyUtils';
import {useListModel} from './useListModel';

/**
 * This elemProps hook resets the cursor when the list looses focus. By default,
 * [useListItemRovingFocus](#use-list-item-roving-focus) will leave the last focused item as the
 * focusable item in the list. Sometimes it is desireable to reset the cursor to the last selected
 * item. For example, `Tabs.Item` uses this hook to reset the tab stop to the currently selected tab.
 *
 * ```ts
 * const useMyItem = composeHooks(
 *   useListResetCursorOnBlur, // adds the cursor reset to selected for roving tabindex
 *   useListItemRovingFocus,
 *   useListItemRegister
 * );
```
 */
export const useListResetCursorOnBlur = createElemPropsHook(useListModel)(({state, events}) => {
  const programmaticFocusRef = React.useRef(false);
  return {
    onKeyDown(event: React.KeyboardEvent) {
      // Programmatic focus only on any focus change via keyboard
      if (Object.keys(orientationKeyMap[state.orientation]).indexOf(event.key) !== -1) {
        programmaticFocusRef.current = true;
      }
    },
    onFocus() {
      programmaticFocusRef.current = false;
    },
    onBlur() {
      if (!programmaticFocusRef.current) {
        events.goTo({id: state.selectedIds[0]});
      }
    },
  };
});
