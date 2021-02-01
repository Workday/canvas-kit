import React from 'react';
import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react-common';
import {CursorState, CursorEvents, cursorEventMap, useCursorModel} from './cursor/useCursorModel';
import {Item, ListEvents, ListState, useListModel} from './list/useListModel';

export type TabsState = CursorState & {
  /**
   * The name of the active tab provided to the `Tabs.Item` component. If no name is provided, it
   * will be a string of the index position */
  activeTab: string;
  panels: Item[];
  panelIndexRef: ListState['indexRef'];
};

export type TabsEvents = CursorEvents & {
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

export type TabsModel = Model<TabsState, TabsEvents>;

export const tabEventMap = createEventMap<TabsEvents>()({
  guards: {
    ...cursorEventMap.guards,
    shouldActivateTab: 'activateTab',
  },
  callbacks: {
    ...cursorEventMap.callbacks,
    onActivateTab: 'activateTab',
  },
});

export type TabsModelConfig = {
  id?: string;
  initialTab?: string;
  direction?: 'vertical' | 'horizontal';
} & Partial<ToModelConfig<TabsState, TabsEvents, typeof tabEventMap>>;

export const useTabsModel = (config: TabsModelConfig = {}): TabsModel => {
  const initialTabRef = React.useRef(config.initialTab);
  const [activeTab, setActiveTab] = React.useState(initialTabRef.current || '');

  const menu = useCursorModel({
    orientation: 'horizontal',
    ...config,
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
    activateTab(data) {
      setActiveTab(data.tab);
      events.setCurrentId({id: data.tab});
    },
    registerPanel: panels.events.registerItem,
    unregisterPanel: panels.events.unregisterItem,
  });

  return {
    state,
    events,
  };
};
