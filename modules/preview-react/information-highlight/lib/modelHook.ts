import {createModelHook} from '@workday/canvas-kit-react/common';

export type Variant = 'informational' | 'caution' | 'attention';

export const useInformationHighlightModel = createModelHook({
  defaultConfig: {
    variant: 'informational' as Variant,
  },
})(config => {
  return {
    state: {
      variant: config.variant,
    },
    events: {},
  };
});
