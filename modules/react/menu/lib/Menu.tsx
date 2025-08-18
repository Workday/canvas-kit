import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';

import {useMenuModel} from './useMenuModel';
import {MenuPopper} from './MenuPopper';
import {MenuTarget, MenuTargetContext} from './MenuTarget';
import {MenuItem} from './MenuItem';
import {MenuCard} from './MenuCard';
import {MenuList} from './MenuList';
import {MenuDivider} from './MenuDivider';
import {MenuOption} from './MenuOption';
import {MenuGroup} from './MenuGroup';
import {Submenu} from './Submenu';

export interface MenuProps {
  /**
   * The contents of the Menu. Can be `Menu` children or any valid elements.
   */
  children: React.ReactNode;
}

/**
 * `Menu` is a combination of a popup and a list. It usually has some type of target element that
 * expands/collapses the menu and a `menu` role and and several `menuitem` roles. Focus is managed
 * using [roving tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex) for maximum
 * compatibility. A `Menu` can have two modes: `single` and `multiple`. This mode determines both
 * how many items can be selected as well as the default behavior when a `menuitem` is clicked. For
 * the `single` mode, selecting a `menuitem` will select and close the menu. For the `multiple`
 * mode, clicking a `menuitem` will toggle selection and will not close the menu.
 *
 * ```tsx
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
 * ```
 */
export const Menu = createContainer()({
  displayName: 'Menu',
  modelHook: useMenuModel,
  subComponents: {
    /**
     * `Menu.Target` is similar to all {@link PopupTarget Popup.Target} types. The component only
     * provides behavior and no styling. The `as` prop is used to determine which component is
     * rendered. This component should forward the `ref` and apply any additional props directly to
     * an element. The default `as` is a {@link SecondaryButton}. Any Canvas Kit component should
     * work with an `as`.
     *
     * An example changing to a {@link PrimaryButton}
     *
     * ```tsx
     * <Menu.Target as={PrimaryButton}>Primary Button Text</Menu.Target>
     * ```
     *
     * This element will apply `aria-haspopup` and `aria-expanded` to inform screen readers there's
     * a popup associated with the element.
     */
    Target: MenuTarget,
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
     * ```tsx
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
     *         {(item) => <Menu.Item data-id={item.id}>{item.text}</Menu.Item>}
     *       </Menu.List>
     *     </Menu>
     *   )
     * }
     * ```
     */
    List: MenuList,
    /**
     * A `Menu.Item` has an optional `data-id` prop that identifies the item in the `Menu.List` and
     * will be passed to the optional `onSelect` callback of the `Menu` model. A `Menu.Item` can
     * contain any HTML. If more complex HTML is provided, add `data-text` to the `Menu.Item`
     * component if using the static API. If you're using the dynamic API, pass `getTextValue` to
     * the model.
     */
    Item: MenuItem,
    Group: MenuGroup,
    /**
     * A `Menu.Option` is similar to the `Menu.Item`, but has a `role=option` and works with
     * `aria-activedescendant` and is selectable with a selected checkmark. It adds the
     * `aria-selected="true/false"` attribute. `Menu.Option` requires much more accessibility
     * behavior composed into the `Menu.Target` and `Menu.List` component. The `Combobox` and
     * `Select` components make use of the `Menu.Option`. See those components for a better idea of
     * how behavior is composed.
     */
    Option: MenuOption,
    Divider: MenuDivider,
    /**
     * A `Menu.TargetContext` is the same as a {@link MenuTarget Menu.Target}, except it adds a
     * `context` event handler instead of a `click` handler to trigger context menus.
     */
    TargetContext: MenuTargetContext,
    /**
     * The "Popper" of a menu. The popper will appear around the {@link MenuTarget Menu.Target}. It
     * renders a `div` element that is portalled to the `document.body` which is controlled by the
     * {@link PopupStack}. The `PopupStack` is not part of React. This means no extra props given to
     * this component will be forwarded to the `div` element, but the `ref` will be forwarded.
     */
    Popper: MenuPopper,
    Submenu: Submenu,
  },
})<MenuProps>(({children}) => {
  return <>{children}</>;
});
