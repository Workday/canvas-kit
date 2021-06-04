import React from 'react';

import {PopupModel} from './usePopupModel';

/**
 * Disables body scroll by adding `overflow: hidden` to the body element. This effectively prevents
 * page scrolling while the popup is visible.
 *
 * This should be used with popup elements that hide all other content and force the user to accept
 * or dismiss the popup before continuing (i.e. Modals).
 */
export const useDisableBodyScroll = (model: PopupModel, elemProps = {}) => {
  const visible = model.state.visibility !== 'hidden';

  React.useLayoutEffect(() => {
    if (!visible) {
      return;
    }
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [visible]);

  return elemProps;
};
