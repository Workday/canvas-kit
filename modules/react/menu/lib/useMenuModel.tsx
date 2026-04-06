import {createModelHook} from '@workday/canvas-kit-react/common';
import {
  useAlwaysCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {
  multiSelectionManager,
  singleSelectionManager,
  useListModel,
} from '@workday/canvas-kit-react/collection';

export const useMenuModel = createModelHook({
  defaultConfig: {
    ...useListModel.defaultConfig,
    ...usePopupModel.defaultConfig,
    /** Determines the default selection manager used as well as if the menu closes when an item is selected */
    mode: 'single' as 'single' | 'multiple',
    // don't virtualize menus by default to avoid oddities with card width

    shouldVirtualize: false,
  },
  requiredConfig: {
    ...useListModel.requiredConfig,
    ...usePopupModel.requiredConfig,
  },
  contextOverride: usePopupModel.Context,
})(config => {
  const list = useListModel(
    useListModel.mergeConfig(config, {
      selection: config.mode === 'single' ? singleSelectionManager : multiSelectionManager,
    })
  );

  const popup = usePopupModel(
    usePopupModel.mergeConfig(config, {
      id: list.state.id,
      onHide() {
        // reset the index ref to 0 again so registration doesn't start where it left off
        list.state.indexRef.current = 0;
      },
    })
  );

  useAlwaysCloseOnOutsideClick(popup);
  useCloseOnEscape(popup);

  const state = {mode: config.mode, ...list.state, ...popup.state};

  const events = {
    ...list.events,
    ...popup.events,
  };

  return {
    ...list,
    ...popup,
    state,
    events,
    UNSTABLE_parentModel: config.UNSTABLE_parentModel as ReturnType<typeof useListModel>,
  };
});
