module.exports = (camelCaseName, pascalCaseName) => `import React from 'react';

import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react-common';

type ${pascalCaseName}State = {
  open: boolean;
};

type ${pascalCaseName}Events = {
  open(data: {}): void;
  close(data: {}): void;
};

export type ${pascalCaseName}Model = Model<${pascalCaseName}State, ${pascalCaseName}Events>;

const ${camelCaseName}EventMap = createEventMap<${pascalCaseName}Events>()({
  guards: {
    shouldOpen: 'open',
    shouldClose: 'close',
  },
  callbacks: {
    onOpen: 'open',
    onClose: 'close',
  },
});

export type ${pascalCaseName}ModelConfig = {
  initialOpen?: boolean;
} & Partial<ToModelConfig<${pascalCaseName}State, ${pascalCaseName}Events, typeof ${camelCaseName}EventMap>>;

export const use${pascalCaseName}Model = (
  config: ${pascalCaseName}ModelConfig = {}
): ${pascalCaseName}Model => {
  const [open, setOpen] = React.useState(config.initialOpen || false);

  const state = {
    open,
  };

  const events = useEventMap(${camelCaseName}EventMap, state, config, {
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
`;
