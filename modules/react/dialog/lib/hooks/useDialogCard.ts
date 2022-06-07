import {composeHooks, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {usePopupCard, usePopupModel} from '@workday/canvas-kit-react/popup';

export const useDialogCard = composeHooks(
  usePopupCard,
  createElemPropsHook(usePopupModel)(({state}) => {
    return {
      id: `dialog-${state.id}`,
    };
  })
);
