import {createContainer, createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Menu, useMenuModel} from '@workday/canvas-kit-react/menu';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';

// Create a stencil for the breadcrumbs menu item
export const breadcrumbsMenuItemStencil = createStencil({
  base: {
    textDecoration: 'none',
  },
});

export const BreadcrumbsMenuItem = createComponent('a')({
  displayName: 'Breadcrumbs.Menu.Item',
  Component: (props: ExtractProps<typeof Menu.Item, never>, ref, Element) => {
    return (
      <Menu.Item as={Element} {...handleCsProp(props, breadcrumbsMenuItemStencil())} ref={ref} />
    );
  },
});

// Create a stencil for the breadcrumbs menu card
export const breadcrumbsMenuCardStencil = createStencil({
  base: {
    width: px2rem(280),
    maxWidth: px2rem(280),
    maxHeight: px2rem(296),
  },
});

// Create a breadcrumbs menu card component
export const BreadcrumbsMenuCard = (elemProps: ExtractProps<typeof Menu.Card, never>) => (
  <Menu.Card {...handleCsProp(elemProps, breadcrumbsMenuCardStencil())} />
);

export const BreadcrumbsMenu = createContainer()({
  displayName: 'Breadcrumbs.Menu',
  modelHook: useMenuModel,
  subComponents: {
    Card: BreadcrumbsMenuCard,
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
