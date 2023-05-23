import React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';
import {defaultGetId, useOverflowListModel} from '@workday/canvas-kit-react/collection';

import {useMenuModel} from '@workday/canvas-kit-react/menu';

export const useActionBarModel = createModelHook({
  defaultConfig: {
    ...useOverflowListModel.defaultConfig,
    /**
     * Optional id for the whole `ActionBar` group. If not provided, a unique id will be created.
     * @default useUniqueId()
     */
    id: '',
    /**
     * The default ActionBar sub-components only handle rendering of button group in a horizontal orientation,
     * but the sub-components could be replaced to handle vertical orientations.
     * @default 'horizontal'
     */
    orientation: 'horizontal' as typeof useOverflowListModel.defaultConfig.orientation,
    menuConfig: {} as Partial<typeof useMenuModel.defaultConfig>,
    /**
     * The maximum number of actions that can be visible.
     * Must be greater than 1 and less than items.length.
     * @default 3
     */
    maximumVisible: 3,
  },
  requiredConfig: useOverflowListModel.requiredConfig,
})(config => {
  const getId = config.getId || defaultGetId;

  const items = config.items;

  const model = useOverflowListModel(
    useOverflowListModel.mergeConfig(config, {
      orientation: config.orientation || 'horizontal',
      items,
      shouldVirtualize: false,
    })
  );

  let hiddenIds = model.state.hiddenIds;
  let nonInteractiveIds = model.state.nonInteractiveIds;
  const totalSize = model.state.items.length;

  console.log(config.maximumVisible);

  // Only show maximumVisible buttons
  const maximumVisible: number =
    !config.maximumVisible || config.maximumVisible < 1
      ? 3 // should fallback to default value
      : config.maximumVisible > totalSize
      ? totalSize
      : config.maximumVisible;

  console.log('maximumVisible', maximumVisible);

  if (totalSize - hiddenIds.length >= maximumVisible) {
    hiddenIds = items.slice(maximumVisible, totalSize).map(getId);
  }

  // Always show the first button and make sure it is interactive
  if (totalSize - hiddenIds.length === 0) {
    hiddenIds = items.slice(1, totalSize).map(getId);
  }

  nonInteractiveIds = hiddenIds;

  const state = {
    ...model.state,
    hiddenIds,
    nonInteractiveIds,
    orientation: config.orientation || 'horizontal',
  };

  const overflowItems = React.useMemo(
    () => (items ? items.filter(item => state.hiddenIds.includes(getId(item))) : undefined),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.hiddenIds, items]
  );

  const events = {
    ...model.events,
  };

  const menu = useMenuModel(
    useMenuModel.mergeConfig(config.menuConfig as Required<typeof config.menuConfig>, {
      id: `act-bar-menu-${model.state.id}`,
      items: overflowItems,
      nonInteractiveIds: state.nonInteractiveIds.filter(key => !state.hiddenIds.includes(key)),
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
