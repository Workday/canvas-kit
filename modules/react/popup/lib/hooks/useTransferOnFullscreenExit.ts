import React from 'react';
import screenfull from 'screenfull';

import {PopupModel} from './usePopupModel';
import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * Makes the popup transfer to fullscreen when fullscreen is exited. Without this hook, the popup
 * would not operate correctly with other popups on the screen.
 *
 * Don't use this in conjunction with a hook that will close the popup when exiting fullscreen.
 * Doing so would open the popup when the intention was to close it.
 */
export const useTransferOnFullscreenExit = (model: PopupModel, elemProps = {}) => {
  const handler = React.useCallback(
    event => {
      if (!screenfull.isFullscreen && model.state.stackRef.current) {
        PopupStack.transferToCurrentContext({
          element: model.state.stackRef.current,
          owner: model.state.targetRef.current!,
        });
      }
    },
    [model.state.stackRef, model.state.targetRef]
  );

  const visible = model.state.visibility !== 'hidden';

  React.useEffect(() => {
    if (!visible) {
      return;
    }
    screenfull.on('change', handler);
    return () => {
      screenfull.off('change', handler);
    };
  }, [handler, visible]);

  return elemProps;
};
