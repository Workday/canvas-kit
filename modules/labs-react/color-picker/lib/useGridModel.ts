//TODO: Remove whole file once https://github.com/Workday/canvas-kit/pull/1628 is merged
import {createModelHook} from '@workday/canvas-kit-react/common';
import {navigationManager} from './useCursorListModel';
import {useListModel} from '@workday/canvas-kit-react/collection';

const {columnCount, orientation, ...defaultConfig} = useListModel.defaultConfig;

export const useGridModel = createModelHook({
  defaultConfig: {
    ...defaultConfig,
    /**
     * Controls the state changes when the user sends navigation events to the model. For example,
     * when the user hits the "right" arrow, a behavior hook will determine directionality
     * (left-to-right or right-to-left) and call the correct navigation method. In our example, a
     * left-to-right language would send a `getNext`. The navigation manager may return the next
     * item in the list. Different managers can be created for slightly different use cases. The
     * default navigation manager will stop when the end of a row/column is detected. For example,
     * `getNext` will return the same item the cursor was previously on if the cursor is on the last
     * item of a row.
     */
    navigation: navigationManager,
  },
  requiredConfig: {
    /**
     * The number of columns represented in a grid
     */
    columnCount: 1,
    ...useListModel.requiredConfig,
  },
  contextOverride: useListModel.Context,
})(config => {
  const list = useListModel(config);

  return list;
});
