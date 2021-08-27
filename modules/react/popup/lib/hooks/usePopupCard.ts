import {createHook} from '@workday/canvas-kit-react/common';
import {PopupModel} from './usePopupModel';

/**
 * Adds the necessary props to a `Card` component. Used by the `Popup.Card` subcomponent.
 */
export const usePopupCard = createHook(({state}: PopupModel) => {
  return {
    role: 'dialog',
    'aria-labelledby': state.id,
  };
});
