import {composeHooks, createHook} from '@workday/canvas-kit-react/common';
import {usePopupCard, PopupModel} from '@workday/canvas-kit-react/popup';

export const useModalCard = composeHooks(
  usePopupCard,
  createHook(({state}: PopupModel) => {
    return {
      'aria-modal': true,
    };
  })
);
