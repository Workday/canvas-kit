import React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';
import {defaultGetId, useOverflowListModel} from '@workday/canvas-kit-react/collection';
import {useMenuModel} from '@workday/canvas-kit-react/menu';
import {reorganizeHiddenItems} from './utils';

export const useBreadcrumbsModel = createModelHook({
  defaultConfig: {
    ...useOverflowListModel.defaultConfig,
    /**
     * Optional id for the whole `Breadcrumbs` group. If not provided, a unique id will be created.
     * @default useUniqueId()
     */
    id: '',
    /**
     * The default Breadcrumbs component only handles rendering of the link group in a horizontal
     * orientation, but the subcomponents could be replaced to handle vertical orientations.
     * @default 'horizontal'
     */
    orientation: 'horizontal' as typeof useOverflowListModel.defaultConfig.orientation,
    menuConfig: {} as Partial<typeof useMenuModel.defaultConfig>,
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
  hiddenIds = reorganizeHiddenItems(items, hiddenIds, getId);
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
      id: `breadcrumbs-menu-${model.state.id}`,
      items: overflowItems,
      nonInteractiveIds: state.nonInteractiveIds.filter(key => !state.hiddenIds.includes(key)),
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
