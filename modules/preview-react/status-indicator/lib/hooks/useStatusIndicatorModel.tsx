import {createModelHook} from '@workday/canvas-kit-react/common';

export type StatusIndicatorVariant = 'gray' | 'orange' | 'blue' | 'green' | 'red' | 'transparent';

export type StatusIndicatorEmphasis = 'high' | 'low';

export const useStatusIndicatorModel = createModelHook({
  defaultConfig: {
    /**
     * Defines the emphasis of a status indicator
     * @param high - Defining a high emphasis will have higher contrasting colors
     * @param low - Defining a low emphasis will have lower contrasting colors and are more subtle
     */

    emphasis: 'low' as StatusIndicatorEmphasis,
    /**
     * Defines the color of the status indicator.
     * @param gray
     * @param orange
     * @param blue
     * @param green
     *  @param red
     *  @param transparent
     */
    variant: 'gray' as StatusIndicatorVariant,
  },
})(config => {
  const state = {
    ...config,
  };

  return {state, events: {}};
});
