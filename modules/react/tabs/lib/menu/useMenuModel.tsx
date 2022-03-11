import {createEventMap, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import {
  BasePopupModelConfig,
  popupEventMap,
  PopupEvents,
  PopupModel,
  PopupModelConfig,
  PopupState,
  useAlwaysCloseOnOutsideClick,
  useCloseOnEscape,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {
  CursorListModel,
  SelectionListState,
  SelectionListEvents,
  selectionListEventMap,
  SelectionListModelConfig,
  useListModel,
  BaseSelectionListModelConfig,
} from '@workday/canvas-kit-react/list';

export type MenuState<T = unknown> = SelectionListState<T> & PopupState & {};

export type MenuEvents<T = unknown> = SelectionListEvents<T> & PopupEvents & {};

export interface MenuModel<T = unknown> extends CursorListModel<T>, PopupModel {
  state: MenuState<T>;
  events: MenuEvents<T>;
}

export const menuEventMap = createEventMap<MenuEvents>()({
  guards: {
    ...selectionListEventMap.guards,
    ...popupEventMap.guards,
  },
  callbacks: {
    ...selectionListEventMap.callbacks,
    ...popupEventMap.callbacks,
  },
});

export type BaseMenuModelConfig<T> = BaseSelectionListModelConfig<T> & BasePopupModelConfig & {};

export type MenuModelConfig<T> = BaseMenuModelConfig<T> &
  Partial<ToModelConfig<MenuState<T>, MenuEvents<T>, typeof menuEventMap>>;

export const useMenuModel = <T extends unknown>(config: MenuModelConfig<T> = {}): MenuModel<T> => {
  const popup = usePopupModel(config as PopupModelConfig);
  const list = useListModel(config as SelectionListModelConfig<T>);

  useAlwaysCloseOnOutsideClick(popup);
  useCloseOnEscape(popup);
  useInitialFocus(popup);
  useReturnFocus(popup);
  useFocusRedirect(popup);

  const state = {...list.state, ...popup.state};

  const events = useEventMap(menuEventMap, state, config, {
    ...list.events,
    ...popup.events,
  } as MenuEvents<T>);

  return {...list, state, events};
};
