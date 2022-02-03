import React from 'react';

import {createHook} from '@workday/canvas-kit-react/common';
import {orientationKeyMap} from './useRovingFocus';

import {SelectionModel} from './useSelectionModel';

/**
 * Reset the cursor to the selected item when the list looses focus
 */
export const useResetCursorOnBlur = createHook(({state, events}: SelectionModel) => {
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
