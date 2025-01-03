import {createModelHook} from '@workday/canvas-kit-react/common';

export type Variant = 'informational' | 'caution' | 'critical';
export type Emphasis = 'low' | 'high';

export const useInformationHighlightModel = createModelHook({
  defaultConfig: {
    variant: 'informational' as Variant,
    emphasis: 'low' as Emphasis,
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
