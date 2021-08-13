import {createHook} from '@workday/canvas-kit-react/common';

import {SidePanelModel} from './useSidePanelModel';

export const useSidePanelLabel = createHook((model: SidePanelModel, ref) => {
  return {
    ref,
    id: model.state.labelId,
  };
});
