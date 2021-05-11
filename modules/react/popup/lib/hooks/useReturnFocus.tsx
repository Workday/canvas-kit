import React from 'react';

import {PopupModel} from '../usePopupModel';

/**
 * Set up model so that behaviors return focus when the popup is hidden.
 */
export const useReturnFocus = (model: PopupModel, elemProps = {}) => {
  (model.state.willReturnFocus as React.MutableRefObject<boolean>).current = true;

  return elemProps;
};
