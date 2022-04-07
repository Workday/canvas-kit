import React from 'react';

import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';

type RadioState = {
  open: boolean;
  // value?: string | number;
};

type RadioEvents = {
  open(data: {}): void;
  close(data: {}): void;
  // onChange(value: string | number): void;
};

export type RadioModel = Model<RadioState, RadioEvents>;

const radioEventMap = createEventMap<RadioEvents>()({
  guards: {
    shouldOpen: 'open',
    shouldClose: 'close',
  },
  callbacks: {
    onOpen: 'open',
    onClose: 'close',
  },
});

export type RadioModelConfig = {
  initialOpen?: boolean;
} & Partial<ToModelConfig<RadioState, RadioEvents, typeof radioEventMap>>;

export const useRadioModel = (config: RadioModelConfig = {}): RadioModel => {
  const [open, setOpen] = React.useState(config.initialOpen || false);

  const state = {
    open,
  };

  const events = useEventMap(radioEventMap, state, config, {
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
