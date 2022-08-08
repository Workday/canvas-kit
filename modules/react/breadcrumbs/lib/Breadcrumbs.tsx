import * as React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {useBreadcrumbsModel} from './useBreadcrumbsModel';
import {BreadcrumbsList} from './BreadcrumbsList';
import {BreadcrumbsOverflowButton} from './BreadcrumbsOverflowButton';
import {BreadcrumbsItem} from './BreadcrumbsItem';
import {BreadcrumbsLink} from './BreadcrumbsLink';
import {BreadcrumbsCurrentItem} from './BreadcrumbsCurrentItem';

export interface BreadcrumbsProps {
  /**
   * The contents of the Breadcrumbs. Can be `Breadcrumbs` children or any valid elements.
   */
  children: React.ReactNode;
}

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
     * The overflow menu of the Breadcrumbs component. If there isn't enough room to render all the action
     * items, the extra actions that don't fit will be overflowed into this menu.
     * @example
     * <Breadcrumbs.Menu.Popper>
     *   <Breadcrumbs.Menu.Card>
     *     <Breadcrumbs.Menu.List>
     *       {(item: MyActionItem) => <Breadcrumbs.Menu.Item>{item.text}</Breadcrumbs.Menu.Item>}
     *     </Breadcrumbs.Menu.List>
     *   </Breadcrumbs.Menu.Card>
     * </Breadcrumbs.Menu.Popper>
     */
    Menu,
  },
})<BreadcrumbsProps>(({children}, _, model) => {
  return <Menu model={model.menu}>{children}</Menu>;
});
