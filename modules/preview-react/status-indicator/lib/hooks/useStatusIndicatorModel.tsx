import {createModelHook} from '@workday/canvas-kit-react/common';

export type StatusIndicatorVariant = 'gray' | 'orange' | 'blue' | 'green' | 'red' | 'transparent';

export type StatusIndicatorEmphasis = 'high' | 'low';

export const useStatusIndicatorModel = createModelHook({
  defaultConfig: {
    /**
     * Defines the emphasis of a status indicator
     * options include: 'high', 'low'
     * Having a high emphasis will create more contrast between the background and text colors
     * Having a low emphasis will create less contrast between the background and text colors
     */

    emphasis: 'low' as StatusIndicatorEmphasis,
    /**
     * Defines the color of the status indicator. options include: `gray`, 'green', 'blue', 'red', 'orange', 'transparent'
     */
    variant: 'gray' as StatusIndicatorVariant,
  },
})(config => {
  const state = {
    ...config,
  };

  return {state, events: {}};
});
