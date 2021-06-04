import {createHook} from '@workday/canvas-kit-react/common';
import {PopupModel} from './usePopupModel';

/**
 * Adds the necessary props to a close button component. Used by the `Popup.CloseButton`
 * subcomponent and `Popup.CloseIcon` subcomponent.
 */
export const usePopupCloseButton = createHook(({events}: PopupModel) => {
  return {
    onClick: (event: React.MouseEvent) => {
      events.hide({event});
    },
  };
});
