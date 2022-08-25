import {createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

export const useToastModel = createModelHook({
  defaultConfig: {
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
