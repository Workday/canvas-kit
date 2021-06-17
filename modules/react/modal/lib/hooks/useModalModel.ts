import {
  PopupModelConfig,
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
  useCloseOnEscape,
  useFocusTrap,
  useAssistiveHideSiblings,
  useDisableBodyScroll,
} from '@workday/canvas-kit-react/popup';

import {useCloseOnOverlayClick} from './useCloseOnOverlayClick';

export const useModalModel = (config: PopupModelConfig = {}) => {
  const model = usePopupModel(config);

  useInitialFocus(model);
  useReturnFocus(model);
  useCloseOnOverlayClick(model);
  useCloseOnEscape(model);
  useFocusTrap(model);
  useAssistiveHideSiblings(model);
  useDisableBodyScroll(model);

  return model;
};
