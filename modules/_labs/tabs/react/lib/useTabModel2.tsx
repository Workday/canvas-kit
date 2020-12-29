import React from 'react';
import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react-common';
import {MenuState, MenuEvents, menuEventMap, useMenuModel} from './useMenuModel';
import {Item, ListEvents, ListState, useListModel} from './useListModel';

type TabState = MenuState & {
  /**
   * The name of the active tab provided to the `Tabs.Item` component. If no name is provided, it
   * will be a string of the index position */
  activeTab: string;
  panels: Item[];
  panelIndexRef: ListState['indexRef'];
  /** Used for tracking programmatic focus changes vs user focus changes */
  programmaticFocusRef: React.MutableRefObject<boolean>;
};

type TabEvents = MenuEvents & {
  /**
   * This event will set the `activeTab` in the state. Called when a user activates a tab
   */
  activateTab(data: {
    /** The name of the tab provided to the `Tabs.Item` component. If no name is provided, it will
     * be a string of the index position */
    tab: string;
  }): void;
  registerPanel: ListEvents['registerItem'];
  unregisterPanel: ListEvents['unregisterItem'];
};

export type TabModel = Model<TabState, TabEvents>;

const tabEventMap = createEventMap<TabEvents>()({
  guards: {
    ...menuEventMap.guards,
    shouldActivateTab: 'activateTab',
  },
  actions: {
    ...menuEventMap.actions,
    onActivateTab: 'activateTab',
  },
});

type TabModelConfig = {
  id?: string;
  initialTab?: string;
  direction?: 'vertical' | 'horizontal';
} & Partial<ToModelConfig<TabState, TabEvents, typeof tabEventMap>>;

export const useTabModel2 = (config: TabModelConfig = {}): TabModel => {
  const initialTabRef = React.useRef(config.initialTab);
  const programmaticFocusRef = React.useRef(false);
  const [activeTab, setActiveTab] = React.useState(initialTabRef.current || '');
  const menu = useMenuModel({
    ...config,
    onRegisterItem({data, state}) {
      console.log('onRegisterTab', data);
      if (!initialTabRef.current) {
        initialTabRef.current = data.item.id;
        setActiveTab(initialTabRef.current);
      }
      config.onRegisterItem?.({data, state: state as TabState});
    },
  });
  const panels = useListModel();

  const state = {
    activeTab,
    programmaticFocusRef,
    panels: panels.state.items,
    panelIndexRef: panels.state.indexRef,
    ...menu.state,
  };

  const events = useEventMap(tabEventMap, state, config, {
    activateTab(data) {
      setActiveTab(data.tab);
      events.setCurrentId({id: data.tab});
    },
    registerPanel: panels.events.registerItem,
    unregisterPanel: panels.events.unregisterItem,
    ...menu.events,
  });

  return {
    state,
    events,
  };
};
