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
import {CSProps, handleCsProp} from '@workday/canvas-kit-styling';

export interface BreadcrumbsProps extends CSProps {
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
 * `Breadcrumbs` is a container component that is responsible for creating a
 * {@link BreadcrumbsModel} and sharing it with its subcomponents using React context. It also
 * renders `nav` element, and `aria-label` attribute must be provided for this element.
 *
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
 *
 * You may pass {@link BreadcrumbsModelConfig} directly to the `Breadcrumbs` component.
 *
 * ```tsx
 * <Breadcrumbs items={[]} aria-label="Breadcrumbs">
 *   {Child components}
 * </Breadcrumbs>
 * ```
 *
 * Alternatively, you may pass in a model using the hoisted model pattern.
 *
 * ```tsx
 * const model = useBreadcrumbsModel({
 *   items: [],
 * });
 *
 * <Breadcrumbs model={model} aria-label="Breadcrumbs">
 *   {Child components}
 * </Breadcrumbs>;
 * ```
 *
 * Note that if you pass in a `model` configured with {@link useBreadcrumbsModel}, configuration
 * props passed to `Breadcrumbs` will be ignored. `aria-label` attribute must be provided for `nav`
 * element.
 */
export const Breadcrumbs = createContainer('nav')({
  displayName: 'Breadcrumbs',
  modelHook: useBreadcrumbsModel,
  subComponents: {
    /**
     * `Breadcrumbs.List` is a `Flex` component rendered as a `<ul>` element. It is a container for
     * `Breadcrumbs.Item` subcomponents. It also renders overflow button if `overflowButton` prop
     * has been passed;
     *
     * ```tsx
     * // without overflow
     * <Breadcrumbs.List>{Breadcrumbs.Items}</Breadcrumbs.List>
     * ```
     *
     * ```tsx
     * // with overflow
     * <Breadcrumbs.List overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}>
     *   {Breadcrumbs.Items}
     * </Breadcrumbs.List>
     * ```
     *
     * `Breadcrumbs.List` accepts a `overflowButton` prop allowing to pass specific overflow button.
     * Breadcrumbs.List with overflow behavior should contain `overflowButton` component with
     * `aria-label` to render overflow button.
     */
    List: BreadcrumbsList,
    /**
     * `Breadcrumbs.Item` is a {@link Flex} component rendered as an `<li>` element. It is a
     * container for the `Breadcrumbs.Link` subcomponent which provides correct overflow behavior
     * across all items.
     *
     * List items in {@link BreadcrumbsList Breadcrumbs.List}. By default, this item is truncated
     * with a tooltip at `350px`, but that can be customized with the `maxWidth` prop.
     *
     * ```tsx
     * <Breadcrumbs.Item maxWidth={200}>
     *   <Breadcrumbs.Link href="/docs">Docs</Breadcrumbs.Link>
     * </Breadcrumbs.Item>
     * ```
     */
    Item: BreadcrumbsItem,
    /**
     * `Breadcrumbs.Link` is a styled `<a>` element that also renders a tooltip if the text is
     * truncated. The built-in truncation and tooltip functionality provides an easy-to-use,
     * accessible feature for managing the length of link text. The `maxWidth` is set to `350px` by
     * default and can be adjusted as needed. Note that tooltips will only render when text is
     * truncated
     */
    Link: BreadcrumbsLink,
    /**
     * The last element in the list of `Breadcrumbs.Item`s. By default, this item is truncated with
     * a tooltip at `350px`, But that can be customized with the `maxWidth` prop.
     *
     * ```tsx
     * <Breadcrumbs.CurrentItem maxWidth={200}>
     *   Current Item Text
     * </Breadcrumbs.CurrentItem>
     * ```
     */
    CurrentItem: BreadcrumbsCurrentItem,
    /**
     * The toggle button for the Breadcrumbs Menu. This button is rendered in the
     * {@link BreadcrumbsList Breadcrumbs.List} when `overflowButtonProps` passed and becomes
     * visible when the list overflows. `overflowButtonProps must contain at least `aria-label`. If
     * you need to pass other props to it, you can do so by adding it to `overflowButtonProps`
     * passed to the List.
     *
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
     * The `Breadcrumbs.Menu` uses the {@link Menu} component under the hood. The overflow menu for
     * Breadcrumbs. If there isn't enough room to render all links, it will automatically overflow
     * items into this menu.
     *
     * ```tsx
     * <Breadcrumbs.Menu.Popper>
     *   <Breadcrumbs.Menu.Card>
     *     <Breadcrumbs.Menu.List>
     *       {(item: MyActionItem) => <Breadcrumbs.Menu.Item>{item.text}</Breadcrumbs.Menu.Item>}
     *     </Breadcrumbs.Menu.List>
     *   </Breadcrumbs.Menu.Card>
     * </Breadcrumbs.Menu.Popper>
     * ```
     */
    Menu: BreadcrumbsMenu,
  },
})<BreadcrumbsProps>(({children, ...elemProps}, _, model) => {
  return (
    <Menu model={model.menu}>
      <nav role="navigation" {...handleCsProp(elemProps)}>
        {children}
      </nav>
    </Menu>
  );
});
