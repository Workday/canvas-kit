import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
import {
  BasePopupModelConfig,
  popupEventMap,
  PopupEvents,
  PopupModelConfig,
  PopupState,
  useAlwaysCloseOnOutsideClick,
  useCloseOnEscape,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {ListModel} from '../list';
import {
  SelectionState,
  SelectionEvents,
  selectionEventMap,
  SelectionModelConfig,
  useSelectionModel,
  BaseSelectionModelConfig,
} from '../selection';

export type MenuState<T = unknown> = SelectionState<T> & PopupState & {};

export type MenuEvents<T = unknown> = SelectionEvents<T> & PopupEvents & {};

export interface MenuModel<T = unknown> extends Model<MenuState<T>, MenuEvents<T>> {
  getId: ListModel<T>['getId'];
}

export const menuEventMap = createEventMap<MenuEvents>()({
  guards: {
    ...selectionEventMap.guards,
    ...popupEventMap.guards,
  },
  callbacks: {
    ...selectionEventMap.callbacks,
    ...popupEventMap.callbacks,
  },
});

export type BaseMenuModelConfig<T> = BaseSelectionModelConfig<T> & BasePopupModelConfig & {};

export type MenuModelConfig<T> = BaseMenuModelConfig<T> &
  Partial<ToModelConfig<MenuState<T>, MenuEvents<T>, typeof menuEventMap>>;

export const useMenuModel = <T extends unknown>(config: MenuModelConfig<T> = {}): MenuModel<T> => {
  const popup = usePopupModel(config as PopupModelConfig);
  const selection = useSelectionModel(config as SelectionModelConfig<T>);

  useAlwaysCloseOnOutsideClick(popup);
  useCloseOnEscape(popup);
  useInitialFocus(popup);
  useReturnFocus(popup);
  useFocusRedirect(popup);

  const state = {...selection.state, ...popup.state};

  const events = useEventMap(menuEventMap, state, config, {
    ...selection.events,
    ...popup.events,
  } as MenuEvents<T>);

  return {state, events, getId: selection.getId};
};
