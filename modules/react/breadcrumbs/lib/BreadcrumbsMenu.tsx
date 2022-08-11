import * as React from 'react';
import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Menu, useMenuModel} from '@workday/canvas-kit-react/menu';

export interface BreadcrumbsProps {
  /**
   * The contents of the Breadcrumbs. Can be `Breadcrumbs` children or any valid elements.
   */
  children: React.ReactNode;
}

export const BreadcrumbsMenu = createContainer()({
  displayName: 'Breadcrumbs.Menu',
  modelHook: useMenuModel,
  subComponents: {
    Card: Menu.Card,
    List: Menu.List,
    Item: (elemProps: any) => <Menu.Item as="a" {...elemProps} />,
    Divider: Menu.Divider,
    Target: Menu.Target,
    TargetContext: Menu.TargetContext,
    Popper: Menu.Popper,
  },
})<ExtractProps<typeof Menu>>(({children}) => {
  return <>{children}</>;
});
