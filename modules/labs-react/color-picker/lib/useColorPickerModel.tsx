import {createModelHook} from '@workday/canvas-kit-react/common';
import {useGridModel} from '@workday/canvas-kit-react/collection';
import React from 'react';

export const useColorPickerModel = createModelHook({
  defaultConfig: {
    ...useGridModel.defaultConfig,
    initialColor: '',
    columnCount: 8,
    id: '',
  },
  requiredConfig: {},
})(config => {
  const [color, setColor] = React.useState(config.initialColor || '');
  const [customColor, setCustomColor] = React.useState('');
  const getId = config.id || config.getId;

  const model = useGridModel({
    columnCount: config.columnCount,
    items: config.items,
    shouldVirtualize: false,
  });

  const state = {
    ...model.state,
    getId,
    color,
    customColor,
  };
  const events = {
    ...model.events,
    setColor(color: string) {
      setColor(color);
    },
    setCustomColor(color: string) {
      setCustomColor(color);
    },
  };

  return {
    ...model,
    state,
    events,
  };
});
