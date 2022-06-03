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
