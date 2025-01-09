import {createModelHook} from '@workday/canvas-kit-react/common';

export const useInformationHighlightModel = createModelHook({
  defaultConfig: {
    variant: 'informational' as 'informational' | 'caution' | 'critical',
    emphasis: 'low' as 'low' | 'high',
  },
})(config => {
  return {
    state: {
      variant: config.variant,
      emphasis: config.emphasis,
    },
    events: {},
  };
});
