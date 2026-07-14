import {createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

export const usePillModel = createModelHook({
  defaultConfig: {
    /**
     * Used to disable a pill and apply the correct styles.
     */
    disabled: false,
    /**
     * ID used to add accessibility labels to pill elements.
     * @default `useUniqueId()`
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
