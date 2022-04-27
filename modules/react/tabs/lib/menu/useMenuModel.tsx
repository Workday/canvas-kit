import {createModelHook} from '@workday/canvas-kit-react/common';
import {
  useAlwaysCloseOnOutsideClick,
  useCloseOnEscape,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {useListModel} from '@workday/canvas-kit-react/list';

export const useMenuModel = createModelHook({
  defaultConfig: {
    ...useListModel.defaultConfig,
    ...usePopupModel.defaultConfig,
  },
  requiredConfig: {
    ...useListModel.requiredConfig,
    ...usePopupModel.requiredConfig,
  },
})(config => {
  const popup = usePopupModel(config);
  const list = useListModel(useListModel.mergeConfig(config, {shouldVirtualize: false}));

  useAlwaysCloseOnOutsideClick(popup);
  useCloseOnEscape(popup);
  useInitialFocus(popup);
  useReturnFocus(popup);
  useFocusRedirect(popup);

  const state = {...list.state, ...popup.state};

  const events = {
    ...list.events,
    ...popup.events,
  };

  return {...list, state, events};
});
