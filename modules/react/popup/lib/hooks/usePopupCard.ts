import {createElemPropsHook} from '@workday/canvas-kit-react/common';

import {usePopupModel} from './usePopupModel';

/**
 * Adds the necessary props to a {@link PopupCard Popup.Card} subcomponent.
 */
export const usePopupCard = createElemPropsHook(usePopupModel)(({state}) => {
  return {
    role: 'dialog',
    'aria-labelledby': state.id,
  };
});
