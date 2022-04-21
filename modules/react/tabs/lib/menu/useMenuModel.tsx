import {createModelHook} from '@workday/canvas-kit-react/common';
import {
  useAlwaysCloseOnOutsideClick,
  useCloseOnEscape,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {useListModel2} from '@workday/canvas-kit-react/list';

export const useMenuModel2 = createModelHook({
  defaultConfig: {
    ...useListModel2.defaultConfig,
    ...usePopupModel.defaultConfig,
  },
  requiredConfig: {
    ...useListModel2.requiredConfig,
    ...usePopupModel.requiredConfig,
  },
})(config => {
  const popup = usePopupModel(config);
  const list = useListModel2(useListModel2.mergeConfig(config, {shouldVirtualize: false}));

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
