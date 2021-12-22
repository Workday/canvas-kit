import React from 'react';
import screenfull from 'screenfull';

import {PopupModel} from './usePopupModel';
import {PopupStack} from '@workday/canvas-kit-popup-stack';

/**
 * Makes the popup transfer to the fullscreen element when fullscreen is entered. Without this, the
 * popup would seem to disappear because the popup container element is not a child of the
 * fullscreen element.
 *
 * Don't use this in conjunction with a hook that will close the popup when entering fullscreen.
 * Doing so would open the popup when the intention was to close it.
 */
export const useTransferOnFullscreenEnter = (model: PopupModel, elemProps = {}) => {
  const handler = React.useCallback(
    event => {
      if (screenfull.isFullscreen && model.state.stackRef.current) {
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
    if (screenfull.isEnabled) {
      screenfull.on('change', handler);
      return () => {
        screenfull.off('change', handler);
      };
    }
    return;
  }, [handler, visible]);

  return elemProps;
};
