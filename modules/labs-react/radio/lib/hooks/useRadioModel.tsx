import React from 'react';

import {createModelHook} from '@workday/canvas-kit-react/common';

export const useRadioModel = createModelHook({
  defaultConfig: {
    /**
     * The common `name` passed to all Radio button children of the RadioGroup. This enables you to avoid specifying the `name` for each child.
     */
    name: '',
    /**
     * The initial selected value of the RadioGroup. If a string is provided, the Radio button with the corresponding value will be selected. If a number is provided, the Radio button with the corresponding index will be selected.
     */
    initialValue: undefined as string | undefined | number,
    /**
     * The selected value of the RadioGroup. Providing this prop will cause the model be in a controlled state
     */
    value: undefined as string | number | undefined,
    onChange(event: React.ChangeEvent<HTMLInputElement>) {
      return;
    },
  },
})(config => {
  const inputRef = React.useRef<HTMLInputElement>();
  const state = {
    value: config.value,
    name: config.name,
    initialValue: config.initialValue,
    inputRef,
  };
  const events = {};

  return {
    onChange: config.onChange,
    state,
    events,
  };
});
