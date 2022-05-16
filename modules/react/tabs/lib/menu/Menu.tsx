import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {MenuModel, MenuModelConfig, useMenuModel} from './useMenuModel';
import {MenuPopper} from './MenuPopper';
import {MenuTarget} from './MenuTarget';
import {MenuItem} from './MenuItem';
import {MenuCard} from './MenuCard';
import {MenuList} from './MenuList';

export const MenuModelContext = React.createContext<MenuModel>({} as any);

export interface MenuProps<T> extends MenuModelConfig<T> {
  /**
   * The contents of the Menu. Can be `Menu` children or any valid elements.
   */
  children: React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to create a model out of model
   * config passed to this component.
   * @default useMenuModel(config)
   */
  model?: MenuModel<T>;
}

/**
 * An accessible dropdown menu component. A dropdown menu usually contains a target element that
 * opens to a menu.
 * @example
 * <Menu>
 *   <Menu.Target>Open</Menu.Target>
 *   <Menu.Popper>
 *     <Menu.Card>
 *       <Menu.List>
 *         <Menu.Item data-id="first">First Item</Menu.Item>
 *         <Menu.Item data-id="second">Second Item</Menu.Item>
 *       </Menu.List>
 *     </Menu.Card>
 *   </Menu.Popper>
 * </Menu>
 */
export const Menu = createComponent()({
  displayName: 'Menu',
  Component: ({children, model, ...config}: MenuProps<any>) => {
    const value = useDefaultModel(model, config, useMenuModel);

    return <MenuModelContext.Provider value={value}>{children}</MenuModelContext.Provider>;
  },
  subComponents: {
    /**
     * The menu card is a non-semantic element used to give the dropdown menu its distinct visual
     * cue that the dropdown menu is floating above other content. A menu card usually contains a
     * menu list, but can also contain other elements like a header or footer.
     */
    Card: MenuCard,
    /**
     * The menu list follows the Collections API. A list can either contain static items
     * or a render prop and `items` to the model.
     *
     * @example
     * const MyComponent = () => {
     *   const model = useMenuModel({
     *     items: [
     *       { id: 'first',  text: 'First Item' },
     *       { id: 'second', text: 'Second Item' },
     *     ]
     *   })
     *
     *   return (
     *     <Menu model={model}>
     *       <Menu.List>
     *         {(item) => <Menu.Item>{item.text}</Menu.Item>}
     *       </Menu.List>
     *     </Menu>
     *   )
     * }
     */
    List: MenuList,
    /**
     * A menu item has an optional `name` prop that identifies the item in the menu list and will be
     * passed to the optional `onSelect` callback of the menu model. A menu item can contain any
     * HTML. If more complex HTML is provided, consider
     */
    Item: MenuItem,
    Target: MenuTarget,
    /**
     * The "Popper" of a menu. The popper will appear around the `Menu.Target`. It renders a `div`
     * element that is portalled to the `document.body` which is controlled by the `PopupStack. The
     * `PopupStack` is not part of React. This means no extra props given to this component will be
     * forwarded to the `div` element, but the `ref` will be forwarded.
     */
    Popper: MenuPopper,
  },
});
