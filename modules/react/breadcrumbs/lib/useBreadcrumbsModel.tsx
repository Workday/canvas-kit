import React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';
import {defaultGetId, useOverflowListModel} from '@workday/canvas-kit-react/collection';
import {useMenuModel} from '@workday/canvas-kit-react/menu';

export const useBreadcrumbsModel = createModelHook({
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
  const itemSpace = totalSize - hiddenIds.length;

  if (itemSpace <= 1) {
    // Keep only last items if there is place for two or less items
    hiddenIds = items.slice(0, totalSize - 1).map(getId);
  } else if (itemSpace === 2) {
    // Always keep first and last item if there is place for 3 items
    hiddenIds = items.slice(1, totalSize - 1).map(getId);
  } else if (itemSpace === 3) {
    // Always keep first and 2 last items if there is place for 4 items
    hiddenIds = items.slice(1, totalSize - 2).map(getId);
  } else {
    const indexFirstHidden = items.findIndex(item => item.id === hiddenIds[0]);
    // If there is space for more than 3 items, keep the first and 2 last items visible
    // If they are hidden it should replace by non-hidden items
    hiddenIds = hiddenIds.length
      ? [
          ...items.slice(indexFirstHidden - 2, indexFirstHidden).map(getId),
          ...hiddenIds.slice(0, hiddenIds.length - 2),
        ]
      : hiddenIds;
  }

  nonInteractiveIds = hiddenIds;

  const state = {
    ...model.state,
    hiddenIds,
    nonInteractiveIds,
    orientation: config.orientation || 'horizontal',
    tooltip: {},
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
      onSelect: ({id}, {items}) => {
        const item = items.find(item => item.id === id) || {value: null};
        if (item.value) {
          const {onAction, link, onClick} = item.value as {
            onAction?: any;
            link?: string;
            onClick?: any;
          };

          if (onAction) {
            onAction(link);
          } else {
            // default to hard redirecting
            window.location.href = link || '#';
          }
          // don't block the onClick event if it's provided
          if (onClick) {
            onClick(event);
          }
        }
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
