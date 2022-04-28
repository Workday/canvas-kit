import React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';
import {
  defaultGetId,
  useListModel,
  useOverflowListModel,
} from '@workday/canvas-kit-react/collection';

import {useMenuModel} from './menu';

export const useTabsModel = createModelHook({
  defaultConfig: {
    ...useOverflowListModel.defaultConfig,
    /**
     * Optional id for the whole `Tabs` group. The `aria-controls` of the `Tab.Item` and `id` of the
     * `Tab.Panel` will automatically derived from this id. If not provided, a unique id will be
     * created.
     * @default useUniqueId()
     */
    id: '',
    /**
     * An initially selected tab. This value must match the `name` of the `Tab.Item` component. If
     * not provided, the first tab will be selected.
     */
    initialTab: '',
    /**
     * The default Tabs sub-components only handle rendering of tabs in a horizontal orientation, but
     * the sub-components could be replaced to handle vertical orientations.
     * @default 'horizontal'
     */
    orientation: 'horizontal' as typeof useOverflowListModel.defaultConfig.orientation,
    menuConfig: {} as Partial<typeof useMenuModel.defaultConfig>,
  },
  requiredConfig: useOverflowListModel.requiredConfig,
})(config => {
  const initialSelectedRef = React.useRef(config.initialTab);
  const getId = config.getId || defaultGetId;

  const items = config.items;

  const model = useOverflowListModel(
    useOverflowListModel.mergeConfig(config, {
      orientation: config.orientation || 'horizontal',
      items,
      onRegisterItem(data) {
        if (!initialSelectedRef.current) {
          initialSelectedRef.current = getId(data.item);
          events.select({id: initialSelectedRef.current});
        }
      },
      initialSelectedIds: config.initialTab
        ? [config.initialTab]
        : config.items?.length
        ? [getId(config.items![0])]
        : [],
      shouldVirtualize: false,
    })
  );

  const panels = useListModel();

  const state = {
    ...model.state,
    getId,
    orientation: config.orientation || 'horizontal',
    /**
     * A list of panels. Uses `ListModel`
     */
    panels: panels.state.items,
    /**
     * A React.Ref of the current item index. A ref is used to allow for updating outside the normal
     * React state cycle to ensure accurate index tracking as items are registered within the same
     * state setting phase.
     */
    panelIndexRef: panels.state.indexRef,
  };

  const overflowItems = React.useMemo(
    () => (items ? items.filter(item => state.hiddenIds.includes(getId(item))) : undefined),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.hiddenIds, items]
  );

  const events = {
    ...model.events,
    /**
     * This event registers panels with state.panels. Called when a panel is mounted.
     */
    registerPanel: panels.events.registerItem,
    /**
     * This event unregisters panels with state.panels. Called when a panel is unmounted.
     */
    unregisterPanel: panels.events.unregisterItem,
  };

  const menu = useMenuModel(
    useMenuModel.mergeConfig(config.menuConfig as Required<typeof config.menuConfig>, {
      id: `menu-${model.state.id}`,
      items: overflowItems,
      nonInteractiveIds: state.nonInteractiveIds.filter(key => !state.hiddenIds.includes(key)),
      onSelect(data) {
        menu.events.hide();
        events.select(data);
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
