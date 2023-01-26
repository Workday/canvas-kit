import {createModelHook} from '@workday/canvas-kit-react/common';

export const useTableModel = createModelHook({})(() => {
  return {state: {}, events: {}};
});
