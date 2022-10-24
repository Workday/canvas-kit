import {createModelHook} from '@workday/canvas-kit-react/common';

export type StatusIndicatorVariant = 'gray' | 'orange' | 'blue' | 'green' | 'red' | 'transparent';

export type StatusIndicatorEmphasis = 'high' | 'low';

export const useStatusIndicatorModel = createModelHook({
  defaultConfig: {
    /**
     * Defines the emphasis of the `StatusIndicator`.
     * `high` emphasis will create more contrast between the background and text colors.
     * `low` emphasis will create less contrast between the background and text colors.
     * @default 'low'
     */

    emphasis: 'low' as StatusIndicatorEmphasis,
    /**
     * Defines the color of the `StatusIndicator`.
     * @default 'gray'
     */
    variant: 'gray' as StatusIndicatorVariant,
  },
})(config => {
  const state = {
    ...config,
  };

  return {state, events: {}};
});
