import React from 'react';

import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';

type ExpandableContainerState = {
  open: boolean;
};

type ExpandableContainerEvents = {
  open(data: {}): void;
  close(data: {}): void;
};

export type ExpandableContainerModel = Model<ExpandableContainerState, ExpandableContainerEvents>;

const expandableContainerEventMap = createEventMap<ExpandableContainerEvents>()({
  guards: {
    shouldOpen: 'open',
    shouldClose: 'close',
  },
  callbacks: {
    onOpen: 'open',
    onClose: 'close',
  },
});

export type ExpandableContainerModelConfig = {
  initialOpen?: boolean;
} & Partial<
  ToModelConfig<
    ExpandableContainerState,
    ExpandableContainerEvents,
    typeof expandableContainerEventMap
  >
>;

export const useExpandableContainerModel = (
  config: ExpandableContainerModelConfig = {}
): ExpandableContainerModel => {
  const [open, setOpen] = React.useState(config.initialOpen || false);

  const state = {
    open,
  };

  const events = useEventMap(expandableContainerEventMap, state, config, {
    open(data) {
      setOpen(true);
    },
    close(data) {
      setOpen(false);
    },
  });

  return {
    state,
    events,
  };
};
