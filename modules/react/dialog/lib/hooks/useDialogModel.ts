import {
  PopupModelConfig,
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  useFocusRedirect,
} from '@workday/canvas-kit-react/popup';

export const useDialogModel = (config: PopupModelConfig = {}) => {
  const model = usePopupModel(config);

  useInitialFocus(model);
  useReturnFocus(model);
  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useFocusRedirect(model);

  return model;
};
