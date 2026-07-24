import {createModelHook} from '@workday/canvas-kit-react/common';

export const useInformationHighlightModel = createModelHook({
  defaultConfig: {
    variant: 'default' as 'default' | 'informational' | 'caution' | 'critical',
    emphasis: 'low' as 'low' | 'high',
    ctaPlacement: 'bottom' as 'bottom' | 'end',
  },
})(config => {
  return {
    state: {
      variant: config.variant,
      emphasis: config.emphasis,
      ctaPlacement: config.ctaPlacement,
    },
    events: {},
  };
});
