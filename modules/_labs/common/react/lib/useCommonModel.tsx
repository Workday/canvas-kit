import React from 'react';

import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react-common';

type CommonState = {
  open: boolean;
};

type CommonEvents = {
  open(data: {}): void;
  close(data: {}): void;
};

export type CommonModel = Model<CommonState, CommonEvents>;

const commonEventMap = createEventMap<CommonEvents>()({
  guards: {
    shouldOpen: 'open',
    shouldClose: 'close',
  },
  callbacks: {
    onOpen: 'open',
    onClose: 'close',
  },
});

export type CommonModelConfig = {
  initialOpen?: boolean;
} & Partial<ToModelConfig<CommonState, CommonEvents, typeof commonEventMap>>;

export const useCommonModel = (config: CommonModelConfig = {}): CommonModel => {
  const [open, setOpen] = React.useState(config.initialOpen || false);

  const state = {
    open,
  };

  const events = useEventMap(commonEventMap, state, config, {
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
