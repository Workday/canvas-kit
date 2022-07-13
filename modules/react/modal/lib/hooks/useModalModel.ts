import {
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
  useCloseOnEscape,
  useFocusTrap,
  useAssistiveHideSiblings,
  useDisableBodyScroll,
} from '@workday/canvas-kit-react/popup';
import {createModelHook} from '../../../common';

import {useCloseOnOverlayClick} from './useCloseOnOverlayClick';

export const useModalModel = createModelHook({
  defaultConfig: usePopupModel.defaultConfig,
  requiredConfig: usePopupModel.requiredConfig,
  contextOverride: usePopupModel.Context,
})(config => {
  const model = usePopupModel(config);

  useInitialFocus(model);
  useReturnFocus(model);
  useCloseOnOverlayClick(model);
  useCloseOnEscape(model);
  useFocusTrap(model);
  useAssistiveHideSiblings(model);
  useDisableBodyScroll(model);

  return model;
});
