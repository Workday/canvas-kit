import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {usePopupModel} from './usePopupModel';

/**
 * Adds the necessary props to the {@link PopupHeading Popup.Heading} subcomponent.
 */
export const usePopupHeading = createElemPropsHook(usePopupModel)(({state}) => {
  return {
    id: state.id,
  };
});
