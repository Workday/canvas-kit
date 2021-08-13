import {createHook} from '@workday/canvas-kit-react/common';

import {SidePanelModel} from './useSidePanelModel';

export const useSidePanelToggleButton = createHook((model: SidePanelModel, ref) => {
  return {
    ref,
    'aria-controls': model.state.panelId,
    'aria-expanded': model.state.expanded,
    'aria-labelledby': model.state.labelId,
    onClick: (event: React.MouseEvent) => {
      model.events.toggle({event});
    },
  };
});
