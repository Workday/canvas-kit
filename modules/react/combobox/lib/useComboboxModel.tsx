import React from 'react';
import {createModelHook, dispatchInputEvent} from '@workday/canvas-kit-react/common';
import {useMenuModel} from '@workday/canvas-kit-react/menu';

const useInputModel = createModelHook({
  defaultConfig: {
    value: '',
    onChange(event: React.ChangeEvent<HTMLInputElement>) {
      return;
    },
  },
})(config => {
  return {
    onChange: config.onChange,
    state: {value: config.value},
    events: {},
  };
});

export const useComboboxModel = createModelHook({
  defaultConfig: {
    ...useInputModel.defaultConfig,
    ...useMenuModel.defaultConfig,
  },
  requiredConfig: {
    ...useInputModel.requiredConfig,
    ...useMenuModel.requiredConfig,
  },
})(config => {
  const input = useInputModel(config);
  const menu = useMenuModel(
    useMenuModel.mergeConfig(config, {
      onSelect({id}) {
        dispatchInputEvent(menu.state.targetRef.current, id);
      },
    })
  );
  const [width, setWidth] = React.useState(0);

  const state = {
    ...input.state,
    ...menu.state,
    /**
     * The width of the combobox input. This is used to make sure the UI renders the menu the same
     * width as the input.
     */
    width,
  };

  const events = {
    ...input.events,
    ...menu.events,
    /**
     * Change the width of the menu
     */
    setWidth(width: number) {
      setWidth(width);
    },
  };

  return {...menu, ...input, state, events};
});
