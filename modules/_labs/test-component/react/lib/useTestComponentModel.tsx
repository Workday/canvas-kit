import React from 'react';

import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react-common';

type TestComponentState = {
  open: boolean;
};

type TestComponentEvents = {
  open(data: {}): void;
  close(data: {}): void;
};

export type TestComponentModel = Model<TestComponentState, TestComponentEvents>;

const testComponentEventMap = createEventMap<TestComponentEvents>()({
  guards: {
    shouldOpen: 'open',
    shouldClose: 'close',
  },
  callbacks: {
    onOpen: 'open',
    onClose: 'close',
  },
});

export type TestComponentModelConfig = {
  initialOpen?: boolean;
} & Partial<ToModelConfig<TestComponentState, TestComponentEvents, typeof testComponentEventMap>>;

export const useTestComponentModel = (
  config: TestComponentModelConfig = {}
): TestComponentModel => {
  const [open, setOpen] = React.useState(config.initialOpen || false);

  const state = {
    open,
  };

  const events = useEventMap(testComponentEventMap, state, config, {
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
