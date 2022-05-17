import React from 'react';
import screenfull from 'screenfull';

import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {usePopupModel} from './usePopupModel';

/**
 * Closes the popup when fullscreen is exited. Entering/exiting fullscreen changes the context of
 * the entire screen. This should be added to popup types that are very context sensitive like
 * Tooltips.
 */
export const useCloseOnFullscreenExit = createElemPropsHook(usePopupModel)(model => {
  const handler = React.useCallback(
    event => {
      if (!screenfull.isFullscreen) {
        model.events.hide(event);
      }
    },
    [model.events]
  );

  const visible = model.state.visibility !== 'hidden';

  React.useEffect(() => {
    if (!visible) {
      return;
    }
    if (screenfull.isEnabled) {
      screenfull.on('change', handler);
      return () => {
        screenfull.off('change', handler);
      };
    }
    return;
  }, [handler, visible]);

  return {};
});
