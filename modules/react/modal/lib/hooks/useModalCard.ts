import {composeHooks, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {usePopupCard, usePopupModel} from '@workday/canvas-kit-react/popup';

export const useModalCard = composeHooks(
  usePopupCard,
  createElemPropsHook(usePopupModel)(() => {
    return {
      /**
       * `aria-modal` was added with the intent that screen readers would add support to properly define content within a modal,
       * including popups like a Select. However, when aria-modal is true, it will hide other elements from screen readers,
       * including popups owned by the modal because these popups are siblings to the modal and not ancestors. There is no defined time when Apple/VoiceOver
       * might change this behavior and better support aria-owns, so for the time being we'll explicitly set this to false to provide a better
       * VoiceOver experience.
       */
      'aria-modal': false,
    };
  })
);
