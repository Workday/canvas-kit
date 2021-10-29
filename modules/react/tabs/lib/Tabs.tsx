import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {TabsItem} from './TabsItem';
import {TabsList} from './TabsList';
import {TabsPanel} from './TabsPanel';
import {useTabsModel, TabsModel, TabsModelConfig} from './useTabsModel';
import {TabsOverflowButton} from './TabsOverflowButton';
import {TabsMenuPopper} from './TabsMenuPopper';
import {Menu} from './menu';

export const TabsModelContext = React.createContext<TabsModel<unknown>>({} as any);

export interface TabsProps<T> extends TabsModelConfig<T> {
  /**
   * The contents of the Tabs. Can be `Tabs` children or any valid elements.
   */
  children: React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to create a model out of model
   * config passed to this component.
   * @default useTabsModel(config)
   */
  model?: TabsModel<T>;
}

export const Tabs = createComponent()({
  displayName: 'Tabs',
  Component: ({children, model, ...config}: TabsProps<any>) => {
    const value = useDefaultModel(model, config, useTabsModel);

    return (
      <TabsModelContext.Provider value={value}>
        <Menu model={value.menu}>{children}</Menu>
      </TabsModelContext.Provider>
    );
  },
  subComponents: {
    List: TabsList,
    Item: TabsItem,
    Panel: TabsPanel,
    OverflowButton: TabsOverflowButton,
    MenuPopper: TabsMenuPopper,
    /**
     * The overflow menu of the Tabs component. If there isn't enough room to render all the tab
     * items, the extra tabs that don't fit will be overflowed into this menu.
     * @example
     * <Tabs.Menu.Popper>
     *   <Tabs.Menu.Card>
     *     <Tabs.Menu.List>
     *       {(item: MyTabItem) => <Tabs.Menu.Item name={item.id}>{item.text}</Tabs.Menu.Item>}
     *     </Tabs.Menu.List>
     *   </Tabs.Menu.Card>
     * </Tabs.Menu.Popper>
     */
    Menu,
  },
});
