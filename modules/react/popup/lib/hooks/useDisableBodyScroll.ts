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

    const overflowY = document.body.style.overflowY;
    const overflowX = document.body.style.overflowX;
    const overflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.overflowY = overflowY;
      document.body.style.overflowX = overflowX;
    };
  }, [visible]);

  return elemProps;
};
