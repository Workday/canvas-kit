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

/**
 * `ActionBar` is a container component that is responsible for creating a {@link ActionBarModel}
 * and sharing it with its subcomponents using React context. It does not represent a real element.
 *
 * ```tsx
 * <ActionBar items={[]}>{Child components}</ActionBar>
 * ```
 *
 * Alternatively, you may pass in a model using the hoisted model pattern.
 *
 * ```tsx
 * const model = useActionBarModel({
 *   items: [],
 * });
 *
 * <ActionBar model={model}>{Child components}</ActionBar>;
 * ```
 */
export const ActionBar = createContainer()({
  displayName: 'ActionBar',
  modelHook: useActionBarModel,
  subComponents: {
    /**
     * `ActionBar.List` is a `HStack` element. It is a container for
     * {@link ActionBarItem ActionBar.Item} subcomponents. To render an overflow button for
     * ActionBar with overflow behavior `overflowButton` prop with overflow button component as a
     * value should be passed.
     *
     * ```tsx
     * // without overflow
     * <ActionBar.List>{ActionBar.Items}</ActionBar.List>
     *
     * // with overflow
     * <ActionBar.List overflowButton={<ActionBar.OverflowButton aria-label="More actions"/>}>
     *   {ActionBar.Items}
     * </ActionBar.List>
     * ```
     */
    List: ActionBarList,
    /**
     * `ActionBar.Item` is a `button` element, by default it's a `SecondaryButton` unless an `as`
     * prop passed.
     *
     * ```tsx
     * <ActionBar.Item as={PrimaryButton} onClick={() => console.log('first action')}>
     *   First Action
     * </ActionBar.Item>
     * ```
     */
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
