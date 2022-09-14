import React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';
import {
  defaultGetId,
  useOverflowListModel,
  useListModel,
} from '@workday/canvas-kit-react/collection';

import {useMenuModel} from '@workday/canvas-kit-react/menu';

export const useSegmentedControlModel = createModelHook({
  defaultConfig: {
    ...useListModel.defaultConfig,
    /**
     * Optional id for the whole `SegmentedControl` group. If not provided, a unique id will be created.
     * @default useUniqueId()
     */
    id: '',
    /**
     * The SegmentedControl handles rendering of button group in a horizontal orientation,
     * but the icon only button variant could have a vertical orientation.
     * @default 'horizontal'
     */
    orientation: 'horizontal' as typeof useListModel.defaultConfig.orientation,
    menuConfig: {} as Partial<typeof useMenuModel.defaultConfig>,
  },
  requiredConfig: useListModel.requiredConfig,
})(config => {
  const items = config.items;

  const model = useListModel(
    useListModel.mergeConfig(config, {
      orientation: config.orientation || 'horizontal',
      items,
      shouldVirtualize: false,
    })
  );

  const state = {
    ...model.state,
    orientation: config.orientation || 'horizontal',
  };

  const events = {
    ...model.events,
  };

  const menu = useMenuModel(
    useMenuModel.mergeConfig(config.menuConfig as Required<typeof config.menuConfig>, {
      id: `act-bar-menu-${model.state.id}`,
      onSelect() {
        menu.events.hide();
      },
      onShow() {
        // Always select the first item when the menu is opened
        menu.events.goToFirst();
      },
    })
  );

  return {
    ...model,
    state,
    events,
    menu,
  };
});
