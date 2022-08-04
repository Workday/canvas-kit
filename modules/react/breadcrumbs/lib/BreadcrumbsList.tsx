import * as React from 'react';

import {space} from '@workday/canvas-kit-react/tokens';
import {
  createSubcomponent,
  ExtractProps,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {HStack} from '@workday/canvas-kit-react/layout';
import {useOverflowListMeasure, useListRenderItems} from '@workday/canvas-kit-react/collection';

import {useBreadcrumbsModel} from './useBreadcrumbsModel';
import {Breadcrumbs} from './Breadcrumbs';

// Use `Partial` here to make `spacing` optional
export interface BreadcrumbsListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof HStack, never>>, 'children'> {
  /**
   * If items are passed to a `BreadcrumbsModel`, the child of `Breadcrumbs.List` should be a render prop. The
   * List will determine how and when the item will be rendered.
   *
   * @example
   * <Breadcrumbs.List>
   *   {(item) => <Breadcrumbs.Item key={item.id} name={item.name}>{item.text}</Breadcrumbs.Item>}
   * </Breadcrumbs.List>
   */
  children: ((item: T, index: number) => React.ReactNode) | React.ReactNode;
}

const ResponsiveHStack = styled(HStack)<BreadcrumbsListProps & StyledType>(({theme}) => ({
  [theme.canvas.breakpoints.down('s')]: {
    padding: space.s,
    '> *': {
      flex: 1,
    },
  },
}));

export const BreadcrumbsList = createSubcomponent('div')({
  displayName: 'Breadcrumbs.List',
  modelHook: useBreadcrumbsModel,
  elemPropsHook: useOverflowListMeasure,
})<BreadcrumbsListProps>(({children, ...elemProps}, Element, model) => {
  return (
    <ResponsiveHStack as={Element} spacing="s" {...elemProps}>
      {useListRenderItems(model, children)}
      <Breadcrumbs.OverflowButton />
    </ResponsiveHStack>
  );
});
