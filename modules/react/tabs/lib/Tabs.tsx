import React from 'react';

import {createContainerComponent} from '@workday/canvas-kit-react/common';
import {Menu} from './menu';

import {TabsItem} from './TabsItem';
import {TabsList} from './TabsList';
import {TabsPanel} from './TabsPanel';
import {useTabsModel2} from './useTabsModel';
import {TabsOverflowButton} from './TabsOverflowButton';
import {TabsMenuPopper} from './TabsMenuPopper';
import {TabsPanels} from './TabsPanels';

// use `T = any` here because there's no way to pass generics to a compound component...
export interface TabsProps {
  /**
   * The contents of the Tabs. Can be `Tabs` children or any valid elements.
   */
  children: React.ReactNode;
}

export const Tabs = createContainerComponent()({
  displayName: 'Tabs',
  modelHook: useTabsModel2,
  subComponents: {
    List: TabsList,
    Item: TabsItem,
    Panel: TabsPanel,
    Panels: TabsPanels,
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
})<TabsProps>(({children}, _, model) => {
  return (
    <>
      <Menu model={model.menu}>{children}</Menu>
    </>
  );
});
