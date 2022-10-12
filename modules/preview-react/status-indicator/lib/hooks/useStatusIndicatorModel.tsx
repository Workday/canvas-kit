import React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';

export type StatusIndicatorVariant = 'gray' | 'orange' | 'blue' | 'green' | 'red' | 'transparent';

export type StatusIndicatorEmphasis = 'high' | 'low';

export const useStatusIndicatorModel = createModelHook({
  defaultConfig: {
    emphasis: 'low' as StatusIndicatorEmphasis,
    variant: 'gray' as StatusIndicatorVariant,
  },
})(config => {
  const state = {
    ...config,
  };

  return {state, events: {}};
});
