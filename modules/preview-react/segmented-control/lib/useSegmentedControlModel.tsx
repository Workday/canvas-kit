import React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';
import {defaultGetId, useListModel} from '@workday/canvas-kit-react/collection';

export const useSegmentedControlModel = createModelHook({
  defaultConfig: {
    ...useListModel.defaultConfig,
    /**
     * Optional id for the whole `SegmentedControl` group. If not provided, a unique id will be created.
     * @default useUniqueId()
     */
    id: '',
    /**
     * An initially selected tab. This value must match the `name` of the `Tab.Item` component. If
     * not provided, the first tab will be selected.
     */
    initialTab: '',
    /**
     * The SegmentedControl handles rendering of button group in a horizontal orientation,
     * but the icon only button variant could have a vertical orientation.
     * @default 'horizontal'
     */
    orientation: 'horizontal' as typeof useListModel.defaultConfig.orientation,
  },
  requiredConfig: useListModel.requiredConfig,
})(config => {
  const getId = config.getId || defaultGetId;
  const initialSelectedRef = React.useRef(config.initialTab);
  const items = config.items;

  const model = useListModel(
    useListModel.mergeConfig(config, {
      orientation: config.orientation || 'horizontal',
      items,
      shouldVirtualize: false,
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
    })
  );

  const state = {
    ...model.state,
    orientation: config.orientation || 'horizontal',
  };

  const events = {
    ...model.events,
  };

  return {
    ...model,
    state,
    events,
    // menu,
  };
});
