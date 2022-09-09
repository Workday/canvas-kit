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

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The accessibility label for the nav element.
   *
   * @default "breadcrumbs"
   */
  'aria-label'?: string;
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
 * <Breadcrumbs aria-label="breadcrumbs">
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
export const Breadcrumbs = createContainer()({
  displayName: 'Breadcrumbs',
  modelHook: useBreadcrumbsModel,
  subComponents: {
    List: BreadcrumbsList,
    Item: BreadcrumbsItem,
    OverflowButton: BreadcrumbsOverflowButton,
    CurrentItem: BreadcrumbsCurrentItem,
    Link: BreadcrumbsLink,
    /**
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
})<BreadcrumbsProps>(
  ({children, 'aria-label': ariaLabel = 'breadcrumbs', ...elemProps}, _, model) => {
    return (
      <Menu model={model.menu}>
        <nav role="navigation" aria-label={ariaLabel} {...elemProps}>
          {children}
        </nav>
      </Menu>
    );
  }
);
