import React from 'react';
import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react-common';
import {
  CursorState,
  CursorEvents,
  cursorEventMap,
  useCursorModel,
  BaseCursorModelConfig,
  Orientation,
  CursorModelConfig,
} from './cursor/useCursorModel';
import {Item, ListEvents, ListState, useListModel} from './list/useListModel';

export type TabsState = CursorState & {
  /**
   * The name of the active tab provided to the `Tabs.Item` component. If no name is provided, it
   * will be a string of the index position.
   */
  activeTab: string;
  /**
   * A list of panels. Uses `ListModel`
   */
  panels: Item[];
  /**
   * A React.Ref of the current item index. A ref is used to allow for updating outside the normal
   * React state cycle to ensure accurate index tracking as items are registered within the same
   * state setting phase.
   */
  panelIndexRef: ListState['indexRef'];
};

export type TabsEvents = CursorEvents & {
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
  registerPanel: ListEvents['registerItem'];
  /**
   * This event unregisters panels with state.panels. Called when a panel is unmounted.
   */
  unregisterPanel: ListEvents['unregisterItem'];
};

export type TabsModel = Model<TabsState, TabsEvents>;

export const tabEventMap = createEventMap<TabsEvents>()({
  guards: {
    ...cursorEventMap.guards,
    /**
     * Should the tab activate? Can prevent the tab from activating. Use this only for advanced
     * use-cases.
     */
    shouldActivate: 'activate',
  },
  callbacks: {
    ...cursorEventMap.callbacks,
    /**
     * This callback will fire whenever a tab is activated. The data will contain the tab's named
     * passed to the `Tabs.Item` component. If no name was passed, it will be the index of the tab
     * as a string.
     */
    onActivate: 'activate',
  },
});

export type BaseTabsModelConfig = Omit<BaseCursorModelConfig, 'orientation'> & {
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
};

export type TabsModelConfig = BaseTabsModelConfig &
  Partial<ToModelConfig<TabsState, TabsEvents, typeof tabEventMap>>;

export const useTabsModel = (config: TabsModelConfig = {}): TabsModel => {
  const initialTabRef = React.useRef(config.initialTab);
  const [activeTab, setActiveTab] = React.useState(initialTabRef.current || '');

  const menu = useCursorModel({
    orientation: config.orientation || 'horizontal',
    ...(config as CursorModelConfig),
    onRegisterItem({data, state}) {
      if (!initialTabRef.current) {
        initialTabRef.current = data.item.id;
        setActiveTab(initialTabRef.current);
      }
      config.onRegisterItem?.({data, state: state as TabsState});
    },
  });
  const panels = useListModel();

  const state = {
    ...menu.state,
    activeTab,
    panels: panels.state.items,
    panelIndexRef: panels.state.indexRef,
  };

  const events = useEventMap(tabEventMap, state, config, {
    ...menu.events,
    activate(data) {
      setActiveTab(data.tab);
      events.goTo({id: data.tab});
    },
    registerPanel: panels.events.registerItem,
    unregisterPanel: panels.events.unregisterItem,
  });

  return {
    state,
    events,
  };
};
