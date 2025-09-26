import {
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
  useCloseOnEscape,
  useFocusTrap,
  useAssistiveHideSiblings,
  useDisableBodyScroll,
} from '@workday/canvas-kit-react/popup';
import {createModelHook} from '@workday/canvas-kit-react/common';

import {useCloseOnOverlayClick} from './useCloseOnOverlayClick';

/**
 * 
 * This hook returns a model that contains default behaviours for a Modal.  In general, if you are implementing a modal, 
 * the behaviours specified by this model provided by this hook should be sufficient on their own
 * 
 * @param config the configuration for the modal model.  This is an optional parameter that can be used to override certain aspects of the default
 * config. You can find the type of this config parameter by searching through the documentation for ModalModelConfig.

 * 
 * This model is in essence just {@link usePopupModel} with the following additional behaviours added
 * Sets inital focus to be within the modal {@link useInitialFocus}
 * Returns focus to the target element when the modal is hidden or closed {@link useReturnFocus}
 * Closes the modal when overlay is clicked {@link useCloseOnOverlayClick}
 * Closes the modal when the escape key is pressed {@link useCloseOnEscape}
 * Traps focus within the modal while open {@link useFocusTrap}
 * Hides all non-modal content from assistive technologies while the modal is open {@link useAssistiveHideSiblings}
 * Disables background scrolling while the modal is open {@link useDisableBodyScroll}
 * 
 * @returns a modalModel objct.  This model can be passed into a Modal to set behaviour.  
 */
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
