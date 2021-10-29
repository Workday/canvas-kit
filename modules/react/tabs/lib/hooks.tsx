import React from 'react';
import {createHook} from '@workday/canvas-kit-react/common';

import {orientationKeyMap} from './cursor/hooks';
import {TabsModel} from './useTabsModel';

/**
 * Reset the cursor to the active tab when the tab list looses focus
 */
export const useResetCursorOnBlur = createHook(({state, visibleTabs}: TabsModel<unknown>) => {
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
        visibleTabs.events.goTo({id: state.activeTab});
      }
    },
  };
});
