import React from 'react';

import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useComboboxModel} from './useComboboxModel';

/**
 * Reset the cursor to the selected item when the Menu is closed
 */
export const useComboboxResetCursorToSelected = createElemPropsHook(useComboboxModel)(model => {
  const visible = model.state.visibility !== 'hidden';
  React.useEffect(() => {
    // when closed, the cursor should reset to the selected item if something is selected
    if (!visible && model.state.selectedIds.length) {
      model.events.goTo({id: model.state.selectedIds[0]});
    }
  }, [visible, model.events, model.state.selectedIds]);
  return {};
});
