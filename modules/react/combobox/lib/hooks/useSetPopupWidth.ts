import React from 'react';
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from './useComboboxModel';

export const useSetPopupWidth = createElemPropsHook(useComboboxModel)(model => {
  React.useLayoutEffect(() => {
    // If there is no selected item and items exists we want to set the cursor to the first item in the array
    model.events.setWidth(model.state.targetRef.current?.clientWidth || 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {};
});
