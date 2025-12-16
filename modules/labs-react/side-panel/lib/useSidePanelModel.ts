import {createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';
import * as React from 'react';

export type SidePanelTransitionStates = 'collapsed' | 'collapsing' | 'expanded' | 'expanding';

export const useSidePanelModel = createModelHook({
  defaultConfig: {
    initialExpanded: 'expanded' as SidePanelTransitionStates,
    origin: 'left' as 'left' | 'right',
    panelId: '',
    labelId: '',
  },
})(config => {
  // const model = usePopupModel(config);
  const panelId = useUniqueId(config.panelId);
  const labelId = useUniqueId(config.labelId);
  const [expanded, setExpanded] = React.useState<SidePanelTransitionStates>(config.initialExpanded);

  const state = {
    ...config,
    panelId,
    labelId,
    expanded,
  };

  const events = {
    expand() {
      setExpanded('expanded');
    },

    collapse() {
      setExpanded('collapsed');
    },

    handleAnimationEnd(event: React.TransitionEvent<HTMLDivElement>) {
      if (event.propertyName === 'width') {
        if (expanded === 'expanding') {
          setExpanded('expanded');
        } else if (expanded === 'collapsing') {
          setExpanded('collapsed');
        }
      }
    },

    handleAnimationStart() {
      if (expanded === 'collapsed' || expanded === 'collapsing') {
        setExpanded('expanding');
      } else if (expanded === 'expanded' || expanded === 'expanding') {
        setExpanded('collapsing');
      }
      return undefined;
    },
  };

  return {state, events};
});
