import {createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';
export type AriaRoleMode = 'dialog' | 'status' | 'alert';

export const useToastModel = createModelHook({
  defaultConfig: {
    /**
     * Sets the correct aria attributes for the Toast.
     * Alert toasts are used to convey urgency and important information. The `role` is set to `alert`
     * Status toasts are used to convey a message or a successful action. The `role` is set to `status`
     * Dialog toasts are used when there's an action to be taken. The `role` is set to `dialog`.
     * If you use this mode, you must add an aria-label to the main `Toast` component.
     * The aria-label should provide additional information to the contents of the `Toast`.
     * @default 'status'
     */
    mode: 'status' as AriaRoleMode,
    /**
     * When the Toast has a `mode="dialog"` this adds a unique id to `Toast.Message` so that the message gets read out for screen readers.
     */
    id: '',
  },
})(config => {
  const id = useUniqueId(config.id);
  const state = {
    ...config,
    id,
  };

  return {state, events: {}};
});
