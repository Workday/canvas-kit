import {composeHooks, createHook} from '@workday/canvas-kit-react/common';
import {usePopupCard, PopupModel} from '@workday/canvas-kit-react/popup';

export const useDialogCard = composeHooks(
  usePopupCard,
  createHook(({state}: PopupModel) => {
    return {
      id: `dialog-${state.id}`,
    };
  })
);
