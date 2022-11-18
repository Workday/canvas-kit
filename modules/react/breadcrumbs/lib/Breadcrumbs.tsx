import * as React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';
import {BreadcrumbsList} from './BreadcrumbsList';
import {BreadcrumbsOverflowButton} from './BreadcrumbsOverflowButton';
import {BreadcrumbsItem} from './BreadcrumbsItem';
import {BreadcrumbsLink} from './BreadcrumbsLink';
import {BreadcrumbsCurrentItem} from './BreadcrumbsCurrentItem';
import {BreadcrumbsMenu} from './BreadcrumbsMenu';

export interface BreadcrumbsProps {
  /**
   * The accessibility label for the nav element.
   * It's required to be provided by a11y guidance.
   *
   */
  'aria-label': string;
  /**
   * The contents of the Breadcrumbs. Can be `Breadcrumbs` children or any valid elements.
   */
  children: React.ReactNode;
}

/**
 * ## Breadcrumbs
 * ---
 * [View Developer Docs](https://canvas.workdaydesign.com/components/navigation/breadcrumbs#examples)
 *
 * A compound component that allows users to keep track and maintain awareness
 * of their location as they navigate through pages, folders, files, etc.
 *
 * @example
 * ```tsx
 * <Breadcrumbs aria-label="Breadcrumbs">
 *   <Breadcrumbs.List>
 *     <Breadcrumbs.Item>
 *       <Breadcrumbs.Link href="/docs">Docs</Breadcrumbs.Link>
 *     <Breadcrumbs.Item>
 *     <Breadcrumbs.Item>
 *       <Breadcrumbs.Link href="/docs/components">Components</Breadcrumbs.Link>
 *     <Breadcrumbs.Item>
 *     <Breadcrumbs.CurrentItem>
 *       <Breadcrumbs.Link href="/docs/components/breadcrumbs">Breadcrumbs</Breadcrumbs.Link>
 *     <Breadcrumbs.CurrentItem>
 *   <Breadcrumbs.List>
 * </Breadcrumbs>
 * ```
 */
export const Breadcrumbs = createContainer('nav')({
  displayName: 'Breadcrumbs',
  modelHook: useBreadcrumbsModel,
  subComponents: {
    /**
     * ### Breadcrumbs List
     * ---
     * [View Developer Docs](https://canvas.workdaydesign.com/components/navigation/breadcrumbs/#breadcrumbslist)
     *
     * The nav list containing `Breadcrumbs.Item` components and overflow button.
     */
    List: BreadcrumbsList,
    /**
     * ### Breadcrumbs Item
     * ---
     * [View Developer Docs](https://canvas.workdaydesign.com/components/navigation/breadcrumbs/#breadcrumbsitem)
     *
     * List items in `Breadcrumbs.List`.
     * By default, this item is truncated with a tooltip at `350px`,
     * but that can be customized with the `maxWidth` prop.
     *
     * @example
     * ```tsx
     * <Breadcrumbs.Item maxWidth={200}>
     *   <Breadcrumbs.Link href="/docs">Docs</Breadcrumbs.Link>
     * </Breadcrumbs.Item>
     * ```
     */
    Item: BreadcrumbsItem,
    /**
     * ### Breadcrumbs Overflow Button
     * ---
     * [View Developer Docs](https://canvas.workdaydesign.com/components/navigation/breadcrumbs/#breadcrumbsoverflowbutton)
     *
     * The toggle button for the Breadcrumbs Menu.
     * This button is rendered in the `Breadcrumbs.List` when `overflowButtonProps` passed
     * and becomes visible when the list overflows. `overflowButtonProps must contain at least `aria-label`.
     * If you need to pass other props to it, you can do so by adding it to `overflowButtonProps` passed to the List.
     *
     * @example
     * ```tsx
     * <Breadcrumbs.List
     *   overflowButtonProps={{
     *     'aria-label': 'More links',
     *     onClick={handleOverflowButtonClick}
     *   }}
     * >
     * ```
     */
    OverflowButton: BreadcrumbsOverflowButton,
    /**
     * ### Breadcrumbs Current Item
     * ---
     * [View Developer Docs](https://canvas.workdaydesign.com/components/navigation/breadcrumbs/#breadcrumbscurrentitem)
     *
     * The last element in the list of `Breadcrumbs.Item`s.
     * By default, this item is truncated with a tooltip at `350px`,
     * But that can be customized with the `maxWidth` prop.
     *
     * @example
     * ```tsx
     * <Breadcrumbs.CurrentItem maxWidth={200}>
     *   Current Item Text
     * </Breadcrumbs.CurrentItem>
     * ```
     */
    CurrentItem: BreadcrumbsCurrentItem,
    /**
     * ### Breadcrumbs Link
     * ---
     * [View Developer Docs](https://canvas.workdaydesign.com/components/navigation/breadcrumbs/#breadcrumbslink)
     *
     * The hyperlink element in each `Breadcrumbs.Item`.
     */
    Link: BreadcrumbsLink,
    /**
     * ### Breadcrumbs Menu
     * ---
     * [View Developer Docs](https://canvas.workdaydesign.com/components/navigation/breadcrumbs/#breadcrumbsmenu)
     *
     * The overflow menu for Breadcrumbs. If there isn't enough room to render all links,
     * it will automatically overflow items into this menu.
     * @example
     * <Breadcrumbs.Menu.Popper>
     *   <Breadcrumbs.Menu.Card>
     *     <Breadcrumbs.Menu.List>
     *       {(item: MyActionItem) => <Breadcrumbs.Menu.Item>{item.text}</Breadcrumbs.Menu.Item>}
     *     </Breadcrumbs.Menu.List>
     *   </Breadcrumbs.Menu.Card>
     * </Breadcrumbs.Menu.Popper>
     */
    Menu: BreadcrumbsMenu,
  },
})<BreadcrumbsProps>(({children, ...elemProps}, _, model) => {
  return (
    <Menu model={model.menu}>
      <nav role="navigation" {...elemProps}>
        {children}
      </nav>
    </Menu>
  );
});
