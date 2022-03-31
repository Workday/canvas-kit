import React from 'react';

import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';

type PillState = {
  open: boolean;
};

type PillEvents = {
  open(data: {}): void;
  close(data: {}): void;
};

export type PillModel = Model<PillState, PillEvents>;

const pillEventMap = createEventMap<PillEvents>()({
  guards: {
    shouldOpen: 'open',
    shouldClose: 'close',
  },
  callbacks: {
    onOpen: 'open',
    onClose: 'close',
  },
});

export type PillModelConfig = {
  initialOpen?: boolean;
} & Partial<ToModelConfig<PillState, PillEvents, typeof pillEventMap>>;

export const usePillModel = (config: PillModelConfig = {}): PillModel => {
  const [open, setOpen] = React.useState(config.initialOpen || false);

  const state = {
    open,
  };

  const events = useEventMap(pillEventMap, state, config, {
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
