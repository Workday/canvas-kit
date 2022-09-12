import * as React from 'react';
import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Menu, useMenuModel} from '@workday/canvas-kit-react/menu';

export const BreadcrumbsMenu = createContainer()({
  displayName: 'Breadcrumbs.Menu',
  modelHook: useMenuModel,
  subComponents: {
    Card: (elemProps: ExtractProps<typeof Menu.Card, never>) => (
      <Menu.Card width={280} maxWidth={280} maxHeight={296} {...elemProps} />
    ),
    List: Menu.List,
    Item: (elemProps: ExtractProps<typeof Menu.Item, never>) => <Menu.Item as="a" {...elemProps} />,
    Divider: Menu.Divider,
    Target: Menu.Target,
    TargetContext: Menu.TargetContext,
    Popper: Menu.Popper,
  },
})<ExtractProps<typeof Menu>>(({children}) => {
  return <>{children}</>;
});
