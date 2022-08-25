import {createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

export const useToastModel = createModelHook({
  defaultConfig: {
    /**
     * When the Toast has a `mode="dialog"` this adds a unique id to type the `Toast.Message` to the dialog.
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
