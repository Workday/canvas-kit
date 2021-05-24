import React from 'react';

import {PopupModel} from '../usePopupModel';

/**
 * Removes `document.body` overflow while the popup is visible and returns to the original setting
 * when the popup is hidden again.
 */
export const useDisableBodyScroll = (model: PopupModel, elemProps = {}) => {
  React.useLayoutEffect(() => {
    if (!model.state.visible) {
      return;
    }
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [model.state.visible]);

  return elemProps;
};
