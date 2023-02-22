import React, {useState} from 'react';

import {createModelHook} from '@workday/canvas-kit-react/common';
import {defaultGetId, useListModel} from '@workday/canvas-kit-react/collection';

export const useRadioModel = createModelHook({
  defaultConfig: {
    ...useListModel.defaultConfig,
    /**
     * The common `name` passed to all Radio button children of the RadioGroup. This enables you to avoid specifying the `name` for each child.
     */
    name: '',
    /**
     * The initial selected value of the RadioGroup. If a string is provided, the Radio button with the corresponding value will be selected. If a number is provided, the Radio button with the corresponding index will be selected.
     */
    initialValue: '' as string | number,
    /**
     * The selected value of the RadioGroup. Providing this prop will cause the model be in a controlled state
     */
    value: '' as string | number,
  },
})(config => {
  const [value, setValue] = useState(config.value || config.initialValue);
  const initialSelectedRef = React.useRef(config.initialValue);
  const getId = config.getId || defaultGetId;

  const model = useListModel(
    useListModel.mergeConfig(config, {
      orientation: 'vertical',
      onRegisterItem(data) {
        if (!initialSelectedRef.current) {
          initialSelectedRef.current = getId(data.item);
          events.select({id: initialSelectedRef.current});
        }
      },

      initialSelectedIds: config.initialValue
        ? [config.initialValue]
        : config.items?.length
        ? [getId(config.items![0])]
        : [],
    })
  );

  const state = {
    ...model.state,
    value: config.value || value,
    name: config.name,
  };
  const events = {
    ...model.events,
    change(event: React.ChangeEvent) {
      const target = event.currentTarget;
      if (target instanceof HTMLInputElement) {
        setValue(target.value);
      }
    },
  };

  return {
    ...model,
    state,
    events,
  };
});
