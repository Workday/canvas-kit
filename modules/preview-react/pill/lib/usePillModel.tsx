import {createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

export const usePillModel = createModelHook({
  defaultConfig: {
    /**
     * Determines the max width of the pill. If the pill text is longer than the max width,
     * text will be truncated and a tooltip will show the rest of the content when hovered over
     */
    maxWidth: 200 as string | number,
    /**
     * Use to disable a pill.
     */
    disabled: false,
    id: '',
  },
})(config => {
  const id = useUniqueId();
  const state = {
    ...config,
    id: config.id || id,
  };

  return {state, events: {}};
});
