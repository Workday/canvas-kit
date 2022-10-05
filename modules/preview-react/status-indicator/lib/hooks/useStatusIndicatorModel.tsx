import React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';

export const useStatusIndicatorModel = createModelHook({
  defaultConfig: {
    /**
     * The initial visibility of the content
     * @default 'false'
     */
    initialOpen: false,
  },
})(config => {
  const [open, setOpen] = React.useState(config.initialOpen || false);

  const state = {
    /**
     * Visibility state of the disclosed content.
     */
    open,
  };

  const events = {
    /**
     * Start showing the disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    open(event?: Event | React.SyntheticEvent) {
      setOpen(true);
    },
    /**
     * Start hiding this disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    close(event?: Event | React.SyntheticEvent) {
      setOpen(false);
    },
  };

  return {state, events};
});
