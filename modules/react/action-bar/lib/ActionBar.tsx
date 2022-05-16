import * as React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {useActionBarModel} from './useActionBarModel';
import {ActionBarList} from './ActionBarList';
import {ActionBarOverflowButton} from './ActionBarOverflowButton';
import {ActionBarItem} from './ActionBarItem';

export interface ActionBarProps {
  /**
   * The contents of the ActionBar. Can be `ActionBar` children or any valid elements.
   */
  children: React.ReactNode;
}

export const ActionBar = createContainer('div')({
  displayName: 'ActionBar',
  modelHook: useActionBarModel,
  subComponents: {
    List: ActionBarList,
    Item: ActionBarItem,
    OverflowButton: ActionBarOverflowButton,
    /**
     * The overflow menu of the ActionBar component. If there isn't enough room to render all the action
     * items, the extra actions that don't fit will be overflowed into this menu.
     * @example
     * <ActionBar.Menu.Popper>
     *   <ActionBar.Menu.Card>
     *     <ActionBar.Menu.List>
     *       {(item: MyActionItem) => <ActionBar.Menu.Item>{item.text}</ActionBar.Menu.Item>}
     *     </ActionBar.Menu.List>
     *   </ActionBar.Menu.Card>
     * </ActionBar.Menu.Popper>
     */
    Menu,
  },
})<ActionBarProps>(({children}, _, model) => {
  return <Menu model={model.menu}>{children}</Menu>;
});
