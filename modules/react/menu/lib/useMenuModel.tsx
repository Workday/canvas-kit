import {createModelHook} from '@workday/canvas-kit-react/common';
import {
  useAlwaysCloseOnOutsideClick,
  useCloseOnEscape,
  useFocusRedirect,
  usePopupModel,
  useReturnFocus,
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
  },
  requiredConfig: {
    ...useListModel.requiredConfig,
    ...usePopupModel.requiredConfig,
  },
})(config => {
  // don't virtualize menus by default to avoid oddities with card width
  const list = useListModel(
    useListModel.mergeConfig(config, {
      shouldVirtualize: false,
      selection: config.mode === 'single' ? singleSelectionManager : multiSelectionManager,
    })
  );

  const popup = usePopupModel(
    usePopupModel.mergeConfig(config, {
      onHide() {
        // reset the index ref to 0 again so registration doesn't start where it left off
        list.state.indexRef.current = 0;
      },
    })
  );

  useAlwaysCloseOnOutsideClick(popup);
  useCloseOnEscape(popup);
  useReturnFocus(popup);
  useFocusRedirect(popup);

  const state = {mode: config.mode, ...list.state, ...popup.state};

  const events = {
    ...list.events,
    ...popup.events,
  };

  return {...list, state, events};
});
