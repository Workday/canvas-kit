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
 * This model hook uses {@link usePopupModel} and pre-configures behaviors that are required for an
 * accessible modal. `useModalModel` should be used in most cases, but if you require custom
 * behaviors, you can use `usePopupModel` directly. Be sure to add proper popup behaviors to ensure
 * the modal is accessible.
 *
 * The following behaviors are added to the `PopupModel`:
 * - {@link useInitialFocus}
 * - {@link useReturnFocus}
 * - {@link useCloseOnOverlayClick}
 * - {@link useCloseOnEscape}
 * - {@link useFocusTrap}
 * - {@link useAssistiveHideSiblings}
 * - {@link useDisableBodyScroll}
 *
 * You can pass the Modal model config either directly to the `Modal` component or to the
 * `useModalModel` hook, but not both. A `model` prop always takes precedence over the config passed
 * to the `useModalModel` hook. If no `model` is passed to a `Modal` component, a `ModalModel` will
 * be created for you. Creating your own model hoists the modal's state to the level of your
 * component and allows you to access the model's state and events.
 *
 * ```tsx
 * const model = useModalModel(config);
 *
 * <Modal model={model}>
 *   // ...
 * </Modal>
 * ```
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
