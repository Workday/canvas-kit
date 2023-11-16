import {createModelHook} from '@workday/canvas-kit-react/common';

export type Variant = 'emphasis' | 'caution' | 'attention';

export const useInformationHighlightModel = createModelHook({
  defaultConfig: {
    variant: 'emphasis' as Variant,
  },
})(config => {
  return {
    state: {
      variant: config.variant,
    },
    events: {},
  };
});
