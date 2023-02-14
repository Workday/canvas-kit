import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {usePopupModel} from './usePopupModel';

/**
 * Adds the necessary props to a close button components. Used by the
 * {@link PopupCloseButton Popup.CloseButton} subcomponent and
 * {@link PopupCloseIcon Popup.CloseIcon} subcomponent.
 */
export const usePopupCloseButton = createElemPropsHook(usePopupModel)(({events}) => {
  return {
    onClick: events.hide,
  };
});
