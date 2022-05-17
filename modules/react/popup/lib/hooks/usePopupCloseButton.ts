import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {usePopupModel} from './usePopupModel';

/**
 * Adds the necessary props to a close button component. Used by the `Popup.CloseButton`
 * subcomponent and `Popup.CloseIcon` subcomponent.
 */
export const usePopupCloseButton = createElemPropsHook(usePopupModel)(({events}) => {
  return {
    onClick: events.hide,
  };
});
