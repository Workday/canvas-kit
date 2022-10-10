import React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';
import {
  defaultGetId,
  useListModel,
  useOverflowListModel,
} from '@workday/canvas-kit-react/collection';

export const useSegmentedControlModel = createModelHook({
  defaultConfig: {
    ...useOverflowListModel.defaultConfig,
    /**
     * Optional id for the whole `SegmentedControl` group. If not provided, a unique id will be created.
     * @default useUniqueId()
     */
    id: '',
    /**
     * An initially selected value. This value must match the `data-id` of the `SegmentedControl.Item` component.
     * If not provided, the first value will be selected.
     */
    initialValue: '',
    /**
     * Sets disabled state to all segmented control buttons
     * @default false
     */
    disabled: false,
    /**
     * Sets size of segmented control container and buttons. Can be `small`, `medium` or `large`.
     * @default 'medium'
     */
    size: 'medium' as 'small' | 'medium' | 'large',
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
  const initialSelectedRef = React.useRef(config.initialValue);
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
      initialSelectedIds: config.initialValue
        ? [config.initialValue]
        : config.items?.length
        ? [getId(config.items![0])]
        : [],
      shouldVirtualize: false,
    })
  );

  const state = {
    ...model.state,
    disabled: config.disabled,
    size: config.size,
    nonInteractiveIds: [],
    hiddenIds: [],
  };

  const events = {
    ...model.events,
  };

  return {
    ...model,
    state,
    events,
  };
});
