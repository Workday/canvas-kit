import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export interface ListProps extends FlexProps {}

export const listStencil = createStencil({
  base: {
    display: 'flex',
    marginBlock: system.space.zero,
    marginInline: system.space.zero,
    padding: system.space.zero,
    listStyle: 'none',
  },
});

export const List = createComponent('ul')({
  displayName: 'List',
  Component: ({children, ...elemProps}: ListProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, listStencil())}>
        {children}
      </Element>
    );
  },
});

export interface ListItemProps extends FlexProps {}

export const listItemStencil = createStencil({
  base: {
    display: 'flex',
  },
});

export const ListItem = createComponent('li')({
  displayName: 'ListItem',
  Component: ({children, ...elemProps}: ListItemProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, listItemStencil())}>
        {children}
      </Element>
    );
  },
});
