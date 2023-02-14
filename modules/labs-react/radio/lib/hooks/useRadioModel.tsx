import React, {useState} from 'react';

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
    initialValue: '',
    /**
     * The selected value of the RadioGroup. Providing this prop will cause the model be in a controlled state
     */
    value: '' as string | number,
  },
})(config => {
  const [value, setValue] = useState(config.value || config.initialValue);

  const state = {
    value: config.value || value,
    name: config.name,
  };
  const events = {
    change(event: React.ChangeEvent) {
      const target = event.currentTarget;
      if (target instanceof HTMLInputElement) {
        setValue(target.value);
      }
    },
  };

  return {
    state,
    events,
  };
});
