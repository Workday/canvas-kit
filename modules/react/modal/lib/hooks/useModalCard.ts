import {composeHooks, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {usePopupCard, usePopupModel} from '@workday/canvas-kit-react/popup';

export const useModalCard = composeHooks(
  usePopupCard,
  createElemPropsHook(usePopupModel)(() => {
    return {
      'aria-modal': true,
    };
  })
);
