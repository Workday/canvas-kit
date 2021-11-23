import React from 'react';
import {
  createEventMap,
  ToModelConfig,
  useEventMap,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {Orientation} from './cursor';
import {defaultGetId, ListEvents, ListState, useListModel} from './list';
import {MenuModel, MenuModelConfig, useMenuModel} from './menu';
import {
  overflowEventMap,
  OverflowEvents,
  OverflowState,
  OverflowModelConfig,
  BaseOverflowModelConfig,
  useOverflowModel,
  OverflowModel,
} from './overflow';

export type TabsState<T> = OverflowState<T> & {
  /** IDREF of the list. Children ids can be derived from this id */
  id: string;
  /**
   * A list of panels. Uses `ListModel`
   */
  panels: T[];
  /**
   * A React.Ref of the current item index. A ref is used to allow for updating outside the normal
   * React state cycle to ensure accurate index tracking as items are registered within the same
   * state setting phase.
   */
  panelIndexRef: ListState<T>['indexRef'];
  orientation: Orientation;
  getId: (item: T) => string;
};

export type TabsEvents<T = unknown> = OverflowEvents<T> & {
  /**
   * This event registers panels with state.panels. Called when a panel is mounted.
   */
  registerPanel: ListEvents<T>['registerItem'];
  /**
   * This event unregisters panels with state.panels. Called when a panel is unmounted.
   */
  unregisterPanel: ListEvents<T>['unregisterItem'];
};

export interface TabsModel<T = unknown> extends OverflowModel<T> {
  state: TabsState<T>;
  events: TabsEvents<T>;
  menu: MenuModel<T>;
}

export const tabEventMap = createEventMap<TabsEvents>()({
  guards: {
    ...overflowEventMap.guards,
  },
  callbacks: {
    ...overflowEventMap.callbacks,
  },
});

export type BaseTabsModelConfig<T> = Omit<BaseOverflowModelConfig<T>, 'orientation'> & {
  /**
   * Optional id for the whole `Tabs` group. The `aria-controls` of the `Tab.Item` and `id` of the
   * `Tab.Panel` will automatically derived from this id. If not provided, a unique id will be
   * created.
   * @default useUniqueId()
   */
  id?: string;
  /**
   * An initially selected tab. This value must match the `name` of the `Tab.Item` component. If
   * not provided, the first tab will be selected.
   */
  initialTab?: string;
  /**
   * The default Tabs sub-components only handle rendering of tabs in a horizontal orientation, but
   * the sub-components could be replaced to handle vertical orientations.
   * @default 'horizontal'
   */
  orientation?: Orientation;
  menuConfig?: MenuModelConfig<T>;
};

export type TabsModelConfig<T> = BaseTabsModelConfig<T> &
  Partial<ToModelConfig<TabsState<T>, TabsEvents<T>, typeof tabEventMap>>;

export const useTabsModel = <T extends unknown>(config: TabsModelConfig<T> = {}): TabsModel<T> => {
  const id = useUniqueId(config.id);
  const initialSelectedRef = React.useRef(config.initialTab);
  const getId = config.getId || defaultGetId;

  const items = config.items; // || (emptyItems as T[]);

  const model = useOverflowModel<T>({
    ...(config as OverflowModelConfig<T>),
    id: `${id}-tabs`,
    orientation: config.orientation || 'horizontal',
    items,
    onRegisterItem({data, prevState}) {
      config?.onRegisterItem?.({data, prevState: prevState as TabsState<T>});
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
  });

  const panels = useListModel<T>();

  const state: TabsState<T> = {
    ...model.state,
    id,
    getId,
    orientation: config.orientation || 'horizontal',
    panels: panels.state.items,
    panelIndexRef: panels.state.indexRef,
  };

  const overflowItems = React.useMemo(
    () => (items ? items.filter(item => state.hiddenIds.includes(getId(item))) : undefined),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.hiddenIds, items]
  );

  const events = useEventMap(tabEventMap, state, config, {
    ...model.events,
    registerPanel: panels.events.registerItem,
    unregisterPanel: panels.events.unregisterItem,
  } as TabsEvents<T>);

  const menu = useMenuModel({
    id: `${id}-menu`,
    items: overflowItems,
    nonInteractiveIds: state.nonInteractiveIds.filter(key => !state.hiddenIds.includes(key)),
    onSelect({data, prevState}) {
      menu.events.hide();
      events.select(data);
      config.menuConfig?.onSelect?.({data, prevState});
    },
    onShow({data, prevState}) {
      // Always select the first item when the menu is opened
      menu.events.first();
      config.menuConfig?.onShow?.({data, prevState});
    },
  });

  return {
    ...model,
    state,
    events,
    menu,
  };
};
