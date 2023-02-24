import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';

import {TabsItem} from './TabsItem';
import {TabsList} from './TabsList';
import {TabsPanel} from './TabsPanel';
import {useTabsModel} from './useTabsModel';
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

/**
 * `Tabs` is a container component that is responsible for creating a {@link TabsModel} and sharing
 * it with its subcomponents using React context. It does not represent a real element.
 *
 * ```tsx
 * <Tabs onSelect={data => console.log('Selected tab', data.id)}>
 *   {child components}
 * </Tabs>
 * ```
 *
 * Alternatively, you may pass in a model using the hoisted model pattern.
 *
 * ```tsx
 * const model = useTabsModel({
 *   onSelect(data) {
 *     console.log('Activated Tab', data.id);
 *   },
 * });
 *
 * <Tabs model={model}>{child components}</Tabs>
 * ```
 *
 * See [Configuring a
 * Model](/getting-started/for-developers/resources/compound-components/#configuring-a-model) for
 * more information on model configuration.
 */
export const Tabs = createContainer()({
  displayName: 'Tabs',
  modelHook: useTabsModel,
  subComponents: {
    /**
     * `Tabs.List` is a `<div role="tablist">` element. It is a container for {@link TabsItem Tabs.Item}
     * subcomponents.
     *
     * ```tsx
     * <Tabs.List>{Tabs.Items}</Tabs.List>
     * ```
     */
    List: TabsList,
    /**
     * `Tabs.Item` is a `<button role="tab">` element. Each `Tabs.Item` is associated with a
     * `Tabs.Panel` either by a `data-id` attribute or by the position in the list. If a `data-id`
     * is provided, it must match the `data-id` passed to the corresponding `Tabs.Panel` component.
     *
     * ```tsx
     * <Tabs.Item data-id="first">First Tab</Tabs.Item>
     * ```
     */
    Item: TabsItem,
    /**
     * `Tabs.Panel` is a `<div role="tabpanel">` element. It is focusable by default. Each
     * `Tabs.Panel` is controlled by a `Tabs.Item` either by a `data-id` attribute or by the
     * position in the list. If a `data-id` is provided, it must match the `data-id` passed to the
     * corresponding `Tabs.Item` component.
     *
     * ```tsx
     * <Tabs.Panel data-id="first">
     *   {contents of tab panel}
     * </Tabs.Panel>
     * ```
     */
    Panel: TabsPanel,
    /**
     * Optional subcomponent of tabs that makes dealing with dynamic tabs easier. `Tabs.Panels` only
     * works if the model is given an array of items.
     *
     * ```tsx
     * const items = [{ id: '1', name: 'first' }]
     * <Tabs items={items}>
     *   {tab list}
     *   <Tabs.Panels>
     *     {item => <Tabs.Panel>Contents of {item.name}</Tabs.Panel>}
     *   </Tabs.Panels>
     * </Tabs>
     * ```
     */
    Panels: TabsPanels,
    /**
     * The overflow button of a `Tabs.List`. When a tab list overflows, this overflow button is
     * rendered. Overflow only works when the model is given an array of `items`.
     *
     * ```tsx
     * <Tabs items={items}>
     *   <Tabs.List overflowButton={
     *     <Tabs.OverflowButton>More</Tabs.OverflowButton>
     *   }>
     *     {dynamic tab items}
     *   </Tabs.List>
     * </Tabs>
     * ```
     */
    OverflowButton: TabsOverflowButton,
    /**
     * @deprecated Use `Tabs.Menu.Popper` instead
     */
    MenuPopper: TabsMenuPopper,
    /**
     * The overflow menu of the Tabs component. If there isn't enough room to render all the tab
     * items, the extra tabs that don't fit will be overflowed into this menu.
     *
     * ```tsx
     * <Tabs.Menu.Popper>
     *   <Tabs.Menu.Card>
     *     <Tabs.Menu.List>
     *       {(item: MyTabItem) => <Tabs.Menu.Item data-id={item.id}>
     *         {item.text}
     *       </Tabs.Menu.Item>}
     *     </Tabs.Menu.List>
     *   </Tabs.Menu.Card>
     * </Tabs.Menu.Popper>
     * ```
     */
    Menu: Menu,
  },
})<TabsProps>(({children}, _, model) => {
  return <Menu model={model.menu}>{children}</Menu>;
});
