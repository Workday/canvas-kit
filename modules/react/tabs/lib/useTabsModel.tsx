import React from 'react';
import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

import {Orientation} from './cursor/useCursorModel';
import {
  BaseListModelConfig,
  defaultGetId,
  ListEvents,
  ListState,
  useListModel,
} from './list/useListModel';
import {MenuModel, MenuModelConfig, useMenuModel} from './menu/useMenuModel';
import {OverflowModel, OverflowModelConfig, useOverflowModel} from './overflow';

export type TabsState<T> = {
  /** IDREF of the list. Children ids can be derived from this id */
  id: string;
  /**
   * The name of the active tab provided to the `Tabs.Item` component. If no name is provided, it
   * will be a string of the index position.
   */
  activeTab: string;
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

export type TabsEvents<T> = {
  /**
   * This event will set the `activeTab` in the state. Called when a user activates a tab
   */
  activate(data: {
    /**
     * The name of the tab provided to the `Tabs.Item` component. If no name is provided, it will
     * be a string of the index position
     */
    tab: string;
  }): void;
  /**
   * This event registers panels with state.panels. Called when a panel is mounted.
   */
  registerPanel: ListEvents<T>['registerItem'];
  /**
   * This event unregisters panels with state.panels. Called when a panel is unmounted.
   */
  unregisterPanel: ListEvents<T>['unregisterItem'];
};

export interface TabsModel<T> extends Model<TabsState<T>, TabsEvents<T>> {
  visibleTabs: OverflowModel<T>;
  menu: MenuModel<T>;
}

export const tabEventMap = createEventMap<TabsEvents<unknown>>()({
  guards: {
    /**
     * Should the tab activate? Can prevent the tab from activating. Use this only for advanced
     * use-cases.
     */
    shouldActivate: 'activate',
  },
  callbacks: {
    /**
     * This callback will fire whenever a tab is activated. The data will contain the tab's named
     * passed to the `Tabs.Item` component. If no name was passed, it will be the index of the tab
     * as a string.
     */
    onActivate: 'activate',
  },
});

export type BaseTabsModelConfig<T> = Omit<BaseListModelConfig<T>, 'orientation'> & {
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
  visibleTabsConfig?: OverflowModelConfig<T>;
};

export type TabsModelConfig<T> = BaseTabsModelConfig<T> &
  Partial<ToModelConfig<TabsState<T>, TabsEvents<T>, typeof tabEventMap>>;

export const useTabsModel = <T extends unknown>(config: TabsModelConfig<T> = {}): TabsModel<T> => {
  const id = useUniqueId(config.id);
  const initialTabRef = React.useRef(config.initialTab);
  const [activeTab, setActiveTab] = React.useState(initialTabRef.current || '');
  const getId = config.getId || defaultGetId;

  const visibleItems = config.items || [];
  // const [visibleItems, setVisibleItems] = React.useState(config.items?.slice(0, 4));
  // const [overflowItems, setOverflowItems] = React.useState(config.items?.slice(4));

  const panels = useListModel<T>();

  const state: TabsState<T> = {
    id,
    getId,
    orientation: config.orientation || 'horizontal',
    activeTab,
    panels: panels.state.items,
    panelIndexRef: panels.state.indexRef,
  };

  const visibleTabs = useOverflowModel<T>({
    id: `${id}-tabs`,
    orientation: config.orientation || 'horizontal',
    items: visibleItems,
    onRegisterItem({data}) {
      console.log('onRegisterItem');
      config.visibleTabsConfig?.onRegisterItem?.({data, prevState: visibleTabs.state});
      if (!initialTabRef.current) {
        initialTabRef.current = state.getId(data.item);
        visibleTabs.events.select({id: initialTabRef.current});
      }
    },
    onSelect({data}) {
      console.log('select');
      events.activate({tab: data.id});
    },
    initialSelectedKeys: config.initialTab
      ? [config.initialTab]
      : config.items?.length
      ? [state.getId(config.items![0])]
      : [],
  });

  const overflowItems = visibleItems.filter(item =>
    visibleTabs.state.hiddenKeys.includes(getId(item))
  );

  const menu = useMenuModel({
    id: `${id}-menu`,
    items: overflowItems,
    onSelect({data, prevState}) {
      events.activate({tab: data.id});
      menu.events.hide();
      const tabToAdd = config.items?.find(item => getId(item) === data.id);
      const tabToRemove = visibleItems?.[visibleItems.length - 1];
      if (tabToAdd) {
        // setVisibleItems(items => items?.concat(tabToAdd));
        // setOverflowItems(items => items?.filter(item => getId(item) !== getId(tabToAdd)));
        visibleTabs.events.select(data);
      }
      console.log('select', tabToAdd, tabToRemove);
      if (tabToRemove) {
        // setOverflowItems(items => items?.concat(tabToRemove));
        // setVisibleItems(items => items?.filter(item => getId(item) !== getId(tabToRemove)));
      }
      // menu.events.go
      config.menuConfig?.onSelect?.({data, prevState});
    },
    onShow({data, prevState}) {
      // Always select the first item when the menu is opened
      menu.events.first();
      config.menuConfig?.onShow?.({data, prevState});
    },
  });

  const events = useEventMap(tabEventMap, state, config, {
    activate(data) {
      setActiveTab(data.tab);
      visibleTabs.events.goTo({id: data.tab});
    },
    registerPanel: panels.events.registerItem,
    unregisterPanel: panels.events.unregisterItem,
  } as TabsEvents<T>);

  return {
    state,
    events,
    visibleTabs,
    menu,
  };
};
