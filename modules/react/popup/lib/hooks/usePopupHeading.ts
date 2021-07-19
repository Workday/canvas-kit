import {createHook} from '@workday/canvas-kit-react/common';
import {PopupModel} from './usePopupModel';

/**
 * Adds the necessary props to the `Heading` component. Used by the `Popup.Heading` subcomponent.
 */
export const usePopupHeading = createHook(({state}: PopupModel) => {
  return {
    id: state.id,
  };
});
