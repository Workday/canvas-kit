import React from 'react';
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from './useComboboxModel';

/**
 * Sets the width of the Menu to the target element when the menu is visible
 */
export const useSetPopupWidth = createElemPropsHook(useComboboxModel)(model => {
  const visible = model.state.visibility !== 'hidden';
  React.useLayoutEffect(() => {
    if (visible) {
      model.events.setWidth(model.state.targetRef.current?.getBoundingClientRect().width || 0);
    }
  }, [visible, model.events, model.state.targetRef]);
  return {};
});
