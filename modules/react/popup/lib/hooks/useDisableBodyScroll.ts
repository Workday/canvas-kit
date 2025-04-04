import React from 'react';

import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';

import {usePopupModel} from './usePopupModel';

const disableBodyScrollStyles = createStyles({
  overflow: 'hidden !important',
});

/**
 * Disables body scroll by adding `overflow: hidden` to the body element. This effectively prevents
 * page scrolling while the popup is visible.
 *
 * This should be used with popup elements that hide all other content and force the user to accept
 * or dismiss the popup before continuing (i.e. Modals).
 */
export const useDisableBodyScroll = createElemPropsHook(usePopupModel)(model => {
  const visible = model.state.visibility !== 'hidden';

  React.useLayoutEffect(() => {
    if (!visible) {
      return;
    }

    document.body.classList.add(disableBodyScrollStyles);

    return () => {
      document.body.classList.remove(disableBodyScrollStyles);
    };
  }, [visible]);

  return {};
});
