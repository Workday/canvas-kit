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
     * An initially selected value. This value must match the `data-id` of the `SegmentedControl.Item` component.
     * If not provided, the first value will be selected.
     */
    initialValue: '',
    /**
     * Sets disabled state for all segmented control buttons
     * @default false
     */
    disabled: false,
    /**
     * Sets the size of the segmented control container and its buttons. Can be `small`, `medium` or `large`.
     * @default 'medium'
     */
    size: 'medium' as 'small' | 'medium' | 'large',
    /**
     * The SegmentedControl can rendered in a horizontal or vertical orientation.
     * We suggest to use the `vertical` orientation only for icon only variant.
     * @default 'horizontal'
     */
    orientation: 'horizontal' as typeof useListModel.defaultConfig.orientation,
  },
  requiredConfig: useListModel.requiredConfig,
})(config => {
  const getId = config.getId || defaultGetId;
  const initialSelectedRef = React.useRef(config.initialValue);
  const items = config.items;

  const model = useListModel(
    useListModel.mergeConfig(config, {
      orientation: config.orientation || 'horizontal',
      items,
      onRegisterItem(data) {
        if (!initialSelectedRef.current) {
          initialSelectedRef.current = data.id;
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
