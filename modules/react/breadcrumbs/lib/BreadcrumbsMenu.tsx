import * as React from 'react';
import {createContainer, createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Menu, useMenuModel} from '@workday/canvas-kit-react/menu';

export const BreadcrumbsMenuItem = createComponent('a')({
  displayName: 'Breadcrumbs.Menu.Item',
  Component: (props: ExtractProps<typeof Menu.Item, never>, ref, Element) => {
    return <Menu.Item as={Element} style={{textDecoration: 'none'}} {...props} ref={ref} />;
  },
});

export const BreadcrumbsMenu = createContainer()({
  displayName: 'Breadcrumbs.Menu',
  modelHook: useMenuModel,
  subComponents: {
    Card: (elemProps: ExtractProps<typeof Menu.Card, never>) => (
      <Menu.Card width={280} maxWidth={280} maxHeight={296} {...elemProps} />
    ),
    List: Menu.List,
    Item: BreadcrumbsMenuItem,
    Divider: Menu.Divider,
    Target: Menu.Target,
    TargetContext: Menu.TargetContext,
    Popper: Menu.Popper,
  },
})<ExtractProps<typeof Menu>>(({children}) => {
  return <>{children}</>;
});
