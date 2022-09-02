import {
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  useFocusRedirect,
} from '@workday/canvas-kit-react/popup';
import {createModelHook} from '@workday/canvas-kit-react/common';

export const useDialogModel = createModelHook({
  defaultConfig: usePopupModel.defaultConfig,
  requiredConfig: usePopupModel.requiredConfig,
  contextOverride: usePopupModel.Context,
})(config => {
  const model = usePopupModel(config);

  useInitialFocus(model);
  useReturnFocus(model);
  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useFocusRedirect(model);

  return model;
});
