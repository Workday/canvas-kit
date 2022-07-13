import {createModelHook} from '@workday/canvas-kit-react/common';
import {useGridModel, wrappingNavigationManager} from '@workday/canvas-kit-react/collection';
import React from 'react';

export const useColorPickerModel = createModelHook({
  defaultConfig: {
    ...useGridModel.defaultConfig,
    initialColor: [''],
    columnCount: 8,
    id: '',
    shouldVirtualize: false,
  },
  requiredConfig: {},
})(config => {
  const [customColor, setCustomColor] = React.useState('');
  const getId = config.id || config.getId;

  const [color, setColor] = React.useState(config.initialColor[0] || '');
  const model = useGridModel({
    columnCount: config.columnCount,
    items: config.items,
    shouldVirtualize: false,
    initialSelectedIds: config.initialColor,
    navigation: wrappingNavigationManager,
  });

  const state = {
    ...model.state,
    getId,
    color: model.state.selectedIds[0] || color,
    customColor,
  };
  const events = {
    ...model.events,
    setColor(color: string) {
      setCustomColor('');
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
